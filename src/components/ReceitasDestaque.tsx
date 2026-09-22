import Link from "next/link";
import PlaceholderMidia from "./PlaceholderMidia";
import { receitas } from "./Receitas";

export default function ReceitasDestaque() {
  return (
    <section className="bg-baunilha py-20 lg:py-24">
      <div className="mx-auto max-w-mima px-6 text-center lg:px-10">
        <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
          além do cookie tradicional
        </p>
        <h2 className="mt-5 font-serif text-3xl text-azul text-balance sm:text-[2.5rem] sm:leading-tight">
          Mais formas de aproveitar a massa
        </h2>
      </div>

      {/* Trilho horizontal: os cartões seguem para fora da tela, como nas
          referências. As margens negativas deixam o scroll ir de ponta a ponta. */}
      <div className="mx-auto max-w-mima px-6 lg:px-10">
        <ul className="-mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:-mx-10 lg:px-10">
          {receitas.map((destaque) => (
            <li
              key={destaque.nome}
              className="w-72 shrink-0 snap-start sm:w-80"
            >
              <Link href="/receitas" className="group block">
                <PlaceholderMidia
                  rotulo={`foto · ${destaque.nome.toLowerCase()}`}
                  className="aspect-4/5"
                />
                <h3 className="mt-4 font-serif text-lg text-azul text-balance group-hover:underline">
                  {destaque.nome}
                </h3>
                <p className="mt-1 text-sm text-tinta-suave">
                  {destaque.resumo}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center">
          <Link
            href="/receitas"
            className="font-semibold text-azul underline underline-offset-4 hover:text-profundo"
          >
            Ver todas as receitas
          </Link>
        </p>
      </div>
    </section>
  );
}
