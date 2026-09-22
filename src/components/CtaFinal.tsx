import Link from "next/link";

export default function CtaFinal() {
  return (
    <section className="py-12">
      <p className="mx-auto max-w-mima px-6 lg:px-10 text-center text-tinta-suave">
        Ficou com dúvida sobre a segurança de comer cru?{" "}
        <Link href="/#pode-comer-crua" className="underline hover:text-azul">
          Entenda o processo aqui
        </Link>{" "}
        — ou, se preferir,{" "}
        <Link href="/perguntas#pergunte" className="underline hover:text-azul">
          envie sua pergunta diretamente
        </Link>
        .
      </p>
    </section>
  );
}
