'use client'
import FadeIn from './FadeIn'
import { MenuCarousel } from './ui/framer-carousel'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

const tabs = Object.keys(restaurant.menu) as (keyof typeof restaurant.menu)[]

export default function MenuSection() {
  const isMobile = useIsMobile()
  return (
    <section id="menu" style={{ background: restaurant.colors.bg, padding: isMobile ? '3rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.1em', color: restaurant.colors.text }}>
              OUR <span style={{ color: restaurant.colors.primary }}>MENU</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: restaurant.colors.gray, marginTop: '0.5rem' }}>
              Mūsu signatūras produkti — uzkodas, banketi un piramīdas.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em', color: restaurant.colors.primary, marginTop: '0.6rem' }}>
              Cenas pēc pieprasījuma · Contact us for pricing
            </p>
          </div>
        </FadeIn>

        {/* Full menu carousel */}
        <FadeIn delay={0.2}>
          <MenuCarousel />
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
            <a href="#reserve" style={{ background: restaurant.colors.primary, color: '#FDFCFA', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Rezervēt galdu
            </a>
            <a href={`tel:${restaurant.phone}`} style={{ background: 'transparent', color: restaurant.colors.primary, fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', border: `1.5px solid ${restaurant.colors.primary}`, transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.color = '#FDFCFA' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = restaurant.colors.primary }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Zvanīt
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
