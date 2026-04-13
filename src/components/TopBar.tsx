import { Clock, Phone } from 'lucide-react'

export default function TopBar() {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderBottom: '3px solid #C9A84C',
      padding: '8px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '12px',
      fontFamily: 'Barlow, sans-serif',
      letterSpacing: '0.05em',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#555' }}>
        <Clock size={13} color="#C9A84C" />
        <span>Seg à Sáb &nbsp;<strong style={{ color: '#111' }}>8:00 – 18:00</strong></span>
      </div>
      <a
        href="https://wa.me/5581920008301"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#555', textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#111')}
        onMouseLeave={e => (e.currentTarget.style.color = '#555')}
      >
        <Phone size={13} color="#C9A84C" />
        <span><strong style={{ color: '#111' }}>(81) 92000-8301</strong></span>
      </a>
    </div>
  )
}
