import PlaceholderMidia from "./PlaceholderMidia";

const pontos = [
  {
    titulo: "Para agora",
    texto:
      "Aquela vontade de doce que não pode esperar. Abre a embalagem, pega uma porção e aproveite.",
  },
  {
    titulo: "Para daqui a 12 minutos",
    texto:
      "Cookie quentinho, casquinha dourada, miolo cremoso. As porções já vêm cortadas: é só assar e fingir que deu trabalho.",
  },
  {
    titulo: "Mora na geladeira",
    texto:
      "Você compra na geladeira do mercado e guarda na sua. Asse uma porção hoje e o resto quando der vontade.",
  },
];

export default function OQueE() {
  return (
    <section id="o-que-e" className="bg-baunilha py-20 lg:py-24">
      <div className="mx-auto max-w-mima px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
            a primeira do tipo no Brasil
          </p>
          <h2 className="mt-5 font-serif text-3xl text-azul text-balance sm:text-[2.5rem] sm:leading-tight">
            O que é cookie dough (massa de cookie)?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-tinta-suave">
            A gente sempre acreditou que a melhor parte de fazer cookie é roubar
            um pedaço da massa antes de ir pro forno. Por isso criamos a
            Mima&rsquo;s: massa de verdade, pronta pra comer crua com segurança,
            já porcionada na geladeira. Não é biscoito assado pra requentar — é
            a massa mesmo, esperando você decidir: agora ou depois do forno?
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pontos.map((ponto) => (
            <article key={ponto.titulo} className="rounded-2xl bg-creme p-8">
              <h3 className="font-serif text-xl text-azul text-balance">
                {ponto.titulo}
              </h3>
              <p className="mt-3 text-tinta-suave">{ponto.texto}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <PlaceholderMidia
            rotulo="vídeo · como funciona"
            nota="Da embalagem à assadeira em 30 segundos — o vídeo que explica o produto para quem nunca viu."
          />
        </div>
      </div>
    </section>
  );
}
