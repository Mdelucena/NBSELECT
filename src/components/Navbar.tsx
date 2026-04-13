import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/image/logo.png'

const servicos = [
  { label: 'PPF', href: '#servicos' },
  { label: 'Vitrificação', href: '#servicos' },
  { label: 'Lavagem Premium', href: '#servicos' },
]

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <nav style={{
      backgroundColor: '#0A0A0A',
      borderBottom: '3px solid #C9A84C',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        width: '100%',
        padding: '0 32px',
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo + tagline */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
          <img
            src={logo}
            alt="NBSelect"
            style={{ height: '180px', width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{
              color: '#C9A84C',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '22px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>
              PPF & Vitrificação
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>

          {/* Início */}
          <a
            href="#"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '13px',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
          >
            Início
          </a>

          {/* Dropdown Serviços */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: dropOpen ? '#C9A84C' : '#fff',
              fontSize: '13px',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: 0,
            }}>
              Serviços
              <span style={{ fontSize: '10px', transition: 'transform 0.2s', display: 'inline-block', transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
            </button>

            {dropOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 16px)',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#0A0A0A',
                border: '1px solid #1e1e1e',
                borderTop: '2px solid #C9A84C',
                borderRadius: '0 0 6px 6px',
                minWidth: '200px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                zIndex: 100,
              }}>
                {servicos.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    style={{
                      display: 'block',
                      padding: '14px 20px',
                      color: '#ccc',
                      textDecoration: 'none',
                      fontSize: '12px',
                      fontFamily: 'Barlow, sans-serif',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #1a1a1a',
                      transition: 'color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#C9A84C'
                      e.currentTarget.style.backgroundColor = '#111'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#ccc'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '13px',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#C9A84C',
              color: '#000',
              padding: '10px 24px',
              fontSize: '12px',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b8923e')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C9A84C')}
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mob-toggle"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: '4px', display: 'none' }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid #1E1E1E',
          padding: '20px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '13px',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            style={{
              backgroundColor: '#C9A84C',
              color: '#000',
              padding: '12px',
              textAlign: 'center',
              fontSize: '12px',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
