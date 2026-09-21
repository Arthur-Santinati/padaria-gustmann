import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { Instagram, MessageCircle, Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 text-cream-100 border-t border-brown-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Coluna 1: Logo Oficial & Descrição */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#inicio" className="flex items-center gap-3">
              <div className="relative w-14 h-10 shrink-0 bg-white rounded p-0.5 border border-caramel-500/40">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo Padaria Gustmann"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-cream-50 hover:text-caramel-400 transition-colors block leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-caramel-400">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-cream-100/80 leading-relaxed max-w-sm">
              {siteConfig.yearsOfTradition} anos de tradição levando pães fresquinhos todos os dias para as famílias de Americana - SP.
            </p>

            <div className="space-y-1.5 text-xs text-cream-100/70 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-caramel-400 shrink-0" />
                <span>Rua Lindóia, 410 - Parque Novo Mundo, Americana - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-caramel-400 shrink-0" />
                <span>Seg a Sex: 06h–19h | Sáb: 06h–18h | Dom: 06h30–12h</span>
              </div>
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
                  Localização e Horários
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
                href={`tel:+${siteConfig.contacts.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-caramel-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-caramel-400 shrink-0" />
                <span>Telefone Fixo: {siteConfig.contacts.phoneFormatted}</span>
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
