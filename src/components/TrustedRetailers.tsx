
import React from 'react';

export function TrustedRetailers() {
  const retailers = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Flipkart", logo: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png" },
    { name: "Reliance Digital", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Reliance_Digital_Logo.svg" },
    { name: "Croma", logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Croma_Logo.svg" },
    { name: "Vijay Sales", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Vijay_Sales_Logo.png" }
  ];

  return (
    <section className="py-10 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-1">Trusted Retailers</h2>
          <p className="text-sm text-muted-foreground">
            We compare prices from India's top retailers
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {retailers.map((retailer) => (
            <div
              key={retailer.name}
              className="h-12 w-28 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={retailer.logo}
                alt={retailer.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
