import Image from "next/image";

const selos = [
  "Gotas de chocolate de verdade",
  "Zero lactose",
  "Ovo pasteurizado",
  "Rende 12 cookies — ou nenhum",
];

export default function Produto() {
  return (
    <section id="a-massa" className="bg-azul py-16 text-creme lg:py-24">
      <div className="mx-auto max-w-mima px-6 lg:px-10 text-center">
        <p className="font-serif text-sm tracking-[0.3em] text-[#e0b27e]">
          nosso primeiro sabor
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl text-balance sm:text-4xl">
          Chocolate chip clássica, do jeito que tinha que ser
        </h2>

        <div className="relative mx-auto mt-10 aspect-4/5 max-w-sm overflow-hidden rounded-3xl">
          {/* Substituir pelo packshot do pote quando o produto for fotografado */}
          <Image
            src="/images/cookie-partido.jpg"
            alt="Cookie de chocolate partido ao meio com chocolate derretido escorrendo"
            fill
            sizes="(min-width: 640px) 24rem, 100vw"
            className="object-cover"
          />
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {selos.map((selo) => (
            <li
              key={selo}
              className="rounded-full border border-creme/50 px-5 py-2 text-sm font-bold"
            >
              {selo}
            </li>
          ))}
        </ul>

        <a
          href="#como-usar"
          className="mt-10 inline-block rounded-full bg-creme px-7 py-3.5 font-bold text-azul transition-colors hover:bg-baunilha"
        >
          Veja como usar
        </a>
      </div>
    </section>
  );
}
