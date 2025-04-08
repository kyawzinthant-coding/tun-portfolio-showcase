
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tun Tun Nyein
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6">
            I build exceptional software solutions.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            I'm a software engineer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on building accessible, 
            human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#projects">
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Contact me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
