import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/image/logo.png'

const servicos = [
  { label: 'PPF', path: '/ppf' },
  { label: 'Vitrificação', path: '/vitrificacao' },
  { label: 'Lavagem Premium', path: '/lavagens' },
]

const links = [
  { label: 'Sobre', hash: '#sobre' },
  { label: 'Contato', hash: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const goHome = () => {
    setOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHash = (hash: string) => {
    setOpen(false)
    setDropOpen(false)
    if (location.pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + hash)
    }
  }

  const goPage = (path: string) => {
    setOpen(false)
    setDropOpen(false)
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav style={{
      backgroundColor: '#0A0A0A',
      borderBottom: '3px solid #C9A84C',
      position: 'relative',
      zIndex: 50,
    }}>
      <div className="nav-bar" style={{
        width: '100%',
        padding: '0 32px',
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo + tagline */}
        <a onClick={goHome} style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', cursor: 'pointer' }}>
          <img
            src={logo}
            alt="NBSelect"
            className="nav-logo"
            style={{ height: '180px', width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="nav-tagline" style={{
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
          <button
            onClick={goHome}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#fff',
              fontSize: '13px',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
          >
            Início
          </button>

          {/* Dropdown Serviços */}
          <div
            ref={dropRef}
            style={{ position: 'relative' }}
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
            }}
            onClick={() => setDropOpen(prev => !prev)}
            >
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
                  <button
                    key={s.label}
                    onClick={() => goPage(s.path)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 20px',
                      color: '#ccc',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
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
                  </button>
                ))}
              </div>
            )}
          </div>

          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => goHash(l.hash)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#fff',
                fontSize: '13px',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                padding: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
            >
              {l.label}
            </button>
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
          {/* Início */}
          <button
            onClick={goHome}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              color: '#fff', fontSize: '13px', fontFamily: 'Barlow, sans-serif',
              fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'left',
            }}
          >
            Início
          </button>

          {/* Serviços expandido */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <span style={{
              color: '#C9A84C', fontSize: '13px', fontFamily: 'Barlow, sans-serif',
              fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px',
            }}>
              Serviços
            </span>
            {servicos.map((s) => (
              <button
                key={s.label}
                onClick={() => goPage(s.path)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#aaa', fontSize: '13px', fontFamily: 'Barlow, sans-serif',
                  fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'left',
                  paddingLeft: '12px', borderLeft: '2px solid #C9A84C44',
                  paddingTop: '6px', paddingBottom: '6px',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => goHash(l.hash)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                color: '#fff', fontSize: '13px', fontFamily: 'Barlow, sans-serif',
                fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'left',
              }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/5581920008301"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
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
          .nav-bar { height: 70px !important; padding: 0 16px !important; }
          .nav-logo { height: 80px !important; }
          .nav-tagline { font-size: 14px !important; }
        }
      `}</style>
    </nav>
  )
}
