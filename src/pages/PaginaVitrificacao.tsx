import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function PaginaVitrificacao() {
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: '#0A0A0A', padding: '64px 48px 56px', borderBottom: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', fontFamily: 'Barlow, sans-serif', fontSize: '13px', padding: 0 }}>
              Início
            </button>
            <span style={{ color: '#444', fontSize: '13px' }}>›</span>
            <span style={{ color: '#C9A84C', fontFamily: 'Barlow, sans-serif', fontSize: '13px' }}>Vitrificação</span>
          </div>

          <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>
            Serviço
          </p>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '20px' }}>
            Vitrificação <span style={{ color: '#C9A84C' }}>Automotiva.</span>
          </h1>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#aaa', maxWidth: '620px', lineHeight: 1.7 }}>
            A vitrificação é um revestimento de proteção líquida que cria uma camada dura e brilhante sobre a pintura do veículo. Proporciona proteção duradoura, brilho intenso e facilidade de manutenção por anos.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section style={{ backgroundColor: '#111', padding: '70px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '40px' }}>
            Por que fazer <span style={{ color: '#C9A84C' }}>Vitrificação?</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { titulo: 'Brilho intenso e duradouro', desc: 'A camada cerâmica proporciona brilho profundo que supera qualquer cera convencional.' },
              { titulo: 'Proteção química', desc: 'Resiste a produtos químicos, poluição, chuva ácida e outros contaminantes do dia a dia.' },
              { titulo: 'Fácil limpeza', desc: 'A superfície hidrofóbica repele água e sujeira, facilitando a manutenção do veículo.' },
              { titulo: 'Durabilidade', desc: 'Com aplicação profissional, a vitrificação protege a pintura por anos sem perder as propriedades.' },
            ].map((b, i) => (
              <div key={i} style={{ backgroundColor: '#0A0A0A', borderRadius: '8px', padding: '28px', border: '1px solid #1e1e1e' }}>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#C9A84C', marginBottom: '16px' }} />
                <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', color: '#fff', textTransform: 'uppercase', marginBottom: '10px' }}>{b.titulo}</p>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', color: '#777', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0A0A0A', padding: '60px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: '2rem', color: '#fff', textTransform: 'uppercase', marginBottom: '16px' }}>
            Solicite um <span style={{ color: '#C9A84C' }}>orçamento.</span>
          </h3>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', color: '#888', marginBottom: '32px', lineHeight: 1.7 }}>
            Fale com nossa equipe e descubra a melhor opção de vitrificação para o seu veículo.
          </p>
          <a href="https://wa.me/5581920008301" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#C9A84C', color: '#000', padding: '16px 48px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '16px', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
