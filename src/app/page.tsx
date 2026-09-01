import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OQueE from "@/components/OQueE";
import Missao from "@/components/Missao";
import Produto from "@/components/Produto";
import Confianca from "@/components/Confianca";
import ComoUsar from "@/components/ComoUsar";
import NossaHistoria from "@/components/NossaHistoria";
import Social from "@/components/Social";
import OndeComprar from "@/components/OndeComprar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OQueE />
        <Missao />
        <Produto />
        <Confianca />
        <ComoUsar />
        <NossaHistoria />
        <Social />
        <OndeComprar />
      </main>
      <Footer />
    </>
  );
}
