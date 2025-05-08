
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

// Mock function to simulate API call
const searchProducts = async (query: string) => {
  // In a real application, this would be an API call to your backend
  console.log("Searching for:", query);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock data based on search query
  const mockProducts = [
    // Phones
    {
      id: 1,
      name: "iPhone 16",
      image: "https://images.unsplash.com/photo-1592286927505-1def25115d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aVBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      price: {
        amazon: 79999,
        flipkart: 80999,
        croma: 81999,
      },
      slug: "iphone-16"
    },
    {
      id: 2,
      name: "iPhone 16 Pro",
      image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlQaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: {
        amazon: 119999,
        flipkart: 120999,
        croma: 121999,
      },
      slug: "iphone-16-pro"
    },
    {
      id: 3,
      name: "iPhone 16 Pro Max",
      image: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlQaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: {
        amazon: 139999,
        flipkart: 140999,
        croma: 141999,
      },
      slug: "iphone-16-pro-max"
    },
    {
      id: 4,
      name: "Samsung S24",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      price: {
        amazon: 74999,
        flipkart: 73999,
        croma: 75999,
      },
      slug: "samsung-s24"
    },
    {
      id: 5,
      name: "Samsung S24 Ultra",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      price: {
        amazon: 124999,
        flipkart: 123999,
        croma: 125999,
      },
      slug: "samsung-s24-ultra"
    },
    {
      id: 6,
      name: "OnePlus 12",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      price: {
        amazon: 61999,
        flipkart: 60999,
        croma: 62999,
      },
      slug: "oneplus-12"
    },
    // TVs
    {
      id: 7,
      name: "Samsung 55\" QLED 4K Smart TV",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      price: {
        amazon: 64990,
        flipkart: 65999,
        croma: 67990,
      },
      slug: "samsung-55-qled-4k"
    },
    {
      id: 8,
      name: "LG 65\" OLED C3 Smart TV",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
      price: {
        amazon: 179990,
        flipkart: 181999,
        croma: 184990,
      },
      slug: "lg-65-oled-c3"
    },
    {
      id: 9,
      name: "Sony 65\" Bravia XR OLED TV",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
      price: {
        amazon: 249990,
        flipkart: 251999,
        croma: 254990,
      },
      slug: "sony-65-bravia-xr-oled"
    },
    // Gaming consoles
    {
      id: 10,
      name: "PlayStation 5 Slim",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
      price: {
        amazon: 46990,
        flipkart: 47990,
        croma: 48990,
      },
      slug: "playstation-5-slim"
    },
    {
      id: 11,
      name: "PlayStation 5 Digital Edition",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1327&q=80",
      price: {
        amazon: 39990,
        flipkart: 40990,
        croma: 41990,
      },
      slug: "playstation-5-digital"
    },
    {
      id: 12,
      name: "Xbox Series X",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      price: {
        amazon: 49990,
        flipkart: 50990,
        croma: 51990,
      },
      slug: "xbox-series-x"
    },
    // Laptops
    {
      id: 13,
      name: "MacBook Air M3",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      price: {
        amazon: 109990,
        flipkart: 111990,
        croma: 112990,
      },
      slug: "macbook-air-m3"
    },
    {
      id: 14,
      name: "MacBook Pro M3 Pro",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      price: {
        amazon: 169990,
        flipkart: 171990,
        croma: 172990,
      },
      slug: "macbook-pro-m3-pro"
    }
  ];
  
  // Filter based on query (case insensitive)
  return mockProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['searchProducts', query],
    queryFn: () => searchProducts(query),
    enabled: query.length > 0,
  });
  
  const handleCompare = (product: any) => {
    navigate(`/product/${product.slug}`);
  };
  
  const handleSave = (product: any) => {
    toast({
      title: "Product saved",
      description: `${product.name} has been saved to your list`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Search Results for "{query}"
        </h1>
        
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin w-10 h-10 border-4 border-t-brand-purple rounded-full"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-500 py-8">
            Error loading results. Please try again.
          </div>
        )}
        
        {!isLoading && products && products.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold mb-2">No products found</h2>
            <p className="text-muted-foreground">
              Try searching with different keywords
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products && products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
                  }}
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Amazon</span>
                    <span className="font-medium">₹{product.price.amazon.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Flipkart</span>
                    <span className="font-medium">₹{product.price.flipkart.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Croma</span>
                    <span className="font-medium">₹{product.price.croma.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button 
                    onClick={() => handleCompare(product)} 
                    className="flex-1"
                  >
                    Compare
                  </Button>
                  <Button 
                    onClick={() => handleSave(product)} 
                    variant="outline"
                    size="icon"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
