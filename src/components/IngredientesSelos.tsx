const selos = [
  {
    rotulo: "Ovo pasteurizado",
    legenda: "Ovo de verdade, sem o risco do ovo cru.",
  },
  {
    rotulo: "Farinha tratada termicamente",
    legenda: "O outro lado do problema, resolvido antes da receita.",
  },
];

export default function IngredientesSelos() {
  return (
    <section className="mx-auto max-w-mima px-6 lg:px-10 py-14 lg:py-16">
      <p className="text-center text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
        as duas coisas que fazem a diferença
      </p>

      <ul className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-10">
        {selos.map((selo) => (
          <li key={selo.rotulo} className="w-56 text-center">
            <div className="mx-auto flex size-40 items-center justify-center rounded-full bg-azul px-6 text-sm font-extrabold uppercase leading-tight tracking-wide text-creme">
              {selo.rotulo}
            </div>
            <p className="mt-4 text-sm text-tinta-suave">{selo.legenda}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
