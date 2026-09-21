import { siteConfig } from "./site-config";

export type PriceUnit = "KG" | "CENTO" | "UNIDADE";

export interface MenuItem {
  id: string;
  name: string;
  category: "docinhos" | "bolos" | "salgados" | "baguetes";
  subcategory: string;
  subcategoryLabel: string;
  shortDescription?: string;
  price: number | null; // null quando preço não informado ("Consultar preço")
  priceUnit: PriceUnit;
  quantityUnit: PriceUnit;
  step?: number; // padrão: 1 para CENTO e UNIDADE, 0.5 para KG
  minQuantity?: number; // padrão: 1 para CENTO e UNIDADE, 1 ou 0.5 para KG
  image: string;
  badge?: string;
  available: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
}

export const menuCategories: MenuCategory[] = [
  { id: "todos", name: "Todos", subtitle: "Cardápio completo" },
  { id: "docinhos", name: "Docinhos", subtitle: "Cento para festas e carolinas recheadas" },
  { id: "bolos", name: "Bolos Recheados", subtitle: "Bolos especiais por quilo" },
  { id: "salgados", name: "Salgados", subtitle: "Cento de assados e fritos artesanais" },
  { id: "baguetes", name: "Baguetes Recheadas", subtitle: "Baguetes frias de 60cm e quentes de 25cm" },
];

export const menuSubcategories = [
  { id: "cento-docinhos", categoryId: "docinhos", name: "Cento de Docinhos (100 un)" },
  { id: "carolinas", categoryId: "docinhos", name: "Carolinas Recheadas (por KG)" },
  { id: "bolos-recheados", categoryId: "bolos", name: "Bolos Recheados (por KG)" },
  { id: "salgados-assados", categoryId: "salgados", name: "Cento de Assados (100 un)" },
  { id: "salgados-fritos", categoryId: "salgados", name: "Cento de Fritos (100 un)" },
  { id: "baguete-fria", categoryId: "baguetes", name: "Baguetes Frias (60 cm)" },
  { id: "baguete-quente", categoryId: "baguetes", name: "Baguetes Quentes (25 cm)" },
];

export const menuProducts: MenuItem[] = [
  // ==========================================
  // 1. DOCINHOS — CENTO (100 UNIDADES)
  // ==========================================
  {
    id: "docinho-brigadeiro",
    name: "Brigadeiro Tradicional",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "O clássico brigadeiro de panela com chocolate e confeito granulado.",
    price: 110.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/doces.jpg",
    badge: "Mais Pedido",
    available: true,
  },
  {
    id: "docinho-brigadeiro-branco",
    name: "Brigadeiro Branco",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Brigadeiro branco cremoso preparado com leite condensado de alta qualidade.",
    price: 110.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-2.jpg",
    available: true,
  },
  {
    id: "docinho-brigadeiro-leite-ninho",
    name: "Brigadeiro de Leite Ninho",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Massa aveludada de leite Ninho enrolada no puro leite em pó.",
    price: 115.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/doces.jpg",
    badge: "Especial",
    available: true,
  },
  {
    id: "docinho-cajuzinho",
    name: "Cajuzinho",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Doce tradicional de amendoim torrado e cacau com açúcar cristal e amendoim.",
    price: 130.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-2.jpg",
    available: true,
  },
  {
    id: "docinho-mini-camafeu",
    name: "Mini Camafeu",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Fino doce de nozes coberto com fondant artesanal tradicional.",
    price: 150.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/doces.jpg",
    badge: "Fino",
    available: true,
  },
  {
    id: "docinho-tortinha-morango",
    name: "Mini Tortinha de Morango",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Casquinha crocante recheada com creme de confeiteiro e morango fresco.",
    price: 150.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-2.jpg",
    available: true,
  },
  {
    id: "docinho-tortinha-limao",
    name: "Mini Tortinha de Limão",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Massa crocante com creme cítrico de limão fresco e toque delicado.",
    price: 135.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/doces.jpg",
    available: true,
  },
  {
    id: "docinho-tortinha-maracuja",
    name: "Mini Tortinha de Maracujá",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Creme aveludado de maracujá natural sobre massa doce artesanal.",
    price: 150.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-2.jpg",
    available: true,
  },
  {
    id: "docinho-beijinho",
    name: "Beijinho de Coco",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Doce tradicional de coco ralado com leite condensado e cravo da Índia.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/doces.jpg",
    available: true,
  },
  {
    id: "docinho-bicho-de-pe",
    name: "Bicho de Pé (Moranguinho)",
    category: "docinhos",
    subcategory: "cento-docinhos",
    subcategoryLabel: "Cento de Docinhos (100 un)",
    shortDescription: "Docinho rosa artesanal sabor morango enrolado no açúcar cristal.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-2.jpg",
    available: true,
  },

  // ==========================================
  // 1.2 DOCINHOS — CAROLINAS RECHEADAS (POR KG)
  // ==========================================
  {
    id: "carolina-limao",
    name: "Carolina de Limão",
    category: "docinhos",
    subcategory: "carolinas",
    subcategoryLabel: "Carolinas Recheadas (por KG)",
    shortDescription: "Massa choux levinha e crocante recheada com refrescante creme de limão.",
    price: 74.99,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 0.5,
    image: "/images/doces.jpg",
    available: true,
  },
  {
    id: "carolina-maracuja",
    name: "Carolina de Maracujá",
    category: "docinhos",
    subcategory: "carolinas",
    subcategoryLabel: "Carolinas Recheadas (por KG)",
    shortDescription: "Massa delicada recheada com mousse cremosa de maracujá.",
    price: 74.99,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 0.5,
    image: "/images/gallery-2.jpg",
    available: true,
  },
  {
    id: "carolina-chocolate",
    name: "Carolina de Chocolate",
    category: "docinhos",
    subcategory: "carolinas",
    subcategoryLabel: "Carolinas Recheadas (por KG)",
    shortDescription: "Recheada com generoso creme de chocolate e cobertura macia.",
    price: 74.99,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 0.5,
    image: "/images/doces.jpg",
    badge: "Tradicional",
    available: true,
  },
  {
    id: "carolina-doce-de-leite",
    name: "Carolina de Doce de Leite",
    category: "docinhos",
    subcategory: "carolinas",
    subcategoryLabel: "Carolinas Recheadas (por KG)",
    shortDescription: "Recheada com autêntico doce de leite cremoso da casa.",
    price: 74.99,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 0.5,
    image: "/images/gallery-2.jpg",
    available: true,
  },

  // ==========================================
  // 2. BOLOS RECHEADOS (TODOS POR KG)
  // ==========================================
  {
    id: "bolo-gustmann",
    name: "Bolo Gustmann",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo de chocolate preto e creme branco com pedaços picados de morango fresco.",
    price: 77.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/bolos.jpg",
    badge: "Especial da Casa",
    available: true,
  },
  {
    id: "bolo-alpino",
    name: "Bolo Alpino",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo coberto de suspiros com recheio cremoso de chocolate preto e branco.",
    price: 79.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/gallery-5.jpg",
    available: true,
  },
  {
    id: "bolo-leite-ninho-morango",
    name: "Bolo Leite Ninho c/ Morango",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo recheado com leite ninho e morangos frescos.",
    price: 84.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/bolos.jpg",
    badge: "Mais Pedido",
    available: true,
  },
  {
    id: "bolo-leite-ninho-trufado",
    name: "Bolo Leite Ninho Trufado",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Duas camadas de recheio cremoso, uma de leite ninho e outra de chocolate trufado.",
    price: 84.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/gallery-5.jpg",
    available: true,
  },
  {
    id: "bolo-ouro-branco",
    name: "Bolo Ouro Branco",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Combinação de chocolate preto e branco com pedaços de bombom Ouro Branco no recheio.",
    price: 74.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/bolos.jpg",
    available: true,
  },
  {
    id: "bolo-sonho-de-valsa",
    name: "Bolo Sonho de Valsa",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Combinação de chocolate preto e branco com pedaços de bombom Sonho de Valsa no recheio.",
    price: 74.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/gallery-5.jpg",
    available: true,
  },
  {
    id: "bolo-brigadeiro",
    name: "Bolo Brigadeiro",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo com duas camadas de brigadeiro de panela.",
    price: 74.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/bolos.jpg",
    badge: "Clássico",
    available: true,
  },
  {
    id: "bolo-brigadeiro-morango",
    name: "Bolo Brigadeiro com Morango",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo com duas camadas de brigadeiro de panela, combinados com pedaços frescos de morango.",
    price: 77.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/gallery-5.jpg",
    available: true,
  },
  {
    id: "bolo-delicia-morango",
    name: "Bolo Delícia de Morango",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo branco com duas camadas de recheio de creme combinados com morangos frescos.",
    price: 77.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/bolos.jpg",
    available: true,
  },
  {
    id: "bolo-prestigio",
    name: "Bolo Prestígio",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo com dois recheios cremosos de prestígio, unindo coco e chocolate.",
    price: 77.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/gallery-5.jpg",
    available: true,
  },
  {
    id: "bolo-salada-frutas",
    name: "Bolo Salada de Frutas",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo branco com duas camadas de creme e frutas variadas como morango, figo, abacaxi e pêssego.",
    price: 74.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/bolos.jpg",
    available: true,
  },
  {
    id: "bolo-doce-tropical",
    name: "Bolo Doce Tropical",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo na massa branca combinado entre dois recheios, 1º doce de leite com ameixa, 2º creme branco com pedaços de abacaxi.",
    price: 74.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/gallery-5.jpg",
    available: true,
  },
  {
    id: "bolo-ferrero-rocher",
    name: "Bolo Ferrero Rocher",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo na massa de chocolate preto com duas camadas de chocolate Ferrero Rocher.",
    price: 84.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/bolos.jpg",
    badge: "Premium",
    available: true,
  },
  {
    id: "bolo-nozes-brigadeiro-branco",
    name: "Bolo Nozes com Brigadeiro Branco",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo na massa branca com duas camadas recheadas de brigadeiro branco com pedaços de nozes.",
    price: 79.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/gallery-5.jpg",
    available: true,
  },
  {
    id: "bolo-chocolimao",
    name: "Bolo Chocolimão",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Na massa de chocolate preto combinado com dois recheios, um de mousse de limão e outro chocolate trufado.",
    price: 77.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/bolos.jpg",
    available: true,
  },
  {
    id: "bolo-nozes-coco",
    name: "Bolo Nozes c/ Coco",
    category: "bolos",
    subcategory: "bolos-recheados",
    subcategoryLabel: "Bolos Recheados (por KG)",
    shortDescription: "Bolo de massa branca, com dois recheios: doce de leite com nozes e creme branco com coco.",
    price: 74.90,
    priceUnit: "KG",
    quantityUnit: "KG",
    step: 0.5,
    minQuantity: 1.0,
    image: "/images/gallery-5.jpg",
    available: true,
  },

  // ==========================================
  // 3. SALGADOS — CENTO DE ASSADOS (100 UN)
  // ==========================================
  {
    id: "salgado-assado-presunto-queijo",
    name: "Assado de Presunto e Queijo",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Massa leve e dourada recheada com presunto de qualidade e muçarela derretida.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/salgados.jpg",
    badge: "Festa",
    available: true,
  },
  {
    id: "salgado-assado-peito-peru",
    name: "Assado de Peito de Peru",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Massa assada delicada com recheio saboroso de peito de peru defumado.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-6.jpg",
    available: true,
  },
  {
    id: "salgado-assado-frango",
    name: "Assado de Frango",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Peito de frango desfiado com tempero caseiro e ervas da casa.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/salgados.jpg",
    available: true,
  },
  {
    id: "salgado-assado-lombinho",
    name: "Assado de Lombinho",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Lombinho suíno canadense desfiado e temperado na medida certa.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-6.jpg",
    available: true,
  },
  {
    id: "salgado-assado-salsicha",
    name: "Enroladinho de Salsicha",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Massa fofa assada envolvendo salsicha especial selecionada.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/salgados.jpg",
    available: true,
  },
  {
    id: "salgado-assado-queijo",
    name: "Assado de Queijo",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Recheio farto de queijo macio e aromático, assado até dourar.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-6.jpg",
    available: true,
  },
  {
    id: "salgado-assado-calabresa",
    name: "Assado de Calabresa",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Linguiça calabresa moída bem temperadinha e assada na hora.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/salgados.jpg",
    available: true,
  },
  {
    id: "salgado-assado-frios",
    name: "Assado de Frios",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Mistura harmoniosa de frios selecionados com tempero especial.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-6.jpg",
    available: true,
  },
  {
    id: "salgado-assado-esfihinha-carne",
    name: "Esfihinha de Carne",
    category: "salgados",
    subcategory: "salgados-assados",
    subcategoryLabel: "Cento de Assados (100 un)",
    shortDescription: "Tradicional esfiha de carne bovina temperada com cebola, tomate e limão.",
    price: 110.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/salgados.jpg",
    badge: "Tradicional",
    available: true,
  },

  // ==========================================
  // 3.2 SALGADOS — CENTO DE FRITOS (100 UN)
  // ==========================================
  {
    id: "salgado-frito-coxinha",
    name: "Coxinha de Frango",
    category: "salgados",
    subcategory: "salgados-fritos",
    subcategoryLabel: "Cento de Fritos (100 un)",
    shortDescription: "Massa crocante por fora e macia por dentro, farta em frango desfiado temperado.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/salgados.jpg",
    badge: "Mais Pedido",
    available: true,
  },
  {
    id: "salgado-frito-presunto-queijo",
    name: "Risole de Presunto e Queijo",
    category: "salgados",
    subcategory: "salgados-fritos",
    subcategoryLabel: "Cento de Fritos (100 un)",
    shortDescription: "Casquinha sequinha e dourada com recheio cremoso de presunto e muçarela.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-6.jpg",
    available: true,
  },
  {
    id: "salgado-frito-bolinhas-queijo",
    name: "Bolinhas de Queijo",
    category: "salgados",
    subcategory: "salgados-fritos",
    subcategoryLabel: "Cento de Fritos (100 un)",
    shortDescription: "Bolinhas crocantes com recheio que puxa queijo a cada mordida.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/salgados.jpg",
    available: true,
  },
  {
    id: "salgado-frito-kibe",
    name: "Mini Kibe Tradicional",
    category: "salgados",
    subcategory: "salgados-fritos",
    subcategoryLabel: "Cento de Fritos (100 un)",
    shortDescription: "Trigo para kibe e carne bovina de primeira com hortelã fresca.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/gallery-6.jpg",
    available: true,
  },
  {
    id: "salgado-frito-carne",
    name: "Risole de Carne",
    category: "salgados",
    subcategory: "salgados-fritos",
    subcategoryLabel: "Cento de Fritos (100 un)",
    shortDescription: "Carne moída refogada com cebola, cheiro verde e temperos caseiros.",
    price: 100.00,
    priceUnit: "CENTO",
    quantityUnit: "CENTO",
    step: 1,
    minQuantity: 1,
    image: "/images/salgados.jpg",
    available: true,
  },

  // ==========================================
  // 4. BAGUETES RECHEADAS — FRIAS (60 CM)
  // ==========================================
  {
    id: "baguete-fria-presunto-queijo",
    name: "Baguete Fria de Presunto e Queijo",
    category: "baguetes",
    subcategory: "baguete-fria",
    subcategoryLabel: "Baguetes Frias (60 cm)",
    shortDescription: "Presunto, queijo, maionese c/cenoura e alface.",
    price: 57.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/paes.jpg",
    badge: "60 cm",
    available: true,
  },
  {
    id: "baguete-fria-peito-peru",
    name: "Baguete Fria de Peito de Peru",
    category: "baguetes",
    subcategory: "baguete-fria",
    subcategoryLabel: "Baguetes Frias (60 cm)",
    shortDescription: "Peito de peru, queijo, maionese c/cenoura e alface.",
    price: 59.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/hero-bread.jpg",
    badge: "60 cm",
    available: true,
  },
  {
    id: "baguete-fria-frango",
    name: "Baguete Fria de Frango",
    category: "baguetes",
    subcategory: "baguete-fria",
    subcategoryLabel: "Baguetes Frias (60 cm)",
    shortDescription: "Frango c/ catupiry, queijo, maionese c/cenoura e alface.",
    price: 59.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/paes.jpg",
    badge: "60 cm",
    available: true,
  },
  {
    id: "baguete-fria-lombinho",
    name: "Baguete Fria de Lombinho",
    category: "baguetes",
    subcategory: "baguete-fria",
    subcategoryLabel: "Baguetes Frias (60 cm)",
    shortDescription: "Lombinho, queijo, maionese c/cenoura e alface.",
    price: 59.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/hero-bread.jpg",
    badge: "60 cm",
    available: true,
  },
  {
    id: "baguete-fria-salame",
    name: "Baguete Fria de Salame",
    category: "baguetes",
    subcategory: "baguete-fria",
    subcategoryLabel: "Baguetes Frias (60 cm)",
    shortDescription: "Salame, queijo, maionese c/cenoura e alface.",
    price: 74.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/paes.jpg",
    badge: "60 cm",
    available: true,
  },
  {
    id: "baguete-fria-quatro-queijos",
    name: "Baguete Fria Quatro Queijos",
    category: "baguetes",
    subcategory: "baguete-fria",
    subcategoryLabel: "Baguetes Frias (60 cm)",
    shortDescription: "Quatro queijos selecionados combinados na baguete artesanal grande.",
    price: null, // Preço não confirmado no material fornecido
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/hero-bread.jpg",
    badge: "Sob Consulta",
    available: true,
  },

  // ==========================================
  // 4.2 BAGUETES RECHEADAS — QUENTES (25 CM)
  // ==========================================
  {
    id: "baguete-quente-presunto-queijo",
    name: "Baguete Quente de Presunto e Queijo",
    category: "baguetes",
    subcategory: "baguete-quente",
    subcategoryLabel: "Baguetes Quentes (25 cm)",
    shortDescription: "Presunto, queijo e orégano.",
    price: 24.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/paes.jpg",
    badge: "25 cm",
    available: true,
  },
  {
    id: "baguete-quente-peito-peru",
    name: "Baguete Quente de Peito de Peru",
    category: "baguetes",
    subcategory: "baguete-quente",
    subcategoryLabel: "Baguetes Quentes (25 cm)",
    shortDescription: "Peito de peru, queijo, catupiry, tomate e orégano.",
    price: 25.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/hero-bread.jpg",
    badge: "25 cm",
    available: true,
  },
  {
    id: "baguete-quente-frango",
    name: "Baguete Quente de Frango",
    category: "baguetes",
    subcategory: "baguete-quente",
    subcategoryLabel: "Baguetes Quentes (25 cm)",
    shortDescription: "Frango c/ catupiry.",
    price: 24.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/paes.jpg",
    badge: "25 cm",
    available: true,
  },
  {
    id: "baguete-quente-lombinho",
    name: "Baguete Quente de Lombinho",
    category: "baguetes",
    subcategory: "baguete-quente",
    subcategoryLabel: "Baguetes Quentes (25 cm)",
    shortDescription: "Lombinho, queijo, catupiry, tomate e orégano.",
    price: 25.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/hero-bread.jpg",
    badge: "25 cm",
    available: true,
  },
  {
    id: "baguete-quente-salame",
    name: "Baguete Quente de Salame",
    category: "baguetes",
    subcategory: "baguete-quente",
    subcategoryLabel: "Baguetes Quentes (25 cm)",
    shortDescription: "Salame, queijo, catupiry, tomate e orégano.",
    price: 40.00,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/paes.jpg",
    badge: "25 cm",
    available: true,
  },
  {
    id: "baguete-quente-calabresa",
    name: "Baguete Quente de Calabresa",
    category: "baguetes",
    subcategory: "baguete-quente",
    subcategoryLabel: "Baguetes Quentes (25 cm)",
    shortDescription: "Calabresa acebolada, catupiry e orégano.",
    price: 24.90,
    priceUnit: "UNIDADE",
    quantityUnit: "UNIDADE",
    step: 1,
    minQuantity: 1,
    image: "/images/hero-bread.jpg",
    badge: "25 cm",
    available: true,
  },
];

// ==========================================
// HELPERS DE FORMATAÇÃO E WHATSAPP
// ==========================================

export const formatPrice = (value: number | null): string => {
  if (value === null || value === undefined) {
    return "Consultar preço";
  }
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};

export const formatPricePerUnit = (price: number | null, unit: PriceUnit): string => {
  if (price === null || price === undefined) {
    return "Consultar preço";
  }
  const formatted = formatPrice(price);
  switch (unit) {
    case "KG":
      return `${formatted} / kg`;
    case "CENTO":
      return `${formatted} / cento`;
    case "UNIDADE":
      return `${formatted} / un`;
    default:
      return formatted;
  }
};

export const formatQuantityWithUnit = (quantity: number, unit: PriceUnit): string => {
  switch (unit) {
    case "KG": {
      // Ex: 1 kg, 1,5 kg, 2 kg
      const formattedNumber = quantity % 1 === 0 ? quantity.toString() : quantity.toFixed(1).replace(".", ",");
      return `${formattedNumber} kg`;
    }
    case "CENTO": {
      return quantity === 1 ? "1 cento" : `${quantity} centos`;
    }
    case "UNIDADE": {
      return quantity === 1 ? "1 un" : `${quantity} un`;
    }
    default:
      return `${quantity}`;
  }
};

export interface OrderItemPayload {
  name: string;
  quantity: number;
  price: number;
  quantityUnit: PriceUnit;
}

export const buildWhatsAppOrderMessage = (
  items: OrderItemPayload[],
  totalPrice: number
): string => {
  let msg = "Olá! Gostaria de fazer um pedido na Padaria Gustmann:\n\n*Pedido:*\n";

  items.forEach((item) => {
    const itemSubtotal = Math.round(item.price * item.quantity * 100) / 100;
    const subtotalFormatted = formatPrice(itemSubtotal);

    if (item.quantityUnit === "KG") {
      const formattedQty = item.quantity % 1 === 0 ? `${item.quantity} kg` : `${item.quantity.toFixed(1).replace(".", ",")} kg`;
      msg += `• ${formattedQty} ${item.name} — ${subtotalFormatted}\n`;
    } else if (item.quantityUnit === "CENTO") {
      const centoLabel = item.quantity === 1 ? "1 cento" : `${item.quantity} centos`;
      msg += `• ${item.quantity}x ${item.name} (${centoLabel}) — ${subtotalFormatted}\n`;
    } else {
      msg += `• ${item.quantity}x ${item.name} — ${subtotalFormatted}\n`;
    }
  });

  const totalFormatted = formatPrice(Math.round(totalPrice * 100) / 100);
  msg += `\n*Total: ${totalFormatted}*\n\nGostaria de confirmar a disponibilidade e combinar a retirada.`;
  return msg;
};

export const buildWhatsAppOrderLink = (
  items: OrderItemPayload[],
  totalPrice: number
): string => {
  const msg = buildWhatsAppOrderMessage(items, totalPrice);
  return `https://wa.me/${siteConfig.contacts.phoneRaw}?text=${encodeURIComponent(msg)}`;
};

export const buildWhatsAppConsultLink = (productName: string): string => {
  const msg = `Olá! Gostaria de consultar o preço e a disponibilidade do produto "${productName}" na Padaria Gustmann.`;
  return `https://wa.me/${siteConfig.contacts.phoneRaw}?text=${encodeURIComponent(msg)}`;
};
