
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, ShoppingCart } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const categories = [
  "Smartphones",
  "Laptops",
  "Televisions",
  "Cameras",
  "Appliances",
  "Audio",
  "Wearables"
];

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="py-6">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`/search?q=${encodeURIComponent(category)}`}
                      className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-purple">Price<span className="text-brand-orange">Guru</span></span>
          </Link>
          
          <div className="hidden md:flex ml-8 space-x-6">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category}
                to={`/search?q=${encodeURIComponent(category)}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 h-9 rounded-full bg-muted px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute right-0 top-0 h-9 w-9"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => navigate('/search')}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Saved Items</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
