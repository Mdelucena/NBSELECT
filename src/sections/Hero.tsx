import shopImage from '../assets/image/background.jpeg'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        width: '100%',
        height: 'calc(100vh - 116px)',
        minHeight: '480px',
        overflow: 'hidden',
        display: 'block',
        position: 'relative',
      }}
    >
      <img
        src={shopImage}
        alt="NBSelect Estética Automotiva"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          display: 'block',
        }}
      />

      {/* overlay suave só pra não perder o contraste */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 100%)',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
