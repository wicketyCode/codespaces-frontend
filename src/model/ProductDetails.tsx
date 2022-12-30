import { Review } from "./Review";

export interface ProductDetails {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  availableSizes: string[];
  material: string;
  brand: string;
  madeIn: string;
  reviewsTotal: { href: string, average: number, totalCount: number };
  reviews: Review[];
}