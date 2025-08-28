import type { Product, Brand, BlogPost } from '../types';

// Моковые данные для продуктов
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 4,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/4.jpg",
    price: 17990,
    isLiked: false
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  }
];

const mockAllProducts: Product[] = [
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  }, 
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  },
  {
    id: 1,
    name: "Brooks GLYCERIN 20",
    image: "/runnercenter/products/1.jpg",
    price: 22990,
    discountPrice: 17750,
    discount: 20,
    isLiked: false
  },
  {
    id: 2,
    name: "Mizuno. WAVE RIDER 28",
    image: "/runnercenter/products/2.jpg",
    price: 17990,
    isLiked: false
  },
  {
    id: 3,
    name: "Mizuno WAVE RIDER 27",
    image: "/runnercenter/products/3.jpg",
    price: 18990,
    discountPrice: 14243,
    discount: 25,
    isLiked: true
  },
  {
    id: 5,
    name: "Brooks Adrenaline GTS 23",
    image: "/runnercenter/products/5.png",
    price: 17990,
    isLiked: false
  }
];

// Моковые данные для брендов
const mockBrands: Brand[] = [
  {
    id: 1,
    name: "Nike",
    image: "https://via.placeholder.com/150x150?text=Nike"
  },
  {
    id: 2,
    name: "Adidas",
    image: "https://via.placeholder.com/150x150?text=Adidas"
  },
  {
    id: 3,
    name: "New Balance",
    image: "https://via.placeholder.com/150x150?text=New+Balance"
  },
  {
    id: 4,
    name: "Asics",
    image: "https://via.placeholder.com/150x150?text=Asics"
  },
  {
    id: 5,
    name: "Puma",
    image: "https://via.placeholder.com/150x150?text=Puma"
  }
];

// Моковые данные для блогов
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Как выбрать правильную обувь для бега",
    image: "https://via.placeholder.com/400x300?text=Running+Tips"
  },
  {
    id: 2,
    title: "Топ 10 кроссовок 2025 года",
    image: "https://via.placeholder.com/400x300?text=Top+Sneakers+2025"
  },
  {
    id: 3,
    title: "Уход за спортивной обувью",
    image: "https://via.placeholder.com/400x300?text=Shoe+Care"
  }
];

// Симуляция задержки сети
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Получение всех продуктов
  async getProducts(): Promise<Product[]> {
    await delay(500);
    return [...mockProducts];
  },

  async getAllProducts(limit: number, offset: number): Promise<[Product[], number]> {
    const products = [...mockAllProducts].slice(offset, offset + limit);
    const total = mockAllProducts.length;
    return [products, total];
  },

  // Получение продукта по ID
  async getProductById(id: number): Promise<Product | null> {
    await delay(300);
    return mockProducts.find(product => product.id === id) || null;
  },

  // Получение всех брендов
  async getBrands(): Promise<Brand[]> {
    await delay(300);
    return [...mockBrands];
  },

  // Получение всех постов блога
  async getBlogPosts(): Promise<BlogPost[]> {
    await delay(400);
    return [...mockBlogPosts];
  },

  // Переключение лайка продукта
  async toggleProductLike(id: number): Promise<Product | null> {
    await delay(200);
    const product = mockProducts.find(p => p.id === id);
    if (product) {
      product.isLiked = !product.isLiked;
      return { ...product };
    }
    return null;
  }
};
