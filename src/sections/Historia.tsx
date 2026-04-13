import frenteLojaImg from '../assets/image/frenteloja.jpg'

export default function Historia() {
  return (
    <section id="sobre" style={{
      backgroundColor: '#0A0A0A',
      padding: '90px 32px 160px',
      color: '#fff',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}>

        {/* Coluna esquerda — Título + texto */}
        <div>
          <p style={{
            color: '#C9A84C',
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Quem somos
          </p>

          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            marginBottom: '32px',
          }}>
            Nossa{' '}
            <span style={{ color: '#C9A84C' }}>história.</span>
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            color: '#999',
            fontFamily: 'Barlow, sans-serif',
            fontWeight: 300,
            fontSize: '15px',
            lineHeight: 1.85,
          }}>
            <p>
              A NBSelect nasceu da paixão por carros e do desejo de oferecer um serviço
              automotivo de verdade — com atenção ao detalhe, produtos premium e
              respeito pelo veículo de cada cliente.
            </p>
            <p>
              Ao longo da nossa trajetória, nos especializamos em PPF, vitrificação,
              polimento e estética automotiva completa, sempre buscando os melhores
              resultados e a satisfação total de quem confia no nosso trabalho.
            </p>
            <p>
              Aqui na NBSelect, nosso compromisso é simples: entregar excelência em
              cada serviço, sem exceção.
            </p>
          </div>
        </div>

        {/* Coluna direita — Propósito, Missão, Visão */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          paddingTop: '8px',
        }}>

          {[
            {
              label: 'Nosso propósito',
              text: 'Cuidar dos veículos e sonhos que nos são confiados com técnica, dedicação e produtos de alta performance.',
            },
            {
              label: 'Nossa missão',
              text: 'Oferecer uma experiência sofisticada em estética automotiva, entregando resultados que superam expectativas.',
            },
            {
              label: 'Nossa visão',
              text: 'Ser referência em PPF e vitrificação no mercado automotivo, reconhecidos pela qualidade e confiança.',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                borderTop: i === 0 ? '1px solid #222' : 'none',
                borderBottom: '1px solid #222',
                padding: '28px 0',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              {/* Linha dourada */}
              <div style={{
                width: '32px',
                height: '2px',
                backgroundColor: '#C9A84C',
                marginTop: '10px',
                flexShrink: 0,
              }} />
              <div>
                <p style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#fff',
                  marginBottom: '6px',
                  letterSpacing: '0.05em',
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: '13px',
                  color: '#777',
                  lineHeight: 1.7,
                }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Responsive mobile */}
      <style>{`
        @media (max-width: 768px) {
          #sobre > div {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  )
}
