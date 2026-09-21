"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site-config";
import { 
  MapPin, 
  MessageCircle, 
  Navigation, 
  Copy, 
  Check, 
  Clock, 
  Mail, 
  Instagram, 
  Phone 
} from "lucide-react";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.address.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-20 bg-cream-50 border-b border-borderWarm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600 bg-cream-100 px-3 py-1 rounded-full border border-borderWarm">
            Localização e Contato
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown-950 font-bold tracking-tight">
            Venha nos visitar.
          </h2>
          <p className="text-base text-brown-700">
            Estamos localizados no Parque Novo Mundo, em Americana - SP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card de Informações, Endereço e Horários */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Bloco de Endereço */}
            <div className="bg-cream-100/70 border border-borderWarm rounded-lg p-6 sm:p-7 space-y-4 shadow-xs">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-caramel-600">
                  Endereço
                </span>
                <h3 className="font-serif text-2xl font-bold text-brown-950 mt-1">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-terracotta-600 font-medium">
                  {siteConfig.tagline}
                </p>
              </div>

              <div className="p-4 bg-cream-50 rounded-md border border-borderWarm space-y-1 text-brown-800 text-sm">
                <p className="font-semibold text-brown-950">{siteConfig.address.street}, {siteConfig.address.number}</p>
                <p>{siteConfig.address.neighborhood}</p>
                <p>{siteConfig.address.city} - {siteConfig.address.state}</p>
                <p className="text-xs text-brown-600">CEP {siteConfig.address.cep}</p>
              </div>

              {/* Botões de Ação do Endereço */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 py-3 px-4 rounded-md font-semibold text-sm transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como chegar</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-2 bg-cream-50 hover:bg-cream-200 border border-borderWarm text-brown-800 py-3 px-4 rounded-md text-sm font-medium transition-colors"
                  aria-label="Copiar endereço completo"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-green-700 font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-brown-600" />
                      <span>Copiar endereço</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bloco de Horário de Funcionamento Oficial Confirmado */}
            <div className="bg-cream-100/70 border border-borderWarm rounded-lg p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta-600" />
                  <h4 className="font-serif text-base font-bold text-brown-900">
                    Horário de Atendimento
                  </h4>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-caramel-600 bg-cream-50 px-2 py-0.5 rounded border border-borderWarm">
                  Fornadas diárias
                </span>
              </div>

              <div className="divide-y divide-borderWarm/70 text-sm bg-cream-50 rounded-md border border-borderWarm overflow-hidden">
                {siteConfig.openingHours.schedule.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 text-brown-900">
                    <span className="font-medium text-brown-800">{item.days}</span>
                    <span className="font-semibold text-brown-950 font-mono text-xs sm:text-sm bg-cream-100/60 px-2 py-1 rounded">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloco de Contatos Oficiais */}
            <div id="contato" className="bg-brown-900 text-cream-50 rounded-lg p-6 space-y-4 shadow-xs">
              <h4 className="font-serif text-lg font-bold text-caramel-400">
                Contatos Oficiais
              </h4>

              <div className="space-y-2.5">
                {/* WhatsApp & Telefone Fixo */}
                <a
                  href={siteConfig.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded bg-brown-800/80 hover:bg-brown-800 border border-brown-700 transition-colors group"
                >
                  <div className="p-2 rounded bg-terracotta-600 text-cream-50 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase font-semibold text-caramel-400 block">
                      WhatsApp e Telefone Fixo
                    </span>
                    <span className="text-sm font-semibold text-cream-50 group-hover:text-caramel-300 transition-colors truncate block">
                      {siteConfig.contacts.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Ligação Direta Fixo */}
                <a
                  href={`tel:+${siteConfig.contacts.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded bg-brown-800/80 hover:bg-brown-800 border border-brown-700 transition-colors group"
                >
                  <div className="p-2 rounded bg-brown-700 text-caramel-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase font-semibold text-caramel-400 block">
                      Ligar para o Balcão (Telefone Fixo)
                    </span>
                    <span className="text-sm font-semibold text-cream-50 group-hover:text-caramel-300 transition-colors truncate block">
                      {siteConfig.contacts.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* E-mail */}
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="flex items-center gap-3 p-3 rounded bg-brown-800/80 hover:bg-brown-800 border border-brown-700 transition-colors group"
                >
                  <div className="p-2 rounded bg-brown-700 text-caramel-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase font-semibold text-caramel-400 block">
                      E-mail
                    </span>
                    <span className="text-sm font-semibold text-cream-50 group-hover:text-caramel-300 transition-colors truncate block">
                      {siteConfig.contacts.email}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded bg-brown-800/80 hover:bg-brown-800 border border-brown-700 transition-colors group"
                >
                  <div className="p-2 rounded bg-brown-700 text-caramel-400 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase font-semibold text-caramel-400 block">
                      Instagram
                    </span>
                    <span className="text-sm font-semibold text-cream-50 group-hover:text-caramel-300 transition-colors truncate block">
                      {siteConfig.contacts.instagramHandle}
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Lado do Mapa Interativo */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="bg-cream-100/70 border border-borderWarm rounded-lg overflow-hidden shadow-xs">
              <div className="p-4 border-b border-borderWarm flex items-center justify-between bg-cream-50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-terracotta-600" />
                  <span className="font-serif font-bold text-sm text-brown-900">
                    Como Chegar
                  </span>
                </div>
                <span className="text-xs text-brown-600">
                  Rua Lindóia, 410 - Americana
                </span>
              </div>

              {/* Embed do Google Maps */}
              <div className="relative w-full h-[380px] sm:h-[440px] bg-cream-200">
                <iframe
                  title="Localização da Padaria Gustmann no Google Maps"
                  src="https://maps.google.com/maps?q=Rua+Lind%C3%B3ia,+410+-+Parque+Novo+Mundo,+Americana+-+SP,+13467-640&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Rodapé do Mapa */}
              <div className="p-4 bg-cream-50 border-t border-borderWarm flex items-center justify-between text-xs">
                <span className="text-brown-700">
                  Parque Novo Mundo, Americana - SP
                </span>
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-terracotta-600 hover:text-terracotta-700 inline-flex items-center gap-1"
                >
                  <span>Abrir no Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
