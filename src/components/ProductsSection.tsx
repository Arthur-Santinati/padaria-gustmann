import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { MessageCircle } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-16 sm:py-20 bg-cream-100/60 border-b border-borderWarm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600 bg-cream-50 px-3 py-1 rounded-full border border-borderWarm">
            Nossos Produtos
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-brown-950 font-bold tracking-tight">
            Feito para todos os momentos do dia.
          </h2>

          <p className="text-base text-brown-700 leading-relaxed">
            Pães que acabaram de sair do forno, bolos caseiros, doces e salgados preparados com qualidade e tradição.
          </p>
        </div>

        {/* Grid de Produtos: Foto Real + Categoria + Descrição Curta + CTA WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-cream-50 border border-borderWarm rounded-lg overflow-hidden shadow-xs hover:border-caramel-400/80 transition-all flex flex-col group"
            >
              {/* Foto do Produto */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-brown-900">
                <Image
                  src={cat.image}
                  alt={`${cat.name} da Padaria Gustmann`}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
                <div className="absolute top-3 right-3 bg-brown-950/80 text-caramel-400 text-xs font-semibold px-2.5 py-1 rounded">
                  {cat.badge}
                </div>
              </div>

              {/* Informações Diretas */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brown-900">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-brown-700 mt-1.5 leading-relaxed">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-borderWarm/60">
                  <a
                    href={`https://wa.me/${siteConfig.contacts.phoneRaw}?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20sobre%20${encodeURIComponent(cat.name.toLowerCase())}%20da%20Padaria%20Gustmann.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-terracotta-600 hover:text-terracotta-700 hover:underline"
                  >
                    <MessageCircle className="w-4 h-4 text-terracotta-600 shrink-0" />
                    <span>Consultar pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA Unificado Abaixo da Seção */}
        <div className="mt-12 p-6 sm:p-7 rounded-lg bg-cream-50 border border-borderWarm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-brown-950">
              Quer encomendar ou saber sobre as fornadas de hoje?
            </h4>
            <p className="text-sm text-brown-700">
              Fale diretamente com a nossa equipe pelo WhatsApp.
            </p>
          </div>

          <a
            href={siteConfig.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-5 py-3 rounded-md text-sm font-semibold transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
