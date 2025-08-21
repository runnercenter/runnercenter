export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  discount?: number;
  isLiked: boolean;
}

export interface Brand {
  id: number;
  name: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
}
