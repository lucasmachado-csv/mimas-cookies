import PlaceholderMidia from "./PlaceholderMidia";

const pontos = [
  {
    titulo: "É massa crua, não é biscoito",
    texto:
      "Não é cookie pronto para requentar. É a massa antes do forno — feita para ser comida crua ou assada. Você decide na hora.",
  },
  {
    titulo: "Já vem em porções cortadas",
    texto:
      "Sem pesar, sem misturar, sem sujar louça. Abra a embalagem e tire quantas porções quiser.",
  },
  {
    titulo: "Mora na geladeira",
    texto:
      "Você compra na geladeira do mercado e guarda na sua. Asse uma porção hoje e o resto quando der vontade.",
  },
];

export default function OQueE() {
  return (
    <section id="o-que-e" className="bg-baunilha py-16 lg:py-20">
      <div className="mx-auto max-w-mima px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
            primeira vez no Brasil
          </p>
          <h2 className="mt-3 font-serif text-3xl text-azul text-balance sm:text-4xl">
            O que é massa de cookie pronta?
          </h2>
          <p className="mt-5 text-tinta-suave">
            Nos Estados Unidos é item de geladeira tão comum quanto iogurte. No
            Brasil, provavelmente é a primeira vez que você vê — então vamos
            explicar direito.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pontos.map((ponto) => (
            <article key={ponto.titulo} className="rounded-2xl bg-creme p-7">
              <h3 className="font-serif text-lg text-azul text-balance">
                {ponto.titulo}
              </h3>
              <p className="mt-3 text-sm text-tinta-suave">{ponto.texto}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <PlaceholderMidia
            rotulo="vídeo · como funciona"
            nota="Da embalagem à assadeira em 30 segundos — o vídeo que explica o produto para quem nunca viu."
          />
        </div>
      </div>
    </section>
  );
}
