"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { MapPin, Phone, MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-cream-50/95 backdrop-blur-sm border-b border-borderWarm shadow-xs">
      {/* Top Bar Informativa */}
      <div className="bg-brown-950 text-cream-100 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-caramel-400 shrink-0" />
            <span className="truncate">Rua Lindóia, 410 - Parque Novo Mundo, Americana - SP</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:+${siteConfig.contacts.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-caramel-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-caramel-400" />
              <span>{siteConfig.contacts.phoneFormatted}</span>
            </a>
            <span className="hidden md:inline text-brown-600">|</span>
            <span className="hidden md:inline text-caramel-400 font-medium">
              16 anos de tradição
            </span>
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Logo / Marca */}
        <Link href="#inicio" className="flex flex-col group">
          <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-brown-900 group-hover:text-terracotta-600 transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[11px] tracking-widest uppercase font-semibold text-terracotta-600">
            {siteConfig.tagline}
          </span>
        </Link>

        {/* Links Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-brown-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-terracotta-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-terracotta-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão WhatsApp Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-4 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-cream-50" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Botão Menu Hambúrguer Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center justify-center p-2 bg-terracotta-600 text-cream-50 rounded-md"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brown-900 hover:text-terracotta-600 focus:outline-none rounded-md"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-borderWarm bg-cream-100 px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-brown-900 hover:bg-cream-200 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-borderWarm">
            <a
              href={siteConfig.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 py-3 rounded-md font-semibold text-sm transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
