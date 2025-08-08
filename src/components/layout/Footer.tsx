import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="font-display text-lg">Crisp Canvas</h3>
          <p className="text-sm text-muted-foreground">
            Modern minimalist clothing with premium finishes and everyday comfort.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:underline">All Products</Link></li>
            <li><a className="hover:underline" href="#">Men</a></li>
            <li><a className="hover:underline" href="#">Women</a></li>
            <li><a className="hover:underline" href="#">Kids</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="#">About</a></li>
            <li><a className="hover:underline" href="#">Sustainability</a></li>
            <li><a className="hover:underline" href="#">Careers</a></li>
            <li><a className="hover:underline" href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get new drops and early access.</p>
          <div className="flex gap-2">
            <Input placeholder="Enter your email" aria-label="Email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Crisp Canvas. All rights reserved.
      </div>
    </footer>
  );
};
