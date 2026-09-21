"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, buildWhatsAppOrderLink } from "@/config/menu";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const url = buildWhatsAppOrderLink(items, totalPrice);
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
            aria-hidden="true"
          />

          {/* Drawer Lateral */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream-50 text-brown-950 z-50 flex flex-col shadow-2xl border-l border-borderWarm"
            aria-label="Carrinho de compras"
          >
            {/* Topo do Drawer */}
            <div className="flex items-center justify-between p-5 border-b border-borderWarm bg-cream-100/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-md bg-terracotta-600 text-cream-50">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold text-brown-950">Seu Pedido</h2>
                  <span className="text-xs text-brown-600">
                    {totalItems} {totalItems === 1 ? "item adicionado" : "itens adicionados"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-cream-200 text-brown-700 transition-colors"
                aria-label="Fechar carrinho"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lista de Itens */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-cream-200/80 flex items-center justify-center text-brown-500">
                    <ShoppingBag className="w-8 h-8 opacity-40" />
                  </div>
                  <div className="space-y-1 max-w-xs">
                    <h3 className="font-serif text-lg font-bold text-brown-900">Seu carrinho está vazio</h3>
                    <p className="text-xs text-brown-600 leading-relaxed">
                      Navegue pelo nosso cardápio e adicione pães fresquinhos, bolos e doces para o seu pedido.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById("cardapio");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors mt-2"
                  >
                    <span>Ver Cardápio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3.5 p-3.5 bg-cream-100/50 rounded-lg border border-borderWarm/70 shadow-2xs"
                    >
                      {/* Miniatura */}
                      <div className="relative w-16 h-16 rounded-md overflow-hidden bg-brown-900 shrink-0 border border-borderWarm">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>

                      {/* Dados do Item */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif text-sm font-bold text-brown-950 truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-brown-400 hover:text-red-600 p-1 transition-colors shrink-0"
                            aria-label={`Remover ${item.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-xs text-brown-600">
                          {formatPrice(item.price)} {item.unit && `• ${item.unit}`}
                        </p>

                        {/* Controles de Quantidade e Subtotal */}
                        <div className="flex items-center justify-between mt-2.5">
                          <div className="flex items-center border border-borderWarm rounded-md bg-cream-50">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1.5 text-brown-700 hover:text-terracotta-600 hover:bg-cream-200/50 transition-colors"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold text-brown-950 w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1.5 text-brown-700 hover:text-terracotta-600 hover:bg-cream-200/50 transition-colors"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-serif font-bold text-sm text-brown-950">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Limpar carrinho */}
                  <div className="pt-2 text-right">
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-[11px] text-brown-500 hover:text-red-600 underline transition-colors"
                    >
                      Limpar carrinho
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé com Total e Botão do WhatsApp */}
            {items.length > 0 && (
              <div className="p-5 border-t border-borderWarm bg-cream-100/80 space-y-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center justify-between text-brown-600 text-xs">
                    <span>Quantidade total:</span>
                    <span className="font-semibold text-brown-900">{totalItems} itens</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-borderWarm/60">
                    <span className="font-serif text-base font-bold text-brown-950">Valor Total:</span>
                    <span className="font-serif text-2xl font-bold text-terracotta-600">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2.5 bg-green-700 hover:bg-green-800 text-white font-semibold py-3.5 px-4 rounded-md transition-all shadow-md text-sm sm:text-base"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                    <path d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.93 9.93 0 0 1-5.07-1.39l-.36-.21-3.67.96.98-3.58-.23-.37A9.96 9.96 0 1 1 22 12c0 5.51-4.49 10-10 10Zm5.49-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5a9.05 9.05 0 0 1-1.67-2.07c-.18-.3-.02-.46.13-.62.14-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5l-.56-.01c-.2 0-.52.08-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.21 3.05c.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.34.2 1.85.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                  </svg>
                  <span>Finalizar pedido pelo WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-brown-500">
                  Disponibilidade e horário de retirada combinados via WhatsApp.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
