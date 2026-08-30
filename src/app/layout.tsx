import type { Metadata } from "next";
import { Figtree, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mima's Cookies — massa de cookie para comer crua ou assar",
  description:
    "Massa de cookie chocolate chip, segura para comer crua ou assar em casa. Sem lactose, zero esforço, prazer completo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${figtree.variable} ${caslon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
