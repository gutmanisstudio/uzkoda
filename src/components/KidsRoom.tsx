'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

const galleryImages: string[] = [
  '/themeparty/SnapInsta.to_657580117_17883631182475098_8621200226766178350_n.jpg',
  '/themeparty/SnapInsta.to_657599959_17883631152475098_5429623297120077564_n.jpg',
  '/themeparty/SnapInsta.to_658054053_17883631191475098_1247983451395943131_n.jpg',
  '/themeparty/SnapInsta.to_658146077_17883631179475098_2118229299857717087_n.jpg',
  '/themeparty/SnapInsta.to_658796329_17883631164475098_4930765817885935931_n.jpg',
]

export default function KidsRoom() {
  const isMobile = useIsMobile()
  return (
    <section id="gallery" style={{ background: restaurant.colors.bgAlt, padding: isMobile ? '3rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center' }}>

        {/* LEFT — theme party video, same size as previous kids video */}
        <FadeIn direction="left">
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', background: restaurant.colors.text, boxShadow: '0 30px 80px rgba(107,58,42,0.12)' }}>
            <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/videos/themepartyvideo.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(107,58,42,0.1)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: restaurant.colors.primary }} />
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: `rgba(107,58,42,0.9)`, backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FDFAF5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5.8 11.3L2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="M22 2l-2.24.75a2.9 2.9 0 00-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="M22 13l-1.99.25c-.87.1-1.57.74-1.74 1.59l-1.32 6.71c-.21.99-1.31 1.58-2.21 1.16L13 22"/>
              </svg>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FDFAF5' }}>Tematiskie pasākumi</p>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — text */}
        <div>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: restaurant.colors.primary, marginBottom: '1rem' }}>Pasākumiem</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: restaurant.colors.text, lineHeight: 1 }}>TEMATISKIE</h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: restaurant.colors.primary, lineHeight: 1, marginBottom: '1.5rem' }}>PASĀKUMI</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: restaurant.colors.gray, lineHeight: 1.8, marginBottom: '2rem' }}>
              Apkalpojam tematiskās ballītes un privātos pasākumus — no koncepta līdz pēdējai uzkodai. Šeit ieskats vienā no mūsu jaunākajiem pasākumiem.
            </p>
          </FadeIn>

          {[
            {
              title: 'Pielāgots koncepts',
              desc: 'Saskaņojam ēdienu noformējumu ar pasākuma tēmu un noskaņojumu.',
              svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            },
            {
              title: 'Pilns serviss',
              desc: 'Piegāde, uzstādīšana, apkalpošana — viss iekļauts.',
              svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            },
            {
              title: 'Sekojiet @uzkoda.info',
              desc: 'Jaunākie pasākumi, foto un atsauksmes Instagram profilā.',
              svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.08}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.3rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: `1.5px solid rgba(107,58,42,0.3)`, background: `rgba(107,58,42,0.06)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {item.svg}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: restaurant.colors.text, marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: restaurant.colors.gray, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.55}>
            <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', background: restaurant.colors.primary, color: '#FDFAF5', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              @uzkoda.info
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Gallery grid below — only renders when images are added */}
      {galleryImages.length > 0 && (
        <div style={{ maxWidth: '1200px', margin: '4rem auto 0', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '1rem' }}>
          {galleryImages.map((src, i) => (
            <FadeIn key={src} delay={i * 0.05}>
              <div style={{ aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', background: restaurant.colors.text }}>
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'} />
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  )
}
