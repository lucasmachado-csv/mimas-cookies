"use client";

import { useState } from "react";
import Link from "next/link";

/* TODO Carolina: trocar pelo e-mail oficial da marca antes do lançamento.
   Enquanto este endereço não existir, as mensagens não chegam em ninguém.
   O formulário abre o programa de e-mail da pessoa com o texto pronto — é o
   jeito de funcionar de verdade sem servidor. Quando houver um provedor de
   formulário contratado, dá para trocar por um envio direto. */
const CONTATO_EMAIL = "contato@mimascookies.com.br";

export default function Contato({ fundo = "bg-baunilha" }: { fundo?: string }) {
  const [email, setEmail] = useState("");
  const [pergunta, setPergunta] = useState("");

  function enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const assunto = encodeURIComponent("Pergunta pelo site da Mima's");
    const corpo = encodeURIComponent(
      `${pergunta}\n\n---\nResponder para: ${email}`,
    );
    window.location.href = `mailto:${CONTATO_EMAIL}?subject=${assunto}&body=${corpo}`;
  }

  return (
    <section id="pergunte" className={`${fundo} py-14 lg:py-16`}>
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-azul text-balance sm:text-3xl">
            Pergunta pra gente
          </h2>
          <p className="mt-4 text-tinta-suave">
            Ainda com dúvida? Dá uma olhada na{" "}
            <Link href="/ingredientes" className="underline hover:text-azul">
              lista completa de ingredientes
            </Link>{" "}
            ou manda sua pergunta abaixo.
          </p>
        </div>

        <form
          onSubmit={enviar}
          className="mt-8 rounded-3xl border border-linha bg-creme p-6 sm:p-8"
        >
          <label
            htmlFor="contato-email"
            className="block text-sm font-bold text-azul"
          >
            Seu e-mail
          </label>
          <input
            id="contato-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="mt-2 w-full rounded-2xl border border-linha bg-white/70 px-4 py-3 text-tinta placeholder:text-tinta-suave/60 focus:border-azul focus:outline-2 focus:outline-azul"
          />

          <label
            htmlFor="contato-pergunta"
            className="mt-5 block text-sm font-bold text-azul"
          >
            Sua pergunta
          </label>
          <textarea
            id="contato-pergunta"
            required
            rows={4}
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            placeholder="Pode perguntar qualquer coisa sobre a massa."
            className="mt-2 w-full resize-y rounded-2xl border border-linha bg-white/70 px-4 py-3 text-tinta placeholder:text-tinta-suave/60 focus:border-azul focus:outline-2 focus:outline-azul"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-azul px-7 py-3.5 font-bold text-creme transition-colors hover:bg-profundo sm:w-auto"
          >
            Enviar pergunta
          </button>
        </form>
      </div>
    </section>
  );
}
