import iconPPF from '../assets/icons_card/icon-ppf.svg'
import iconPelicula from '../assets/icons_card/icon-pelicula.svg'
import iconRevestimento from '../assets/icons_card/icon-revestimento-ceramico.svg'
import iconPintura from '../assets/icons_card/icon-pintura.svg'
import iconEstetica from '../assets/icons_card/icon-estetica.svg'
import iconFunilaria from '../assets/icons_card/icon-funilaria.svg'

const servicos = [
  { icon: iconPPF,          titulo: 'PPF' },
  { icon: iconPelicula,     titulo: 'Película Automotiva' },
  { icon: iconRevestimento, titulo: 'Revestimento Cerâmico' },
  { icon: iconPintura,      titulo: 'Lavagens' },
  { icon: iconEstetica,     titulo: 'Vitrificação' },
  { icon: iconFunilaria,    titulo: 'Higienização' },
]

export default function Servicos() {
  return (
    <section id="servicos" style={{
      backgroundColor: '#f5f5f5',
      padding: '240px 48px 90px',
    }}>
      <div style={{         maxWidth: '1400px', margin: '0 auto' }}>

        {/* Título */}
        <h2 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#111',
          textTransform: 'uppercase',
          marginBottom: '40px',
        }}>
          Nossos <span style={{ color: '#C9A84C' }}>serviços.</span>
        </h2>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }}>
          {servicos.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#111',
                borderRadius: '8px',
                padding: '44px 36px 36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-5px)'
                el.style.boxShadow = '0 16px 50px rgba(201,168,76,0.2)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >

              {/* Ícone SVG */}
              <img
                src={s.icon}
                alt={s.titulo}
                style={{
                  width: '90px',
                  height: '90px',
                  objectFit: 'contain',
                  marginBottom: '32px',
                  filter: 'brightness(0) saturate(100%) invert(74%) sepia(42%) saturate(540%) hue-rotate(4deg) brightness(97%)',
                }}
              />

              {/* Nome */}
              <p style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 700,
                fontSize: '17px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: 1.2,
                marginBottom: '20px',
                textAlign: 'center',
              }}>
                {s.titulo}
              </p>

              {/* Saiba mais */}
              <a
                href="https://wa.me/5581920008301"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  textDecoration: 'none',
                  borderBottom: '1px solid #C9A84C44',
                  paddingBottom: '2px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#C9A84C'
                  e.currentTarget.style.borderColor = '#C9A84C44'
                }}
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #servicos > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          #servicos > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
