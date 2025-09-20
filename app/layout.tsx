import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "GSMST CSHS",
  description: "Created and maintained by GSMST students",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-display bg-background">
        <SideBar />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
