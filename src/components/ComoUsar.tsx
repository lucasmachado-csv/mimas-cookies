import Image from "next/image";
import PlaceholderMidia from "./PlaceholderMidia";

export default function ComoUsar() {
  return (
    <section id="como-usar" className="mx-auto max-w-mima px-6 lg:px-10 py-16 lg:py-20">
      <h2 className="text-center font-serif text-3xl text-azul text-balance sm:text-4xl">
        Escolha o seu caminho
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-[1fr_1.6fr]">
        <article className="rounded-2xl border-2 border-azul p-7">
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            caminho 1 &middot; crua
          </p>
          <p className="mt-4">
            <strong>1.</strong> Abra a embalagem e pegue uma porção. Fim.{" "}
            <span className="text-tinta-suave">
              (O resto volta para a geladeira.)
            </span>
          </p>
        </article>

        <article className="rounded-2xl border-2 border-caramelo p-7">
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            caminho 2 &middot; de forno
          </p>
          <p className="mt-4">
            <strong>1.</strong> Coloque as porções na assadeira — elas já vêm
            cortadas no tamanho certo. <strong>2.</strong> Forno pré-aquecido a
            180&nbsp;°C por 12–14 minutos. <strong>3.</strong> Espere 5 minutos
            na assadeira (o miolo termina de assar). <strong>4.</strong> Sirva
            morno.
          </p>
        </article>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {/* A foto da massa na tigela saiu: batedeira ensina o contrário do produto. */}
        <PlaceholderMidia
          rotulo="foto · porções na assadeira"
          nota="As porções já cortadas, direto da embalagem para a assadeira."
          className="aspect-4/3"
        />
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image
            src="/images/cookies-assados.jpg"
            alt="Cookies de chocolate recém-assados sobre a bancada"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
