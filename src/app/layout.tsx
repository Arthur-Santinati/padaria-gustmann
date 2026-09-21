import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site-config";
import StructuredData from "@/components/StructuredData";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const viewport: Viewport = {
  themeColor: "#802616",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Padaria Gustmann | Padaria e Confeitaria em Americana",
  description: "Padaria Gustmann em Americana - SP. Pães fresquinhos, confeitaria e sabores feitos com tradição e qualidade.",
  keywords: [
    "Padaria Gustmann",
    "Padaria em Americana",
    "Confeitaria em Americana",
    "Pão francês fresquinho",
    "Parque Novo Mundo Americana",
    "Padaria tradicional Americana SP",
  ],
  authors: [{ name: "Padaria Gustmann" }],
  creator: "Padaria Gustmann",
  publisher: "Padaria Gustmann",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Padaria Gustmann | Padaria e Confeitaria em Americana",
    description: "Padaria Gustmann em Americana - SP. Pães fresquinhos todos os dias, confeitaria e sabores que fazem a diferença.",
    type: "website",
    locale: "pt_BR",
    siteName: "Padaria Gustmann",
    url: "https://www.padariagustmann.com.br",
    images: [
      {
        url: "https://www.padariagustmann.com.br/images/logo.png",
        width: 1024,
        height: 724,
        alt: "Logo Padaria Gustmann",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Padaria Gustmann | Padaria e Confeitaria em Americana",
    description: "Padaria Gustmann em Americana - SP. Pães fresquinhos todos os dias, confeitaria e sabores que fazem a diferença.",
    images: ["https://www.padariagustmann.com.br/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="bg-cream-50 text-brown-900 selection:bg-caramel-400 selection:text-brown-950 min-h-screen flex flex-col">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
