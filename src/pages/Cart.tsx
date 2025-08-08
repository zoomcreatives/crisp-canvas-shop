import { SEO } from "@/components/SEO";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, subtotal, removeItem, updateQuantity } = useCart();

  return (
    <div className="container py-8">
      <SEO title="Cart | Crisp Canvas" description="Review items in your cart and proceed to checkout." />
      <h1 className="font-display text-2xl mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Link to="/shop"><Button className="mt-4">Continue Shopping</Button></Link>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img src={item.image} alt={item.title} className="h-24 w-20 rounded-md object-cover" />
                <div className="flex-1">
                  <h3 className="font-medium leading-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.size} {item.color ? `• ${item.color}` : ''}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="h-9 w-9 rounded-md border" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button className="h-9 w-9 rounded-md border" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeItem(item.id)} className="mt-2 text-sm text-destructive hover:underline">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border p-6 h-fit">
            <h3 className="font-medium mb-3">Order Summary</h3>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <Link to="/checkout"><Button className="w-full">Checkout</Button></Link>
              <Link to="/shop" className="block mt-2 text-center text-sm story-link">Continue Shopping</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
