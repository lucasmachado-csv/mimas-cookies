import Image from "next/image";
import Link from "next/link";

const selos = [
  "Gotas de chocolate de verdade",
  "Farinha tratada termicamente",
  "Ovo pasteurizado",
  "12 porções — asse uma ou todas",
];

export default function Produto() {
  return (
    <section id="a-massa" className="bg-azul py-20 text-creme lg:py-24">
      <div className="mx-auto max-w-mima px-6 lg:px-10 text-center">
        <p className="font-serif text-sm tracking-[0.22em] text-[#e0b27e]">
          nosso primeiro sabor
        </p>
        <h2 className="mt-5 font-serif text-3xl text-balance sm:text-[2.5rem] sm:leading-tight">
          O Original
        </h2>
        <p className="mt-3 font-serif text-xl text-creme/85 sm:text-2xl">
          Gotas de Chocolate
        </p>
        <p className="mt-4">
          <Link
            href="/ingredientes"
            className="text-sm font-semibold text-creme/80 underline underline-offset-4 transition-colors hover:text-creme"
          >
            Ver os ingredientes
          </Link>
        </p>

        <div className="relative mx-auto mt-10 aspect-4/5 max-w-sm overflow-hidden rounded-3xl">
          {/* Substituir pelo packshot da embalagem quando o produto for fotografado */}
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
