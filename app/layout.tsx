import type { Metadata } from "next";
import { Lato, Unbounded } from "next/font/google";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/global.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  preload: true,
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["900"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cemboo - Watch Movies Online",
  description: "Cemboo - Movies Application - Watch Movies Online",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${unbounded.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}