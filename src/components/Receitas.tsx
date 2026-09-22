import PlaceholderMidia from "./PlaceholderMidia";

/* Tempos das receitas derivados da faixa base (180 °C, 12–14 min para cookie
   normal) — formatos maiores levam mais tempo. Confirmar no forno antes de
   publicar, como o resto dos tempos do site. */
/* Exportado para o trilho da home usar a mesma lista — assim nome e resumo não
   saem do lugar quando uma receita muda. */
export const receitas = [
  {
    nome: "Cookie do seu jeito",
    resumo: "Como a gente sempre comeu lá em casa.",
    passos:
      "Antes de ir pro forno, aperte o que você quiser na porção ainda crua: nozes, pecã, amêndoas, pedaços de Oreo, gotas de chocolate branco. Depois é só assar como de costume, no tempo do ponto que você gosta.",
  },
  {
    nome: "Cookie de frigideira",
    resumo: "Uma versão gigante do cookie clássico.",
    passos:
      "Forre o fundo de uma frigideira pequena com as porções, apertando até fechar. Leve ao forno a 180 °C por 15 a 18 minutos. Sirva na própria frigideira, com sorvete por cima e os toppings que quiser — granulado, calda de chocolate, etc.",
  },
  {
    nome: "Sanduíche de sorvete",
    resumo: "O jeito mais fácil de impressionar visita.",
    passos:
      "Asse os cookies do jeito de sempre e espere esfriar. Ponha uma bola de sorvete entre dois e aperte devagar. Se quiser firme, volta pro congelador por 20 minutos.",
  },
  {
    nome: "Bolo de cookie",
    resumo: "Aniversário resolvido sem bater massa nenhuma.",
    passos:
      "Espalhe as porções numa forma redonda de 20 cm até cobrir o fundo. Asse a 180 °C por 20 a 25 minutos. Deixe esfriar, decore com cobertura, chantilly ou o que quiser, e corte em fatias como bolo.",
  },
  {
    nome: "Cookie dough no sorvete",
    resumo: "Só quebrar e misturar.",
    passos:
      "Sem forno, sem espera. Pegue uma porção crua, quebre em pedaços com a mão e misture no sorvete — ou só jogue por cima.",
  },
];

export default function Receitas() {
  return (
    <div>
      {receitas.map((receita, i) => (
        <section
          key={receita.nome}
          className={`${i % 2 === 0 ? "bg-creme" : "bg-baunilha"} py-12 lg:py-14`}
        >
          <div className="mx-auto grid max-w-4xl items-center gap-8 px-6 lg:px-10 md:grid-cols-2 lg:gap-12">
            <div className={i % 2 === 0 ? "" : "md:order-2"}>
              <PlaceholderMidia
                rotulo={`foto · ${receita.nome.toLowerCase()}`}
                className="aspect-4/3"
              />
            </div>

            <div className={i % 2 === 0 ? "" : "md:order-1"}>
              <h2 className="font-serif text-2xl text-azul text-balance sm:text-3xl">
                {receita.nome}
              </h2>
              <p className="mt-2 font-serif text-lg text-caramelo">
                {receita.resumo}
              </p>
              <p className="mt-4 text-tinta-suave">{receita.passos}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
