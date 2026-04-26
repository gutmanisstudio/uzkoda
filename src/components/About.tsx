'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

const features = [
  {
    title: 'Signatūras piramīda',
    desc: 'Mūsu vizītkarte — kārtots uzkodu tornis, kas piesaista skatienus un patīk pat izvēlīgākajiem viesiem.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 22 2 22"/></svg>
  },
  {
    title: 'Svaigi produkti',
    desc: 'Katra kārta — sezonas un vietējas izejvielas, kārtotas tieši pirms pasniegšanas.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  },
  {
    title: 'Pielāgots pasākumam',
    desc: 'Izvēlamies sastāvu un izmēru atbilstoši viesu skaitam — no 10 līdz 200+.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  },
  {
    title: 'Piegādājam un uzstādām',
    desc: 'Atvedam, sakārtojam un nodrošinām, ka piramīda izskatās ideāli visu pasākumu.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  },
]

export default function About() {
  const isMobile = useIsMobile()
  return (
    <section id="about" style={{ background: restaurant.colors.bg, padding: isMobile ? '3rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center' }}>

        {/* LEFT — food pyramid video */}
        <FadeIn direction="left">
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '4/5',
            background: '#0E0B08',
            boxShadow: '0 30px 80px rgba(201,168,74,0.15)',
          }}>
            <video
              autoPlay loop muted playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
            >
              <source src={restaurant.aboutVideo} type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: restaurant.colors.primary, zIndex: 3 }} />
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(201,168,74,0.9)', backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: '999px', zIndex: 3 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FDFAF5' }}>Mūsu vizītkarte</p>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — text */}
        <div>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: restaurant.colors.primary, marginBottom: '1rem' }}>
              Par mums
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: restaurant.colors.text, lineHeight: 1 }}>
              UZKODU
            </h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: restaurant.colors.primary, lineHeight: 1, marginBottom: '1.5rem' }}>
              PIRAMĪDA
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: restaurant.colors.gray, lineHeight: 1.8, marginBottom: '2rem' }}>
              Uzkodu piramīda ir mūsu signatūras piedāvājums — kārtots ēdienu tornis no svaigām, sezonālām uzkodām, kas pasākumam piešķir gan vizuālu, gan garšu efektu. Pielāgojam sastāvu jūsu pasākumam un viesu skaitam.
            </p>
          </FadeIn>

          {features.map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.08}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.3rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(201,168,74,0.3)', background: 'rgba(201,168,74,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {item.svg}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: restaurant.colors.text, marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: restaurant.colors.gray, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.65}>
            <a
              href="#reserve"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', background: restaurant.colors.primary, color: '#FDFAF5', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', transition: 'all 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              Pasūtīt piramīdu
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
