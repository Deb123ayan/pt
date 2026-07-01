import { useRef, useEffect, useState } from 'react';
import heroVideo from '../assets/video/video.mp4';

interface SplashProps {
  scrollY: number;
}

const SeamlessVideo = ({ src }: { src: string }) => {
  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const v1 = video1.current;
    const v2 = video2.current;
    if (!v1 || !v2) return;

    let rafId: number;
    const checkTime = () => {
      const activeVideo = active === 1 ? v1 : v2;
      const standbyVideo = active === 1 ? v2 : v1;

      if (activeVideo.duration && activeVideo.currentTime >= activeVideo.duration - 0.75) {
        standbyVideo.currentTime = 0;
        standbyVideo.play().catch(() => { });
        setActive(active === 1 ? 2 : 1);
      }
      rafId = requestAnimationFrame(checkTime);
    };

    if (active === 1 && v1.paused) {
      v1.play().catch(() => { });
    }

    rafId = requestAnimationFrame(checkTime);
    return () => cancelAnimationFrame(rafId);
  }, [active]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
      <video
        ref={video1}
        src={src}
        muted
        playsInline
        autoPlay
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: active === 1 ? 1 : 0,
          transition: 'opacity 0.75s ease-in-out'
        }}
      />
      <video
        ref={video2}
        src={src}
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: active === 2 ? 1 : 0,
          transition: 'opacity 0.75s ease-in-out'
        }}
      />
    </div>
  );
};

export default function Splash({ scrollY }: SplashProps) {
  return (
    <section className="splash-first-page" style={{ position: 'relative' }}>
      <SeamlessVideo src={heroVideo} />
      <div
        className="splash-text text-left"
        style={{ transform: `translate3d(-${scrollY * 0.65}px, -50%, 0)` }}
      >
        hey
      </div>
      <div
        className="splash-text text-right"
        style={{ transform: `translate3d(${scrollY * 0.65}px, -50%, 0)` }}
      >
        there
      </div>
    </section>
  );
}
