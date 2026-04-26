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
    <section id="home" style={{ position: 'relative', height: '100vh', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <video ref={videoRef} autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src={restaurant.heroVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(44,24,16,0.45) 0%, rgba(44,24,16,0.2) 50%, rgba(107,58,42,0.8) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 1.2s ease, transform 1.2s ease' }}>

        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <img src="/images/logo123.png" alt={restaurant.name} style={{ height: '80px', objectFit: 'contain' }} />
        </div>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : 'clamp(4rem, 12vw, 9rem)', lineHeight: 0.9, color: '#FDFAF5', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{restaurant.name}</h1>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.12em', color: restaurant.colors.primary, marginBottom: '1.2rem' }}>{restaurant.tagline}</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '0.4rem' }}>{restaurant.description}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 400, color: restaurant.colors.primary, marginBottom: '0.3rem' }}>{restaurant.highlight1}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>{restaurant.highlight2}</p>

        {/* Pill buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', flexDirection: isMobile ? 'column' as const : 'row' as const, alignItems: 'center' }}>
          <a href="#reserve" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FDFAF5', background: restaurant.colors.primary, padding: isMobile ? '0.7rem 1.5rem' : '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = restaurant.colors.primaryDark }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = restaurant.colors.primary }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Rezervēt
          </a>
          <a href="#menu" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FDFAF5', background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.4)', padding: isMobile ? '0.7rem 1.5rem' : '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            Ēdienkarte
          </a>
          <a href={restaurant.mapsLink} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FDFAF5', background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.4)', padding: isMobile ? '0.7rem 1.5rem' : '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Kā nokļūt
          </a>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
          <a href={`tel:${restaurant.phone}`} style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = restaurant.colors.primary; e.currentTarget.style.color = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'scale(1)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
          <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = restaurant.colors.primary; e.currentTarget.style.color = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'scale(1)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
