
import React from 'react';
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "iPhone 16 (128GB)",
    image: "https://images.unsplash.com/photo-1695578430122-aca1f7944f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    price: "₹79,990",
    lowestPrice: "₹77,990",
    savings: "₹2,000",
    stores: 8,
    rating: 4.6
  },
  {
    id: 2,
    name: "iPhone 16 Pro (256GB)",
    image: "https://images.unsplash.com/photo-1706385187266-3ae1dccd3fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₹1,19,990",
    lowestPrice: "₹1,16,990",
    savings: "₹3,000",
    stores: 7,
    rating: 4.8
  },
  {
    id: 3,
    name: "iPhone 16 Pro Max (256GB)",
    image: "https://images.unsplash.com/photo-1707226803980-d45115806e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    price: "₹1,39,990",
    lowestPrice: "₹1,35,990",
    savings: "₹4,000",
    stores: 6,
    rating: 4.9
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1707226803980-d45115806e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    price: "₹1,29,999",
    lowestPrice: "₹1,24,999",
    savings: "₹5,000",
    stores: 6,
    rating: 4.5
  }
];

export function PopularProducts() {
  return (
    <section className="py-12 bg-accent/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Products</h2>
          <a href="#" className="text-brand-purple hover:underline mt-2 md:mt-0">
            View all products
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card flex flex-col h-full">
              <div className="relative p-4 bg-white">
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
                  <span className="price-tag text-lg">{product.lowestPrice}</span>
                </div>
              </div>
              <div className="p-4 bg-muted mt-auto">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Available at {product.stores} stores</span>
                  <a 
                    href="#"
                    className="text-sm font-medium text-brand-purple hover:underline"
                  >
                    Compare
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
