import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { MessageCircle, Sparkles } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-16 sm:py-20 bg-cream-100/60 border-b border-borderWarm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-terracotta-600 bg-cream-50 px-3 py-1 rounded-full border border-borderWarm">
            <Sparkles className="w-3.5 h-3.5 text-caramel-500" />
            <span>Nossas Especialidades</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-brown-950 font-bold tracking-tight">
            Feito para todos os momentos do dia.
          </h2>

          <p className="text-base text-brown-700 leading-relaxed">
            Do café da manhã ao lanche da tarde, tudo preparado com o carinho, a tradição e a qualidade que você já conhece na Padaria Gustmann.
          </p>
        </div>

        {/* Grid de Categorias Visuais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-cream-50 border border-borderWarm rounded-lg overflow-hidden shadow-xs hover:border-caramel-400/80 transition-all duration-300 flex flex-col group"
            >
              {/* Imagem da Categoria */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-brown-900">
                <Image
                  src={cat.image}
                  alt={`${cat.name} - Padaria Gustmann`}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
                <div className="absolute top-3 right-3 bg-brown-950/85 backdrop-blur-xs text-caramel-400 text-xs font-semibold px-2.5 py-1 rounded-sm border border-caramel-400/30">
                  {cat.badge}
                </div>
              </div>

              {/* Informações da Categoria */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brown-900 group-hover:text-terracotta-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs font-medium text-caramel-600 mb-2">
                    {cat.subtitle}
                  </p>
                  <p className="text-sm text-brown-700 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-borderWarm/60 flex items-center justify-between text-xs text-brown-600">
                  <span>Consulte fornadas & encomendas</span>
                  <a
                    href={siteConfig.contacts.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-terracotta-600 hover:text-terracotta-700 inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Pedir</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Card Especial de Encomendas & Atendimento */}
          <div className="bg-brown-900 text-cream-50 border border-caramel-500/40 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-caramel-400">
                Atendimento Direto
              </span>
              <h3 className="font-serif text-2xl font-bold leading-snug">
                Precisa de pães quentes ou encomendas especiais?
              </h3>
              <p className="text-sm text-cream-100/80 leading-relaxed">
                Fale conosco diretamente pelo WhatsApp para saber sobre horários de fornadas frescas, bolos e pedidos para a sua família ou confraternização.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-brown-700">
              <a
                href={siteConfig.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-caramel-500 hover:bg-caramel-600 text-brown-950 font-bold px-4 py-3 rounded-md text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brown-950" />
                <span>Fale com a gente pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Banner Abaixo da Seção */}
        <div className="mt-12 p-6 rounded-lg bg-cream-50 border border-borderWarm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-brown-950">
              Quer saber o que está saindo do forno agora?
            </h4>
            <p className="text-sm text-brown-700">
              Chame nossa equipe e tire suas dúvidas com rapidez.
            </p>
          </div>
          <a
            href={siteConfig.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale com a gente pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
