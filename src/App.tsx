import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Destaque from './sections/Destaque'
import Historia from './sections/Historia'
import FotoDestaque from './components/FotoDestaque'
import Servicos from './sections/Servicos'
import Carrossel from './sections/Carrossel'
import Valores from './sections/Valores'
import Depoimentos from './sections/Depoimentos'
import Instagram from './sections/Instagram'
import Footer from './sections/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PaginaLavagens from './pages/PaginaLavagens'
import PaginaPPF from './pages/PaginaPPF'
import PaginaVitrificacao from './pages/PaginaVitrificacao'

function Home() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <TopBar />
      <Navbar />
      <Hero />
      <Destaque />
      <Historia />
      <FotoDestaque />
      <Servicos />
      <Carrossel />
      <Valores />
      <Depoimentos />
      <Instagram />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lavagens" element={<PaginaLavagens />} />
      <Route path="/ppf" element={<PaginaPPF />} />
      <Route path="/vitrificacao" element={<PaginaVitrificacao />} />
    </Routes>
  )
}
