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
          <h4 className="mb-3 font-medium">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Our Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" to="/about">About</Link></li>
            <li><a className="hover:underline" href="#">Sustainability</a></li>
            <li><a className="hover:underline" href="#">Careers</a></li>
            <li><Link className="hover:underline" to="/contact">Contact</Link></li>
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
