import Image from "next/image";
import Link from "next/link";
import PlaceholderMidia from "./PlaceholderMidia";

/* Tempos derivados da faixa de 12–14 min a 180 °C — vale confirmar no forno
   antes do lançamento, porque forno de casa varia bastante. */
const pontos = [
  { nome: "macio", tempo: "10–11 min", nota: "miolo bem cremoso" },
  { nome: "no ponto", tempo: "12–13 min", nota: "borda firme, meio macio" },
  { nome: "crocante", tempo: "14–15 min", nota: "dourado por inteiro" },
];

export default function ComoUsar() {
  return (
    <section id="como-usar" className="mx-auto max-w-mima px-6 lg:px-10 py-20 lg:py-24">
      <h2 className="text-center font-serif text-3xl text-azul text-balance sm:text-[2.5rem] sm:leading-tight">
        Escolha o seu caminho
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-[1fr_1.6fr]">
        <article className="rounded-2xl border-2 border-azul p-7">
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            caminho 1 &middot; crua
          </p>
          <p className="mt-4 text-tinta-suave">
            <strong>1.</strong> Abra a embalagem.{" "}
            <strong>2.</strong> Coma e aproveite aquele
            gostinho de infância. <strong>3.</strong>{" "}
            Feche o resto e guarde&hellip; pra próxima vez que bater a vontade.
          </p>
        </article>

        <article className="rounded-2xl border-2 border-caramelo p-7">
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            caminho 2 &middot; de forno
          </p>
          <p className="mt-4 text-tinta-suave">
            <strong>1.</strong> Coloque as porções na
            assadeira — elas já vêm cortadas no tamanho certo.{" "}
            <strong>2.</strong> Asse em forno
            pré-aquecido a 180&nbsp;°C, no tempo do ponto que você gosta.{" "}
            <strong>3.</strong> Tire a assadeira do forno
            e deixe os cookies descansarem de 3 a 5 minutos.{" "}
            <strong>4.</strong> Sirva morno.
          </p>

          <p className="mt-6 text-sm font-semibold text-azul">
            O ponto é escolha sua:
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {pontos.map((ponto) => (
              <li
                key={ponto.nome}
                className="rounded-xl bg-baunilha/70 p-4 text-center"
              >
                <p className="font-serif text-sm tracking-[0.18em] text-caramelo">
                  {ponto.nome}
                </p>
                <p className="mt-1 font-serif text-xl text-azul">
                  {ponto.tempo}
                </p>
                <p className="mt-1 text-xs text-tinta-suave">{ponto.nota}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {/* A foto da massa na tigela saiu: batedeira ensina o contrário do produto. */}
        <PlaceholderMidia
          rotulo="foto · porções na assadeira"
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

      <p className="mt-12 text-center text-tinta-suave">
        Ainda com dúvida?{" "}
        <Link href="/perguntas" className="underline hover:text-azul">
          Veja as perguntas frequentes
        </Link>
        .
      </p>
    </section>
  );
}
