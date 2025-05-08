
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "iPhone 16 (128GB)",
    image: "https://images.unsplash.com/photo-1695578430122-aca1f7944f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    price: "₹79,990",
    lowestPrice: "₹77,990",
    savings: "₹2,000",
    stores: 8,
    rating: 4.6,
    slug: "iphone-16-128gb"
  },
  {
    id: 2,
    name: "iPhone 16 Pro (256GB)",
    image: "https://images.unsplash.com/photo-1706385187266-3ae1dccd3fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₹1,19,990",
    lowestPrice: "₹1,16,990",
    savings: "₹3,000",
    stores: 7,
    rating: 4.8,
    slug: "iphone-16-pro-256gb"
  },
  {
    id: 3,
    name: "iPhone 16 Pro Max (256GB)",
    image: "https://images.unsplash.com/photo-1707226803980-d45115806e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    price: "₹1,39,990",
    lowestPrice: "₹1,35,990",
    savings: "₹4,000",
    stores: 6,
    rating: 4.9,
    slug: "iphone-16-pro-max-256gb"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1707226803980-d45115806e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    price: "₹1,29,999",
    lowestPrice: "₹1,24,999",
    savings: "₹5,000",
    stores: 6,
    rating: 4.5,
    slug: "samsung-galaxy-s24-ultra"
  }
];

export function PopularProducts() {
  const navigate = useNavigate();

  const handleProductClick = (slug: string) => {
    // Navigate to the product details page
    navigate(`/product/${slug}`);
  };

  return (
    <section className="py-12 bg-accent/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Products</h2>
          <a href="/products" className="text-brand-purple hover:underline mt-2 md:mt-0">
            View all products
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card flex flex-col h-full cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleProductClick(product.slug)}
            >
              <div className="relative p-4 bg-white rounded-t-lg shadow-sm">
                <Badge className="absolute top-2 right-2 bg-brand-orange">Save {product.savings}</Badge>
                <div className="aspect-square flex items-center justify-center p-4 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-full"
                  />
                </div>
                <h3 className="font-medium text-lg mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">MRP:</span>
                  <span className="text-muted-foreground line-through">{product.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Best Price:</span>
                  <span className="price-tag text-lg font-semibold text-brand-purple">{product.lowestPrice}</span>
                </div>
              </div>
              <div className="p-4 bg-muted mt-auto rounded-b-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Available at {product.stores} stores</span>
                  <span 
                    className="text-sm font-medium text-brand-purple hover:underline"
                  >
                    Compare
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
