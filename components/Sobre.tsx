import Image from 'next/image'

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Missão',
    text: 'Entregar assessoria de alto valor agregado, acessível a médias empresas PME´s.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visão',
    text: 'Ser um hub de serviços estratégicos para médias empresas PME´s.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Propósito',
    text: 'Entregar valor ao seu negócio na medida certa, através de assistência ou assessoria qualificada, acessível e disponível para você usar como quiser.',
  },
]

const differentials = [
  {
    title: 'Foco no resultado mensurável',
    text: 'Toda ação de melhoria está atrelada a um ou mais KPIs do negócio, com objetivos e metas concretos.',
  },
  {
    title: 'Compartilhamento irrestrito de conhecimento',
    text: 'Compromisso em transmitir todo o conhecimento à empresa cliente.',
  },
  {
    title: 'Flexibilidade na atuação',
    text: 'A prestação dos serviços de assessoria é feita de forma presencial e/ou remota.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-display tracking-[0.3em] uppercase mb-3">Conheça</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            BB Gestão Empresarial
          </h2>
          <p className="text-lg text-gray-500 font-display tracking-wide">
            Fale com quem entende de gestão.
          </p>
        </div>

        {/* Quem somos */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative">
            <Image
              src="/quem-somos.jpg"
              alt="Equipe BB Gestão"
              width={600}
              height={400}
              className="rounded-lg w-full object-cover h-72 md:h-96"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-4 rounded shadow-lg">
              <p className="text-xs text-blue-200 uppercase tracking-widest">
                experiência e comprometimento
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl text-primary mb-4 uppercase tracking-wide">
              Quem Somos
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              A BB Gestão Empresarial atua na prestação de serviços de assessoria para empresas de médio porte de diferentes setores do mercado brasileiro.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Nosso propósito é desenvolver um projeto ou uma rotina permanente de eficiência que promova ganhos concretos para o negócio. Atuando em uma área específica da empresa ou de forma integral, reorganizamos processos, reorientamos pessoas e controlamos as ações necessárias ao atingimento do resultado esperado.
            </p>
          </div>
        </div>

        {/* Missão Visão Propósito */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-gray-50 rounded-xl p-8 text-center border-t-4 border-accent hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                {p.icon}
              </div>
              <h4 className="font-display font-bold text-xl text-primary mb-3 uppercase tracking-wide">
                {p.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Diferenciais + BPO */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display font-bold text-2xl text-primary mb-6 uppercase tracking-wide">
              Características da nossa atuação
            </h3>
            <div className="space-y-5">
              {differentials.map((d, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-display font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-1">{d.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-white">
            <h3 className="font-display font-bold text-2xl mb-4">BPO</h3>
            <p className="text-gold text-xs font-display tracking-[0.3em] uppercase mb-3">Business Process Outsourcing</p>
            <p className="text-blue-200 text-sm leading-relaxed">
              A BB Gestão Empresarial possui ainda um time especializado em Financeiro e Controladoria (BPO), apto a assumir os processos da empresa cliente, garantindo especialização na execução e permitindo foco da empresa cliente no seu <em>core business</em>.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white font-semibold text-sm">
                Executivos com extensa experiência em empresas de grande porte, capazes de atuar em áreas específicas ou de forma ampla no negócio do cliente, do tático ao estratégico.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
