'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function KidsRoom() {
  const isMobile = useIsMobile()
  return (
    <section id="kids" style={{ background: restaurant.colors.bgAlt, padding: isMobile ? '3rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center' }}>

        {/* LEFT — rounded video card matching About.tsx */}
        <FadeIn direction="left">
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', background: restaurant.colors.text, boxShadow: '0 30px 80px rgba(107,58,42,0.12)' }}>
            <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/videos/kids.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(107,58,42,0.1)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: restaurant.colors.primary }} />
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: `rgba(107,58,42,0.9)`, backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FDFAF5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FDFAF5' }}>Bērnu istaba</p>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — text */}
        <div>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: restaurant.colors.primary, marginBottom: '1rem' }}>Ģimenēm</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: restaurant.colors.text, lineHeight: 1 }}>BĒRNU</h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: restaurant.colors.primary, lineHeight: 1, marginBottom: '1.5rem' }}>ROTAĻU ISTABA</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: restaurant.colors.gray, lineHeight: 1.8, marginBottom: '2rem' }}>
              Mēs esam domājuši par visiem ģimenes locekļiem. Kamēr jūs baudāt autentisku armēņu ēdienu, bērni var droši spēlēties mūsu speciāli aprīkotajā rotaļu istabā.
            </p>
          </FadeIn>

          {[
            {
              title: 'Droša vide bērniem',
              desc: 'Aprīkota un uzraudzīta rotaļu telpa visiem vecumiem.',
              svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            },
            {
              title: 'Vecāki var atpūsties',
              desc: 'Baudiet maltīti mierīgā gaisotnē — bērni ir laimīgi, jūs arī.',
              svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            },
            {
              title: 'Sekojiet mums Instagram',
              desc: '@yerevan_pandok_kids — jaunākās ziņas un pasākumi bērniem.',
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
            <a href="https://instagram.com/yerevan_pandok_kids" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', background: restaurant.colors.primary, color: '#FDFAF5', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s', alignSelf: 'flex-start' }}
              onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              @yerevan_pandok_kids
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
