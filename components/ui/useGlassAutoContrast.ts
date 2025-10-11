// app/hooks/useGlassAutoContrast.ts
import { useEffect } from "react";

function luminance(rgb: number[]) {
  const [r,g,b] = rgb.map(v => {
    v /= 255;
    return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4);
  });
  return 0.2126*r + 0.7152*g + 0.0722*b;
}

function parseRGB(color: string): number[] | null {
  const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : null;
}

/**
 * Sets data-surface on the glass node based on what's behind it.
 * Fallback order: vibrant (images/videos/gradients) > light/dark by luminance.
 */
export function useGlassAutoContrast(glassRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!glassRef.current) return;

    let ticking = false;
    const update = () => {
      if (!glassRef.current) return;
      const rect = glassRef.current.getBoundingClientRect();
      const cx = Math.round(rect.left + rect.width / 2);
      const cy = Math.max(0, Math.round(rect.top + rect.height / 2));

      // Get the element under the header’s center
      const el = document.elementFromPoint(cx, Math.max(0, cy - 6)) as HTMLElement | null;
      let surface: "light" | "dark" | "vibrant" = "dark";

      if (el) {
        const cs = getComputedStyle(el);

        // Heuristic: if background-image exists -> “vibrant”
        const hasImage = cs.backgroundImage && cs.backgroundImage !== "none";
        const hasVideoOrImg = el.tagName === "IMG" || el.tagName === "VIDEO";
        if (hasImage || hasVideoOrImg) {
          surface = "vibrant";
        } else {
          // Try to read a color and decide light/dark
          const rgb = parseRGB(cs.backgroundColor);
          if (rgb) {
            surface = luminance(rgb) > 0.45 ? "light" : "dark";
          } else {
            // Last resort: use computed color as hint
            const txt = parseRGB(cs.color || "rgb(255,255,255)") || [255,255,255];
            surface = luminance(txt) < 0.5 ? "light" : "dark";
          }
        }
      }

      glassRef.current.setAttribute("data-surface", surface);
      ticking = false;
    };

    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    const onResize = onScroll;

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [glassRef]);
}
