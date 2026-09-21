import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { MessageCircle, MapPin, Award, Check } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-cream-50 pt-8 pb-16 lg:py-20 overflow-hidden border-b border-borderWarm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Lado Textual */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Badge de Tradição */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel-100 border border-caramel-400/40 text-brown-900 text-xs sm:text-sm font-medium">
              <Award className="w-4 h-4 text-caramel-600 shrink-0" />
              <span>{siteConfig.yearsOfTradition} anos de tradição em Americana - SP</span>
            </div>

            {/* Headline Principal */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-brown-950 font-bold leading-tight tracking-tight">
              Fresquinho todos os dias, do jeito que você gosta.
            </h1>

            {/* Subheadline Fiel */}
            <p className="text-base sm:text-lg text-brown-700 leading-relaxed max-w-xl">
              Há 16 anos levando pães, doces e sabores que fazem parte da rotina de Americana.
            </p>

            {/* Destaques Rápidos de Balcão */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg pt-1 text-sm text-brown-800">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-caramel-100 text-caramel-700 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Pães fresquinhos todos os dias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-caramel-100 text-caramel-700 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Confeitaria e receitas tradicionais</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-caramel-100 text-caramel-700 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Atendimento próximo e acolhedor</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-caramel-100 text-caramel-700 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Parque Novo Mundo, Americana</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full sm:w-auto">
              <a
                href={siteConfig.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-6 py-3.5 rounded-md font-semibold text-base transition-colors shadow-xs"
              >
                <MessageCircle className="w-5 h-5 text-cream-50" />
                <span>Falar no WhatsApp</span>
              </a>

              <Link
                href="#localizacao"
                className="inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-cream-200 border border-borderWarm text-brown-900 px-6 py-3.5 rounded-md font-medium text-base transition-colors"
              >
                <MapPin className="w-4 h-4 text-caramel-600" />
                <span>Como chegar</span>
              </Link>
            </div>

            {/* Endereço de apoio */}
            <p className="text-xs text-brown-600 flex items-center gap-1.5 pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-brown-500 shrink-0" />
              <span>Rua Lindóia, 410 - Parque Novo Mundo, Americana - SP</span>
            </p>
          </div>

          {/* Lado Visual Fotográfico */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-lg overflow-hidden border border-borderWarm shadow-xs aspect-4/5 sm:aspect-square lg:aspect-4/5 bg-brown-900">
                <Image
                  src="/images/hero-bread.jpg"
                  alt="Pães artesanais recém-saídos do forno na Padaria Gustmann"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                />
                
                {/* Legenda de balcão integrada */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-950/90 via-brown-950/40 to-transparent p-5 text-cream-50">
                  <span className="text-xs uppercase font-semibold text-caramel-400 tracking-wider">
                    Padaria Gustmann
                  </span>
                  <p className="font-serif text-lg font-bold leading-snug">
                    Pão quentinho todos os dias
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
