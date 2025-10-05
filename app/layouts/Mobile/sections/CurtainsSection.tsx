'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import IPhoneFrame from "@/components/ui/IPhoneFrame";
import GlassButton from "@/components/ui/GlassButton";

export default function CurtainsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [curtainsState, setCurtainsState] = useState<'open' | 'closed'>('open');
  const [isAnimating, setIsAnimating] = useState(false);
  const [manualControl, setManualControl] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Preload initial video (closing)
  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.src = '/video/curtains-closing.mp4';
    const onLoad = () => {
      video.currentTime = 0;
      video.pause();
      setVideoLoaded(true);
    };
    video.addEventListener('loadeddata', onLoad, { once: true });
    video.load();
    return () => video.removeEventListener('loadeddata', onLoad);
  }, []);

  // Auto-close when section becomes visible (once)
  useEffect(() => {
    if (isInView && !manualControl && curtainsState === 'open' && videoLoaded) {
      const timer = setTimeout(() => playCurtainVideo('closing'), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, manualControl, curtainsState, videoLoaded]);

  // Capture current frame for seamless source swap
  const captureCurrentFrame = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = video.videoWidth || 280;
    canvas.height = video.videoHeight || 560;
    try {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setShowCanvas(true);
    } catch {
      // ignore draw errors
    }
  };

  // Play opening/closing video without changing core logic
  const playCurtainVideo = (action: 'opening' | 'closing') => {
    if (!videoRef.current || isAnimating || !videoLoaded) return;
    setIsAnimating(true);

    const video = videoRef.current;
    const newSrc = action === 'opening' ? '/video/curtains-opening.mp4' : '/video/curtains-closing.mp4';
    const currentName = (video.src.split('/').pop() || '').toLowerCase();
    const newName = (newSrc.split('/').pop() || '').toLowerCase();

    if (currentName === newName) {
      setShowCanvas(false);
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      captureCurrentFrame();
      const preload = document.createElement('video');
      preload.src = newSrc;
      preload.muted = true;
      preload.playsInline = true;
      preload.preload = 'auto';
      document.body.appendChild(preload);

      const onReady = () => {
        video.src = newSrc;
        video.currentTime = 0;
        const onLoaded = () => {
          setShowCanvas(false);
          video.play().catch(() => {});
          document.body.removeChild(preload);
        };
        video.addEventListener('loadeddata', onLoaded, { once: true });
        video.load();
      };

      preload.addEventListener('canplaythrough', onReady, { once: true });
      preload.load();
    }

    video.onended = () => {
      video.pause();
      setCurtainsState(action === 'opening' ? 'open' : 'closed');
      video.currentTime = Math.max(video.duration - 0.1, 0);
      setIsAnimating(false);
    };
  };

  const handleCycle = () => {
    if (isAnimating || !videoLoaded) return;
    setManualControl(true);
    playCurtainVideo(curtainsState === 'open' ? 'closing' : 'opening');
  };

  const buttonLabel = isAnimating
    ? curtainsState === 'open'
      ? 'Curtains Closing...'
      : 'Curtains Opening...'
    : curtainsState === 'open'
    ? 'Close Curtains'
    : 'Open Curtains';

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* iPhone with Curtains video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center order-2 md:order-1"
        >
          <IPhoneFrame>
            <div className="relative w-full h-full overflow-hidden bg-black">
              {!videoLoaded && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <canvas
                ref={canvasRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ${
                  showCanvas ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
                style={{ objectPosition: '60% center' }}
              />

              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                } ${showCanvas ? 'z-10' : 'z-20'}`}
                style={{ objectPosition: '60% center' }}
                muted
                playsInline
                preload="auto"
              />
            </div>

            {/* Button with animated label + haptic */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
              <GlassButton label={buttonLabel} onClick={handleCycle} disabled={isAnimating} />
            </div>
          </IPhoneFrame>
        </motion.div>

        {/* Copy */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="order-1 md:order-2">
          <div className="text-sm uppercase tracking-wider text-blue-600 mb-3">Perfect Privacy</div>
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 leading-tight">
            Comfort <br /> and control.
          </h2>
          <p className="text-lg text-gray-600 font-light mb-8">Exactly when you need it.</p>
        </motion.div>
      </div>
    </section>
  );
}