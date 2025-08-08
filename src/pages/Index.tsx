import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { products, heroImage } from "@/data/products";
import menImg from "@/assets/category-men.jpg";
import womenImg from "@/assets/category-women.jpg";
import kidsImg from "@/assets/category-kids.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Index = () => {
  const newArrivals = products.filter((p) => p.isNew).concat(products.slice(0, 4));
  const saleItems = products.filter((p) => p.onSale);

  return (
    <div>
      <SEO
        title="Home | Crisp Canvas — Minimalist Clothing"
        description="Discover modern minimalist clothing for men, women, and kids. New arrivals, curated basics, and premium essentials."
      />

      {/* Hero */}
      <section className="relative">
        <div className="container grid gap-8 py-12 md:grid-cols-2 md:py-16 lg:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Elevated essentials for every day.
            </h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              Clean silhouettes. Premium fabrics. Designed for comfort and built to last.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/shop"><Button className="px-6">Shop Now</Button></Link>
              <Link to="/shop"><Button variant="secondary">New Arrivals</Button></Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
            <img
              src={heroImage}
              alt="Model wearing modern minimalist clothing"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12">
        <h2 className="font-display text-2xl mb-6">Shop by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard image={menImg} label="Men" />
          <CategoryCard image={womenImg} label="Women" />
          <CategoryCard image={kidsImg} label="Kids" />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-secondary/10 py-12">
        <div className="container">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl">New Arrivals</h2>
            <Link to="/shop" className="story-link text-sm">View all</Link>
          </div>
          <Swiper modules={[Navigation, Pagination]} spaceBetween={16} slidesPerView={1.2} breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }} navigation pagination={{ clickable: true }}>
            {newArrivals.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Sale */}
      <section className="container py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl">On Sale</h2>
          <Link to="/shop" className="story-link text-sm">Shop sale</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {saleItems.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-background to-secondary/20 py-12">
        <div className="container grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-2xl">Stay in the loop</h2>
            <p className="text-muted-foreground max-w-prose mt-2">
              Sign up to get product updates, limited drops, and early access.
            </p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email"
              className="flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
