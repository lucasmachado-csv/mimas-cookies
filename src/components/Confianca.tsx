const pilares = [
  {
    titulo: "Farinha tratada termicamente",
    texto:
      "A farinha passa por tratamento térmico que elimina os microrganismos da farinha crua — a mesma técnica das marcas líderes americanas.",
  },
  {
    titulo: "Sem ovo cru na receita",
    texto:
      "Nossa fórmula não leva ovo cru. A cremosidade vem da manteiga e do ponto exato da massa — e o cookie assa perfeitamente do mesmo jeito.",
  },
  {
    titulo: "Produção e frio controlados",
    texto:
      "Cozinha própria com controle lote a lote, cadeia refrigerada da fábrica à gôndola e validade clara no pote.",
  },
];

export default function Confianca() {
  return (
    <section id="pode-comer-crua" className="bg-baunilha py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
            segurança sem letra miúda
          </p>
          <h2 className="mt-3 font-serif text-3xl text-azul text-balance sm:text-4xl">
            Crua? Pode. De verdade.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-tinta-suave">
            Massa de cookie comum não deve ser comida crua por dois motivos: ovo
            cru e farinha não tratada. A nossa resolve os dois — por projeto,
            não por sorte.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pilares.map((pilar) => (
            <article key={pilar.titulo} className="rounded-2xl bg-creme p-7">
              <h3 className="font-serif text-lg text-azul">{pilar.titulo}</h3>
              <p className="mt-3 text-sm text-tinta-suave">{pilar.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
