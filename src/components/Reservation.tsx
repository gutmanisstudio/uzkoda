'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function Reservation() {
  const isMobile = useIsMobile()
  const [form, setForm] = useState({ firstName: '', lastName: '', date: '', time: '19:00', guests: '2', phone: '', email: '', notes: '' })
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const inp: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: restaurant.colors.text, background: `rgba(201,168,74,0.06)`, border: `1px solid rgba(201,168,74,0.12)`, padding: '0.85rem 1rem', outline: 'none', width: '100%', borderRadius: '8px', transition: 'border-color 0.2s' }
  const lbl: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: restaurant.colors.gray, display: 'block', marginBottom: '0.4rem' }

  return (
    <section id="reserve" style={{ background: restaurant.colors.bgAlt, padding: isMobile ? '3rem 1.5rem' : '7rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? '2rem' : '6rem', alignItems: 'center' }}>
      <FadeIn direction="left">
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1rem' }}>Rezervēt galdu</p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '0.06em', color: '#FDFAF5', lineHeight: 1, marginBottom: '1.5rem' }}>PIEVIENOJIETIES<br />NEAIZMIRSTAMAM<br />VAKARAM</h2>
        <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.4)', marginBottom: '2.5rem' }} />
        {[
          { label: 'Adrese', value: restaurant.address.replace(', ', '\n') },
          { label: 'Laiks', value: `${restaurant.hours.weekday}\n${restaurant.hours.friday}\n${restaurant.hours.sunday}` },
          { label: 'Telefons', value: restaurant.phone },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.2rem' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', minWidth: '70px', paddingTop: '0.15rem' }}>{item.label}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#FDFAF5', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</span>
          </div>
        ))}
      </FadeIn>

      <FadeIn direction="right" delay={0.1}>
        <div style={{ background: restaurant.colors.bg, padding: '3rem', borderRadius: '16px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: restaurant.colors.primary, marginBottom: '0.4rem' }}>Rezervēt galdu</p>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', letterSpacing: '0.08em', color: restaurant.colors.text, marginBottom: '2rem' }}>Rezervējiet vakaru</h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div><label style={lbl}>Vārds</label><input name="firstName" value={form.firstName} onChange={onChange} placeholder="Jānis" style={inp} onFocus={e => e.target.style.borderColor = restaurant.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(201,168,74,0.12)'} /></div>
            <div><label style={lbl}>Uzvārds</label><input name="lastName" value={form.lastName} onChange={onChange} placeholder="Bērziņš" style={inp} onFocus={e => e.target.style.borderColor = restaurant.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(201,168,74,0.12)'} /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div><label style={lbl}>Datums</label><input type="date" name="date" value={form.date} onChange={onChange} style={inp} onFocus={e => e.target.style.borderColor = restaurant.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(201,168,74,0.12)'} /></div>
            <div><label style={lbl}>Laiks</label><select name="time" value={form.time} onChange={onChange} style={inp}>{['12:00','13:00','14:00','18:00','19:00','20:00','21:00'].map(t => <option key={t} style={{ background: restaurant.colors.bg }}>{t}</option>)}</select></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div><label style={lbl}>Viesi</label><select name="guests" value={form.guests} onChange={onChange} style={inp}>{['1','2','3','4','5','6','7','8','Grupa (10+)'].map(g => <option key={g} style={{ background: restaurant.colors.bg }}>{g}</option>)}</select></div>
            <div><label style={lbl}>Telefons</label><input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+371 ..." style={inp} onFocus={e => e.target.style.borderColor = restaurant.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(201,168,74,0.12)'} /></div>
          </div>
          <div style={{ marginBottom: '1.5rem' }}><label style={lbl}>Īpašie lūgumi</label>
            <textarea name="notes" value={form.notes} onChange={onChange} placeholder="Diētiskie ierobežojumi, svētki, alerģijas..." rows={3} style={{ ...inp, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = restaurant.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(201,168,74,0.12)'} />
          </div>
          <button style={{ width: '100%', background: restaurant.colors.primary, color: '#FDFAF5', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1.1rem', border: 'none', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = restaurant.colors.primaryDark; (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = restaurant.colors.primary; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}>
            Apstiprināt rezervāciju →
          </button>
        </div>
      </FadeIn>
      </div>
    </section>
  )
}
