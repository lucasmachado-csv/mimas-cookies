import Link from "next/link";
import PlaceholderMidia from "./PlaceholderMidia";

export default function NossaHistoria() {
  return (
    <section id="nossa-historia" className="py-20 lg:py-24">
      {/* Texto de um lado, retrato do outro — outra quebra do ritmo centralizado. */}
      <div className="mx-auto grid max-w-mima items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            a pessoa por trás da marca
          </p>
          <h2 className="mt-5 font-serif text-3xl text-azul text-balance sm:text-[2.5rem] sm:leading-tight">
            A jornada até a Mima&rsquo;s
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-tinta-suave">
            Meu nome é Carolina. Sou brasileira, mas cresci a vida inteira em
            Miami. Com a família vindo do Brasil pra me visitar o tempo todo,
            tinha sempre um pedido em comum: cookie dough. Crua ou assada,
            sempre voltavam atrás daquele sabor nostálgico que a gente conhece e
            ama aqui nos Estados Unidos. Com o tempo, comecei a me perguntar:
            por que cookie dough não existe no Brasil? E foi assim que a
            Mima&rsquo;s nasceu.
          </p>

          <Link
            href="/nossa-historia"
            className="mt-8 inline-block rounded-full border-2 border-azul px-7 py-3.5 font-bold text-azul transition-colors hover:bg-creme"
          >
            Ler a história completa
          </Link>
        </div>

        <PlaceholderMidia
          rotulo="retrato da Carolina"
          nota="A história é pessoal — a seção pede o rosto de quem conta."
          className="aspect-4/5"
        />
      </div>
    </section>
  );
}
