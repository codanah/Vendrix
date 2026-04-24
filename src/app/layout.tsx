import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vendrix — Smart Vending para empresas en Perú",
  description:
    "Máquinas expendedoras inteligentes instaladas en tu empresa. Snacks, bebidas y productos frescos disponibles 24/7. Sin costo de instalación.",
  openGraph: {
    title: "Vendrix — Smart Vending para empresas en Perú",
    description:
      "Máquinas expendedoras inteligentes instaladas en tu empresa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-black text-white"
        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
