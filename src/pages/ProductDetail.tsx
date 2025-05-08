
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ExternalLink } from "lucide-react";

// We'll use the same product data for demo purposes
const allProducts = [
  {
    id: 1,
    name: "iPhone 16 (128GB)",
    image: "https://images.unsplash.com/photo-1695578430122-aca1f7944f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    price: "₹79,990",
    lowestPrice: "₹77,990",
    savings: "₹2,000",
    stores: 8,
    rating: 4.6,
    slug: "iphone-16-128gb",
    description: "The all-new iPhone 16 features a powerful A18 chip, an enhanced camera system, and a brilliantly vibrant Super Retina XDR display. Experience all-day battery life and the most durable iPhone ever built."
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
    slug: "iphone-16-pro-256gb",
    description: "The iPhone 16 Pro raises the bar with surgical-grade stainless steel design, pro-level camera system with 48MP main sensor, and the blazing-fast A18 Pro chip. Featuring a stunning ProMotion XDR display with Always-On capability."
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
    slug: "iphone-16-pro-max-256gb",
    description: "The ultimate iPhone experience. iPhone 16 Pro Max delivers unmatched performance with the A18 Pro chip, our best-ever battery life, and an advanced camera system with 5x optical zoom. The expansive 6.9-inch ProMotion XDR display offers our brightest screen yet."
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
    slug: "samsung-galaxy-s24-ultra",
    description: "Experience next-level AI performance with the Snapdragon 8 Gen 3 processor, capture stunning detail with the 200MP main camera, and create on the go with the included S Pen. The Galaxy S24 Ultra features a beautiful 6.8-inch QHD+ Dynamic AMOLED 2X display with adaptive 120Hz refresh rate."
  }
];

// Sample retailer data
const retailers = [
  { id: 1, name: "Amazon India", price: "₹77,990", link: "https://www.amazon.in" },
  { id: 2, name: "Flipkart", price: "₹78,499", link: "https://www.flipkart.com" },
  { id: 3, name: "Reliance Digital", price: "₹79,990", link: "https://www.reliancedigital.in" },
  { id: 4, name: "Croma", price: "₹78,990", link: "https://www.croma.com" },
  { id: 5, name: "Vijay Sales", price: "₹79,490", link: "https://www.vijaysales.com" }
];

function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.slug === slug);
      setProduct(foundProduct || null);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-brand-purple rounded-full border-t-transparent"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">We couldn't find the product you're looking for.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="aspect-square flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-contain max-h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="w-full lg:w-3/5">
              <div className="mb-2 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">({product.rating})</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-brand-purple">{product.lowestPrice}</span>
                  <span className="text-muted-foreground line-through">{product.price}</span>
                  <Badge className="bg-brand-orange">Save {product.savings}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Available at {product.stores} stores</p>
              </div>
              
              <p className="text-muted-foreground mb-8">{product.description}</p>
              
              <div className="bg-accent/30 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4">Compare Prices</h2>
                <div className="space-y-4">
                  {retailers.map(retailer => (
                    <div key={retailer.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                      <span className="font-medium">{retailer.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold">{retailer.price}</span>
                        <a 
                          href={retailer.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-brand-purple hover:underline"
                        >
                          Visit <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full md:w-auto bg-brand-purple hover:bg-brand-deep-purple">
                <ShoppingCart className="mr-2 h-4 w-4" /> Save to Watchlist
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetail;
