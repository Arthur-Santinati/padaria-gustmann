import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { MessageCircle, MapPin, Award, CheckCircle2 } from "lucide-react";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg pt-2 text-sm text-brown-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0" />
                <span>Pães quentinhos em fornadas diárias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0" />
                <span>Confeitaria e receitas tradicionais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0" />
                <span>Atendimento próximo e acolhedor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0" />
                <span>Localização fácil no Parque Novo Mundo</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 w-full sm:w-auto">
              <a
                href={siteConfig.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-6 py-3.5 rounded-md font-semibold text-base transition-colors shadow-sm"
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

            {/* Endereço resumido de apoio */}
            <p className="text-xs text-brown-500 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-brown-500 shrink-0" />
              <span>Rua Lindóia, 410 - Parque Novo Mundo, Americana - SP</span>
            </p>
          </div>

          {/* Lado Visual Fotográfico */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura de estilo artesanal acolhedor */}
              <div className="relative rounded-lg overflow-hidden border-2 border-caramel-400/40 shadow-md aspect-4/5 sm:aspect-square lg:aspect-4/5 bg-brown-900">
                <Image
                  src="/images/hero-bread.jpg"
                  alt="Pães artesanais recém-saídos do forno na Padaria Gustmann"
                  fill
                  priority
                  className="object-cover hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                />
                
                {/* Legenda de balcão integrada */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-950/90 via-brown-950/50 to-transparent p-5 text-cream-50">
                  <span className="text-xs uppercase font-semibold text-caramel-400 tracking-wider">
                    Tradição & Sabor
                  </span>
                  <p className="font-serif text-lg font-bold leading-snug">
                    Pão quentinho e crocante todos os dias
                  </p>
                </div>
              </div>

              {/* Tag de destaque 16 anos */}
              <div className="absolute -top-3 -left-3 bg-brown-900 text-cream-100 border border-caramel-400/60 px-4 py-2 rounded-md shadow-sm hidden sm:flex items-center gap-2">
                <span className="font-serif text-xl font-bold text-caramel-400">16</span>
                <span className="text-xs leading-tight font-medium">anos servindo<br/>Americana</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
