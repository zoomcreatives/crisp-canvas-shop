import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

export const Navbar = () => {
  const { items } = useCart();
  const count = items.reduce((n, i) => n + i.quantity, 0);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-secondary text-secondary-foreground" : "hover:bg-muted/50"}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display text-xl font-semibold">Crisp Canvas</Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={linkCls}>Home</NavLink>
            <NavLink to="/shop" className={linkCls}>Shop</NavLink>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3 w-[420px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search products" aria-label="Search" />
          </div>
          <Link to="/cart" className="relative">
            <Button variant="secondary" size="icon" aria-label="Cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1.5 text-xs font-medium text-accent-foreground">
                  {count}
                </span>
              )}
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link to="/cart" className="relative">
            <Button variant="secondary" size="icon" aria-label="Cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1.5 text-xs font-medium text-accent-foreground">
                  {count}
                </span>
              )}
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="mt-6 space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Search products" aria-label="Search" />
                </div>
                <nav className="flex flex-col gap-2">
                  <NavLink to="/" end className={linkCls}>Home</NavLink>
                  <NavLink to="/shop" className={linkCls}>Shop</NavLink>
                  <NavLink to="/login" className={linkCls}>Login</NavLink>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
