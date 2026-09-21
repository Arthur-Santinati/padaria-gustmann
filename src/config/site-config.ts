export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  yearsOfTradition: number;
  highlightPhrase: string;
  contacts: {
    phoneFormatted: string;
    phoneRaw: string;
    whatsappUrl: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    secondaryPhonePlaceholder?: string;
  };
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    fullAddress: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  openingHoursPlaceholder: {
    status: string;
    note: string;
    schedule?: Array<{ day: string; hours: string }>;
  };
  categories: Array<{
    id: string;
    name: string;
    subtitle: string;
    description: string;
    image: string;
    badge: string;
  }>;
  gallery: Array<{
    title: string;
    category: string;
    image: string;
    alt: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Padaria Gustmann",
  legalName: "Padaria e Confeitaria Gustmann",
  tagline: "Padaria e Confeitaria",
  description: "Padaria Gustmann em Americana - SP. Pães fresquinhos todos os dias, confeitaria e sabores que fazem a diferença com 16 anos de tradição.",
  yearsOfTradition: 16,
  highlightPhrase: "Qualidade e sabor que fazem a diferença",
  
  contacts: {
    phoneFormatted: "+55 (19) 3645-7977",
    phoneRaw: "551936457977",
    whatsappUrl: "https://wa.me/551936457977?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Padaria%20Gustmann%20e%20gostaria%20de%20informa%C3%A7%C3%B5es.",
    email: "padariagustmann@hotmail.com",
    instagramHandle: "@padariagustmann",
    instagramUrl: "https://www.instagram.com/padariagustmann/",
    secondaryPhonePlaceholder: "(19) 3406-6955",
  },

  address: {
    street: "Rua Lindóia",
    number: "410",
    neighborhood: "Parque Novo Mundo",
    city: "Americana",
    state: "SP",
    cep: "13467-640",
    fullAddress: "Rua Lindóia, 410 - Parque Novo Mundo, Americana - SP, 13467-640",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+Lind%C3%B3ia,+410+-+Parque+Novo+Mundo,+Americana+-+SP,+13467-640",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.9663782806536!2d-47.332304823871485!3d-22.766624832924188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89a0890bf250b%3A0x7cecebc862beeead!2sR.%20Lind%C3%B3ia%2C%20410%20-%20Parque%20Novo%20Mundo%2C%20Americana%20-%20SP%2C%2013467-640!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  },

  openingHoursPlaceholder: {
    status: "A confirmar com o estabelecimento",
    note: "Para confirmar o horário de funcionamento de hoje ou disponibilidade para fornadas e encomendas, fale conosco diretamente pelo WhatsApp.",
  },

  categories: [
    {
      id: "paes",
      name: "Pães",
      subtitle: "Fornos quentes e massa tradicional",
      description: "Pães fresquinhos todos os dias, com casca dourada e miolo macio para o seu café da manhã e lanche.",
      image: "/images/paes.jpg",
      badge: "Fornadas Diárias",
    },
    {
      id: "bolos",
      name: "Bolos",
      subtitle: "Receitas caseiras e de confeitaria",
      description: "Bolos fofinhos para o café da tarde e receitas preparadas com todo o carinho e sabor.",
      image: "/images/bolos.jpg",
      badge: "Confeitaria",
    },
    {
      id: "doces",
      name: "Doces e Sobremesas",
      subtitle: "Para adoçar qualquer momento",
      description: "Variedade em doces tradicionais, tortas e sobremesas feitas para quem valoriza sabor e qualidade.",
      image: "/images/doces.jpg",
      badge: "Doces Artesanais",
    },
    {
      id: "salgados",
      name: "Salgados",
      subtitle: "Assados e fritos selecionados",
      description: "Salgados saborosos, quentinhos e bem recheados para sua pausa do dia ou para levar para casa.",
      image: "/images/salgados.jpg",
      badge: "Sabor Tradicional",
    },
    {
      id: "cafe-lanches",
      name: "Café / Lanches",
      subtitle: "Para começar o dia com energia",
      description: "A clássica combinação do cafezinho brasileiro com pão na chapa e delícias de balcão.",
      image: "/images/cafe.jpg",
      badge: "Momento Gostoso",
    },
  ],

  gallery: [
    {
      title: "Pães Rústicos e Tradicionais",
      category: "Pães",
      image: "/images/gallery-1.jpg",
      alt: "Pães artesanais com crosta dourada na Padaria Gustmann",
    },
    {
      title: "Doces e Confeitaria Fina",
      category: "Doces",
      image: "/images/gallery-2.jpg",
      alt: "Doces e sobremesas da Padaria Gustmann",
    },
    {
      title: "Café Especial e Acolhimento",
      category: "Café",
      image: "/images/gallery-3.jpg",
      alt: "Xícara de café quente e clima acolhedor",
    },
    {
      title: "Fornada Diária de Pão Francês",
      category: "Fornadas",
      image: "/images/gallery-4.jpg",
      alt: "Cesta de pães frescos crocantes",
    },
    {
      title: "Bolos e Tortas de Vitrine",
      category: "Bolos",
      image: "/images/gallery-5.jpg",
      alt: "Bolos e delícias de confeitaria",
    },
    {
      title: "Salgados Quentinhos de Balcão",
      category: "Salgados",
      image: "/images/gallery-6.jpg",
      alt: "Salgados e quitutes tradicionais",
    },
  ],
};
