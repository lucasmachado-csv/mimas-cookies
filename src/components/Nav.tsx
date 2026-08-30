import Link from "next/link";

const links = [
  { href: "#a-massa", label: "A Massa" },
  { href: "#pode-comer-crua", label: "Pode Comer Crua?" },
  { href: "#nossa-historia", label: "Nossa História" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-creme/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="leading-none text-azul">
          {/* Marcador do wordmark — substituir pelo arquivo do logo quando disponível */}
          <span className="font-serif text-xl font-bold tracking-[0.08em]">
            MIMA&rsquo;s
          </span>
          <span className="mt-0.5 hidden font-serif text-[0.6rem] tracking-[0.32em] sm:block">
            cookie dough
          </span>
        </Link>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 text-sm font-semibold text-tinta-suave md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-azul">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#onde-comprar"
            className="rounded-full bg-azul px-5 py-2.5 text-sm font-bold text-creme transition-colors hover:bg-profundo"
          >
            Onde encontrar
          </a>
        </div>
      </nav>
    </header>
  );
}
