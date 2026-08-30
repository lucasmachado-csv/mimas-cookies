import Image from "next/image";

export default function ComoUsar() {
  return (
    <section id="como-usar" className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <h2 className="text-center font-serif text-3xl text-azul text-balance sm:text-4xl">
        Escolha o seu caminho
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-[1fr_1.6fr]">
        <article className="rounded-2xl border-2 border-azul p-7">
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            caminho 1 &middot; de colher
          </p>
          <p className="mt-4">
            <strong>1.</strong> Abra o pote. Fim.{" "}
            <span className="text-tinta-suave">
              (Guarde na geladeira — se sobrar.)
            </span>
          </p>
        </article>

        <article className="rounded-2xl border-2 border-caramelo p-7">
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            caminho 2 &middot; de forno
          </p>
          <p className="mt-4">
            <strong>1.</strong> Boleie porções de 2 colheres de sopa.{" "}
            <strong>2.</strong> Forno pré-aquecido a 180&nbsp;°C por 12–14
            minutos. <strong>3.</strong> Espere 5 minutos na assadeira (o miolo
            termina de assar). <strong>4.</strong> Sirva morno.
          </p>
        </article>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image
            src="/images/massa-tigela.jpg"
            alt="Massa de cookie com gotas de chocolate na tigela da batedeira"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
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
