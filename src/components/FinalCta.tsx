import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { MessageCircle, MapPin } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-16 sm:py-20 bg-brown-950 text-cream-50 relative overflow-hidden border-b border-caramel-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        
        <span className="text-xs uppercase font-bold tracking-widest text-caramel-400">
          Esperamos por você
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-50 leading-tight">
          Deu vontade? Fale com a gente.
        </h2>

        <p className="text-base sm:text-lg text-cream-100/80 max-w-xl mx-auto">
          Entre em contato pelo WhatsApp ou venha nos visitar. Pães quentinhos e doces fresquinhos todos os dias em Americana.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={siteConfig.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-7 py-3.5 rounded-md font-semibold text-base transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-cream-50" />
            <span>Falar no WhatsApp</span>
          </a>

          <Link
            href="#localizacao"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brown-800 hover:bg-brown-700 border border-brown-600 text-cream-50 px-7 py-3.5 rounded-md font-medium text-base transition-colors"
          >
            <MapPin className="w-4 h-4 text-caramel-400" />
            <span>Como chegar</span>
          </Link>
        </div>

        <p className="text-xs text-cream-100/60 pt-2">
          {siteConfig.address.fullAddress}
        </p>
      </div>
    </section>
  );
}
