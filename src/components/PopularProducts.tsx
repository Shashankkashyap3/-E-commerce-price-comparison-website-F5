
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
    name: "PlayStation 5 Slim",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    price: "₹49,990",
    lowestPrice: "₹46,990",
    savings: "₹3,000",
    stores: 6,
    rating: 4.8,
    slug: "playstation-5-slim"
  },
  {
    id: 3,
    name: "Samsung 55\" QLED 4K Smart TV",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
    price: "₹69,990",
    lowestPrice: "₹64,990",
    savings: "₹5,000",
    stores: 7,
    rating: 4.5,
    slug: "samsung-55-qled-4k"
  },
  {
    id: 4,
    name: "MacBook Air M3",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    price: "₹1,14,990",
    lowestPrice: "₹1,09,990",
    savings: "₹5,000",
    stores: 5,
    rating: 4.7,
    slug: "macbook-air-m3"
  },
  {
    id: 5,
    name: "OnePlus 12 (256GB)",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    price: "₹64,990",
    lowestPrice: "₹61,990",
    savings: "₹3,000",
    stores: 6,
    rating: 4.5,
    slug: "oneplus-12-256gb"
  },
  {
    id: 6,
    name: "Sony WH-1000XM5 Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80",
    price: "₹34,990",
    lowestPrice: "₹29,990",
    savings: "₹5,000",
    stores: 8,
    rating: 4.9,
    slug: "sony-wh-1000xm5"
  },
  {
    id: 7,
    name: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: "₹1,29,999",
    lowestPrice: "₹1,24,999",
    savings: "₹5,000",
    stores: 6,
    rating: 4.5,
    slug: "samsung-galaxy-s24-ultra"
  },
  {
    id: 8,
    name: "LG 65\" OLED C3 Smart TV",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
    price: "₹1,89,990",
    lowestPrice: "₹1,79,990",
    savings: "₹10,000",
    stores: 5,
    rating: 4.8,
    slug: "lg-65-oled-c3"
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
                    }}
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
