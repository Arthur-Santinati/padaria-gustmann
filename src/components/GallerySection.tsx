import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { Instagram } from "lucide-react";

export default function GallerySection() {
  return (
    <section id="galeria" className="py-16 sm:py-20 bg-cream-50 border-b border-borderWarm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Galeria */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600 mb-2">
              Galeria de Fotos
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brown-950 font-bold tracking-tight">
              Direto do nosso forno e balcão.
            </h2>
            <p className="text-sm sm:text-base text-brown-700 mt-1 max-w-xl">
              Confira alguns dos produtos que você encontra todos os dias na Padaria Gustmann.
            </p>
          </div>

          <a
            href={siteConfig.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-100 hover:bg-cream-200 border border-borderWarm text-brown-900 px-4 py-2.5 rounded-md text-sm font-semibold transition-colors shrink-0 group"
          >
            <Instagram className="w-4 h-4 text-terracotta-600 group-hover:scale-110 transition-transform" />
            <span>Ver mais no Instagram</span>
          </a>
        </div>

        {/* Composição Editorial: Destaque Maior + Mosaico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Foto Principal em Destaque */}
          <div className="md:col-span-6 lg:col-span-7 relative rounded-lg overflow-hidden border border-borderWarm min-h-[300px] md:min-h-[440px] bg-brown-900 group">
            <Image
              src="/images/gallery-1.jpg"
              alt="Pães artesanais recém-assados na Padaria Gustmann"
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-cream-50">
              <span className="text-xs uppercase font-bold tracking-wider text-caramel-400">
                Fornadas Diárias
              </span>
              <p className="font-serif text-lg sm:text-xl font-bold">
                Pães tradicionais saindo quentinhos do forno
              </p>
            </div>
          </div>

          {/* Grid Lateral com 4 fotos complementares */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Foto 2: Doces */}
            <div className="relative rounded-lg overflow-hidden border border-borderWarm aspect-square bg-brown-900 group">
              <Image
                src="/images/gallery-2.jpg"
                alt="Doces finos e sobremesas na Padaria Gustmann"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 250px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/70 via-transparent to-transparent opacity-90 flex flex-col justify-end p-3 text-cream-50">
                <span className="text-[11px] font-semibold text-caramel-300">Doces & Confeitaria</span>
              </div>
            </div>

            {/* Foto 3: Café */}
            <div className="relative rounded-lg overflow-hidden border border-borderWarm aspect-square bg-brown-900 group">
              <Image
                src="/images/gallery-3.jpg"
                alt="Café quentinho servido na padaria"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 250px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/70 via-transparent to-transparent opacity-90 flex flex-col justify-end p-3 text-cream-50">
                <span className="text-[11px] font-semibold text-caramel-300">Café da Manhã</span>
              </div>
            </div>

            {/* Foto 4: Bolos */}
            <div className="relative rounded-lg overflow-hidden border border-borderWarm aspect-square bg-brown-900 group">
              <Image
                src="/images/gallery-5.jpg"
                alt="Bolos de vitrine na Padaria Gustmann"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 250px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/70 via-transparent to-transparent opacity-90 flex flex-col justify-end p-3 text-cream-50">
                <span className="text-[11px] font-semibold text-caramel-300">Bolos Especiais</span>
              </div>
            </div>

            {/* Foto 5: Salgados */}
            <div className="relative rounded-lg overflow-hidden border border-borderWarm aspect-square bg-brown-900 group">
              <Image
                src="/images/gallery-6.jpg"
                alt="Salgados assados e fritos da Padaria Gustmann"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 250px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/70 via-transparent to-transparent opacity-90 flex flex-col justify-end p-3 text-cream-50">
                <span className="text-[11px] font-semibold text-caramel-300">Salgados do Balcão</span>
              </div>
            </div>

          </div>

        </div>

        {/* Chamada para o Instagram Oficial */}
        <div className="mt-8 p-5 rounded-lg bg-cream-100/60 border border-borderWarm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cream-50 text-terracotta-600 rounded-full border border-borderWarm shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-sm sm:text-base font-bold text-brown-950">
                Acompanhe o dia a dia no Instagram
              </p>
              <p className="text-xs text-brown-700">
                Veja os stories e publicações mais recentes em @padariagustmann.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-colors shrink-0"
          >
            <span>Acessar @padariagustmann</span>
          </a>
        </div>

      </div>
    </section>
  );
}
