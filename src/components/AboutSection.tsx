import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-cream-50 border-b border-borderWarm overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Coluna 1: Foto Real da Padaria */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-borderWarm shadow-xs bg-brown-900 aspect-4/3 sm:aspect-16/11">
              <Image
                src="/images/sobre-padaria.jpg"
                alt="Ambiente e tradição da Padaria Gustmann em Americana"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              
              {/* Selo Autêntico da Padaria */}
              <div className="absolute bottom-3 left-3 bg-brown-950/85 backdrop-blur-xs border border-caramel-500/30 px-3 py-1.5 rounded text-cream-50 text-xs">
                <span className="font-semibold text-caramel-400">Padaria Gustmann</span>
                <span className="text-cream-100/70 ml-1.5">• Americana - SP</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Texto da História */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Nossa história
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-brown-950 font-bold tracking-tight leading-tight">
              Há 16 anos fazendo parte da sua rotina.
            </h2>

            <div className="space-y-3.5 text-base sm:text-lg text-brown-800 leading-relaxed">
              <p>
                Há 16 anos, a Padaria Gustmann faz parte da rotina de famílias de Americana. Pães fresquinhos, doces, bolos e aquele atendimento próximo que faz você se sentir em casa.
              </p>
              <p className="text-base text-brown-700">
                Acreditamos que qualidade e sabor fazem toda a diferença. Por isso, mantemos a dedicação diária em cada fornada para que você encontre sempre o melhor para o seu dia.
              </p>
            </div>

            {/* Destaques Confirmados (Sem nenhuma linha/timeline solta) */}
            <div className="pt-2 space-y-2.5 text-sm text-brown-900">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-caramel-100 text-caramel-700 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Pães fresquinhos todos os dias</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-caramel-100 text-caramel-700 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Variedade em bolos, doces e salgados</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-caramel-100 text-caramel-700 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Atendimento tradicional no Parque Novo Mundo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
