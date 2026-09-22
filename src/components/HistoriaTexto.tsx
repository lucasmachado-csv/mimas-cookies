import PlaceholderMidia from "./PlaceholderMidia";

export default function HistoriaTexto() {
  return (
    <article className="mx-auto max-w-mima px-6 lg:px-10 py-14 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="font-serif text-2xl leading-relaxed text-azul text-balance">
          Meu nome é Carolina, sou brasileira e vivi a vida inteira em Miami —
          com a família toda no Brasil.
        </p>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-tinta-suave">
          <p>
            Sempre que minha família vem do Brasil me visitar em Miami, o
            pedido é sempre o mesmo antes de qualquer outra coisa: massa de
            cookie. Crua enquanto o forno esquenta, de novo quando os cookies
            saem quentinhos — um ritual que virou nosso.
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
          <p>
            Foi assim que decidi trazer isso pro Brasil. Testei receita atrás de
            receita até acertar o cookie que eu cresci amando — sem perder nada
            do que fazia esse sabor ser especial. Hoje, é na Mima&rsquo;s que
            coloco minha energia todos os dias. Cada porção sai daqui com
            carinho de verdade, e minha esperança é que esse carinho chegue até
            você também.
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
            É como minha família me chama desde criança — e como todo mundo me
            chama assim que eu piso no Brasil. Na hora de dar nome à marca, não
            fez sentido procurar outro.
          </p>
          <p>
            A Mima&rsquo;s nasceu dessa mesa cheia, todo mundo esperando o forno
            esquentar. Essa é a sensação que a gente quer trazer pra sua casa.
          </p>
          <p>
            E se você ficou curioso de como a própria Mima gosta do cookie:
            confesso que sou team borda-dourada-miolo-quase-cru. Tiro do forno
            assim que a borda fica dourada e o meio ainda tá mole — sei que é
            cedo demais pra muita gente, mas é o meu ponto favorito no mundo
            inteiro.
          </p>
        </div>

        <p className="mt-10 font-serif text-sm tracking-[0.22em] text-caramelo">
          Carolina Viamonte &middot; fundadora da Mima&rsquo;s
        </p>
      </div>
    </article>
  );
}
