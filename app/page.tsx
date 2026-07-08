import { PRODUCTS } from "@/lib/products";
import { ProductBrowser } from "@/components/product-browser";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 sm:px-6">
      <header className="py-10 sm:py-14">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Shop the collection
        </h1>
        <p className="mt-3 max-w-xl text-stone-500">
          Thoughtfully designed pieces for every room, built to last and priced
          to make sense.
        </p>
      </header>

      <ProductBrowser products={PRODUCTS} />
    </main>
  );
}
