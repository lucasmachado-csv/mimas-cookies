import Contato from "./Contato";

/* Prazos informados pela Carolina, ainda provisórios: 120 dias de geladeira até
   a data de validade e mais dois meses se congelada antes dela. Confirmar com o
   laboratório antes do lançamento. Falta definir o prazo depois de aberta. */
const grupos = [
  {
    rotulo: "comer crua",
    perguntas: [
      {
        q: "Posso comer a massa crua mesmo?",
        a: "Pode. A massa foi feita para isso: a farinha passa por tratamento térmico antes de entrar na receita e o ovo é pasteurizado. São os dois pontos que tornam massa de cookie comum insegura, e os dois estão resolvidos na nossa.",
      },
      {
        q: "Então por que não posso comer qualquer massa de cookie crua?",
        a: "Massa caseira leva farinha crua e ovo cru. A farinha crua pode carregar microrganismos e o ovo cru também. A Mima's trata os dois antes da massa existir.",
      },
      {
        q: "Crianças podem comer?",
        a: "Podem, sem problema. Em caso de alergia, vale conferir a lista de ingredientes antes.",
      },
    ],
  },
  {
    rotulo: "no forno",
    perguntas: [
      {
        q: "Quanto tempo no forno?",
        a: "A gente recomenda pré-aquecer o forno a 180 °C. O tempo varia com o ponto que você prefere: 10 a 11 minutos para macio, 12 a 13 para o clássico, 14 a 15 para crocante — um bom indicador é a borda dourada. Depois de tirar do forno, recomendamos deixar descansar de 3 a 5 minutos antes de servir.",
      },
      {
        q: "Preciso bolear ou cortar a massa?",
        a: "Não. As porções já vêm cortadas no tamanho certo — é só colocar na assadeira.",
      },
      {
        q: "Posso assar só algumas porções e guardar o resto?",
        a: "Pode. Asse uma ou asse todas. O que sobrar volta para a geladeira na própria embalagem.",
      },
      {
        q: "Quantos cookies rende?",
        a: "Cada embalagem traz 12 porções, ou seja, até 12 cookies.",
      },
    ],
  },
  {
    rotulo: "rótulo e alergias",
    perguntas: [
      {
        q: "É sem glúten ou sem lactose?",
        a: "Por enquanto, não. A massa leva trigo e ovo, e as gotas de chocolate levam leite — então não é uma massa sem glúten nem sem lactose. A declaração completa de alérgenos vem impressa na embalagem — vale ler antes em caso de alergia.",
      },
      {
        q: "Onde vejo a tabela nutricional?",
        a: "Na embalagem. A tabela nutricional completa vem impressa no rótulo, junto com a lista de ingredientes e a declaração de alérgenos.",
      },
      {
        q: "Vão existir versões para quem tem alergia?",
        a: "É o que a gente quer. Se você gostaria de uma versão sem glúten, sem lactose ou sem algum outro alérgeno, escreve pra gente contando qual — saber que tem gente esperando ajuda a decidir o que vem depois.",
      },
    ],
  },
  {
    rotulo: "em casa",
    perguntas: [
      {
        q: "Precisa ficar na geladeira?",
        a: "Precisa. A massa é refrigerada do início ao fim: você compra na geladeira do mercado e guarda na sua.",
      },
      {
        q: "Posso congelar?",
        a: "Pode. Se for para o congelador antes da data de validade, a massa dura mais dois meses a partir dela.",
      },
      {
        q: "Quanto tempo dura?",
        a: "Na geladeira, até 120 dias — a data de validade vem impressa na embalagem. No congelador, dois meses além dessa data.",
      },
    ],
  },
];

/* O último grupo alterna creme/baunilha, então o Contato pega o tom oposto —
   assim a separação continua certa se um grupo for adicionado ou removido. */
export default function Perguntas() {
  const fundoContato =
    (grupos.length - 1) % 2 === 0 ? "bg-baunilha" : "bg-creme";

  return (
    <div>
      {grupos.map((grupo, i) => (
        <section
          key={grupo.rotulo}
          className={`${i % 2 === 0 ? "bg-creme" : "bg-baunilha"} py-12 lg:py-14`}
        >
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
              {grupo.rotulo}
            </p>

            <dl className="mt-6 space-y-6">
              {grupo.perguntas.map((item) => (
                <div
                  key={item.q}
                  className="border-b border-linha pb-6 last:border-0 last:pb-0"
                >
                  <dt className="font-serif text-lg text-azul text-balance">
                    {item.q}
                  </dt>
                  <dd className="mt-2 text-tinta-suave">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <Contato fundo={fundoContato} />
    </div>
  );
}
