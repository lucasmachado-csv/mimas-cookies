"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [enviado, setEnviado] = useState(false);

  if (enviado) {
    return (
      <p className="font-serif text-lg italic text-azul">
        Anotado! Você vai ser a primeira pessoa a saber.
      </p>
    );
  }

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: integrar com o provedor de e-mail marketing escolhido
        setEnviado(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Seu e-mail
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="seu@email.com"
        className="w-full rounded-full border border-linha bg-white/70 px-5 py-3 text-tinta placeholder:text-tinta-suave/60 focus:border-azul focus:outline-2 focus:outline-azul"
      />
      <button
        type="submit"
        className="rounded-full bg-azul px-7 py-3 font-bold text-creme transition-colors hover:bg-profundo"
      >
        Quero saber
      </button>
    </form>
  );
}
