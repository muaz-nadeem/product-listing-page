export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image_url: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Minimalist Fabric Sofa",
    price: 899,
    category: "Living Room",
    rating: 4.7,
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Modern Oak Dining Table",
    price: 650,
    category: "Dining Room",
    rating: 4.5,
    image_url:
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Ergonomic Mesh Office Chair",
    price: 249,
    category: "Office",
    rating: 4.8,
    image_url:
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Walnut Bedside Table",
    price: 180,
    category: "Bedroom",
    rating: 4.3,
    // Original dataset URL 404s on Unsplash; swapped for a working equivalent
    image_url:
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Leather Lounge Armchair",
    price: 420,
    category: "Living Room",
    rating: 4.6,
    image_url:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Scandic King Bed Frame",
    price: 1100,
    category: "Bedroom",
    rating: 4.9,
    image_url:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Floating Wooden Bookshelf",
    price: 135,
    category: "Office",
    rating: 4.2,
    // Original dataset URL 404s on Unsplash; swapped for a working equivalent
    image_url:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Velvet Ottoman Pouf",
    price: 95,
    category: "Living Room",
    rating: 4.4,
    image_url:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
  },
];

export const CATEGORIES = [
  "All",
  "Living Room",
  "Dining Room",
  "Bedroom",
  "Office",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Rating: Highest first" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];
