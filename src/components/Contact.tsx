'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function Contact() {
  const isMobile = useIsMobile()
  return (
    <>
      <section id="contact" style={{ background: restaurant.colors.bg, padding: isMobile ? '3rem 1.5rem' : '6rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center' }}>
          <FadeIn direction="left">
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: restaurant.colors.primary, background: `rgba(107,58,42,0.08)`, padding: '0.4rem 1rem', borderRadius: '999px', border: `1px solid rgba(107,58,42,0.2)`, marginBottom: '1.5rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                Sazinies ar mums
              </span>

              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', letterSpacing: '0.08em', color: restaurant.colors.text, lineHeight: 1, marginBottom: '1.2rem' }}>
                SAZINIETIES <span style={{ color: restaurant.colors.primary }}>AR MUMS</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: restaurant.colors.gray, lineHeight: 1.8, marginBottom: '2rem' }}>
                Jautājumi, pasūtījumi vai vienkārši vēlaties sveicināties? Rakstiet mums!
              </p>
              <a href={`tel:${restaurant.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: restaurant.colors.primary, color: '#FDFAF5', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Zvanīt mums
              </a>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
            {[
              {
                label: 'Zvanīt', value: restaurant.phone,
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              },
              {
                label: 'Instagram', value: '@uzkoda.info',
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              },
              {
                label: 'Atrast mūs', value: restaurant.address,
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              },
              {
                label: 'Darba laiks', value: `${restaurant.hours.weekday}\n${restaurant.hours.friday}`,
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div style={{ background: restaurant.colors.bgAlt, padding: '1.5rem', borderRadius: '16px', border: `1px solid rgba(107,58,42,0.08)`, display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `rgba(107,58,42,0.3)`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `rgba(107,58,42,0.08)`; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: `rgba(107,58,42,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.svg}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: restaurant.colors.primary, marginBottom: '0.3rem' }}>{item.label}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 400, color: restaurant.colors.text, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Google Maps */}
          <FadeIn delay={0.3} style={{ gridColumn: '1 / -1' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginTop: '2rem', border: `1px solid rgba(107,58,42,0.12)` }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.8!2d23.7709!3d56.9677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfe3b1234567%3A0xabcdef123456789!2sJomas%20iela%2025%2C%20J%C5%ABrmala!5e0!3m2!1slv!2slv!4v1234567890123"
                width="100%"
                height={isMobile ? '280' : '400'}
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ background: restaurant.colors.bgAlt, borderTop: `1px solid rgba(107,58,42,0.12)`, padding: isMobile ? '3rem 1.5rem' : '5rem 4rem', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.08em', color: restaurant.colors.text }}>
            GATAVI <span style={{ color: restaurant.colors.primary }}>BAUDĪT?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: restaurant.colors.gray, marginBottom: '2.5rem' }}>
            Jūsu nākamais neaizmirstamais vakars ir tikai vienu rezervāciju tālu.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#reserve" style={{ background: restaurant.colors.primary, color: '#FDFAF5', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Rezervēt galdu
            </a>
            <a href="#menu" style={{ background: 'transparent', color: restaurant.colors.text, fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', border: `1.5px solid rgba(44,24,16,0.2)`, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = restaurant.colors.primary; e.currentTarget.style.color = restaurant.colors.primary }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(44,24,16,0.2)'; e.currentTarget.style.color = restaurant.colors.text }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              Ēdienkarte
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
