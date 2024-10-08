import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Heart,
  Search,
  Package2,
  CircleUser,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

const Navbar = (): React.ReactElement => {
  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:container">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Exclusive</span>
          </Link>
          <Link
            to="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Exclusive</span>
              </Link>
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                to="/wishlist"
                className="text-muted-foreground hover:text-foreground"
              >
                Wishlist
              </Link>
              <Link
                to="/cart"
                className="text-muted-foreground hover:text-foreground"
              >
                Cart
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Link to={"/wishlist"}>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Open Wishlist page</span>
            </Button>
          </Link>
          <Link to={"/cart"}>
            <Button variant="secondary" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Open Cart page</span>
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/wishlist"}>Wishlist</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/cart"}>Cart</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
