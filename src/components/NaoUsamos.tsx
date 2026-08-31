import Link from "next/link";

const ausencias = [
  {
    titulo: "Ovo cru",
    texto: "O nosso é pasteurizado. Nunca cru, em nenhum lote.",
  },
  {
    titulo: "Farinha crua",
    texto: "Tratada termicamente, sempre.",
  },
  {
    titulo: "Manteiga",
    texto: "A gordura é cem por cento vegetal.",
  },
  {
    titulo: "Corantes",
    texto: "A cor vem do mascavo e do melado.",
  },
];

export default function NaoUsamos() {
  return (
    <section className="bg-baunilha py-16 lg:py-20">
      <div className="mx-auto max-w-mima px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
            tão importante quanto a lista
          </p>
          <h2 className="mt-3 font-serif text-3xl text-azul text-balance sm:text-4xl">
            O que não vai no pote
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ausencias.map((item) => (
            <article key={item.titulo} className="rounded-2xl bg-creme p-6">
              <h3 className="font-serif text-lg text-azul">{item.titulo}</h3>
              <p className="mt-2 text-sm text-tinta-suave">{item.texto}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#pode-comer-crua"
            className="inline-block rounded-full bg-azul px-7 py-3.5 font-bold text-creme transition-colors hover:bg-profundo"
          >
            Entenda por que pode comer crua
          </Link>
        </div>
      </div>
    </section>
  );
}
