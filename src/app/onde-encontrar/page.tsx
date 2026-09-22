import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PaginaHero from "@/components/PaginaHero";
import Lojas from "@/components/Lojas";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Onde encontrar — Mima's Cookies",
  description:
    "Os mercados que vendem a massa de cookie da Mima's. Começamos por Florianópolis.",
};

export default function OndeEncontrarPage() {
  return (
    <>
      <Nav />
      <main>
        <PaginaHero
          trilha="Onde encontrar"
          titulo="Procure a embalagem azul"
          descricao="A Mima's fica na geladeira, perto dos refrigerados."
          imagem="/images/pilha-leite.jpg"
        />
        <Lojas />
      </main>
      <Footer />
    </>
  );
}
