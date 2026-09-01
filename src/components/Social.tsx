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
];

export default function Social() {
  return (
    <section className="mx-auto max-w-mima px-6 lg:px-10 py-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
          @mimascookies
        </p>
        <h2 className="mt-3 font-serif text-3xl text-azul text-balance sm:text-4xl">
          A massa fica melhor em vídeo
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {slots.map((slot) => (
          <PlaceholderMidia
            key={slot.rotulo}
            rotulo={slot.rotulo}
            nota={slot.nota}
            className="aspect-9/16"
          />
        ))}
      </div>
    </section>
  );
}
