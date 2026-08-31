import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

export default function OndeComprar() {
  return (
    <section id="onde-comprar" className="mx-auto max-w-mima px-6 lg:px-10 py-16 text-center lg:py-24">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
        na geladeira dos melhores mercados
      </p>
      <h2 className="mt-3 font-serif text-3xl text-azul text-balance sm:text-4xl">
        Procure o pote azul
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-tinta-suave">
        Estamos chegando às geladeiras dos melhores mercados do Brasil.
        Cadastre-se e a gente avisa quando a Mima&rsquo;s aparecer perto de
        você — e conta a novidade de sabor antes de todo mundo.
      </p>

      <div className="mt-8">
        <NewsletterForm />
      </div>

      <div className="relative mx-auto mt-12 aspect-5/4 max-w-xs overflow-hidden rounded-3xl">
        <Image
          src="/images/pilha-leite.jpg"
          alt="Pilha de cookies de chocolate em um prato ao lado de uma garrafa de leite"
          fill
          sizes="20rem"
          className="object-cover"
        />
      </div>
    </section>
  );
}
