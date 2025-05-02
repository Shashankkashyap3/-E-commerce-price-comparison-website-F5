
import React from 'react';
import { Button } from "@/components/ui/button";

export function AppCTA() {
  return (
    <section className="bg-brand-purple text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Download Our Mobile App
            </h2>
            <p className="text-white/80 mb-6">
              Stay updated with the latest prices and deals. Get notified when prices drop on your favorite products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-brand-purple hover:bg-white/90 hover:text-brand-purple">
                Google Play
              </Button>
              <Button className="bg-white text-brand-purple hover:bg-white/90 hover:text-brand-purple">
                App Store
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative mx-auto w-64 h-96 md:w-72">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 to-transparent rounded-3xl transform rotate-3 scale-95 -z-10"></div>
              <div className="w-full h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2">
                <div className="w-full h-full bg-black rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
