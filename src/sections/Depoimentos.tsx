import logo from '../assets/image/favicon.png'

const depoimentos = [
  {
    nome: 'Rafael Mendonça',
    texto:
      'Serviço impecável! Trouxe meu carro para vitrificação e fiquei impressionado com o resultado. A equipe é super profissional, explicou cada etapa do processo. Com certeza voltarei e recomendarei a todos.',
  },
  {
    nome: 'Thiago Albuquerque',
    texto:
      'Primeira vez aplicando PPF e a NBSelect me surpreendeu. Atendimento excelente desde o primeiro contato, prazo cumprido e acabamento perfeito. Meu carro saiu parecendo zero. Muito obrigado!',
  },
  {
    nome: 'Lucas Cavalcante',
    texto:
      'Polimento técnico feito com maestria. Riscos que eu achava que seriam permanentes sumiram completamente. Ambiente organizado, equipe atenciosa e resultado de alto nível. Super recomendo a NBSelect!',
  },
]

export default function Depoimentos() {
  return (
    <section style={{
      backgroundColor: '#f5f5f5',
      padding: '70px 48px',
    }}
    className="dep-section"
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Título */}
        <h2 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          color: '#111',
          textAlign: 'center',
          marginBottom: '48px',
          lineHeight: 1.2,
        }}>
          Veja os{' '}
          <span style={{ color: '#C9A84C' }}>Depoimentos</span>
          {' '}que nossos clientes fizeram!
        </h2>

        {/* Cards */}
        <div className="dep-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {depoimentos.map((d, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#C9A84C',
                borderRadius: '12px',
                padding: '32px 28px 36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0',
              }}
            >
              {/* Avatar com logo */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#111',
                border: '3px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <img
                  src={logo}
                  alt="NBSelect"
                  style={{ width: '44px', height: '44px', objectFit: 'contain' }}
                />
              </div>

              {/* Nome */}
              <p style={{
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                color: '#111',
                marginBottom: '14px',
              }}>
                {d.nome}
              </p>

              {/* Texto */}
              <p style={{
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                color: '#2a2a2a',
                lineHeight: 1.75,
              }}>
                {d.texto}
              </p>

              {/* Estrelas */}
              <div style={{
                marginTop: '20px',
                color: '#fff',
                fontSize: '16px',
                letterSpacing: '2px',
              }}>
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #depoimentos-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
