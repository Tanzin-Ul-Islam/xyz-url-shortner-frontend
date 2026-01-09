import UrlShortenerForm from "@/components/UrlShortenerForm";
import ShortenedUrlDisplay from "@/components/ShortenedUrlDisplay";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section>
        <HeroSection />
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        {/* URL Shortener Form */}

        <section>
          <UrlShortenerForm />
        </section>

        {/* Result Display (Show when URL is shortened) */}
        <section>
          <ShortenedUrlDisplay />
        </section>

        {/* Stats Section */}
        <section className="pt-8">
          <StatsSection />
        </section>

        {/* Features Section */}
        <section className="pt-8">
          <FeaturesSection />
        </section>
      </div>
    </React.Fragment>
  );
}
