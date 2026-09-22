import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-mima px-6 lg:px-10 py-20 text-center lg:py-28">
        {/* Ela também aparece aqui — correu demais e passou do lugar. */}
        <Image
          src="/images/mima-correndo.png"
          alt=""
          aria-hidden
          width={484}
          height={667}
          priority
          sizes="14rem"
          className="mx-auto h-auto w-48 sm:w-56"
        />

        <h1 className="mt-8 font-serif text-3xl text-azul text-balance sm:text-4xl">
          Essa página a gente não tem
        </h1>
        <p className="mx-auto mt-4 max-w-md text-tinta-suave">
          Deve ter passado do ponto, igual cookie esquecido no forno. Mas a
          massa continua aqui.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-azul px-7 py-3.5 font-bold text-creme transition-colors hover:bg-profundo"
          >
            Voltar para o início
          </Link>
          <Link
            href="/perguntas"
            className="rounded-full border-2 border-azul px-7 py-3.5 font-bold text-azul transition-colors hover:bg-baunilha"
          >
            Perguntas frequentes
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
