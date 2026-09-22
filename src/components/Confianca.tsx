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
      "Nossa receita leva ovo — pasteurizado antes de chegar à cozinha, num processo térmico que elimina o risco sem cozinhar o ovo.",
  },
  {
    titulo: "Produção e frio controlados",
    texto:
      "Cozinha própria com controle lote a lote, cadeia refrigerada da fábrica à gôndola e validade clara na embalagem.",
  },
];

export default function Confianca() {
  return (
    <section id="pode-comer-crua" className="py-20 lg:py-24">
      {/* Assimétrica de propósito: quebra a sequência de seções centralizadas. */}
      <div className="mx-auto grid max-w-mima items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10">
        <div>
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            sem nada escondido
          </p>
          <h2 className="mt-5 font-serif text-3xl text-azul text-balance sm:text-[2.5rem] sm:leading-tight">
            Feita para comer crua
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-tinta-suave">
            Massa de cookie comum não é segura crua por dois motivos: ovo cru e
            farinha não tratada. A gente resolveu os dois desde a receita,
            porque sabemos que segurança não é opcional quando é pra comer crua.
            Veja a{" "}
            <Link href="/ingredientes" className="underline hover:text-azul">
              lista completa de ingredientes
            </Link>
            .
          </p>
        </div>

        <div className="space-y-px overflow-hidden rounded-2xl border border-linha">
          {pilares.map((pilar) => (
            <article
              key={pilar.titulo}
              className="border-b border-linha bg-white/60 p-7 last:border-0"
            >
              <h3 className="font-serif text-xl text-azul text-balance">
                {pilar.titulo}
              </h3>
              <p className="mt-2 text-tinta-suave">{pilar.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
