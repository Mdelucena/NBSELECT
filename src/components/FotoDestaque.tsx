import frenteLojaImg from '../assets/image/frenteloja.jpg'

export default function FotoDestaque() {
  return (
    <>
      <div className="foto-destaque-wrap" style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 10,
        marginTop: '-60px',
        marginBottom: '-180px',
        padding: '0 60px',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '860px',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
          border: '1px solid #2a2a2a',
          pointerEvents: 'all',
        }}>
          <img
            src={frenteLojaImg}
            alt="NBSelect — Frente da loja"
            style={{
              width: '100%',
              height: '420px',
              objectFit: 'cover',
              objectPosition: 'center 85%',
              display: 'block',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .foto-destaque-wrap {
            margin-top: -30px !important;
            margin-bottom: -80px !important;
            padding: 0 16px !important;
          }
          .foto-destaque-wrap img {
            height: 220px !important;
          }
        }
      `}</style>
    </>
  )
}
