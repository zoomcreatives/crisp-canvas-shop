import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { useWishlist } from "@/context/WishlistContext";
import { Heart } from "lucide-react";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const { isWished, toggle } = useWishlist();
  const wished = isWished(product.id);

  const onAdd = () => {
    addItem(product, { quantity: 1 });
    toast({ title: "Added to cart", description: `${product.title} was added to your cart.` });
  };

  return (
    <Card className="group overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={`${product.title} on model`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button
            type="button"
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wished}
            onClick={(e) => { e.preventDefault(); toggle(product); }}
            className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background/80 backdrop-blur text-foreground hover:bg-muted/70"
          >
            <Heart className="h-4 w-4" fill={wished ? "currentColor" : "none"} />
          </button>
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium leading-tight">{product.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
          </div>
          <div className="text-right">
            {product.onSale && (
              <span className="mr-2 rounded bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">Sale</span>
            )}
            <p className="font-semibold">${product.price}</p>
          </div>
        </div>
        <div className="mt-3">
          <Button onClick={onAdd} className="w-full">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
};
