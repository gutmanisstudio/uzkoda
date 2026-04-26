'use client'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

const navLinks = [
  { label: 'Par mums', href: '#about' },
  { label: 'Ēdienkarte', href: '#menu' },
  { label: 'Galerija', href: '#gallery' },
  { label: 'Atsauksmes', href: '#reviews' },
  { label: 'Rezervācija', href: '#reserve' },
]

export default function Footer() {
  const isMobile = useIsMobile()
  return (
    <footer style={{ background: 'rgba(20,14,10,0.98)', borderTop: `1px solid rgba(201,168,74,0.2)`, padding: isMobile ? '2.5rem 1.25rem 1.5rem' : '5rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr 1fr', gap: isMobile ? '1.75rem' : '3rem', paddingBottom: isMobile ? '1.75rem' : '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <img src="/images/logo.jpg" alt={restaurant.name} style={{ height: '44px', objectFit: 'contain', marginBottom: '1rem', borderRadius: '8px' }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '260px', marginBottom: '1.25rem' }}>Uzkodu piramīdas, banketi un pusdienotava. Sirsnīga ēdienreize jebkuram pasākumam.</p>
            <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', border: `1px solid rgba(201,168,74,0.3)`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: restaurant.colors.primary, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = restaurant.colors.primary; (e.currentTarget.querySelector('svg') as SVGElement).style.stroke = '#0E0B08' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget.querySelector('svg') as SVGElement).style.stroke = restaurant.colors.primary }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={restaurant.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
          {[
            { title: 'Navigācija', items: navLinks },
            { title: 'Darba laiks', items: [restaurant.hours.weekday, restaurant.hours.friday, restaurant.hours.sunday].map(t => ({ label: t, href: null as string | null })) },
            { title: 'Kontakti', items: [...restaurant.address.split(', ').map(a => ({ label: a, href: restaurant.mapsLink as string | null })), { label: restaurant.phone, href: `tel:${restaurant.phone}` as string | null }] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: restaurant.colors.primary, marginBottom: '1rem' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {col.items.map(it => (
                  <li key={it.label} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                    {it.href
                      ? <a href={it.href} {...(it.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = restaurant.colors.primary} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>{it.label}</a>
                      : it.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: isMobile ? '1.25rem' : '2rem', flexDirection: isMobile ? 'column' as const : 'row' as const, gap: isMobile ? '0.5rem' : '0', textAlign: isMobile ? 'center' as const : 'left' as const }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 {restaurant.name}. All rights reserved.</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)' }}>Site by Gutmanis Studio</p>
        </div>
      </div>
    </footer>
  )
}
