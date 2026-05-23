import Header from '@/components/Header'
// import Hero from '@/components/Hero'
// import CTABanner from '@/components/CTABanner'
import Sobre from '@/components/Sobre'
import Clientes from '@/components/Clientes'
// import Areas from '@/components/Areas'
import Contato from '@/components/Contato'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Âncora para o link #hero do Header */}
        <div id="hero" />
        {/* <Hero /> */}
        {/* <CTABanner /> */}
        <Sobre />
        {/* <Areas /> */}
        <Clientes />
      </main>
      <Contato />
      <WhatsAppFloat />
    </>
  )
}
