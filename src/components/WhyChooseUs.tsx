
import React from 'react';
import { IndianRupee, Search, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Compare Prices",
    description: "Find the best deals by comparing prices across top Indian retailers"
  },
  {
    icon: <IndianRupee className="h-8 w-8" />,
    title: "Save Money",
    description: "Discover exclusive discounts and cashback offers"
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "Shop Wisely",
    description: "Make informed buying decisions with detailed product comparisons"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose PriceGuru</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help you find the best deals across top Indian e-commerce platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
