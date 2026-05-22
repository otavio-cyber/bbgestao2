const offices = [
  {
    city: 'Rio de Janeiro / RJ',
    address: 'R. Almirante Baltazar, 333 – São Cristóvão, Rio de Janeiro – RJ, CEP 20941-150',
    phone: '21 96913-1553',
    tel: '21969131553',
  },
  {
    city: 'Belo Horizonte / MG',
    address: 'Rua São Paulo, 1106 – Sala 1406 – Centro – Belo Horizonte – MG',
    phone: '31 99902-3222',
    tel: '31999023222',
  },
]

export default function Contato() {
  return (
    <footer id="contato" className="bg-gray-900 text-white">

      {/* Contact ribbon */}
      <div className="bg-accent px-6 py-3 text-center">
        <span className="font-display font-semibold text-sm tracking-widest uppercase text-white">
          Entre em contato
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <h4 className="font-display font-bold text-xl mb-4 text-white">BB GESTÃO</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Uma equipe multidisciplinar composta por profissionais experientes e apaixonados por transformar empresas. Acreditamos que cada jornada empresarial é única.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScKZiY2FBtdh6RyGSvetVJVktWobtSIdVBJpi0eFVtQJCmtJg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gold text-white font-display font-bold text-xs tracking-wider uppercase rounded hover:bg-yellow-600 transition-colors"
            >
              Fale Conosco
            </a>
          </div>

          {/* Offices */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div key={office.city}>
                <h5 className="font-display font-bold text-sm uppercase tracking-widest text-gold mb-4">
                  Escritório {office.city}
                </h5>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p>{office.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                    </svg>
                    <a href={`tel:${office.tel}`} className="hover:text-white transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a href="mailto:contato@bbgestao.com.br" className="hover:text-white transition-colors">
                      contato@bbgestao.com.br
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 BB Gestão Empresarial. Todos os direitos reservados.</p>
          <p>
            <a href="mailto:contato@bbgestao.com.br" className="hover:text-gray-300 transition-colors">
              contato@bbgestao.com.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
