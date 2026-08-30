import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
      <div>
        <p className="font-serif text-sm tracking-[0.3em] text-caramelo">
          pode comer crua &nbsp;&middot;&nbsp; zero lactose
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-azul text-balance sm:text-5xl lg:text-[3.4rem]">
          Feita para comer de colher. Pronta para virar cookie.
        </h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#onde-comprar"
            className="rounded-full bg-azul px-7 py-3.5 font-bold text-creme transition-colors hover:bg-profundo"
          >
            Encontre nos mercados
          </a>
          <a
            href="#como-usar"
            className="rounded-full border-2 border-azul px-7 py-3.5 font-bold text-azul transition-colors hover:bg-baunilha"
          >
            Como funciona
          </a>
        </div>
      </div>

      <div className="relative aspect-4/3 overflow-hidden rounded-3xl lg:aspect-8/5">
        <Image
          src="/images/hero-massa.jpg"
          alt="Bolinhas de massa de cookie crua com gotas de chocolate sobre papel manteiga"
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
