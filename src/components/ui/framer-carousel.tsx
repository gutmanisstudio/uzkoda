'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';
import useIsMobile from '@/hooks/useIsMobile';
import { restaurant } from '@/config/restaurant';

export function MenuCarousel() {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const images = restaurant.menuImages;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;
      animate(x, targetX, { type: 'spring', stiffness: 300, damping: 30 });
    }
  }, [index, x]);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px' }} ref={containerRef}>
        <motion.div style={{ display: 'flex', x }}>
          {images.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, width: '100%', height: isMobile ? '400px' : '700px', background: '#F5EFE4' }}>
              <img
                src={src}
                alt={`Menu page ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '20px', userSelect: 'none', pointerEvents: 'none' }}
                draggable={false}
                onError={e => (e.target as HTMLImageElement).style.display = 'none'}
              />
            </div>
          ))}
        </motion.div>

        {/* Prev */}
        <motion.button
          disabled={index === 0}
          onClick={() => setIndex(i => Math.max(0, i - 1))}
          style={{
            position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
            width: '44px', height: '44px', borderRadius: '50%',
            background: index === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)',
            border: 'none', cursor: index === 0 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: index === 0 ? 0.4 : 1, zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          <svg width="20" height="20" fill="none" stroke={restaurant.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
        </motion.button>

        {/* Next */}
        <motion.button
          disabled={index === images.length - 1}
          onClick={() => setIndex(i => Math.min(images.length - 1, i + 1))}
          style={{
            position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
            width: '44px', height: '44px', borderRadius: '50%',
            background: index === images.length - 1 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)',
            border: 'none', cursor: index === images.length - 1 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: index === images.length - 1 ? 0.4 : 1, zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          <svg width="20" height="20" fill="none" stroke={restaurant.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"/>
          </svg>
        </motion.button>

        {/* Progress dots */}
        <div style={{
          position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '6px', padding: '8px 12px',
          background: 'rgba(255,255,255,0.2)', borderRadius: '999px',
          backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)',
        }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} style={{
              height: '8px', width: i === index ? '28px' : '8px',
              borderRadius: '999px', border: 'none', cursor: 'pointer',
              background: i === index ? restaurant.colors.primary : 'rgba(255,255,255,0.6)',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>

        {/* Page counter */}
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
          padding: '0.3rem 0.8rem', borderRadius: '999px',
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: '#FDFCFA', letterSpacing: '0.1em' }}>
            {index + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  )
}
