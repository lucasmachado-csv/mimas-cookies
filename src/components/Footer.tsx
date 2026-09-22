import Link from "next/link";
import { redes } from "./redes";

export default function Footer() {
  return (
    <footer className="mt-auto bg-profundo py-12 text-creme">
      <div className="mx-auto flex max-w-mima flex-col items-center gap-6 px-6 lg:px-10 text-center">
        <div className="leading-none">
          <span className="font-serif text-2xl font-bold tracking-[0.08em]">
            MIMA&rsquo;s
          </span>
          <span className="mt-1 block font-serif text-[0.65rem] tracking-[0.32em]">
            cookie dough
          </span>
        </div>

        <p className="font-serif text-sm italic tracking-[0.2em] text-creme/80">
          pode comer crua &nbsp;&middot;&nbsp; pode assar
        </p>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-semibold text-creme/80">
            <li><Link href="/#o-que-e" className="hover:text-creme">O Que É?</Link></li>
            <li><Link href="/ingredientes" className="hover:text-creme">Ingredientes</Link></li>
            <li><Link href="/receitas" className="hover:text-creme">Receitas</Link></li>
            <li><Link href="/perguntas" className="hover:text-creme">Perguntas</Link></li>
            <li><Link href="/nossa-historia" className="hover:text-creme">Nossa História</Link></li>
            <li><Link href="/onde-encontrar" className="hover:text-creme">Onde encontrar</Link></li>
          </ul>
        </nav>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-creme/80">
          {redes.map((rede) => (
            <li key={rede.nome}>
              <a
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-creme"
              >
                {rede.nome}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-creme/50">
          © {new Date().getFullYear()} Mima&rsquo;s Cookies · Fotos temporárias
          via Unsplash até o ensaio da marca
        </p>
      </div>
    </footer>
  );
}
