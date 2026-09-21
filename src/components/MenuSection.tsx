"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Check, ShoppingBag, ArrowRight } from "lucide-react";
import { menuCategories, menuProducts, formatPrice, MenuItem } from "@/config/menu";
import { useCart } from "@/context/CartContext";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const { addItem, updateQuantity, getItemQuantity, setIsCartOpen, totalItems, totalPrice } = useCart();

  const filteredProducts =
    activeCategory === "todos"
      ? menuProducts
      : menuProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-cream-100/50 border-b border-borderWarm scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho do Cardápio */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-terracotta-600 bg-cream-50 px-3.5 py-1 rounded-full border border-borderWarm shadow-2xs">
            Cardápio Digital
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown-950 font-bold tracking-tight">
            Feito para todos os momentos do dia.
          </h2>

          <p className="text-base text-brown-700 leading-relaxed">
            Escolha seus pães, bolos, doces e salgados favoritos, adicione ao seu pedido e envie direto para o WhatsApp da padaria.
          </p>
        </div>

        {/* Abas de Categorias */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? "bg-terracotta-600 text-cream-50 border-terracotta-600 shadow-xs scale-102"
                    : "bg-cream-50 text-brown-800 border-borderWarm hover:border-caramel-400 hover:text-brown-950"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Grid de Produtos */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const qty = getItemQuantity(product.id);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="bg-cream-50 border border-borderWarm rounded-lg overflow-hidden shadow-xs hover:border-caramel-400/80 transition-all flex flex-col group"
                >
                  {/* Foto do Produto */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-brown-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    />
                    {product.badge && (
                      <div className="absolute top-3 right-3 bg-brown-950/85 text-caramel-400 text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Detalhes do Produto */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brown-950 leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-brown-700 mt-1.5 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Preço e Botão de Ação */}
                    <div className="pt-3 border-t border-borderWarm/70 flex items-center justify-between gap-3">
                      <div>
                        <span className="font-serif text-xl font-bold text-brown-950">
                          {formatPrice(product.price)}
                        </span>
                        {product.unit && (
                          <span className="text-[11px] text-brown-600 block leading-tight">
                            por {product.unit}
                          </span>
                        )}
                      </div>

                      {/* Controle de Quantidade ou Botão Adicionar */}
                      {qty > 0 ? (
                        <div className="flex items-center border border-terracotta-600 rounded-md bg-cream-50 overflow-hidden shadow-2xs">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, -1)}
                            className="p-2 text-terracotta-600 hover:bg-terracotta-50 transition-colors"
                            aria-label={`Diminuir ${product.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-brown-950 w-6 text-center">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, 1)}
                            className="p-2 text-terracotta-600 hover:bg-terracotta-50 transition-colors"
                            aria-label={`Aumentar ${product.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
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
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Barra Flutuante de Resumo do Pedido (quando houver itens) */}
        {totalItems > 0 && (
          <div className="sticky bottom-6 z-30 mt-10">
            <div className="bg-brown-950 text-cream-50 p-4 sm:p-5 rounded-lg border border-caramel-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-terracotta-600 text-cream-50">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif text-base font-bold leading-tight">
                    {totalItems} {totalItems === 1 ? "item no pedido" : "itens no pedido"}
                  </p>
                  <p className="text-xs text-caramel-400 font-medium">
                    Total: {formatPrice(totalPrice)}
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
