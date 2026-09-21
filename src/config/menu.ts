import { siteConfig } from "./site-config";

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  price: number;
  image: string;
  badge?: string;
  unit?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
}

export const menuCategories: MenuCategory[] = [
  { id: "todos", name: "Todos", subtitle: "Cardápio completo" },
  { id: "paes", name: "Pães", subtitle: "Fornadas diárias quentinhas" },
  { id: "bolos", name: "Bolos", subtitle: "Caseiros e confeitados" },
  { id: "doces", name: "Doces", subtitle: "Sobremesas e confeitaria" },
  { id: "salgados", name: "Salgados", subtitle: "Assados e fritos artesanais" },
  { id: "cafe", name: "Café & Lanches", subtitle: "Para o seu momento no balcão" },
];

export const menuProducts: MenuItem[] = [
  // Pães
  {
    id: "pao-frances",
    name: "Pão Francês Tradicional",
    category: "paes",
    shortDescription: "Casca crocante e miolo macio, quentinho a toda hora.",
    price: 1.50,
    unit: "unid.",
    image: "/images/paes.jpg",
    badge: "Fornada Quente",
  },
  {
    id: "pao-de-queijo",
    name: "Pão de Queijo Artesanal",
    category: "paes",
    shortDescription: "Receita mineira tradicional com queijo meia cura de verdade.",
    price: 6.00,
    unit: "unid.",
    image: "/images/gallery-4.jpg",
    badge: "Mais Pedido",
  },
  {
    id: "pao-de-batata",
    name: "Pão de Batata com Catupiry",
    category: "paes",
    shortDescription: "Massa leve e fofinha com recheio cremoso e generoso.",
    price: 8.50,
    unit: "unid.",
    image: "/images/hero-bread.jpg",
  },
  {
    id: "pao-caseiro",
    name: "Pão Caseiro Colonial",
    category: "paes",
    shortDescription: "O clássico pão de mesa caseiro, perfeito para fatiar com manteiga.",
    price: 16.00,
    unit: "unid.",
    image: "/images/gallery-1.jpg",
    badge: "Tradicional",
  },

  // Bolos
  {
    id: "bolo-cenoura",
    name: "Bolo de Cenoura com Chocolate",
    category: "bolos",
    shortDescription: "Massa fofinha de cenoura com cobertura farta de brigadeiro.",
    price: 32.00,
    unit: "inteiro",
    image: "/images/bolos.jpg",
    badge: "Favorito",
  },
  {
    id: "bolo-fuba",
    name: "Bolo de Fubá Cremoso",
    category: "bolos",
    shortDescription: "Receita afetiva do interior, úmido e com aroma irresistível.",
    price: 26.00,
    unit: "inteiro",
    image: "/images/gallery-5.jpg",
  },
  {
    id: "bolo-laranja",
    name: "Bolo de Laranja Caseiro",
    category: "bolos",
    shortDescription: "Feito com suco natural da fruta e calda cítrica brilhante.",
    price: 25.00,
    unit: "inteiro",
    image: "/images/bolos.jpg",
  },

  // Doces
  {
    id: "sonho-creme",
    name: "Sonho Tradicional com Creme",
    category: "doces",
    shortDescription: "Massa levinha e dourada, recheada com creme de baunilha caseiro.",
    price: 7.50,
    unit: "unid.",
    image: "/images/doces.jpg",
    badge: "Clássico",
  },
  {
    id: "carolina-recheada",
    name: "Carolinas de Doce de Leite (Porção)",
    category: "doces",
    shortDescription: "Porção com carolinas crocantes cobertas com chocolate.",
    price: 18.00,
    unit: "porção",
    image: "/images/gallery-2.jpg",
  },
  {
    id: "torta-morango",
    name: "Torta de Morango com Creme",
    category: "doces",
    shortDescription: "Massa sablée crocante, creme patissière e morangos frescos.",
    price: 14.00,
    unit: "fatia",
    image: "/images/doces.jpg",
    badge: "Especial",
  },
  {
    id: "pudim-leite",
    name: "Pudim de Leite Condensado",
    category: "doces",
    shortDescription: "Textura aveludada sem furinhos com calda de caramelo dourada.",
    price: 12.00,
    unit: "fatia",
    image: "/images/gallery-2.jpg",
  },

  // Salgados
  {
    id: "coxinha-frango",
    name: "Coxinha com Catupiry",
    category: "salgados",
    shortDescription: "Casquinha sequinha, recheio úmido de peito de frango e catupiry.",
    price: 9.00,
    unit: "unid.",
    image: "/images/salgados.jpg",
    badge: "Campeão",
  },
  {
    id: "esfiha-carne",
    name: "Esfiha Fechada de Carne",
    category: "salgados",
    shortDescription: "Massa macia e recheio temperado com limão, tomate e especiarias.",
    price: 8.50,
    unit: "unid.",
    image: "/images/gallery-6.jpg",
  },
  {
    id: "enroladinho-presunto",
    name: "Enroladinho de Presunto e Queijo",
    category: "salgados",
    shortDescription: "Folhado dourado no forno com queijo derretido e presunto.",
    price: 8.50,
    unit: "unid.",
    image: "/images/salgados.jpg",
  },
  {
    id: "empada-frango",
    name: "Empada de Frango Artesanal",
    category: "salgados",
    shortDescription: "Massa podre que desmancha na boca com recheio cremoso e cheiro-verde.",
    price: 9.50,
    unit: "unid.",
    image: "/images/gallery-6.jpg",
  },

  // Café & Lanches
  {
    id: "cafe-coado",
    name: "Café Coado Tradicional",
    category: "cafe",
    shortDescription: "Passado na hora, aromático e quentinho na xícara.",
    price: 4.50,
    unit: "xícara",
    image: "/images/cafe.jpg",
  },
  {
    id: "misto-quente",
    name: "Misto Quente no Pão Francês",
    category: "cafe",
    shortDescription: "Pão francês quentinho na chapa com queijo prato e presunto.",
    price: 12.00,
    unit: "lanche",
    image: "/images/gallery-3.jpg",
    badge: "Clássico",
  },
  {
    id: "pao-chapa",
    name: "Pão Francês na Chapa",
    category: "cafe",
    shortDescription: "A clássica crostinha de manteiga tostada com cafezinho.",
    price: 6.00,
    unit: "unid.",
    image: "/images/cafe.jpg",
  },
];

export const formatPrice = (value: number): string => {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};

export const buildWhatsAppOrderMessage = (
  items: Array<{ name: string; quantity: number; price: number }>,
  totalPrice: number
): string => {
  let msg = "Olá! Gostaria de fazer um pedido:\n\n*Pedido*\n";
  items.forEach((item) => {
    const itemTotal = (item.price * item.quantity).toFixed(2).replace(".", ",");
    msg += `• ${item.quantity}x ${item.name} — R$ ${itemTotal}\n`;
  });
  msg += `\n*Total: R$ ${totalPrice.toFixed(2).replace(".", ",")}*\n\nGostaria de confirmar a disponibilidade e combinar a retirada.`;
  return msg;
};

export const buildWhatsAppOrderLink = (
  items: Array<{ name: string; quantity: number; price: number }>,
  totalPrice: number
): string => {
  const msg = buildWhatsAppOrderMessage(items, totalPrice);
  return `https://wa.me/${siteConfig.contacts.phoneRaw}?text=${encodeURIComponent(msg)}`;
};
