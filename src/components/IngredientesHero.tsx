import Image from "next/image";
import Link from "next/link";

export default function IngredientesHero() {
  return (
    <section className="mx-auto max-w-mima px-6 lg:px-10 pt-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-azul px-6 py-14 text-creme sm:px-12 lg:py-20">
        <Image
          src="/images/massa-tigela.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="(min-width: 1408px) 1328px, 100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-azul/88" />

        <nav aria-label="Trilha de navegação">
          <ol className="flex items-center gap-2 text-sm text-creme/70">
            <li>
              <Link href="/" className="underline hover:text-creme">
                Início
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="font-semibold text-creme">
              Ingredientes
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <h1 className="font-serif text-4xl text-balance sm:text-5xl">
            Nossos ingredientes
          </h1>
          <p className="mt-5 text-creme/85">
            A lista é curta e está toda aqui — inclusive as partes que a maioria
            das marcas prefere não explicar. Cada item tem um motivo, e nenhum
            está aí por acaso.
          </p>
        </div>
      </div>
    </section>
  );
}
