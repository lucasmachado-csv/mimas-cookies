import Image from "next/image";
import Link from "next/link";

type Props = {
  titulo: string;
  trilha: string;
  eyebrow?: string;
  descricao?: string;
  imagem?: string;
  selos?: string[];
};

export default function PaginaHero({
  titulo,
  trilha,
  eyebrow,
  descricao,
  imagem,
  selos,
}: Props) {
  return (
    <section className="mx-auto max-w-mima px-6 lg:px-10 pt-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-azul px-6 py-14 text-creme sm:px-12 lg:py-20">
        {imagem ? (
          <>
            <Image
              src={imagem}
              alt=""
              aria-hidden
              fill
              priority
              sizes="(min-width: 1408px) 1328px, 100vw"
              className="-z-10 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-azul/88" />
          </>
        ) : null}

        <nav aria-label="Trilha de navegação">
          <ol className="flex items-center gap-2 text-sm text-creme/70">
            <li>
              <Link href="/" className="underline hover:text-creme">
                Início
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="font-semibold text-creme">
              {trilha}
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          {eyebrow ? (
            <p className="font-serif text-sm tracking-[0.3em] text-[#e0b27e]">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`font-serif text-4xl text-balance sm:text-5xl ${eyebrow ? "mt-4" : ""}`}
          >
            {titulo}
          </h1>
          {descricao ? (
            <p className="mt-5 text-creme/85">{descricao}</p>
          ) : null}

          {selos?.length ? (
            <ul className="mt-7 flex flex-wrap justify-center gap-3">
              {selos.map((selo) => (
                <li
                  key={selo}
                  className="rounded-full border border-creme/50 px-5 py-2 text-sm font-bold"
                >
                  {selo}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
