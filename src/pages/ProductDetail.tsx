
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ExternalLink } from "lucide-react";

// We'll use expanded product data including all categories
const allProducts = [
  // Phones
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
    description: "The all-new iPhone 16 features a powerful A18 chip, an enhanced camera system, and a brilliantly vibrant Super Retina XDR display. Experience all-day battery life and the most durable iPhone ever built.",
    category: "Smartphone"
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
    description: "The iPhone 16 Pro raises the bar with surgical-grade stainless steel design, pro-level camera system with 48MP main sensor, and the blazing-fast A18 Pro chip. Featuring a stunning ProMotion XDR display with Always-On capability.",
    category: "Smartphone"
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
    description: "The ultimate iPhone experience. iPhone 16 Pro Max delivers unmatched performance with the A18 Pro chip, our best-ever battery life, and an advanced camera system with 5x optical zoom. The expansive 6.9-inch ProMotion XDR display offers our brightest screen yet.",
    category: "Smartphone"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: "₹1,29,999",
    lowestPrice: "₹1,24,999",
    savings: "₹5,000",
    stores: 6,
    rating: 4.5,
    slug: "samsung-galaxy-s24-ultra",
    description: "Experience next-level AI performance with the Snapdragon 8 Gen 3 processor, capture stunning detail with the 200MP main camera, and create on the go with the included S Pen. The Galaxy S24 Ultra features a beautiful 6.8-inch QHD+ Dynamic AMOLED 2X display with adaptive 120Hz refresh rate.",
    category: "Smartphone"
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
    slug: "oneplus-12-256gb",
    description: "The OnePlus 12 features the powerful Snapdragon 8 Gen 3 processor, a stunning 6.82-inch 2K 120Hz AMOLED display, and a versatile triple camera system co-developed with Hasselblad. Experience lightning-fast 100W SUPERVOOC charging and large 5400 mAh battery for all-day usage.",
    category: "Smartphone"
  },
  // TVs
  {
    id: 6,
    name: "Samsung 55\" QLED 4K Smart TV",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
    price: "₹69,990",
    lowestPrice: "₹64,990",
    savings: "₹5,000",
    stores: 7,
    rating: 4.5,
    slug: "samsung-55-qled-4k",
    description: "Experience brilliant colors and exceptional contrast with Samsung's Quantum Dot technology. This 55\" QLED TV features 4K UHD resolution, Quantum Processor with AI upscaling, and Object Tracking Sound for immersive audio. Includes Tizen smart platform with built-in voice assistants.",
    category: "TV"
  },
  {
    id: 7,
    name: "LG 65\" OLED C3 Smart TV",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
    price: "₹1,89,990",
    lowestPrice: "₹1,79,990",
    savings: "₹10,000",
    stores: 5,
    rating: 4.8,
    slug: "lg-65-oled-c3",
    description: "Experience perfect blacks and infinite contrast with LG's self-lit OLED technology. The 65\" C3 features the α9 Gen6 AI Processor for stunning picture quality, Dolby Vision IQ, Dolby Atmos, and four HDMI 2.1 ports for next-gen gaming with 4K 120Hz support.",
    category: "TV"
  },
  {
    id: 8,
    name: "Sony 65\" Bravia XR OLED TV",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
    price: "₹2,54,990",
    lowestPrice: "₹2,49,990",
    savings: "₹5,000",
    stores: 4,
    rating: 4.9,
    slug: "sony-65-bravia-xr-oled",
    description: "Sony's flagship OLED TV featuring the revolutionary Cognitive Processor XR that understands how humans see and hear. Experience immersive viewing with XR OLED Contrast, XR Motion Clarity, and BRAVIA CORE streaming service with pure IMAX Enhanced content.",
    category: "TV"
  },
  // Gaming Consoles
  {
    id: 9,
    name: "PlayStation 5 Slim",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    price: "₹49,990",
    lowestPrice: "₹46,990",
    savings: "₹3,000",
    stores: 6,
    rating: 4.8,
    slug: "playstation-5-slim",
    description: "Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with haptic feedback, adaptive triggers, and 3D Audio with the new slim version of PS5. Play amazing games from PlayStation Studios and immerse yourself in breathtaking graphics with ray tracing.",
    category: "Gaming"
  },
  {
    id: 10,
    name: "PlayStation 5 Digital Edition",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1327&q=80",
    price: "₹41,990",
    lowestPrice: "₹39,990",
    savings: "₹2,000",
    stores: 5,
    rating: 4.7,
    slug: "playstation-5-digital",
    description: "The PlayStation 5 Digital Edition delivers the same next-generation gaming experience as the PS5 with an Ultra HD Blu-ray disc drive, but in a digital-only offering. Download games from PlayStation Store and enjoy blazing-fast loading, stunning 4K graphics, and immersive features.",
    category: "Gaming"
  },
  {
    id: 11,
    name: "Xbox Series X",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    price: "₹51,990",
    lowestPrice: "₹49,990",
    savings: "₹2,000",
    stores: 6,
    rating: 4.7,
    slug: "xbox-series-x",
    description: "The Xbox Series X is the fastest, most powerful Xbox ever. Experience next-gen speed and performance with the Xbox Velocity Architecture, powered by a custom SSD and integrated software. Play thousands of games spanning four generations with Game Pass (sold separately).",
    category: "Gaming"
  },
  // Laptops
  {
    id: 12,
    name: "MacBook Air M3",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    price: "₹1,14,990",
    lowestPrice: "₹1,09,990",
    savings: "₹5,000",
    stores: 5,
    rating: 4.7,
    slug: "macbook-air-m3",
    description: "The MacBook Air with M3 chip is strikingly thin and brings exceptional speed and power efficiency. With up to 18 hours of battery life, an advanced 8-core CPU and 10-core GPU, a vibrant Liquid Retina display, and a silent, fanless design, it's the perfect everyday laptop.",
    category: "Laptop"
  },
  {
    id: 13,
    name: "MacBook Pro M3 Pro",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    price: "₹1,74,990",
    lowestPrice: "₹1,69,990",
    savings: "₹5,000",
    stores: 4,
    rating: 4.8,
    slug: "macbook-pro-m3-pro",
    description: "The MacBook Pro with M3 Pro takes everything to the next level. Experience breakthrough performance with up to 12-core CPU and 19-core GPU, up to 22 hours of battery life, a stunning Liquid Retina XDR display, and a comprehensive array of ports for all your professional needs.",
    category: "Laptop"
  },
  // Audio
  {
    id: 14,
    name: "Sony WH-1000XM5 Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80",
    price: "₹34,990",
    lowestPrice: "₹29,990",
    savings: "₹5,000",
    stores: 8,
    rating: 4.9,
    slug: "sony-wh-1000xm5",
    description: "Industry-leading noise cancellation with eight microphones and Auto NC Optimizer. Experience exceptional sound quality with the integrated V1 processor and HD Noise Cancelling Processor QN1. Features crystal clear hands-free calling, 30-hour battery life, and quick charging.",
    category: "Audio"
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
  const [imageError, setImageError] = useState(false);

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
          <div className="mb-4">
            <span className="inline-flex items-center text-sm text-muted-foreground">
              <a href="/" className="hover:text-brand-purple">Home</a>
              <span className="mx-2">/</span>
              <a href={`/search?q=${product.category}`} className="hover:text-brand-purple">{product.category}</a>
              <span className="mx-2">/</span>
              <span>{product.name}</span>
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="aspect-square flex items-center justify-center">
                  {!imageError ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-contain max-h-full transition-opacity duration-300"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt={product.name} 
                      className="object-contain max-h-full"
                    />
                  )}
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
              <Badge className="mb-3">{product.category}</Badge>
              
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
