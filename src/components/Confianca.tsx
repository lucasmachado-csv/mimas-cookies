import Link from "next/link";

const pilares = [
  {
    titulo: "Farinha tratada termicamente",
    texto:
      "A farinha passa por tratamento térmico que elimina os microrganismos da farinha crua — a mesma técnica das marcas líderes americanas.",
  },
  {
    titulo: "Ovo pasteurizado, nunca cru",
    texto:
      "Nossa receita leva ovo — pasteurizado antes de chegar à cozinha, num processo térmico que elimina o risco sem cozinhar o ovo. A cremosidade vem da gordura vegetal e do ponto exato da massa.",
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
      <div className="mx-auto max-w-mima px-6 lg:px-10">
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
            não por sorte. Veja a{" "}
            <Link href="/ingredientes" className="underline hover:text-azul">
              lista completa de ingredientes
            </Link>
            .
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
