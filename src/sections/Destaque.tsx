export default function Destaque() {
  return (
    <section style={{
      backgroundColor: '#f5f5f5',
      padding: '90px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>

      {/* Estrelas + linha decorativa */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '28px',
      }}>
        <div style={{ width: '60px', height: '2px', backgroundColor: '#C9A84C' }} />
        <span style={{ color: '#C9A84C', fontSize: '20px', lineHeight: 1 }}>★</span>
        <span style={{ color: '#C9A84C', fontSize: '28px', lineHeight: 1 }}>★</span>
        <span style={{ color: '#C9A84C', fontSize: '20px', lineHeight: 1 }}>★</span>
        <div style={{ width: '60px', height: '2px', backgroundColor: '#C9A84C' }} />
      </div>

      {/* Headline */}
      <h2 style={{
        fontFamily: 'Barlow Condensed, sans-serif',
        fontWeight: 900,
        fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
        color: '#111',
        lineHeight: 1.15,
        maxWidth: '750px',
        marginBottom: '22px',
        textTransform: 'uppercase',
        letterSpacing: '-0.01em',
      }}>
        Todo detalhe faz diferença.
        <br />
        <span style={{ color: '#C9A84C' }}>O seu carro também.</span>
      </h2>

      {/* Subtítulo */}
      <p style={{
        fontFamily: 'Barlow, sans-serif',
        fontWeight: 400,
        fontSize: '15px',
        color: '#777',
        maxWidth: '480px',
        lineHeight: 1.8,
        marginBottom: '40px',
      }}>
        NBSelect — onde técnica, dedicação e os melhores produtos se unem
        para entregar resultados que você vê e sente.
      </p>

      {/* Botão */}
      <a
        href="#contato"
        style={{
          backgroundColor: '#C9A84C',
          color: '#000',
          padding: '16px 44px',
          fontSize: '12px',
          fontFamily: 'Barlow, sans-serif',
          fontWeight: 700,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'all 0.25s',
          boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#111'
          e.currentTarget.style.color = '#C9A84C'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#C9A84C'
          e.currentTarget.style.color = '#000'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.3)'
        }}
      >
        Agendar Serviço
      </a>
    </section>
  )
}
