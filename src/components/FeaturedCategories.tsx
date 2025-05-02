
import React from 'react';

const categories = [
  {
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    products: "1,200+ products"
  },
  {
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    products: "850+ products"
  },
  {
    name: "Televisions",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    products: "600+ products"
  },
  {
    name: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    products: "950+ products"
  },
  {
    name: "Cameras",
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    products: "400+ products"
  },
  {
    name: "Home Appliances",
    image: "https://images.unsplash.com/photo-1589922585618-8ce1d3d63caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
    products: "1,500+ products"
  }
];

export function FeaturedCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Categories</h2>
          <a href="#" className="text-brand-purple hover:underline mt-2 md:mt-0">
            View all categories
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a 
              href="#"
              key={category.name} 
              className="product-card group flex flex-col"
            >
              <div className="aspect-square overflow-hidden relative bg-accent/30">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.products}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
