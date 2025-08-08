import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ProductCard } from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [size, setSize] = useState<string | undefined>(product?.sizes[0]);
  const [color, setColor] = useState<string | undefined>(product?.colors[0]);

  if (!product) return <div className="container py-12">Product not found.</div>;

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 8);

  const onBuy = () => {
    addItem(product, { size, color, quantity: 1 });
  };

  return (
    <div className="container py-8">
      <SEO title={`${product.title} | Crisp Canvas`} description={product.description ?? product.title} />
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">Home</Link> / <Link to="/shop" className="hover:underline">Shop</Link> / <span className="text-foreground">{product.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <div className="group relative aspect-[4/5] overflow-hidden">
            <img src={product.image} alt={`${product.title} main image`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>

        <div>
          <h1 className="font-display text-2xl md:text-3xl">{product.title}</h1>
          <p className="mt-2 text-lg font-semibold">${product.price}</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-prose">{product.description}</p>

          {/* Options */}
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="mb-2 text-sm font-medium">Size</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`inline-flex h-10 items-center justify-center rounded-md border px-3 text-sm ${
                      size === s ? "bg-secondary" : "hover:bg-muted/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium">Color</h4>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    aria-label={c}
                    title={c}
                    className={`h-8 w-8 rounded-full border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      color === c ? "ring-2 ring-primary" : ""
                    }`}
                    style={{ background: c.toLowerCase() }}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={onBuy} className="flex-1">Add to Cart</Button>
              <Button variant="secondary" className="flex-1" onClick={onBuy}>Buy Now</Button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="font-medium">Details</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Materials: Premium cotton blend</li>
              <li>Care: Machine wash cold, tumble dry low</li>
              <li>Fit: True to size</li>
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="font-display text-xl">Related Products</h2>
            <Link to="/shop" className="story-link text-sm">View all</Link>
          </div>
          <Swiper modules={[Navigation]} spaceBetween={16} slidesPerView={1.2} breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }} navigation>
            {related.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
