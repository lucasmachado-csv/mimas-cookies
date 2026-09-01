const grupos = [
  {
    rotulo: "a base",
    titulo: "O que sustenta a massa",
    itens: [
      {
        nome: "Farinha de trigo tratada termicamente",
        texto: "Tratada antes de entrar na receita. É o que libera a massa crua.",
      },
      {
        nome: "Gordura vegetal",
        texto: "Cem por cento vegetal, no lugar da manteiga.",
      },
      {
        nome: "Ovo pasteurizado",
        texto: "Ovo de verdade, sem o risco. Dá liga à massa.",
      },
      {
        nome: "Sal",
        texto: "Deixa o chocolate mais chocolate e o doce menos plano.",
      },
      {
        nome: "Água",
        texto: "Algumas gotas, só para dissolver o bicarbonato por igual.",
      },
    ],
  },
  {
    rotulo: "os açúcares",
    titulo: "Três açúcares, três funções",
    itens: [
      {
        nome: "Açúcar refinado",
        texto: "Faz o espalhamento e a casquinha caramelizada da borda.",
      },
      {
        nome: "Açúcar mascavo claro",
        texto: "Mantém o miolo cremoso e traz o fundo de caramelo.",
      },
      {
        nome: "Melado de cana sem sulfitos",
        texto: "Escurece a cor, aprofunda o caramelo, segura a umidade.",
      },
    ],
  },
  {
    rotulo: "o ponto de forno",
    titulo: "A parte que só aparece a 180 °C",
    itens: [
      {
        nome: "Bicarbonato de sódio",
        texto: "Cria as ondulações na superfície e a cor dourada.",
      },
      {
        nome: "Fermento químico em pó",
        texto: "Uma pitada, só para sustentar o miolo.",
      },
    ],
  },
  {
    rotulo: "o sabor",
    titulo: "Onde a receita fica pessoal",
    itens: [
      {
        nome: "Extrato natural de baunilha",
        texto: "Baunilha de fava — a camada que aparece depois do chocolate.",
      },
      {
        nome: "Vanilina",
        texto: "Baunilha artificial, e a gente não esconde: é o perfume de padaria.",
      },
      {
        nome: "Extrato de manteiga",
        texto: "Não usamos manteiga. Usamos o aroma dela.",
      },
    ],
  },
];

export default function IngredientesLista() {
  return (
    <section id="lista" className="mx-auto max-w-mima px-6 lg:px-10 pb-16 lg:pb-20">
      <div className="space-y-14">
        {grupos.map((grupo) => (
          <div key={grupo.rotulo}>
            <div className="border-b border-linha pb-5">
              <p className="font-serif text-sm tracking-[0.22em] text-caramelo">
                {grupo.rotulo}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-azul sm:text-3xl">
                {grupo.titulo}
              </h2>
            </div>

            <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {grupo.itens.map((item) => (
                <li
                  key={item.nome}
                  className="rounded-2xl border border-linha bg-white/60 p-6"
                >
                  <h3 className="font-serif text-lg text-azul text-balance">
                    {item.nome}
                  </h3>
                  <p className="mt-2 text-sm text-tinta-suave">{item.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Destaque do chocolate — o ingrediente que mais pesa na receita */}
      <div className="mt-14 rounded-3xl bg-azul p-8 text-creme sm:p-12">
        <p className="font-serif text-sm tracking-[0.3em] text-[#e0b27e]">
          quase tanto chocolate quanto farinha
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-3xl text-balance sm:text-4xl">
          Gotas de chocolate meio amargo
        </h2>
        <p className="mt-4 max-w-lg text-creme/85">
          Meio amargo porque a massa já é doce. O contraste é o que faz você
          querer a próxima porção.
        </p>
      </div>
    </section>
  );
}
