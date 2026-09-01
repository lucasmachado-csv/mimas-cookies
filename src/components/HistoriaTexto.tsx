import PlaceholderMidia from "./PlaceholderMidia";

export default function HistoriaTexto() {
  return (
    <article className="mx-auto max-w-mima px-6 lg:px-10 py-14 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-serif text-2xl leading-relaxed text-azul text-balance">
          Sou a Carolina. Sou brasileira, moro em Miami e tenho a família toda
          no Brasil.
        </p>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-tinta-suave">
          <p>
            Eles vêm me visitar sempre — e, em toda visita, sem exceção, o
            pedido é o mesmo. Antes do passeio, antes do restaurante, antes de
            qualquer outra coisa: massa de cookie. Comem crua enquanto o forno
            esquenta e comem de novo quando os cookies saem, ainda quentes. Já
            virou parte da viagem.
          </p>
          <p>
            Cresci assim. Quando batia a vontade de doce, minha mãe não
            precisava de receita nem de uma manhã livre — em poucos minutos a
            casa inteira cheirava a açúcar mascavo e baunilha. Mais tarde, já
            adolescente, virou eu e minhas amigas de madrugada: às vezes a gente
            assava, às vezes comia direto da embalagem mesmo.
          </p>
          <p>
            Foi numa dessas visitas que a pergunta apareceu, simples assim: por
            que isso não existe no Brasil? Minha família atravessa um continente
            para comer uma coisa que devia estar na geladeira do mercado, a dez
            minutos de casa.
          </p>
        </div>
      </div>

      <figure className="mx-auto mt-14 max-w-3xl">
        <PlaceholderMidia
          rotulo="retrato da Carolina"
          nota="A história é pessoal — a página pede o rosto de quem conta."
          className="aspect-16/9"
        />
      </figure>

      <div className="mx-auto mt-14 max-w-2xl">
        <blockquote className="border-l-4 border-caramelo pl-6">
          <p className="font-serif text-2xl leading-relaxed text-azul text-balance">
            Mima não é um nome bonito que eu inventei para uma marca.
          </p>
        </blockquote>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-tinta-suave">
          <p>
            É como minha família e meus amigos me chamam desde que eu era
            criança, e como me chamam até hoje toda vez que eu chego no Brasil.
            Quando resolvi que isso ia sair do papel, não fez o menor sentido
            procurar outro nome.
          </p>
          <p>
            A Mima&rsquo;s nasceu dessa mesa cheia de gente esperando o forno.
            Se você também já comeu a massa antes de assar, acho que a gente vai
            se dar bem.
          </p>
        </div>

        <p className="mt-10 font-serif text-sm tracking-[0.22em] text-caramelo">
          Carolina Viamonte &middot; fundadora da Mima&rsquo;s
        </p>
      </div>
    </article>
  );
}
