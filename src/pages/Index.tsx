
import React from 'react';
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { PopularProducts } from "@/components/PopularProducts";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TrustedRetailers } from "@/components/TrustedRetailers";
import { AppCTA } from "@/components/AppCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCategories />
        <PopularProducts />
        <WhyChooseUs />
        <TrustedRetailers />
        <AppCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
