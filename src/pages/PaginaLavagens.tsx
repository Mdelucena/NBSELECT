import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import lavagemdVideo from '../assets/image/lavagem.mp4'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

// ─── Tipos de Lavagem ────────────────────────────────────────────────────────
const lavagens = [
  {
    emoji: '🧼',
    nome: 'Lavagem Diamante',
    descricao: 'Ideal para quem busca uma limpeza completa com acabamento superior no dia a dia.',
    items: [
      'Pré-lavagem (remoção de sujeiras mais pesadas)',
      'Lavagem com shampoo neutro',
      'Condicionamento de plásticos internos e externos',
      'Aplicação de selante nos pneus',
      'Enceramento premium',
      'Brindes especiais',
    ],
    detalhe: 'Entrega brilho, proteção leve e acabamento diferenciado.',
    cor: '#C9A84C',
  },
  {
    emoji: '✨',
    nome: 'Lavagem Detalhada',
    descricao: 'Um nível acima da convencional, focada em limpeza mais profunda e cuidado nos detalhes.',
    items: [
      'Descontaminação da pintura',
      'Selante na pintura',
      'Condicionamento de plásticos internos e externos',
      'Limpeza com bactericida',
      'Aspiração detalhada',
      'Selante nos pneus',
    ],
    detalhe: 'Ideal para quem quer mais cuidado e proteção no dia a dia.',
    cor: '#C9A84C',
  },
  {
    emoji: '🔬',
    nome: 'Lavagem Técnica',
    descricao: 'Processo mais avançado, com foco em limpeza profunda e maior durabilidade do acabamento.',
    items: [
      'Descontaminação da pintura',
      'Condicionamento de plásticos internos e externos',
      'Limpeza com bactericida',
      'Aspiração detalhada',
      'Selante nos pneus',
      'Enceramento com politriz',
    ],
    detalhe: 'Proporciona brilho superior e acabamento mais duradouro.',
    cor: '#C9A84C',
  },
  {
    emoji: '💎',
    nome: 'Lavagem Premium',
    descricao: 'O mais alto nível dentro das lavagens, com foco em revitalização completa do veículo.',
    items: [
      'Lavagem técnica detalhada',
      'Lavagem técnica de motor',
      'Remoção de chuva ácida',
      'Cristalização do para-brisa',
      'Enceramento com politriz',
    ],
    detalhe: 'Ideal para quem busca máxima qualidade e aparência de carro novo.',
    cor: '#C9A84C',
  },
]

// ─── Planos Clube ─────────────────────────────────────────────────────────────
const planos = [
  {
    tag: 'PLANO TRADICIONAL',
    lavagens: '02 LAVAGENS/MÊS',
    destaque: false,
    precos: { P: 'R$ 99,90', M: 'R$ 119,90', G: 'R$ 139,90' },
    items: [
      '02 lavagens por mês',
      'Lavagem + Aspiração',
      'Limpeza interna',
      'Condic. de plásticos ext.',
      'Condicionador de pneus',
      'Agendamento com 48h',
    ],
  },
  {
    tag: 'MAIS ESCOLHIDO',
    lavagens: '04 LAVAGENS/MÊS',
    destaque: true,
    precos: { P: 'R$ 189,90', M: 'R$ 209,90', G: 'R$ 229,90' },
    items: [
      '04 lavagens por mês',
      'Lavagem + Aspiração',
      'Limpeza interna',
      'Condic. de plásticos ext.',
      'Condicionador de pneus',
      'Agendamento com 48h',
    ],
  },
  {
    tag: 'PLANO PREMIUM',
    lavagens: '06 LAVAGENS/MÊS',
    destaque: false,
    precos: { P: 'R$ 249,90', M: 'R$ 269,90', G: 'R$ 289,90' },
    items: [
      '06 lavagens por mês',
      'Lavagem + Aspiração',
      'Limpeza interna',
      'Condic. de plásticos ext.',
      'Condicionador de pneus',
      'Agendamento com 24h',
    ],
  },
  {
    tag: 'PLANO NB',
    lavagens: 'ILIMITADO',
    destaque: false,
    recomendado: true,
    precos: { P: 'R$ 349,90', M: 'R$ 369,90', G: 'R$ 389,90' },
    items: [
      'Lavagens ILIMITADAS',
      'Lavagem + Aspiração',
      'Limpeza interna',
      'Condic. de plásticos ext.',
      'Condicionador de pneus',
      'Agendamento no mesmo dia',
      'Sorteio mensal de serv. estéticos',
      'Brindes na recorrência +3 meses',
      '20% OFF demais serviços estéticos',
    ],
  },
]

type Tamanho = 'P' | 'M' | 'G'

export default function PaginaLavagens() {
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [tamanho, setTamanho] = useState<Tamanho>('M')
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' })
  }

  const planScrollRef = useRef<HTMLDivElement>(null)
  const scrollPlan = (dir: 'left' | 'right') => {
    planScrollRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <TopBar />
      <Navbar />

      <section className="lav-hero-section" style={{
        backgroundColor: '#0A0A0A',
        padding: '64px 48px 56px',
        borderBottom: '1px solid #1f1f1f',
      }}>
        <div className="lav-hero-inner" style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '64px', flexWrap: 'wrap' }}>
          {/* Texto */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <button
                onClick={() => navigate('/')}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#888', fontFamily: 'Barlow, sans-serif', fontSize: '13px',
                  letterSpacing: '0.05em', padding: 0,
                }}
              >
                Início
              </button>
              <span style={{ color: '#444', fontSize: '13px' }}>›</span>
              <span style={{ color: '#C9A84C', fontFamily: 'Barlow, sans-serif', fontSize: '13px', letterSpacing: '0.05em' }}>
                Lavagens
              </span>
            </div>

            <p style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700, fontSize: '13px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#C9A84C', marginBottom: '12px',
            }}>
              Serviço
            </p>
            <h1 style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              color: '#ffffff',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}>
              Lavagens <span style={{ color: '#C9A84C' }}>Padrão NB Select.</span>
            </h1>
            <p style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '16px',
              color: '#aaa',
              maxWidth: '620px',
              lineHeight: 1.7,
            }}>
              Nossas lavagens seguem um padrão técnico, utilizando produtos de grandes marcas, garantindo segurança, qualidade e acabamento superior em cada detalhe.
            </p>
          </div>

          {/* Vídeo */}
          <div className="lav-hero-video" style={{ flex: '0 0 580px', height: '260px', overflow: 'hidden', borderRadius: '10px', position: 'relative' }}>
            <video
              ref={videoRef}
              src={lavagemdVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
              }}
            />
            {/* Controles */}
            <div style={{ position: 'absolute', bottom: '12px', right: '12px', display: 'flex', gap: '8px' }}>
              <button
                onClick={toggleMute}
                title={muted ? 'Ativar som' : 'Desativar som'}
                style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {muted
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                }
              </button>
              <button
                onClick={togglePlay}
                title={playing ? 'Pausar' : 'Play'}
                style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {playing
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
                }
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carrossel de Lavagens ── */}
      <section className="lav-secao" style={{ backgroundColor: '#f5f5f5', padding: '70px 0 80px' }}>
        <div className="lav-titulo" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px', marginBottom: '36px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            color: '#111',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            Nossos <span style={{ color: '#C9A84C' }}>serviços.</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Seta esquerda */}
          <button onClick={() => scroll('left')} aria-label="Anterior" className="lav-arrow-left" style={{
            position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, backgroundColor: '#C9A84C', border: 'none', borderRadius: '50%',
            width: '44px', height: '44px', display: 'none', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
          </button>
          {/* Seta direita */}
          <button onClick={() => scroll('right')} aria-label="Próximo" className="lav-arrow-right" style={{
            position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, backgroundColor: '#C9A84C', border: 'none', borderRadius: '50%',
            width: '44px', height: '44px', display: 'none', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </button>

          <div
            ref={scrollRef}
            className="lav-scroll"
            style={{
              display: 'flex', gap: '24px',
              padding: '8px 64px 24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              justifyContent: 'center',
            }}
          >
            {lavagens.map((lav, i) => (
              <div key={i} className="lav-card" style={{
                flex: '0 0 340px',
                scrollSnapAlign: 'start',
                backgroundColor: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Foto placeholder */}
                <div style={{
                  width: '100%', height: '220px',
                  backgroundColor: '#1a1a1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', marginBottom: '8px' }}>{lav.emoji}</div>
                    <span style={{
                      fontFamily: 'Barlow, sans-serif', fontSize: '11px',
                      letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase',
                    }}>
                      foto em breve
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 800, fontSize: '22px',
                    color: '#111', textTransform: 'uppercase',
                    marginBottom: '10px', lineHeight: 1.2,
                  }}>
                    {lav.nome}
                  </h3>
                  <p style={{
                    fontFamily: 'Barlow, sans-serif', fontSize: '14px',
                    color: '#666', lineHeight: 1.6, marginBottom: '20px',
                  }}>
                    {lav.descricao}
                  </p>

                  {/* Lista */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flex: 1 }}>
                    {lav.items.map((item, j) => (
                      <li key={j} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '8px',
                        fontFamily: 'Barlow, sans-serif', fontSize: '13px',
                        color: '#444', lineHeight: 1.5, marginBottom: '6px',
                      }}>
                        <span style={{ color: '#C9A84C', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Destaque final */}
                  <div style={{
                    borderTop: '1px solid #eee', paddingTop: '16px',
                    fontFamily: 'Barlow, sans-serif', fontSize: '13px',
                    color: '#C9A84C', fontWeight: 600, fontStyle: 'italic',
                  }}>
                    👉 {lav.detalhe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clube de Lavagem ── */}
      <section className="lav-clube" style={{ backgroundColor: '#0A0A0A', padding: '80px 48px 90px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Cabeçalho */}
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <p style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#C9A84C', marginBottom: '10px',
            }}>
              ★★ SELECT
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '16px',
            }}>
              Clube de <span style={{ color: '#C9A84C' }}>Lavagem.</span>
            </h2>
            <p style={{
              fontFamily: 'Barlow, sans-serif', fontSize: '15px', color: '#888',
              maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.7,
            }}>
              Seu carro sempre impecável, com cuidado premium e sem pesar no bolso.
            </p>
          </div>

          {/* Benefícios */}
          <div className="lav-beneficios" style={{
            display: 'flex', flexWrap: 'wrap', gap: '12px',
            justifyContent: 'center', marginBottom: '52px',
          }}>
            {[
              'Mantém o carro sempre limpo',
              'Prioriza seu atendimento',
              'Protege o veículo ao longo do tempo',
              'Acesso a benefícios exclusivos',
            ].map((b, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#141414', borderRadius: '6px',
                padding: '10px 18px', border: '1px solid #2a2a2a',
              }}>
                <span style={{ color: '#C9A84C', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', color: '#ccc' }}>{b}</span>
              </div>
            ))}
          </div>

          {/* Seletor de tamanho */}
          <div className="lav-tamanho" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '44px' }}>
            <span style={{ fontFamily: 'Barlow, sans-serif', color: '#888', fontSize: '14px', alignSelf: 'center', marginRight: '8px' }}>
              Tamanho do veículo:
            </span>
            {(['P', 'M', 'G'] as Tamanho[]).map(t => (
              <button
                key={t}
                onClick={() => setTamanho(t)}
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 700, fontSize: '18px',
                  width: '48px', height: '48px',
                  borderRadius: '8px',
                  border: tamanho === t ? '2px solid #C9A84C' : '2px solid #333',
                  backgroundColor: tamanho === t ? '#C9A84C' : 'transparent',
                  color: tamanho === t ? '#000' : '#888',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Grid de planos */}
          <div className="lav-planos-wrap" style={{ position: 'relative' }}>
            {/* Seta esquerda planos */}
            <button onClick={() => scrollPlan('left')} aria-label="Anterior" className="lav-plan-arrow-left" style={{
              display: 'none', position: 'absolute', left: '4px', top: '50%', transform: 'translateY(-50%)',
              zIndex: 10, backgroundColor: '#C9A84C', border: 'none', borderRadius: '50%',
              width: '36px', height: '36px', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#000"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
            </button>
            {/* Seta direita planos */}
            <button onClick={() => scrollPlan('right')} aria-label="Próximo" className="lav-plan-arrow-right" style={{
              display: 'none', position: 'absolute', right: '4px', top: '50%', transform: 'translateY(-50%)',
              zIndex: 10, backgroundColor: '#C9A84C', border: 'none', borderRadius: '50%',
              width: '36px', height: '36px', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#000"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
            </button>

          <div ref={planScrollRef} className="lav-planos" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {planos.map((plano, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: plano.destaque ? '#C9A84C' : '#111',
                  borderRadius: '12px',
                  padding: '32px 28px 36px',
                  display: 'flex', flexDirection: 'column',
                  border: plano.recomendado ? '2px solid #C9A84C' : '2px solid transparent',
                  position: 'relative',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)' }}
              >
                {/* Badge */}
                {(plano.destaque || plano.recomendado) && (
                  <div style={{
                    position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: plano.destaque ? '#000' : '#C9A84C',
                    color: plano.destaque ? '#C9A84C' : '#000',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em',
                    padding: '4px 16px', borderRadius: '20px', whiteSpace: 'nowrap',
                  }}>
                    {plano.destaque ? '⭐ MAIS ESCOLHIDO' : '⚡ RECOMENDADO'}
                  </div>
                )}

                <p style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                  fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: plano.destaque ? '#000' : '#C9A84C', marginBottom: '6px',
                }}>
                  {plano.tag}
                </p>
                <p style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                  fontSize: '20px', textTransform: 'uppercase',
                  color: plano.destaque ? '#000' : '#fff', marginBottom: '24px',
                }}>
                  {plano.lavagens}
                </p>

                {/* Preço */}
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900,
                  fontSize: '42px', lineHeight: 1, marginBottom: '8px',
                  color: plano.destaque ? '#000' : '#C9A84C',
                }}>
                  {plano.precos[tamanho]}
                </div>
                <p style={{
                  fontFamily: 'Barlow, sans-serif', fontSize: '12px',
                  color: plano.destaque ? '#3a2a00' : '#666', marginBottom: '24px',
                }}>
                  /mês · tamanho {tamanho}
                </p>

                {/* Divisor */}
                <div style={{ height: '1px', backgroundColor: plano.destaque ? 'rgba(0,0,0,0.15)' : '#222', marginBottom: '20px' }} />

                {/* Items */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', flex: 1 }}>
                  {plano.items.map((item, j) => (
                    <li key={j} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '8px',
                      fontFamily: 'Barlow, sans-serif', fontSize: '13px',
                      color: plano.destaque ? '#1a1000' : '#bbb',
                      lineHeight: 1.5, marginBottom: '8px',
                    }}>
                      <span style={{ color: plano.destaque ? '#000' : '#C9A84C', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/5581920008301"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block', textAlign: 'center',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700, fontSize: '15px',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    textDecoration: 'none',
                    padding: '14px',
                    borderRadius: '6px',
                    backgroundColor: plano.destaque ? '#000' : '#C9A84C',
                    color: plano.destaque ? '#C9A84C' : '#000',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  Assinar agora
                </a>
              </div>
            ))}
          </div>
          </div>

          {/* Rodapé da seção */}
          <p style={{
            textAlign: 'center', marginTop: '32px',
            fontFamily: 'Barlow, sans-serif', fontSize: '13px', color: '#555',
          }}>
            Todas as lavagens são realizadas mediante agendamento · Produtos de grandes marcas · Qualidade e segurança garantidas
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <style>{`
        .lav-scroll::-webkit-scrollbar { display: none; }

        /* 4 cards a partir de 1400px — centralizados */

        /* Entre 1024px e 1399px: cards menores, centralizados, sem setas */
        @media (min-width: 1024px) and (max-width: 1399px) {
          .lav-scroll { justify-content: center !important; padding: 8px 32px 24px !important; }
          .lav-card { flex: 0 0 260px !important; }
        }

        /* Entre 900px e 1023px: centralizado, sem setas */
        @media (min-width: 900px) and (max-width: 1023px) {
          .lav-scroll { justify-content: center !important; padding: 8px 24px 24px !important; }
          .lav-card { flex: 0 0 240px !important; }
        }

        @media (max-width: 768px) {
          /* Hero */
          .lav-hero-section { padding: 32px 20px 36px !important; }
          .lav-hero-inner { gap: 28px !important; flex-direction: column !important; }
          .lav-hero-video { flex: none !important; width: 100% !important; height: 220px !important; }

          /* Carrossel de lavagens */
          .lav-secao { padding: 40px 0 48px !important; }
          .lav-titulo { padding: 0 20px !important; margin-bottom: 20px !important; }
          .lav-arrow-left { left: 4px !important; width: 36px !important; height: 36px !important; display: flex !important; }
          .lav-arrow-right { right: 4px !important; width: 36px !important; height: 36px !important; display: flex !important; }
          .lav-scroll { padding: 8px 10vw 20px !important; gap: 16px !important; justify-content: flex-start !important; scroll-padding-left: 10vw !important; }
          .lav-card { flex: 0 0 80vw !important; scroll-snap-align: center !important; }

          /* Clube de lavagem */
          .lav-clube { padding: 56px 20px 64px !important; }
          .lav-beneficios { gap: 8px !important; }
          .lav-beneficios > div { flex: 1 1 calc(50% - 8px) !important; justify-content: center !important; }
          .lav-tamanho { flex-wrap: wrap !important; justify-content: center !important; gap: 8px !important; }
          .lav-plan-arrow-left { display: flex !important; }
          .lav-plan-arrow-right { display: flex !important; }
          .lav-planos {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            scrollbar-width: none !important;
            gap: 16px !important;
            padding: 16px 16px 20px 16px !important;
            scroll-padding-left: 16px !important;
          }
          .lav-planos > div {
            flex: 0 0 80vw !important;
            scroll-snap-align: center !important;
          }
          .lav-planos::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </div>
  )
}
