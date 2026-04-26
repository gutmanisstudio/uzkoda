'use client'
import { useEffect, useRef, useState } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function Hero() {
  const isMobile = useIsMobile()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])
  useEffect(() => { if (videoRef.current) videoRef.current.currentTime = restaurant.heroVideoStart }, [])

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', minHeight: '700px', overflow: 'hidden' }}>
      <video ref={videoRef} autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src={restaurant.heroVideo} type="video/mp4" />
      </video>

      {/* Soft side-vignette so text is readable but the video stays the star */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: isMobile
          ? 'linear-gradient(to top, rgba(20,12,8,0.85) 0%, rgba(20,12,8,0.25) 45%, rgba(20,12,8,0) 70%)'
          : 'linear-gradient(to right, rgba(20,12,8,0.78) 0%, rgba(20,12,8,0.4) 30%, rgba(20,12,8,0) 55%)'
      }} />

      {/* Text panel — bottom-left on desktop, bottom on mobile */}
      <div style={{
        position: 'absolute',
        zIndex: 2,
        left: isMobile ? '1.5rem' : '4rem',
        right: isMobile ? '1.5rem' : 'auto',
        bottom: isMobile ? '3rem' : '5rem',
        maxWidth: isMobile ? '100%' : '460px',
        textAlign: 'left',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1.2s ease, transform 1.2s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem' }}>
          <img src="/images/logo.jpg" alt={restaurant.name} style={{ height: '52px', width: '52px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0,0,0,0.4)' }} />
          <div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1, color: '#FDFAF5', letterSpacing: '0.06em' }}>{restaurant.name}</h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.66rem', fontWeight: 600, color: restaurant.colors.primary, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '0.3rem' }}>{restaurant.highlight2}</p>
          </div>
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, marginBottom: '1.5rem' }}>{restaurant.tagline}</p>

        <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
          <a href="#reserve" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FDFAF5', background: restaurant.colors.primary, padding: '0.75rem 1.6rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = restaurant.colors.primaryDark }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = restaurant.colors.primary }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Pasūtīt
          </a>
          <a href="#about" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FDFAF5', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.35)', padding: '0.75rem 1.6rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.18)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}>
            Uzzināt vairāk
          </a>
        </div>
      </div>
    </section>
  )
}
