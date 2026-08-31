const caminhos = [
  {
    ilustracao: "colher",
    titulo: "Para agora",
    texto:
      "Aquela vontade de doce que não pode esperar. Abra o pote, pegue uma colher, pronto. A melhor parte de fazer cookie sempre foi raspar a tigela — então fizemos uma massa que é só a melhor parte.",
  },
  {
    ilustracao: "forno",
    titulo: "Para daqui a 12 minutos",
    texto:
      "Cookie quentinho, casquinha dourada, miolo cremoso — sem balança, sem batedeira, sem pia cheia de louça. Só bolear, assar e fingir que deu trabalho.",
  },
];

export default function Missao() {
  return (
    <section id="nossa-historia" className="mx-auto max-w-mima px-6 lg:px-10 py-16 lg:py-20">
      <div className="text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
          por que a Mima&rsquo;s existe
        </p>
        <h2 className="mt-3 font-serif text-3xl text-azul text-balance sm:text-4xl">
          Dois desejos. Uma massa.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {caminhos.map((caminho) => (
          <article
            key={caminho.titulo}
            className="rounded-2xl border border-linha bg-white/60 p-8"
          >
            {/* Marcador de ilustração — encomendar no traço do logo */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-dashed border-azul/40 text-[0.55rem] font-bold uppercase tracking-wider text-azul/60">
              {caminho.ilustracao}
            </div>
            <h3 className="mt-5 font-serif text-xl text-azul">{caminho.titulo}</h3>
            <p className="mt-3 text-tinta-suave">{caminho.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
