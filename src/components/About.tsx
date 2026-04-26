'use client'
import FadeIn from './FadeIn'
import { restaurant } from '@/config/restaurant'

const features = [
  {
    title: 'Rezervēt galdu vai zvanīt',
    desc: 'Rezervējiet iepriekš vai vienkārši ienāciet — mēs parūpēsimies par visu.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B3A2A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  },
  {
    title: 'Gatavots svaigi katru dienu',
    desc: 'Katrs ēdiens pagatavots pasūtījuma brīdī. Nekādu kompromisu.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B3A2A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  },
  {
    title: 'Privāti pasākumi',
    desc: 'Plānojat ko īpašu? Mēs uzņemam grupas no 10 līdz 120 viesiem.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B3A2A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  },
  {
    title: 'Konditoreja',
    desc: 'Armēņu konditorejas izstrādājumi. Zvaniet: +371 22300587',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B3A2A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#FDFAF5', padding: '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

        {/* LEFT — video card, no stray text or broken img */}
        <FadeIn direction="left">
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '4/5',
            background: '#2C1810',
            boxShadow: '0 30px 80px rgba(107,58,42,0.15)',
          }}>
            <video
              autoPlay loop muted playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
            >
              <source src="/videos/interior.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#6B3A2A', zIndex: 3 }} />
          </div>
        </FadeIn>

        {/* RIGHT — text */}
        <div>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B3A2A', marginBottom: '1rem' }}>
              Par mums
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: '#2C1810', lineHeight: 1 }}>
              YEREVAN
            </h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: '#6B3A2A', lineHeight: 1, marginBottom: '1.5rem' }}>
              PANDOK
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: '#8C7B6B', lineHeight: 1.8, marginBottom: '2rem' }}>
              Autentiska armēņu virtuve Jūrmalā. Mājīga atmosfēra, svaigas izejvielas un sirsnīga apkalpošana — tieši tā, kā mājas.
            </p>
          </FadeIn>

          {features.map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.08}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.3rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(107,58,42,0.3)', background: 'rgba(107,58,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {item.svg}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#8C7B6B', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.65}>
            <a
              href="#reserve"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', background: '#6B3A2A', color: '#FDFAF5', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', transition: 'all 0.2s', alignSelf: 'flex-start' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4A2418'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#6B3A2A'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              Uzzināt vairāk
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
