import Link from "next/link";

export default function NossaHistoria() {
  return (
    <section id="nossa-historia" className="bg-baunilha py-16 lg:py-20">
      <div className="mx-auto max-w-mima px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
            quem faz a Mima&rsquo;s
          </p>
          <h2 className="mt-3 font-serif text-3xl text-azul text-balance sm:text-4xl">
            De onde veio a Mima&rsquo;s
          </h2>
          <p className="mt-5 text-tinta-suave">
            Sou a Carolina — brasileira, moro em Miami, e minha família toda
            mora no Brasil. Toda vez que eles vêm me visitar, o pedido é o
            mesmo: massa de cookie. Crua enquanto o forno esquenta, assada logo
            depois. Um dia a pergunta ficou óbvia demais para ignorar: por que
            isso não existe no Brasil?
          </p>

          <Link
            href="/nossa-historia"
            className="mt-8 inline-block rounded-full border-2 border-azul px-7 py-3.5 font-bold text-azul transition-colors hover:bg-creme"
          >
            Ler a história completa
          </Link>
        </div>
      </div>
    </section>
  );
}
