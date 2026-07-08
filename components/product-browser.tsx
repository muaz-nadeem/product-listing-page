"use client";

import { useMemo, useState } from "react";
import {
  CATEGORIES,
  SORT_OPTIONS,
  type Category,
  type Product,
  type SortOption,
} from "@/lib/products";
import { ProductCard } from "@/components/product-card";

interface ProductBrowserProps {
  products: Product[];
}

export function ProductBrowser({ products }: ProductBrowserProps) {
  const [category, setCategory] = useState<Category>("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const visibleProducts = useMemo(() => {
    const filtered =
      category === "All"
        ? [...products]
        : products.filter((p) => p.category === category);

    switch (sort) {
      case "price-asc":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-desc":
        return filtered.sort((a, b) => b.price - a.price);
      case "rating-desc":
        return filtered.sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [products, category, sort]);

  return (
    <section aria-label="Product catalog">
      {/* Toolbar: category filters + sorting */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((c) => {
            const isActive = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-stone-900 text-white"
                    : "bg-white text-stone-600 ring-1 ring-inset ring-stone-200 hover:bg-stone-100"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <label className="flex shrink-0 items-center gap-2 text-sm text-stone-600">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-900 outline-none focus:ring-2 focus:ring-stone-400"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Fixed line-height slot so the count text never shifts the grid below */}
      <p className="mt-4 min-h-5 text-sm text-stone-500" aria-live="polite">
        {visibleProducts.length}{" "}
        {visibleProducts.length === 1 ? "product" : "products"}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={index < 4}
          />
        ))}
      </div>
    </section>
  );
}
