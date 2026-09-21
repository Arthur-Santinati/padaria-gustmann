"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { MapPin, Phone, MessageCircle, Menu, X, Clock } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Nossa História", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-cream-50/95 backdrop-blur-sm border-b border-borderWarm shadow-xs">
      {/* Top Bar Informativa com Endereço, Fixo e Horário */}
      <div className="bg-brown-950 text-cream-100 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-caramel-400 shrink-0" />
            <span className="truncate">Rua Lindóia, 410 - Parque Novo Mundo, Americana - SP</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-cream-100/90">
              <Clock className="w-3.5 h-3.5 text-caramel-400" />
              <span>Seg a Sex: 06h às 19h | Sáb: 06h às 18h | Dom: 06h30 às 12h</span>
            </div>
            <span className="hidden md:inline text-brown-600">|</span>
            <a
              href={`tel:+${siteConfig.contacts.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-caramel-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-caramel-400" />
              <span>{siteConfig.contacts.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navegação Principal com Logo Oficial */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo Oficial com Imagem e Tipografia */}
        <Link href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-12 h-9 sm:w-14 sm:h-10 shrink-0 bg-white rounded p-0.5 border border-borderWarm/80 shadow-2xs">
            <Image
              src="/images/logo.jpg"
              alt="Logo oficial da Padaria Gustmann"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-brown-950 group-hover:text-terracotta-600 transition-colors leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold text-terracotta-600">
              {siteConfig.tagline}
            </span>
          </div>
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
