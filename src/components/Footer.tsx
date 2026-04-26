'use client'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function Footer() {
  const isMobile = useIsMobile()
  return (
    <footer style={{ background: restaurant.colors.text, padding: isMobile ? '3rem 1.5rem 2rem' : '5rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr 1fr', gap: isMobile ? '2rem' : '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div>
          <img src="/images/logo.jpg" alt={restaurant.name} style={{ height: '50px', objectFit: 'contain', marginBottom: '1rem', borderRadius: '8px' }} />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '220px', marginBottom: '1.5rem' }}>Uzkodu piramīdas, banketi un pusdienotava. Sirsnīga ēdienreize jebkuram pasākumam.</p>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {['IG'].map(s => (
              <a key={s} href={restaurant.instagram} target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.62rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = restaurant.colors.primary; e.currentTarget.style.color = restaurant.colors.primary }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>{s}</a>
            ))}
          </div>
        </div>
        {[
          { title: 'Navigācija', items: ['Par mums', 'Ēdienkarte', 'Galerija', 'Pasākumi', 'Rezervācija'] },
          { title: 'Darba laiks', items: [restaurant.hours.weekday, restaurant.hours.friday, restaurant.hours.sunday] },
          { title: 'Kontakti', items: [...restaurant.address.split(', '), restaurant.phone].filter(Boolean) },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.2rem' }}>{col.title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col.items.map(item => <li key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem', flexDirection: isMobile ? 'column' as const : 'row' as const, gap: isMobile ? '0.5rem' : '0' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>© 2026 {restaurant.name}. All rights reserved.</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.12)' }}>Site by Gutmanis Studio</p>
      </div>
      </div>
    </footer>
  )
}
