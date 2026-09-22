"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* Links com "/" na frente para funcionarem também a partir das subpáginas.
   "O Que É?" cobre também a parte de comer crua: as duas seções ficam juntas
   na home, então um link só dá conta das duas. */
const links = [
  { href: "/#o-que-e", label: "O Que É?" },
  { href: "/ingredientes", label: "Ingredientes" },
  { href: "/receitas", label: "Receitas" },
  { href: "/perguntas", label: "Perguntas" },
  { href: "/nossa-historia", label: "Nossa História" },
];

export default function Nav() {
  const [aberto, setAberto] = useState(false);

  /* Esc fecha o menu — quem abre com teclado precisa poder sair do mesmo jeito. */
  useEffect(() => {
    if (!aberto) return;
    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === "Escape") setAberto(false);
    }
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-creme/90 backdrop-blur">
      <nav className="mx-auto flex max-w-mima items-center justify-between px-6 lg:px-10 py-4">
        <Link href="/" className="leading-none text-azul">
          {/* Marcador do wordmark — substituir pelo arquivo do logo quando disponível */}
          <span className="font-serif text-xl font-bold tracking-[0.08em]">
            MIMA&rsquo;s
          </span>
          <span className="mt-0.5 hidden font-serif text-[0.6rem] tracking-[0.32em] sm:block">
            cookie dough
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-7">
          <ul className="hidden items-center gap-7 text-sm font-semibold text-tinta-suave md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-azul"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/onde-encontrar"
            className="rounded-full bg-azul px-5 py-2.5 text-sm font-bold text-creme transition-colors hover:bg-profundo"
          >
            Onde encontrar
          </Link>

          {/* Só no celular: abre a lista de páginas, que no desktop já está visível. */}
          <button
            type="button"
            onClick={() => setAberto((estava) => !estava)}
            aria-expanded={aberto}
            aria-controls="menu-do-celular"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="-mr-2 flex size-10 items-center justify-center rounded-full text-azul transition-colors hover:bg-baunilha md:hidden"
          >
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {aberto ? (
                <>
                  <path d="M3 2l14 10" />
                  <path d="M17 2L3 12" />
                </>
              ) : (
                <>
                  <path d="M1 2h18" />
                  <path d="M1 7h18" />
                  <path d="M1 12h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {aberto ? (
        <div
          id="menu-do-celular"
          className="border-t border-linha bg-creme md:hidden"
        >
          <ul className="mx-auto max-w-mima px-6 py-2">
            {links.map((link) => (
              <li key={link.href} className="border-b border-linha last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block py-4 font-serif text-lg text-azul"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
