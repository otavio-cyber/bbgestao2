export default function CTABanner() {
  return (
    <section className="bg-accent py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white font-display text-lg md:text-xl font-semibold text-center md:text-left leading-snug">
          <span className="text-yellow-200 uppercase tracking-wide">Agora, se deseja:</span>
          <br />
          resolver um conflito societário ou reestruturar e recuperar o seu negócio.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScKZiY2FBtdh6RyGSvetVJVktWobtSIdVBJpi0eFVtQJCmtJg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-7 py-4 bg-gray-900 text-white font-display font-bold text-sm tracking-wider uppercase rounded hover:bg-black transition-colors whitespace-nowrap"
        >
          Clique e fale agora com a gente
        </a>
      </div>
    </section>
  )
}
