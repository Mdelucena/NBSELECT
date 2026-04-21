import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function PaginaPPF() {
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
            <span style={{ color: '#C9A84C', fontFamily: 'Barlow, sans-serif', fontSize: '13px' }}>PPF</span>
          </div>

          <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>
            Serviço
          </p>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '20px' }}>
            Paint Protection <span style={{ color: '#C9A84C' }}>Film.</span>
          </h1>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#aaa', maxWidth: '620px', lineHeight: 1.7 }}>
            O PPF (Paint Protection Film) é a proteção definitiva para a pintura do seu veículo — uma película de alta performance que protege contra riscos, impactos, chuva ácida e raios UV, preservando o valor e a beleza do carro por anos.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section style={{ backgroundColor: '#111', padding: '70px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '40px' }}>
            Por que fazer <span style={{ color: '#C9A84C' }}>PPF?</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { titulo: 'Proteção contra arranhões', desc: 'A película autorreparável resiste a riscos leves e pequenos impactos do dia a dia.' },
              { titulo: 'Proteção UV e chuva ácida', desc: 'Bloqueia raios ultravioleta e impede a corrosão causada por chuva ácida e produtos químicos.' },
              { titulo: 'Preserva o valor do carro', desc: 'Mantém a pintura original em perfeito estado, valorizando o veículo na hora da revenda.' },
              { titulo: 'Acabamento imperceptível', desc: 'Película ultrafina e transparente que não altera a aparência original do veículo.' },
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
            Fale com nossa equipe e descubra a melhor opção de PPF para o seu veículo.
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
