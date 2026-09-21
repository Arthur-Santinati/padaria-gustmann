import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { Instagram, Camera } from "lucide-react";

export default function GallerySection() {
  return (
    <section id="galeria" className="py-16 sm:py-20 bg-cream-100/50 border-b border-borderWarm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Galeria */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-terracotta-600 mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Nossa Galeria</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brown-950 font-bold tracking-tight">
              Sabores que enchem os olhos.
            </h2>
            <p className="text-sm sm:text-base text-brown-700 mt-2 max-w-xl">
              Um pouco do que sai diariamente dos nossos fornos e do nosso balcão para adoçar e enriquecer o seu dia.
            </p>
          </div>

          <a
            href={siteConfig.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream-50 hover:bg-cream-200 border border-borderWarm text-brown-900 px-4 py-2.5 rounded-md text-sm font-semibold transition-colors shrink-0 shadow-xs group"
          >
            <Instagram className="w-4 h-4 text-terracotta-600 group-hover:scale-110 transition-transform" />
            <span>Ver mais no Instagram</span>
          </a>
        </div>

        {/* Grid Visual */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {siteConfig.gallery.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden border border-borderWarm aspect-square bg-brown-900 shadow-xs"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-cream-50">
                <span className="text-[11px] uppercase font-bold tracking-wider text-caramel-400">
                  {item.category}
                </span>
                <p className="font-serif text-sm sm:text-base font-bold leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Conexão com o Instagram */}
        <div className="mt-10 p-6 rounded-lg bg-cream-50 border border-borderWarm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-terracotta-50 text-terracotta-600 rounded-full border border-terracotta-100">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-base font-bold text-brown-900">
                Acompanhe a Padaria Gustmann no Instagram
              </p>
              <p className="text-xs sm:text-sm text-brown-600">
                Siga {siteConfig.contacts.instagramHandle} para ver novidades, fotos e o dia a dia da padaria.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shrink-0"
          >
            <span>Seguir @padariagustmann</span>
          </a>
        </div>

      </div>
    </section>
  );
}
