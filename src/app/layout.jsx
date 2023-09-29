import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import manifest from "./manifest";
const manifestData = manifest();

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "Your Bazaar - Shop, Explore, and Discover Unique Products",
  description: manifestData.description,
  keywords: manifestData.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" dir="ltr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
