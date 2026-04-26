'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

const menuData = restaurant.menu
const tabs = Object.keys(menuData) as (keyof typeof menuData)[]

export default function Menu() {
  const isMobile = useIsMobile()
  const [active, setActive] = useState<keyof typeof menuData>('Starters')
  return (
    <section id="menu" style={{ background: '#FDFCFA', padding: isMobile ? '3rem 1.5rem' : '7rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <FadeIn>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.1em', color: 'var(--black)' }}>OUR <span style={{ color: 'var(--red)' }}>MENU</span></h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'rgba(14,10,8,0.45)', marginTop: '0.5rem' }}>Bold flavors. Handcrafted and made to order.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', margin: '2.5rem 0 3rem' }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.6rem 1.6rem', borderRadius: '999px', border: active === tab ? 'none' : '1.5px solid rgba(14,10,8,0.2)', background: active === tab ? 'var(--red)' : 'transparent', color: active === tab ? 'var(--white)' : 'rgba(14,10,8,0.5)', cursor: 'pointer', transition: 'all 0.2s' }}>
              {tab}
            </button>
          ))}
        </div>
      </FadeIn>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {menuData[active].map((item, i) => (
          <FadeIn key={item.name} delay={i * 0.1}>
            <div style={{ background: '#F8F4EF', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(200,16,46,0.15)', transition: 'transform 0.3s, border-color 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,16,46,0.5)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,16,46,0.15)' }}>
              <div style={{ height: '240px', overflow: 'hidden', background: '#1a0a0a' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.06)'}
                  onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                  onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)' }}>{item.name}</p>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: 'var(--red)' }}>{item.price}</span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: 'rgba(14,10,8,0.5)', lineHeight: 1.6, marginBottom: '1.2rem' }}>{item.desc}</p>
                <a href="#reserve" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--red)', color: 'var(--black)', fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.65rem 1.2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--red-dark)'; e.currentTarget.style.transform = 'scale(1.03)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.transform = 'scale(1)' }}>
                  🍽 Order Now
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
          <a href="/menu" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)', background: 'transparent', border: '1.5px solid rgba(14,10,8,0.25)', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(14,10,8,0.25)'; e.currentTarget.style.color = 'var(--white)' }}>☰ View Full Menu</a>
          <a href="#reserve" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)', background: 'var(--red)', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--red-dark)'; e.currentTarget.style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.transform = 'scale(1)' }}>🍽 Reserve Online</a>
        </div>
      </FadeIn>
      </div>
    </section>
  )
}
