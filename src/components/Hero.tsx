import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-mima px-6 pb-16 pt-10 lg:px-10 lg:pb-0 lg:pt-0">
      {/* Capa dividida: texto de um lado, ilustração do outro, ocupando a
          primeira tela inteira no desktop. min-h desconta a altura da navbar. */}
      <div className="grid items-center gap-12 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="font-serif text-sm tracking-[0.3em] text-caramelo">
            pode comer crua &nbsp;&middot;&nbsp; pode assar
          </p>

          <h1 className="mt-5 font-serif text-4xl leading-tight text-azul text-balance sm:text-5xl lg:text-[3.25rem]">
            Gostosa direto do pacote. Melhor ainda no forno.
          </h1>

          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#onde-comprar"
              className="rounded-full bg-azul px-7 py-3.5 font-bold text-creme transition-colors hover:bg-profundo"
            >
              Encontre nos mercados
            </a>
            {/* Leva para a explicação do produto, não para os passos: quem chega
                pela primeira vez precisa entender o conceito antes das opções. */}
            <a
              href="#o-que-e"
              className="rounded-full border-2 border-azul px-7 py-3.5 font-bold text-azul transition-colors hover:bg-baunilha"
            >
              Como funciona
            </a>
          </div>
        </div>

        {/* Só a menina do logo — o wordmark já aparece no topo do site.
            Trocar por SVG quando houver o vetor, para animar as pernas. */}
        <div className="mima-entrada mx-auto w-fit">
          <div className="relative">
            {/* Rastro de corrida — atrás dela, do lado oposto ao movimento. */}
            <div
              className="mima-rastro pointer-events-none absolute top-[32%] -right-6 flex flex-col gap-3 sm:-right-9"
              aria-hidden
            >
              <span className="block h-[3px] w-8 rounded-full bg-azul/45" />
              <span className="block h-[3px] w-5 rounded-full bg-azul/35" />
              <span className="block h-[3px] w-10 rounded-full bg-azul/40" />
            </div>

            <div className="mima-corrida">
              <Image
                src="/images/mima-correndo.png"
                alt="Ilustração da Mima carregando uma pilha de porções de massa e cookies"
                width={484}
                height={667}
                priority
                sizes="(min-width: 1024px) 30rem, 20rem"
                className="h-[38svh] max-h-[26rem] min-h-[13rem] w-auto lg:h-[min(68svh,34rem)] lg:max-h-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
