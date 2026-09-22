import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

type Loja = {
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
};

/* Basta preencher esta lista quando as primeiras lojas fecharem — a página
   troca sozinha do aviso de "em breve" para os cartões, agrupados por cidade.
   Exemplo:
   { nome: "Mercado X", endereco: "Rua Y, 123", bairro: "Centro", cidade: "Florianópolis" }
*/
const lojas: Loja[] = [];

function porCidade(lista: Loja[]) {
  const mapa = new Map<string, Loja[]>();
  for (const loja of lista) {
    mapa.set(loja.cidade, [...(mapa.get(loja.cidade) ?? []), loja]);
  }
  return [...mapa.entries()];
}

export default function Lojas() {
  const cidades = porCidade(lojas);

  return (
    <section className="mx-auto max-w-mima px-6 lg:px-10 py-14 lg:py-16">
      {cidades.length === 0 ? (
        <div className="mx-auto max-w-xl text-center">
          {/* Ela reaparece aqui: está a caminho das primeiras lojas. */}
          <Image
            src="/images/mima-correndo.png"
            alt=""
            aria-hidden
            width={484}
            height={667}
            sizes="11rem"
            className="mx-auto mb-8 h-auto w-40 sm:w-44"
          />
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-caramelo">
            em breve
          </p>
          <h2 className="mt-3 font-serif text-2xl text-azul text-balance sm:text-3xl">
            As primeiras geladeiras são em Florianópolis
          </h2>
          <p className="mt-4 text-tinta-suave">
            Ainda estamos fechando os primeiros mercados. Deixe seu e-mail e a
            gente avisa assim que a Mima&rsquo;s chegar perto de você.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-12">
            {cidades.map(([cidade, doGrupo]) => (
              <div key={cidade}>
                <h2 className="border-b border-linha pb-4 font-serif text-2xl text-azul sm:text-3xl">
                  {cidade}
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {doGrupo.map((loja) => (
                    <li
                      key={`${loja.nome}-${loja.endereco}`}
                      className="rounded-2xl border border-linha bg-white/60 p-6"
                    >
                      <h3 className="font-serif text-lg text-azul">
                        {loja.nome}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-caramelo">
                        {loja.bairro}
                      </p>
                      <p className="mt-2 text-sm text-tinta-suave">
                        {loja.endereco}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-xl text-center">
            <p className="text-tinta-suave">
              Não achou perto de você? A gente avisa quando chegar.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
