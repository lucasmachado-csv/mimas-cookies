import PlaceholderMidia from "./PlaceholderMidia";

const slots = [
  {
    rotulo: "reel · a porção crua",
    nota: "Close na porção saindo da embalagem.",
  },
  {
    rotulo: "reel · 12 minutos",
    nota: "Time-lapse do forno até o cookie quente.",
  },
  {
    rotulo: "reel · a mesa cheia",
    nota: "Gente esperando o forno, do jeito Mima's.",
  },
  {
    rotulo: "reel · a embalagem na geladeira",
    nota: "A Mima's entre as compras da semana.",
  },
  {
    rotulo: "reel · o primeiro mercado",
    nota: "O dia em que a Mima's chegou na gôndola.",
  },
];

export default function Social() {
  return (
    <section className="bg-baunilha py-20 lg:py-24">
      <div className="mx-auto max-w-mima px-6 text-center lg:px-10">
        <a
          href="https://instagram.com/mimascookies"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-sm tracking-[0.22em] text-caramelo hover:text-azul"
        >
          @mimascookies
        </a>
        <h2 className="mt-5 font-serif text-3xl text-azul text-balance sm:text-[2.5rem] sm:leading-tight">
          Melhor visto do que descrito
        </h2>
      </div>

      {/* Trilho de reels — formato vertical, arrastando na horizontal. */}
      <div className="mx-auto max-w-mima px-6 lg:px-10">
        <ul className="-mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:-mx-10 lg:px-10">
          {slots.map((slot) => (
            <li key={slot.rotulo} className="w-64 shrink-0 snap-start sm:w-72">
              <PlaceholderMidia
                rotulo={slot.rotulo}
                nota={slot.nota}
                className="aspect-9/16"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
