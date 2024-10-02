import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float animate-slideInLeft">
                About Our DSA Blog
              </h1>
              <p className="text-xl mb-6 animate-slideInLeft">
                Empowering developers with in-depth knowledge of Data Structures and Algorithms.
              </p>
              <Button className="bg-white text-purple-500 hover:bg-purple-100 animate-bounce">
                Explore More
              </Button>
            </div>
            <div className="md:w-1/2 animate-slideInRight">
              <Image
                src="https://res.cloudinary.com/dffoynel3/image/upload/v1727843594/dsa_ie3zse.png"
                alt="DSA Illustration"
                width={500}
                height={500}
                className="rounded-lg shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sorting Algorithms", description: "Visualize and understand various sorting techniques" },
              { title: "Graph Traversal", description: "Interactive demonstrations of graph algorithms" },
              { title: "Dynamic Programming", description: "Step-by-step solutions to complex problems" }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-slideInUp">
                <div className="h-48 bg-gray-300 dark:bg-gray-700 animate-pulse relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl text-gray-500 dark:text-gray-400">{index + 1}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Button className="bg-purple-500 text-white hover:bg-purple-600">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
