import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Missao from "@/components/Missao";
import Produto from "@/components/Produto";
import Confianca from "@/components/Confianca";
import ComoUsar from "@/components/ComoUsar";
import OndeComprar from "@/components/OndeComprar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Missao />
        <Produto />
        <Confianca />
        <ComoUsar />
        <OndeComprar />
      </main>
      <Footer />
    </>
  );
}
