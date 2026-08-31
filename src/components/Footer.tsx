import Link from "next/link";

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
          pode comer crua &nbsp;&middot;&nbsp; zero lactose
        </p>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-semibold text-creme/80">
            <li><Link href="/#a-massa" className="hover:text-creme">A Massa</Link></li>
            <li><Link href="/ingredientes" className="hover:text-creme">Ingredientes</Link></li>
            <li><Link href="/#pode-comer-crua" className="hover:text-creme">Pode Comer Crua?</Link></li>
            <li><Link href="/#nossa-historia" className="hover:text-creme">Nossa História</Link></li>
            <li><Link href="/#onde-comprar" className="hover:text-creme">Onde encontrar</Link></li>
          </ul>
        </nav>

        <p className="text-xs text-creme/50">
          © {new Date().getFullYear()} Mima&rsquo;s Cookies · Fotos temporárias
          via Unsplash até o ensaio da marca
        </p>
      </div>
    </footer>
  );
}
