const clients = [
  'Nutrimed',
  'FizPay',
  'Lumen Facilities',
  'E-paper',
  'Akva Segurança Eletrônica',
  'Hodin Serviços',
  'RLV Tecnologia',
  'Grupo Brasil Forte',
  'Espaço Belle Coiffeur',
]

export default function Clientes() {
  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-accent text-xs font-display tracking-[0.3em] uppercase mb-3">Parceiros</p>
          <h2 className="font-display font-bold text-4xl text-primary">
            Quem confia na <span className="text-gold">BB Gestão</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center h-20 bg-gray-50 rounded-xl border border-gray-100 hover:border-accent hover:bg-accent/5 transition-all group px-3"
            >
              <span className="text-gray-500 group-hover:text-accent font-display font-semibold text-sm text-center leading-tight transition-colors">
                {client}
              </span>
            </div>
          ))}
          {/* Empty placeholder to hint at more */}
          <div className="flex items-center justify-center h-20 bg-gray-50 rounded-xl border border-dashed border-gray-200 px-3">
            <span className="text-gray-300 font-display text-xs text-center">E muito mais...</span>
          </div>
        </div>

      </div>
    </section>
  )
}
