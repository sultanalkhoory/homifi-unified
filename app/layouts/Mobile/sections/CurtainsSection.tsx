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

  // Auto-close when section becomes visible
  useEffect(() => {
    if (isInView && !manualControl && curtainsState === 'open' && videoLoaded) {
      const timer = setTimeout(() => playCurtainVideo('closing'), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, manualControl, curtainsState, videoLoaded]);

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
    } catch {}
  };

  const playCurtainVideo = (action: 'opening' | 'closing') => {
    if (!videoRef.current || isAnimating || !videoLoaded) return;
    setIsAnimating(true);

    const video = videoRef.current;
    const newSrc = action === 'opening' ? '/video/curtains-opening.mp4' : '/video/curtains-closing.mp4';

    captureCurrentFrame();

    setTimeout(() => {
      video.src = newSrc;
      video.load();
      video.onloadeddata = () => {
        video.play();
        setShowCanvas(false);
        video.onended = () => {
          setCurtainsState(action === 'opening' ? 'open' : 'closed');
          setIsAnimating(false);
        };
      };
    }, 50);
  };

  const handleCycle = () => {
    setManualControl(true);
    playCurtainVideo(curtainsState === 'open' ? 'closing' : 'opening');
  };

  const buttonLabel = isAnimating
    ? curtainsState === 'open' ? 'Closing...' : 'Opening...'
    : curtainsState === 'open' ? 'Close Curtains' : 'Open Curtains';

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex justify-center order-2 md:order-1">
          <IPhoneFrame>
            <div className="relative w-full h-full overflow-hidden bg-black">
              <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full object-cover ${showCanvas ? 'opacity-100 z-20' : 'opacity-0 z-10'}`} style={{ objectPosition: '60% center' }} />

              <video ref={videoRef} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${videoLoaded ? 'opacity-100' : 'opacity-0'} ${showCanvas ? 'z-10' : 'z-20'}`} style={{ objectPosition: '60% center' }} muted playsInline preload="auto" />
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
              <GlassButton label={buttonLabel} onClick={handleCycle} disabled={isAnimating} />
            </div>
          </IPhoneFrame>
        </motion.div>

        {/* Copy - FIXED TYPOGRAPHY */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-4 leading-tight">
            Perfect Privacy
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Comfort and control, exactly when you need it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
