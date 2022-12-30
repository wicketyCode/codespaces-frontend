import { Color } from "./Color";
import { Review } from "./Review";

export interface ProductDetails {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  availableSizes: string[];
  colors: Color[];
  material: string;
  brand: string;
  madeIn: string;
  reviewsTotal: { href: string, average: number, totalCount: number };
  reviews: Review[];
}