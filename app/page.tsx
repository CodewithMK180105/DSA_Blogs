import CoursesCards from "@/components/CoursesCards";
import Hero from "@/components/HomeHeroSection";
import PricingPlans from "@/components/PricingPlans";
import TopBlogs from "@/components/TopBlogs";
import React from "react";

const MyComponent: React.FC = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Pricing/Plans Section */}
      <PricingPlans />

      {/* Courses Cards */}
      <CoursesCards />

      {/* Top Blogs */}
      <TopBlogs />
    </div>
  );
};

export default MyComponent;
