import { redes } from "./redes";

export default function Marque() {
  return (
    <section className="bg-baunilha py-14 lg:py-16">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
          fez alguma?
        </p>
        <h2 className="mt-5 font-serif text-2xl text-azul text-balance sm:text-3xl">
          Mostra pra gente
        </h2>
        <p className="mt-4 text-tinta-suave">
          Se você testar alguma dessas receitas, tira uma foto e marca a gente
          — a gente quer ver o que você inventou.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {redes.map((rede) => (
            <li key={rede.nome}>
              <a
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border-2 border-azul px-7 py-3 font-bold text-azul transition-colors hover:bg-creme"
              >
                {rede.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
