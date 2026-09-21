"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import {
  menuCategories,
  menuProducts,
  menuSubcategories,
  formatPrice,
  formatPricePerUnit,
  formatQuantityWithUnit,
  buildWhatsAppConsultLink,
  MenuItem,
} from "@/config/menu";
import { useCart } from "@/context/CartContext";

export default function MenuSection() {
  const INITIAL_VISIBLE_COUNT = 6;
  const [activeCategory, setActiveCategory] = useState("todos");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { addItem, updateQuantity, getItemQuantity, setIsCartOpen, totalLines, totalPrice } = useCart();

  // Subcategorias disponíveis para a categoria atual
  const availableSubcategories =
    activeCategory === "todos"
      ? []
      : menuSubcategories.filter((s) => s.categoryId === activeCategory);

  // Filtra os produtos de acordo com a categoria e subcategoria
  const filteredProducts = menuProducts.filter((product) => {
    if (activeCategory !== "todos" && product.category !== activeCategory) {
      return false;
    }
    if (activeSubcategory && product.subcategory !== activeSubcategory) {
      return false;
    }
    return true;
  });

  const hasMore = !isExpanded && filteredProducts.length > INITIAL_VISIBLE_COUNT;
  const displayedProducts = hasMore
    ? filteredProducts.slice(0, INITIAL_VISIBLE_COUNT)
    : filteredProducts;
  const remainingCount = filteredProducts.length - INITIAL_VISIBLE_COUNT;

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setActiveSubcategory(null);
    setIsExpanded(false);
  };

  const handleSubcategoryChange = (subId: string | null) => {
    setActiveSubcategory(subId);
    setIsExpanded(false);
  };

  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-cream-100/50 border-b border-borderWarm scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho do Cardápio */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600 bg-cream-50 px-3.5 py-1 rounded-full border border-borderWarm shadow-2xs">
            Cardápio Digital Oficial
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown-950 font-bold tracking-tight">
            Docinhos, Bolos, Salgados e Baguetes.
          </h2>

          <p className="text-base text-brown-700 leading-relaxed">
            Consulte nossos sabores tradicionais e valores por quilo, cento ou unidade. Monte seu pedido e envie direto para o WhatsApp da padaria.
          </p>
        </div>

        {/* Abas de Categorias Principais */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors border ${
                  isActive
                    ? "bg-terracotta-600 text-cream-50 border-terracotta-600 shadow-xs"
                    : "bg-cream-50 text-brown-800 border-borderWarm hover:border-caramel-400 hover:text-brown-950"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Sub-filtros quando uma categoria específica é selecionada */}
        {availableSubcategories.length > 1 && (
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
            <button
              type="button"
              onClick={() => handleSubcategoryChange(null)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors border ${
                activeSubcategory === null
                  ? "bg-brown-950 text-cream-50 border-brown-950"
                  : "bg-cream-50 text-brown-700 border-borderWarm hover:bg-cream-100"
              }`}
            >
              Todos ({availableSubcategories.reduce((acc, sub) => acc + menuProducts.filter(p => p.subcategory === sub.id).length, 0)})
            </button>
            {availableSubcategories.map((sub) => {
              const count = menuProducts.filter((p) => p.subcategory === sub.id).length;
              const isSubActive = activeSubcategory === sub.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => handleSubcategoryChange(sub.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors border ${
                    isSubActive
                      ? "bg-brown-950 text-cream-50 border-brown-950"
                      : "bg-cream-50 text-brown-700 border-borderWarm hover:bg-cream-100"
                  }`}
                >
                  {sub.name} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => {
            const qty = getItemQuantity(product.id);
            const step = product.step || (product.quantityUnit === "KG" ? 0.5 : 1);

            return (
              <div
                key={product.id}
                className="bg-cream-50 border border-borderWarm rounded-lg overflow-hidden shadow-xs hover:border-caramel-400/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Foto do Produto */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brown-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    />
                    
                    {/* Badge de Destaque / Tamanho */}
                    {product.badge && (
                      <div className="absolute top-3 right-3 bg-brown-950/85 backdrop-blur-xs text-caramel-400 text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs border border-caramel-500/20">
                        {product.badge}
                      </div>
                    )}

                    {/* Badge da Subcategoria */}
                    <div className="absolute bottom-2 left-2 bg-brown-950/80 backdrop-blur-xs text-cream-100 text-[10px] font-medium px-2 py-0.5 rounded">
                      {product.subcategoryLabel}
                    </div>
                  </div>

                  {/* Detalhes do Produto */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brown-950 leading-snug">
                      {product.name}
                    </h3>
                    {product.shortDescription && (
                      <p className="text-xs sm:text-sm text-brown-700 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Preço e Ações */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-borderWarm/70 flex items-center justify-between gap-3">
                    {/* Exibição Clara do Preço com Unidade */}
                    <div>
                      {product.price !== null ? (
                        <div>
                          <span className="font-serif text-xl font-bold text-brown-950">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-[11px] text-brown-600 block leading-tight font-medium">
                            {product.priceUnit === "KG"
                              ? "por kg"
                              : product.priceUnit === "CENTO"
                              ? "por cento (100 un)"
                              : "por unidade"}
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span className="font-serif text-base font-bold text-terracotta-600">
                            Consultar preço
                          </span>
                          <span className="text-[11px] text-brown-500 block leading-tight">
                            Sob consulta no balcão
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Controle de Quantidade ou Botão de Ação */}
                    <div>
                      {!product.available ? (
                        <span className="inline-block text-xs font-medium text-brown-500 bg-cream-200/60 px-3 py-1.5 rounded">
                          Indisponível
                        </span>
                      ) : product.price === null ? (
                        /* Botão para consultar via WhatsApp quando preço não estiver listado */
                        <a
                          href={buildWhatsAppConsultLink(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-caramel-500 hover:bg-caramel-600 text-brown-950 px-3 py-2 rounded-md text-xs font-bold transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Consultar</span>
                        </a>
                      ) : qty > 0 ? (
                        /* Controle de Quantidade Sensível à Unidade */
                        <div className="flex items-center border border-caramel-500/50 rounded-md bg-cream-100 overflow-hidden shadow-2xs">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, -step)}
                            className="p-2 text-brown-800 hover:bg-cream-200 transition-colors"
                            aria-label={`Diminuir ${product.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 font-bold text-xs sm:text-sm text-brown-950 min-w-[50px] text-center">
                            {formatQuantityWithUnit(qty, product.quantityUnit)}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, step)}
                            className="p-2 text-terracotta-600 hover:bg-terracotta-50 transition-colors"
                            aria-label={`Aumentar ${product.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        /* Botão Adicionar ao Pedido */
                        <button
                          type="button"
                          onClick={() => addItem(product)}
                          className="inline-flex items-center gap-1.5 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-3.5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Adicionar</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão Ver Mais Produtos / Expandir Cardápio */}
        {hasMore && (
          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-2.5 bg-terracotta-600 hover:bg-terracotta-700 active:scale-98 text-cream-50 font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-base group cursor-pointer"
            >
              <span>
                {activeCategory === "todos"
                  ? `Ver cardápio completo (+${remainingCount} opções)`
                  : `Ver mais produtos (+${remainingCount} opções)`}
              </span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <p className="text-xs text-brown-600 text-center max-w-md">
              {activeCategory === "todos"
                ? "Bolos recheados por quilo, centos de salgados assados e fritos, baguetes e docinhos artesanais."
                : `Mostrando os primeiros ${INITIAL_VISIBLE_COUNT} de ${filteredProducts.length} itens desta categoria.`}
            </p>
          </div>
        )}

        {/* Botão Mostrar Menos quando expandido */}
        {isExpanded && filteredProducts.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setIsExpanded(false);
                const el = document.getElementById("cardapio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-cream-50 hover:bg-cream-100 active:scale-98 text-brown-800 border border-borderWarm px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer"
            >
              <span>Mostrar menos produtos</span>
              <ChevronUp className="w-4 h-4 text-terracotta-600" />
            </button>
          </div>
        )}

        {/* Barra Flutuante de Resumo do Pedido (quando houver itens) */}
        {totalLines > 0 && (
          <div className="sticky bottom-6 z-30 mt-10">
            <div className="bg-brown-950 text-cream-50 p-4 sm:p-5 rounded-lg border border-caramel-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-terracotta-600 text-cream-50">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif text-base font-bold leading-tight">
                    {totalLines} {totalLines === 1 ? "produto no pedido" : "produtos no pedido"}
                  </p>
                  <p className="text-xs text-caramel-400 font-medium">
                    Subtotal estimado: {formatPrice(totalPrice)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-caramel-500 hover:bg-caramel-600 text-brown-950 px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
              >
                <span>Conferir Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
