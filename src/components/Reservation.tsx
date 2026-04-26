'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function Reservation() {
  const isMobile = useIsMobile()
  const [form, setForm] = useState({ firstName: '', lastName: '', date: '', time: '19:00', guests: '2', phone: '', email: '', notes: '' })
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const sendToWhatsApp = () => {
    const waNumber = restaurant.phone.replace(/\D/g, '')
    const lines = [
      'Sveiki! Vēlos pasūtījumu / rezervāciju:',
      '',
      `Vārds: ${form.firstName} ${form.lastName}`.trim(),
      form.date && `Datums: ${form.date}`,
      form.time && `Laiks: ${form.time}`,
      form.guests && `Viesi: ${form.guests}`,
      form.phone && `Telefons: ${form.phone}`,
      form.email && `E-pasts: ${form.email}`,
      form.notes && `Piezīmes: ${form.notes}`,
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`, '_blank')
  }

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
          <button onClick={sendToWhatsApp} style={{ width: '100%', background: restaurant.colors.primary, color: '#0E0B08', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1.1rem', border: 'none', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = restaurant.colors.primaryDark; (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = restaurant.colors.primary; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
            Sūtīt uz WhatsApp
          </button>
        </div>
      </FadeIn>
      </div>
    </section>
  )
}
