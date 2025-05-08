
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
    }
  ];
  
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products && products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
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
