import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OQueE from "@/components/OQueE";
import Produto from "@/components/Produto";
import Confianca from "@/components/Confianca";
import ComoUsar from "@/components/ComoUsar";
import ReceitasDestaque from "@/components/ReceitasDestaque";
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
        <Confianca />
        <Produto />
        <ComoUsar />
        <ReceitasDestaque />
        <NossaHistoria />
        <Social />
        <OndeComprar />
      </main>
      <Footer />
    </>
  );
}
