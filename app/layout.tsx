import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import { Cormorant_Garamond } from "next/font/google";
import theme from "../theme";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "GSMST CSHS",
  description: "Created and maintained by GSMST students",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
})

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
      <body>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>
            <Navbar />
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
