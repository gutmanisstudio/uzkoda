'use client'
import { useEffect, useState } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

const links = ['Home', 'About', 'Menu', 'Gallery', 'Reviews', 'Contact']

export default function Navbar() {
  const isMobile = useIsMobile()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 3rem',
      height: '70px',
      background: 'rgba(44,24,16,0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid rgba(201,168,74,0.2)`,
    }}>
      <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src="/images/logo.jpg" alt={restaurant.name} style={{ height: '44px', objectFit: 'contain', borderRadius: '8px' }} onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
      </a>

      <ul style={{ display: isMobile ? 'none' : 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = restaurant.colors.primary}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
            >{l}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href={`tel:${restaurant.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = restaurant.colors.primary}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Zvanīt
        </a>

        <a href="#reserve" style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#FDFAF5', background: restaurant.colors.primary,
          padding: '0.6rem 1.5rem', borderRadius: '999px', textDecoration: 'none',
          transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { e.currentTarget.style.background = restaurant.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Rezervēt
        </a>
      </div>
    </nav>
  )
}
