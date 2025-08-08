import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type Filters = {
  categories: Set<string>;
  sizes: Set<string>;
  colors: Set<string>;
  price: [number, number];
  sort: string;
};

export function FiltersSidebar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
}) {
  const update = (partial: Partial<Filters>) => onChange({ ...filters, ...partial });

  const toggleInSet = (set: Set<string>, value: string) => {
    const next = new Set(set);
    next.has(value) ? next.delete(value) : next.add(value);
    return next;
  };

  const allCategories = ["Men", "Women", "Kids"];
  const allSizes = ["XS", "S", "M", "L", "XL"];
  const allColors = ["Black", "White", "Emerald", "Olive", "Beige", "Charcoal", "Grey"];

  return (
    <aside className="space-y-8">
      <section>
        <h4 className="mb-3 font-medium">Category</h4>
        <div className="space-y-2">
          {allCategories.map((c) => (
            <label key={c} className="flex items-center gap-2">
              <Checkbox
                checked={filters.categories.has(c)}
                onCheckedChange={() => update({ categories: toggleInSet(filters.categories, c) })}
              />
              <span className="text-sm">{c}</span>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h4 className="mb-3 font-medium">Price</h4>
        <div className="px-1">
          <Slider
            value={[filters.price[0], filters.price[1]]}
            min={0}
            max={200}
            step={1}
            onValueChange={(v) => update({ price: [v[0], v[1]] })}
          />
          <div className="mt-2 text-sm text-muted-foreground">
            ${filters.price[0]} – ${filters.price[1]}
          </div>
        </div>
      </section>

      <section>
        <h4 className="mb-3 font-medium">Size</h4>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((s) => (
            <button
              key={s}
              onClick={() => update({ sizes: toggleInSet(filters.sizes, s) })}
              className={`inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm ${
                filters.sizes.has(s) ? "bg-secondary" : "hover:bg-muted/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h4 className="mb-3 font-medium">Color</h4>
        <div className="flex flex-wrap gap-2">
          {allColors.map((c) => (
            <button
              key={c}
              onClick={() => update({ colors: toggleInSet(filters.colors, c) })}
              aria-label={c}
              title={c}
              className={`h-8 w-8 rounded-full border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                filters.colors.has(c) ? "ring-2 ring-primary" : ""
              }`}
              style={{ background: c.toLowerCase() }}
            />
          ))}
        </div>
      </section>

      <section>
        <Label className="mb-2 block">Sort by</Label>
        <Select value={filters.sort} onValueChange={(v) => update({ sort: v })}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">Newest</SelectItem>
            <SelectItem value="low">Price: Low to High</SelectItem>
            <SelectItem value="high">Price: High to Low</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </section>
    </aside>
  );
}
