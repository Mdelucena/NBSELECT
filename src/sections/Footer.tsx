import logo from '../assets/image/logo.png'
import iconWhatsApp from '../assets/icons_footer/icons8-whatsapp-100.png'
import iconGmail from '../assets/icons_footer/icons8-gmail-100.png'
import iconInstagram from '../assets/icons_footer/icons8-instagram-100.png'
import iconTelefone from '../assets/icons_footer/icons8-telefone-100.png'

const iconStyle: React.CSSProperties = {
  width: '22px',
  height: '22px',
  objectFit: 'contain',
  flexShrink: 0,
}

export default function Footer() {
  return (
    <footer id="contato" style={{ backgroundColor: '#0A0A0A' }}>

      {/* Bloco principal */}
      <div className="footer-grid" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '70px 48px 50px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start',
      }}>

        {/* Google Maps */}
        <div style={{
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #1e1e1e',
          height: '260px',
        }}>
          <iframe
            title="NBSelect Localização"
            src="https://maps.google.com/maps?q=Av.+Bernardo+Vieira+de+Melo,+6455,+Candeias,+Jaboatão+dos+Guararapes,+PE&output=embed"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
            loading="lazy"
          />
        </div>

        {/* Informações */}
        <div style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>

          {/* Logo de fundo */}
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '260px',
              width: 'auto',
              pointerEvents: 'none',
              userSelect: 'none',
              opacity: 0.06,
              zIndex: 0,
            }}
          />

          <p style={{
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '24px',
          }}>
            Informações
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            {/* Endereço */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <img src={iconTelefone} alt="Endereço" style={{ ...iconStyle, marginTop: '2px' }} />
              <p style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '14px',
                color: '#ccc',
                lineHeight: 1.6,
              }}>
                Av. Bernardo Vieira de Melo, 6455 - Candeias,<br />
                Jaboatão dos Guararapes - PE, 54080-310
              </p>
            </div>

            {/* WhatsApp */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src={iconWhatsApp} alt="WhatsApp" style={iconStyle} />
              <a
                href="https://wa.me/5581920008301"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '14px',
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ccc')}
              >
                (81) 92000-8301
              </a>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src={iconGmail} alt="Email" style={iconStyle} />
              <a
                href="mailto:nbselectpe@gmail.com"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '14px',
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ccc')}
              >
                nbselectpe@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src={iconInstagram} alt="Instagram" style={iconStyle} />
              <a
                href="https://www.instagram.com/nbselectpe/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '14px',
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ccc')}
              >
                @nbselectpe
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 48px 50px',
      }}>
        <div className="footer-cta" style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '36px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          <div>
            <p style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontSize: '1.6rem',
              color: '#111',
              marginBottom: '6px',
            }}>
              Ficou interessado?
            </p>
            <p style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '13px',
              color: '#666',
            }}>
              Clique no botão abaixo e solicite um orçamento!
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/5581920008301"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#C9A84C',
                color: '#000',
                padding: '14px 36px',
                fontSize: '13px',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b8923e')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C9A84C')}
            >
              Fale conosco
            </a>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{
        borderTop: '1px solid #1a1a1a',
        padding: '20px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: 'Barlow, sans-serif',
          fontSize: '12px',
          color: '#444',
        }}>
          © 2026 NBSelect. Todos os direitos reservados.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a
            href="https://www.instagram.com/nbselectpe/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '12px',
              color: '#444',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={e => (e.currentTarget.style.color = '#444')}
          >
            Instagram
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            padding: 48px 20px 32px !important;
            gap: 36px !important;
          }
          footer .footer-cta {
            padding: 28px 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          footer .footer-bottom {
            padding: 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}
