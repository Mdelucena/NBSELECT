import { useState } from 'react'
import iconWhatsApp from '../assets/icons_footer/icons8-whatsapp-100.png'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <a
        href="https://wa.me/5581920008301"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 999,
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: hovered ? '#1da851' : '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 8px 30px rgba(37, 211, 102, 0.55)'
            : '0 4px 18px rgba(37, 211, 102, 0.35)',
          transition: 'background-color 0.2s, box-shadow 0.2s, transform 0.2s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          textDecoration: 'none',
        }}
        title="Falar no WhatsApp"
      >
        <img
          src={iconWhatsApp}
          alt="WhatsApp"
          style={{
            width: '30px',
            height: '30px',
            filter: 'brightness(0) invert(1)',
          }}
        />
      </a>

      {/* Pulso animado */}
      <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }
        .wa-pulse {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background-color: #25D366;
          z-index: 998;
          animation: waPulse 2s ease-out infinite;
          pointer-events: none;
        }
      `}</style>
      <div className="wa-pulse" />
    </>
  )
}
