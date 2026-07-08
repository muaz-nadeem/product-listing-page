import Image from "next/image";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow duration-200 hover:shadow-lg hover:shadow-stone-900/5">
      {/* Fixed aspect ratio reserves space before the image loads, preventing CLS */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-400">
            {product.category}
          </p>
          <p
            className="flex items-center gap-1 text-xs font-medium text-stone-600 tabular-nums"
            aria-label={`Rated ${product.rating} out of 5`}
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5 text-amber-400"
              aria-hidden="true"
            >
              <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.3 4.02a1 1 0 0 0 .95.69h4.22c.97 0 1.37 1.24.59 1.81l-3.42 2.48a1 1 0 0 0-.36 1.12l1.3 4.02c.3.92-.75 1.69-1.54 1.12l-3.41-2.48a1 1 0 0 0-1.18 0l-3.41 2.48c-.79.57-1.84-.2-1.54-1.12l1.3-4.02a1 1 0 0 0-.36-1.12L2 9.45c-.78-.57-.38-1.81.59-1.81h4.22a1 1 0 0 0 .95-.69l1.3-4.02Z" />
            </svg>
            {product.rating.toFixed(1)}
          </p>
        </div>

        <h2 className="text-sm font-medium leading-snug text-stone-900">
          {product.name}
        </h2>

        <p className="mt-auto pt-2 text-lg font-semibold text-stone-900 tabular-nums">
          PKR {product.price.toLocaleString()}
        </p>
      </div>
    </article>
  );
}
