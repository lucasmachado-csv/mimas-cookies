import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PaginaHero from "@/components/PaginaHero";
import Perguntas from "@/components/Perguntas";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Perguntas — Mima's Cookies",
  description:
    "Pode comer crua? Quanto tempo no forno? Precisa de geladeira? As dúvidas mais comuns sobre a massa de cookie da Mima's.",
};

export default function PerguntasPage() {
  return (
    <>
      <Nav />
      <main>
        <PaginaHero
          trilha="Perguntas"
          titulo="Perguntas frequentes"
          descricao="Cookie dough é novidade por aqui — então nenhuma pergunta é boba."
          imagem="/images/hero-massa.jpg"
        />
        <Perguntas />
      </main>
      <Footer />
    </>
  );
}
