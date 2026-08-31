import type { Metadata } from "next";
import Nav from "@/components/Nav";
import IngredientesHero from "@/components/IngredientesHero";
import IngredientesSelos from "@/components/IngredientesSelos";
import IngredientesLista from "@/components/IngredientesLista";
import NaoUsamos from "@/components/NaoUsamos";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ingredientes — Mima's Cookies",
  description:
    "Tudo o que vai (e o que não vai) na massa de cookie da Mima's: farinha tratada termicamente, ovo pasteurizado, três açúcares e chocolate meio amargo.",
};

export default function IngredientesPage() {
  return (
    <>
      <Nav />
      <main>
        <IngredientesHero />
        <IngredientesSelos />
        <IngredientesLista />
        <NaoUsamos />
      </main>
      <Footer />
    </>
  );
}
