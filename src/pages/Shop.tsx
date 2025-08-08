import { useMemo, useState } from "react";
import { SEO } from "@/components/SEO";
import { FiltersSidebar, Filters } from "@/components/FiltersSidebar";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const initialFilters: Filters = {
  categories: new Set<string>(),
  sizes: new Set<string>(),
  colors: new Set<string>(),
  price: [0, 200],
  sort: "new",
};

const Shop = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filtered = useMemo(() => {
    let list = [...products];

    // Category
    if (filters.categories.size) list = list.filter((p) => filters.categories.has(p.category));

    // Sizes
    if (filters.sizes.size) list = list.filter((p) => p.sizes.some((s) => filters.sizes.has(s)));

    // Colors
    if (filters.colors.size) list = list.filter((p) => p.colors.some((c) => filters.colors.has(c)));

    // Price
    list = list.filter((p) => p.price >= filters.price[0] && p.price <= filters.price[1]);

    // Sort
    switch (filters.sort) {
      case "low":
        list.sort((a, b) => a.price - b.price);
        break;
      case "high":
        list.sort((a, b) => b.price - a.price);
        break;
      case "new":
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        break;
    }

    return list;
  }, [filters]);

  return (
    <div className="container py-8">
      <SEO title="Shop | Crisp Canvas" description="Browse minimalist clothing for men, women and kids. Filter by category, size, color, and price." />
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-2xl">Shop</h1>
      </div>

      <div className="grid gap-10 md:grid-cols-[280px_1fr]">
        <div>
          <FiltersSidebar filters={filters} onChange={setFilters} />
        </div>

        <div>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground">No products match your filters.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
