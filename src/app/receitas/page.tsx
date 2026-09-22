import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PaginaHero from "@/components/PaginaHero";
import Receitas from "@/components/Receitas";
import Marque from "@/components/Marque";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Receitas — Mima's Cookies",
  description:
    "Cookie de frigideira, sanduíche de sorvete, bolo de cookie: o que dá pra fazer com a massa da Mima's além do cookie de sempre.",
};

export default function ReceitasPage() {
  return (
    <>
      <Nav />
      <main>
        <PaginaHero
          trilha="Receitas"
          titulo="Mais formas de aproveitar a massa"
          descricao="Além do cookie tradicional, aqui vão outras receitas que testamos e aprovamos."
          imagem="/images/cookies-assados.jpg"
        />
        <Receitas />
        <Marque />
      </main>
      <Footer />
    </>
  );
}
