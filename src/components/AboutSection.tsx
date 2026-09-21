import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { Heart, Clock, Utensils, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-cream-50 border-b border-borderWarm overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Visual / Composição de Imagens */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border-2 border-caramel-400/30 shadow-md aspect-4/5 bg-brown-900">
              <Image
                src="/images/sobre-padaria.jpg"
                alt="Processo artesanal de preparo de pães na Padaria Gustmann"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-cream-50/95 backdrop-blur-xs border border-borderWarm text-brown-900">
                <p className="font-serif text-base font-bold text-brown-950">
                  {siteConfig.name}
                </p>
                <p className="text-xs text-brown-700">
                  {siteConfig.highlightPhrase}
                </p>
              </div>
            </div>

            {/* Selo Flutuante */}
            <div className="absolute -bottom-4 -right-4 bg-terracotta-600 text-cream-50 p-4 rounded-md shadow-md hidden sm:block">
              <p className="font-serif text-2xl font-bold text-center leading-none">16</p>
              <p className="text-[11px] font-semibold tracking-wider uppercase text-center mt-1">Anos em<br/>Americana</p>
            </div>
          </div>

          {/* Lado Conteúdo */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta-600">
              <span>Nossa História</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-brown-950 font-bold tracking-tight">
              16 anos fazendo parte da sua rotina.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brown-700 leading-relaxed">
              <p>
                A Padaria Gustmann reúne tradição, produtos fresquinhos e o cuidado de quem acredita que qualidade e sabor fazem a diferença.
              </p>
              <p className="text-base text-brown-600">
                Ao longo de mais de uma década e meia em Americana, construímos uma relação de carinho e confiança com nossos clientes e vizinhos no Parque Novo Mundo, oferecendo sempre o pão mais gostoso para a sua mesa e os melhores momentos em família.
              </p>
            </div>

            {/* Pilares Confirmados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-cream-100/70 border border-borderWarm">
                <Clock className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-sm text-brown-900">Pães Fresquinhos</h3>
                  <p className="text-xs text-brown-600 mt-0.5">Produção e fornadas diárias para servir você com o máximo frescor.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-cream-100/70 border border-borderWarm">
                <Heart className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-sm text-brown-900">Qualidade e Sabor</h3>
                  <p className="text-xs text-brown-600 mt-0.5">Ingredientes selecionados e receitas feitas com carinho e tradição.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-cream-100/70 border border-borderWarm">
                <Utensils className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-sm text-brown-900">Padaria & Confeitaria</h3>
                  <p className="text-xs text-brown-600 mt-0.5">Variedade completa em pães, bolos, salgados e doces finos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-cream-100/70 border border-borderWarm">
                <ShieldCheck className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-sm text-brown-900">16 Anos de Confiança</h3>
                  <p className="text-xs text-brown-600 mt-0.5">Presença consolidada e respeito a cada cliente de Americana - SP.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
