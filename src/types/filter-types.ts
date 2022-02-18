interface PriceRange {
  min: number;
  max: number;
}

export interface FilterObj {
  name: string;
  brand: string;
  categories: string[];
  manufacture: string;
  volume: number;
  price: PriceRange;
  rating: number;
}

export interface ProductObj {
  name: string;
  brand: string;
  categories: string[];
  manufacture: string;
  volume: number;
  price: number;
  rating: number;
  image: string;
}
