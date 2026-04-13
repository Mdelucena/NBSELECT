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
import Footer from './sections/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
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
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
