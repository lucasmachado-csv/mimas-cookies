import type { Metadata } from "next";
import Nav from "@/components/Nav";
import HistoriaHero from "@/components/HistoriaHero";
import HistoriaTexto from "@/components/HistoriaTexto";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nossa História — Mima's Cookies",
  description:
    "A Mima's nasceu das visitas da minha família ao Brasil e do pedido que nunca mudava: massa de cookie. A história da Carolina, fundadora da Mima's.",
};

export default function NossaHistoriaPage() {
  return (
    <>
      <Nav />
      <main>
        <HistoriaHero />
        <HistoriaTexto />
      </main>
      <Footer />
    </>
  );
}
