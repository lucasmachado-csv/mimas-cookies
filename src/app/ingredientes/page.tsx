import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PaginaHero from "@/components/PaginaHero";
import IngredientesLista from "@/components/IngredientesLista";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ingredientes — Mima's Cookies",
  description:
    "Tudo o que vai na massa de cookie da Mima's: farinha tratada termicamente, ovo pasteurizado, três açúcares e chocolate meio doce.",
};

export default function IngredientesPage() {
  return (
    <>
      <Nav />
      <main>
        <PaginaHero
          trilha="Ingredientes"
          titulo="Nossos ingredientes"
          descricao="A gente acredita que você merece saber exatamente o que está comendo. Por isso a lista é curta, clara e sem nada escondido."
          imagem="/images/cookie-partido.jpg"
        />
        <IngredientesLista />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
