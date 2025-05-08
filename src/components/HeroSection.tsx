
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  return (
    <div className="relative bg-gradient-to-b from-brand-light-purple/20 to-white py-16 md:py-24">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
          Find the <span className="text-brand-purple">Best Prices</span> in India
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
          Compare prices from top Indian retailers and save money on your purchases
        </p>
        
        <form 
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-center justify-center max-w-xl mx-auto gap-2 md:gap-0"
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 md:h-14 pl-4 pr-10 rounded-l-md md:rounded-r-none rounded-r-md border border-r-0 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full md:w-auto h-12 md:h-14 rounded-l-md md:rounded-l-none rounded-r-md px-6 md:px-8 bg-brand-purple hover:bg-brand-deep-purple"
          >
            <Search className="h-5 w-5 mr-2" /> Search
          </Button>
        </form>
        
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          <span>Popular searches:</span>
          <a href="/search?q=iPhone%2016" className="hover:text-brand-purple hover:underline">iPhone 16</a>
          <a href="/search?q=Samsung%20S24" className="hover:text-brand-purple hover:underline">Samsung S24</a>
          <a href="/search?q=OnePlus" className="hover:text-brand-purple hover:underline">OnePlus</a>
          <a href="/search?q=PS5" className="hover:text-brand-purple hover:underline">PS5</a>
          <a href="/search?q=MacBook%20Pro" className="hover:text-brand-purple hover:underline">MacBook Pro</a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
