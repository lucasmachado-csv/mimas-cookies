const grupos = [
  {
    rotulo: "a base",
    titulo: "O que sustenta a massa",
    itens: [
      {
        nome: "Farinha de trigo tratada termicamente",
        texto:
          "Passa por tratamento térmico antes de virar massa. É esse processo que libera a farinha pra ser comida crua.",
      },
      {
        nome: "Óleo de canola",
        texto: "No lugar da manteiga — mantém a massa macia mesmo gelada.",
      },
      {
        nome: "Ovo pasteurizado",
        texto:
          "Dá liga à massa como um ovo cru faria, mas sem o risco. Pasteurizado antes de chegar na cozinha.",
      },
      {
        nome: "Sal marinho fino",
        texto: "Equilibra o doce e intensifica o chocolate.",
      },
    ],
  },
  {
    rotulo: "os açúcares",
    titulo: "Três açúcares, três funções",
    itens: [
      {
        nome: "Açúcar refinado",
        texto:
          "Responsável pelo espalhamento da massa — e pela casquinha dourada na borda.",
      },
      {
        nome: "Açúcar mascavo claro",
        texto:
          "Segura a cremosidade do miolo e traz o sabor de caramelo por trás.",
      },
      {
        nome: "Melado de cana sem sulfitos",
        texto:
          "Escurece a cor, aprofunda o caramelo e segura a umidade da massa.",
      },
    ],
  },
  {
    rotulo: "os ativos de forno",
    titulo: "A parte que só aparece a 180 °C",
    itens: [
      {
        nome: "Bicarbonato de sódio",
        texto:
          "Só age no calor: cria as ondulações na superfície e a cor dourada.",
      },
      {
        nome: "Fermento químico em pó",
        texto: "Uma pitada, ativada pelo calor, pra sustentar o miolo.",
      },
    ],
  },
  {
    rotulo: "o sabor",
    titulo: "Onde a receita fica pessoal",
    itens: [
      {
        nome: "Extrato natural de baunilha",
        texto:
          "Baunilha de fava de verdade — a nota que aparece por trás do chocolate.",
      },
      {
        nome: "Vanilina",
        texto: "Baunilha artificial — é o que dá o cheiro de padaria.",
      },
      {
        nome: "Extrato de manteiga",
        texto: "Não usamos manteiga. Usamos o aroma dela.",
      },
    ],
  },
];

/* Uma fila por grupo: a contagem de colunas acompanha a de itens (4, 3, 2 e 3),
   e a largura máxima evita que o grupo de dois vire dois cartões gigantes.
   Classes literais para o Tailwind conseguir enxergá-las. */
/* Cada grupo pula direto para a contagem que fecha a fila: com três itens não
   existe etapa de duas colunas, senão sobra um cartão sozinho embaixo. */
const colunas: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

const largura: Record<number, string> = {
  2: "max-w-lg",
  3: "max-w-3xl",
  4: "max-w-5xl",
};

export default function IngredientesLista() {
  return (
    <div id="lista">
      {grupos.map((grupo, i) => (
        <section
          key={grupo.rotulo}
          className={`${i % 2 === 0 ? "bg-creme" : "bg-baunilha"} py-14 lg:py-16`}
        >
          <div className="mx-auto max-w-mima px-6 lg:px-10">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
                {grupo.rotulo}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-azul text-balance sm:text-3xl">
                {grupo.titulo}
              </h2>
            </div>

            <ul
              className={`mx-auto mt-9 grid gap-5 ${largura[grupo.itens.length]} ${colunas[grupo.itens.length]}`}
            >
              {grupo.itens.map((item) => (
                <li
                  key={item.nome}
                  className="rounded-2xl border border-linha bg-white/60 p-4 text-center transition-colors hover:border-azul/35 sm:p-6"
                >
                  {/* Foto do ingrediente — trocar pelo ensaio, fundo claro,
                      enquadramento quadrado, como nas referências. */}
                  <div className="mx-auto flex aspect-square w-full max-w-[6.5rem] items-center justify-center rounded-xl border-2 border-dashed border-azul/25 text-[0.6rem] font-bold uppercase tracking-wider text-azul/40 sm:max-w-[8.5rem]">
                    foto
                  </div>
                  <h3 className="mt-4 font-serif text-base leading-snug text-azul text-balance sm:mt-5 sm:text-lg">
                    {item.nome}
                  </h3>
                  <p className="mt-2 text-sm text-tinta-suave">{item.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Destaque do chocolate — o ingrediente que mais pesa na receita. */}
      <section className="bg-azul py-16 text-center text-creme lg:py-20">
        <div className="mx-auto max-w-mima px-6 lg:px-10">
          <div className="mx-auto flex aspect-square w-full max-w-[9rem] items-center justify-center rounded-xl border-2 border-dashed border-creme/30 text-[0.6rem] font-bold uppercase tracking-wider text-creme/50">
            foto
          </div>
          <p className="mt-7 font-serif text-sm tracking-[0.3em] text-[#e0b27e]">
            quase tanto chocolate quanto farinha
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl text-balance sm:text-4xl">
            Gotas de chocolate meio doce
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-creme/85">
            Feito com chocolate de verdade. O contraste é o que faz você querer
            a próxima porção.
          </p>
        </div>
      </section>
    </div>
  );
}
