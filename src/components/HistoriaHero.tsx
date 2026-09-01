import Image from "next/image";
import Link from "next/link";

export default function HistoriaHero() {
  return (
    <section className="mx-auto max-w-mima px-6 lg:px-10 pt-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-azul px-6 py-14 text-creme sm:px-12 lg:py-20">
        <Image
          src="/images/pilha-leite.jpg"
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
              Nossa História
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="font-serif text-sm tracking-[0.3em] text-[#e0b27e]">
            quem faz a Mima&rsquo;s
          </p>
          <h1 className="mt-4 font-serif text-4xl text-balance sm:text-5xl">
            Todo mundo me chama de Mima
          </h1>
        </div>
      </div>
    </section>
  );
}
