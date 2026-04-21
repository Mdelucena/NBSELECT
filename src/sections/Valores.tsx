const valores = [
  {
    icon: '★',
    titulo: 'Qualidade sem concessões',
  },
  {
    icon: '◈',
    titulo: 'Técnica de alto nível',
  },
  {
    icon: '⬡',
    titulo: 'Compromisso com o cliente',
  },
]

export default function Valores() {
  return (
    <section className="val-section" style={{
      backgroundColor: '#f5f5f5',
      padding: '60px 48px',
    }}>
      <div className="val-inner" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        backgroundColor: '#0A0A0A',
        borderRadius: '16px',
        padding: '52px 60px',
        border: '1px solid #1a1a1a',
      }}>

        {/* Topo */}
        <p style={{
          fontFamily: 'Barlow, sans-serif',
          fontWeight: 600,
          fontSize: '11px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          marginBottom: '10px',
        }}>
          O que nos define
        </p>
        <h2 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          textTransform: 'uppercase',
          color: '#fff',
          marginBottom: '44px',
          letterSpacing: '-0.01em',
        }}>
          Nossos <span style={{ color: '#C9A84C' }}>valores.</span>
        </h2>

        {/* 3 valores */}
        <div className="val-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
        }}>
          {valores.map((v, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '0 40px 0 0',
                borderRight: i < 2 ? '1px solid #222' : 'none',
                paddingLeft: i > 0 ? '40px' : '0',
              }}
            >
              {/* Ícone */}
              <div style={{
                width: '42px',
                height: '42px',
                backgroundColor: '#161616',
                border: '1px solid #C9A84C44',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C9A84C',
                fontSize: '18px',
                flexShrink: 0,
              }}>
                {v.icon}
              </div>

              {/* Texto */}
              <p style={{
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#fff',
              }}>
                {v.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dep-section { padding: 48px 20px !important; }
          .dep-grid { grid-template-columns: 1fr !important; }
          .val-section { padding: 32px 16px !important; }
          .val-inner { padding: 36px 24px !important; }
          .val-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .val-grid > div { border-right: none !important; padding-left: 0 !important; padding-right: 0 !important; border-bottom: 1px solid #222; padding-bottom: 20px !important; }
          .serv-section { padding: 110px 20px 60px !important; }
          .serv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
