import { useRef } from 'react'
import card1 from '../assets/image/carrosel insta/card1.png'
import card2 from '../assets/image/carrosel insta/card2.png'
import card3 from '../assets/image/carrosel insta/card3.png'
import card4 from '../assets/image/carrosel insta/card4.png'
import card5 from '../assets/image/carrosel insta/card5.png'
import card6 from '../assets/image/carrosel insta/card6.png'
import card7 from '../assets/image/carrosel insta/card7.png'
import card8 from '../assets/image/carrosel insta/card8.png'

const posts = [
  { href: 'https://www.instagram.com/nbselectpe/reel/DWXYgHsDvrv/', isReel: true,  img: card1 },
  { href: 'https://www.instagram.com/nbselectpe/reel/DWUfVH2ASxC/', isReel: true,  img: card2 },
  { href: 'https://www.instagram.com/nbselectpe/reel/DVm1Ep9Dmi0/', isReel: true,  img: card3 },
  { href: 'https://www.instagram.com/nbselectpe/reel/DTIQahBjt-g/', isReel: true,  img: card4 },
  { href: 'https://www.instagram.com/nbselectpe/p/DSQD6AwDtMW/',   isReel: false, img: card5 },
  { href: 'https://www.instagram.com/p/DU0i9OlDu3i/',              isReel: false, img: card6 },
  { href: 'https://www.instagram.com/nbselectpe/reel/DUQ0-XJDq02/', isReel: true, img: card7 },
  { href: 'https://www.instagram.com/p/DXH_mEyjZkF/',              isReel: false, img: card8 },
]

export default function Instagram() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 560 : -560, behavior: 'smooth' })
    }
  }

  return (
    <section style={{
      backgroundColor: '#0A0A0A',
      padding: '70px 0',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>

        {/* Título */}
        <div className="insta-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
          <div>
            <p style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '8px',
            }}>
              Nos siga
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: '#ffffff',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              margin: 0,
            }}>
              No <span style={{ color: '#C9A84C' }}>Instagram.</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/nbselectpe/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              textDecoration: 'none',
              border: '2px solid #C9A84C',
              padding: '10px 22px',
              borderRadius: '4px',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#C9A84C'
              e.currentTarget.style.color = '#000'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#C9A84C'
            }}
          >
            {/* Instagram icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @nbselectpe
          </a>
        </div>
      </div>

      {/* Carrossel horizontal */}
      <div style={{ position: 'relative' }}>
        {/* Botão esquerda */}
        <button
          onClick={() => scroll('left')}
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#C9A84C',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A84C' }}
          aria-label="Anterior"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
        </button>

        {/* Botão direita */}
        <button
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#C9A84C',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A84C' }}
          aria-label="Próximo"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </button>

        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '16px',
            padding: '0 48px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: 'grab',
          }}
          className="insta-scroll"
        >
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-card"
            style={{
              flex: '0 0 260px',
              height: '320px',
              borderRadius: '8px',
              overflow: 'hidden',
              scrollSnapAlign: 'start',
              position: 'relative',
              backgroundColor: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              border: '1px solid #222',
              transition: 'transform 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.borderColor = '#C9A84C'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.borderColor = '#222'
            }}
          >
            {/* Imagem de capa */}
            <img
              src={post.img}
              alt={`Post Instagram ${i + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Badge Reel */}
            {post.isReel && (
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                borderRadius: '4px',
                padding: '3px 8px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span style={{ color: '#fff', fontSize: '10px', fontFamily: 'Barlow, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}>
                  REEL
                </span>
              </div>
            )}

            {/* Hover overlay */}
            <div className="insta-overlay" style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(201,168,76,0.08)',
              opacity: 0,
              transition: 'opacity 0.2s',
            }} />
          </a>
        ))}
        </div>
      </div>

      <style>{`
        .insta-scroll::-webkit-scrollbar { display: none; }
        .insta-scroll a:hover .insta-overlay { opacity: 1 !important; }
        @media (max-width: 768px) {
          .insta-scroll { padding: 0 20px !important; }
          .insta-card { flex: 0 0 72vw !important; height: 260px !important; }
          .insta-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}
