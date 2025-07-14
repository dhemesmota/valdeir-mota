import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valdeir Moda - Conserto de Celulares",
  description:
    "Técnico especializado em manutenção de celulares. Troca de tela, bateria, conector de carga e conserto geral. Busco e entrego em casa!",
  keywords:
    "conserto celular, manutenção celular, troca tela, troca bateria, técnico celular, Valdeir Moda",
  authors: [{ name: "Valdeir Moda" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  manifest: "/manifest.json",
  themeColor: "#007bff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Valdeir Moda",
  },
  openGraph: {
    title: "Valdeir Moda - Conserto de Celulares",
    description:
      "Técnico especializado em manutenção de celulares. Busco e entrego em casa!",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valdeir Moda - Conserto de Celulares",
    description:
      "Técnico especializado em manutenção de celulares. Busco e entrego em casa!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
