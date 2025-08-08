import { SEO } from "@/components/SEO";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, subtotal, clear } = useCart();

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clear();
    toast({ title: "Order placed", description: "Thanks for your purchase!" });
  };

  return (
    <div className="container py-8">
      <SEO title="Checkout | Crisp Canvas" description="Secure checkout for your Crisp Canvas order." />
      <h1 className="font-display text-2xl mb-6">Checkout</h1>

      <form onSubmit={placeOrder} className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section className="rounded-lg border p-6">
            <h3 className="font-medium mb-4">Billing Details</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="first">First Name</Label>
                <Input id="first" required />
              </div>
              <div>
                <Label htmlFor="last">Last Name</Label>
                <Input id="last" required />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" required />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>
              <div>
                <Label htmlFor="zip">ZIP</Label>
                <Input id="zip" required />
              </div>
            </div>
          </section>

          <section className="rounded-lg border p-6">
            <h3 className="font-medium mb-4">Payment</h3>
            <RadioGroup defaultValue="card" className="space-y-3">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit / Debit Card</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="apple" id="apple" />
                <Label htmlFor="apple">Apple Pay</Label>
              </div>
            </RadioGroup>
          </section>

          <Button type="submit" className="w-full md:w-auto">Place Order</Button>
        </div>

        <aside className="rounded-lg border p-6 h-fit">
          <h3 className="font-medium mb-4">Order Summary</h3>
          <div className="space-y-3">
            {items.map((i) => (
              <div key={i.id} className="flex justify-between text-sm">
                <span>{i.title} × {i.quantity}</span>
                <span>${(i.price * i.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between font-medium">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </aside>
      </form>
    </div>
  );
};

export default Checkout;
