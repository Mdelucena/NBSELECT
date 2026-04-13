import ico01 from '../assets/image/carrossel marcas/ico-01.svg'
import ico02 from '../assets/image/carrossel marcas/ico-02.svg'
import ico05 from '../assets/image/carrossel marcas/ico-05.svg'
import ico06 from '../assets/image/carrossel marcas/ico-06.svg'
import ico07 from '../assets/image/carrossel marcas/ico-07.svg'
import ico08 from '../assets/image/carrossel marcas/ico-08.svg'
import ico14 from '../assets/image/carrossel marcas/ico-14.svg'
import icons100 from '../assets/image/carrossel marcas/icons100_Prancheta-1.svg'
import imgCeramic from '../assets/image/carrossel marcas/images-Photoroom.png'
import imgPoli from '../assets/image/carrossel marcas/imagespoli amor logo-Photoroom.png'

const svgs = [ico01, ico02, ico05, ico06, ico07, ico08, ico14, icons100]
const pngs = [imgCeramic, imgPoli]

// Intercala: svg, png, svg, png...
const logos = svgs.flatMap((svg, i) => [
  { src: svg,       alt: `Marca ${i + 1}` },
  { src: pngs[i % pngs.length], alt: i % 2 === 0 ? 'Ceramic Pro' : 'Glasurit' },
])

export default function Carrossel() {
  return (
    <section style={{
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid #e0e0e0',
      borderBottom: '1px solid #e0e0e0',
      padding: '32px 0',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'scroll-left 25s linear infinite',
      }}>
        {/* Duplicado para loop infinito */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 48px',
              flexShrink: 0,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                height: '44px',
                width: 'auto',
                maxWidth: '140px',
                objectFit: 'contain',
                opacity: 0.75,
                filter: 'grayscale(20%)',
                transition: 'opacity 0.3s, filter 0.3s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLImageElement
                el.style.opacity = '1'
                el.style.filter = 'grayscale(0%)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLImageElement
                el.style.opacity = '0.75'
                el.style.filter = 'grayscale(20%)'
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
