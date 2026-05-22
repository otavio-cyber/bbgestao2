const areas = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
      </svg>
    ),
    title: 'Finanças',
    text: 'A finança empresarial envolve a gestão de recursos financeiros, incluindo captação, investimento e controle de despesas. O objetivo é maximizar lucros e garantir a sustentabilidade do negócio a longo prazo.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Recursos Humanos',
    text: 'O RH é responsável pela gestão de pessoas em uma empresa. Suas funções incluem recrutamento, treinamento, desenvolvimento e bem-estar dos colaboradores, promovendo um ambiente saudável e produtivo.',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Operações',
    text: 'O setor operacional lida com o fazer da empresa. Isso inclui diversas atividades de acordo com o tipo de negócio — produção, logística, gestão de recursos materiais e vendas.',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Comercial',
    text: 'A assessoria comercial ajuda empresas a otimizar suas vendas e estratégias de mercado. Oferece análises de desempenho, identificação de oportunidades e treinamento, visando aumentar a competitividade e a receita.',
    color: 'from-amber-500 to-amber-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Suprimentos',
    text: 'Suprimentos de empresas envolvem a gestão de aquisição e estoque de materiais e serviços. Uma boa administração garante eficiência, reduz custos e mantém a produção fluida, impactando diretamente nos resultados.',
    color: 'from-orange-500 to-orange-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 4.971z" />
      </svg>
    ),
    title: 'Jurídico',
    text: 'A assessoria jurídica oferece suporte legal a empresas e indivíduos, orientando em contratos, litígios e compliance. Seu papel é garantir segurança jurídica e mitigar riscos, promovendo decisões informadas.',
    color: 'from-slate-500 to-slate-700',
  },
]

export default function Areas() {
  return (
    <section id="areas" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-accent text-xs font-display tracking-[0.3em] uppercase mb-3">Como atuamos</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Áreas de <strong className="text-gold">Atuação</strong>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Atuando em uma área específica ou de forma integral, reorganizamos processos, reorientamos pessoas e controlamos as ações necessárias ao atingimento do resultado esperado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} text-white mb-5 shadow-sm`}
              >
                {area.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
