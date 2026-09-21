import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 text-cream-100 border-t border-brown-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Coluna 1: Nome & Descrição Oficial */}
          <div className="md:col-span-5 space-y-3">
            <Link href="#inicio" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-cream-50 hover:text-caramel-400 transition-colors">
                {siteConfig.name}
              </span>
              <span className="block text-xs uppercase tracking-widest font-semibold text-caramel-400 mt-0.5">
                {siteConfig.tagline}
              </span>
            </Link>
            
            <p className="text-sm text-cream-100/80 leading-relaxed max-w-sm">
              {siteConfig.yearsOfTradition} anos de tradição levando pães fresquinhos todos os dias para as famílias de Americana - SP.
            </p>

            <div className="flex items-center gap-2 text-xs text-caramel-400/90 pt-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Americana - SP</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-50">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-cream-100/80">
              <li>
                <Link href="#inicio" className="hover:text-caramel-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-caramel-400 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-caramel-400 transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-caramel-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#localizacao" className="hover:text-caramel-400 transition-colors">
                  Localização
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos Oficiais */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-50">
              Contatos
            </h4>
            
            <div className="space-y-2.5 text-sm text-cream-100/80">
              <a
                href={siteConfig.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-caramel-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-caramel-400 shrink-0" />
                <span>WhatsApp: {siteConfig.contacts.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contacts.email}`}
                className="flex items-center gap-2.5 hover:text-caramel-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-caramel-400 shrink-0" />
                <span className="truncate">E-mail: {siteConfig.contacts.email}</span>
              </a>

              <a
                href={siteConfig.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-caramel-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-caramel-400 shrink-0" />
                <span>Instagram: {siteConfig.contacts.instagramHandle}</span>
              </a>

              <div className="pt-2 text-xs text-cream-100/60 leading-relaxed">
                <p>{siteConfig.address.fullAddress}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Linha Divisória e Copyright */}
        <div className="mt-10 pt-6 border-t border-brown-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-100/60">
          <p>
            © {currentYear} {siteConfig.name} | {siteConfig.tagline}. Todos os direitos reservados.
          </p>
          <p>
            Americana - SP
          </p>
        </div>

      </div>
    </footer>
  );
}
