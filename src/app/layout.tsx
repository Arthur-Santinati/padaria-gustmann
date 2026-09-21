import type { Metadata, Viewport } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Providers from "@/components/Providers";
import SplashScreen from "@/components/SplashScreen";
import CartDrawer from "@/components/CartDrawer";
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
    "Cardápio Padaria Gustmann",
    "Encomenda de bolo Americana",
  ],
  authors: [{ name: "Padaria Gustmann" }],
  creator: "Padaria Gustmann",
  publisher: "Padaria Gustmann",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Padaria Gustmann | Padaria e Confeitaria em Americana",
    description: "Padaria Gustmann em Americana - SP. Pães fresquinhos todos os dias, confeitaria e sabores que fazem a diferença.",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-cream-50 text-brown-900 selection:bg-caramel-400 selection:text-brown-950 min-h-screen flex flex-col antialiased">
        <Providers>
          <SplashScreen />
          {children}
          <CartDrawer />
          <WhatsAppFloatingButton />
        </Providers>
      </body>
    </html>
  );
}
