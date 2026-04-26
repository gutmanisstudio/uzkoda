'use client'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function CinematicBreak() {
  const isMobile = useIsMobile()
  return (
    <section style={{ position: 'relative', height: isMobile ? '50vh' : '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src={restaurant.cinematicVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(44,24,16,0.5), rgba(107,58,42,0.6))', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Gatavots ar mīlestību</p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.08em', color: '#FDFAF5', lineHeight: 1, marginBottom: '1rem' }}>
          KATRS ĒDIENS<br /><span style={{ color: '#FDFAF5', WebkitTextStroke: '1px rgba(255,255,255,0.4)', WebkitTextFillColor: 'transparent' }}>STĀSTA STĀSTU</span>
        </h2>
        <a href="#menu" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.12)', color: '#FDFAF5', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.borderColor = restaurant.colors.primary }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
        >Apskatīt ēdienkarti →</a>
      </div>
    </section>
  )
}
