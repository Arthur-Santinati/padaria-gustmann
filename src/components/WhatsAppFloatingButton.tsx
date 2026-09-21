"use client";

import { siteConfig } from "@/config/site-config";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  return (
    <aside aria-label="Atendimento rápido WhatsApp" className="fixed bottom-5 right-5 z-50">
      <a
        href={siteConfig.contacts.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-green-700 hover:bg-green-800 text-white px-3.5 py-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Falar no WhatsApp com a Padaria Gustmann"
      >
        <MessageCircle className="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
          WhatsApp da Padaria
        </span>
      </a>
    </aside>
  );
}
