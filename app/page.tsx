import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const MyComponent: React.FC = () => {
  return (
    <div>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-2xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> of Data
            Structures and Algorithms (DSA)
            <br className="hidden lg:block" /> codes using C++
            <span className="font-semibold underline decoration-primary">
              [Manishkumar](https://tailwindcss.com/)
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            pen source DSA code snippets and examples to{" "}
            <br className="hidden lg:block" /> bootstrap your projects, practice
            sessions, or coding challenges!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Choose a plan that fits your needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transform transition-transform hover:scale-105 hover:border-primary">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Basic
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  $10/month
                </p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>Introduction to Data Structures</li>
                  <li>Basic Algorithms</li>
                  <li>Sorting and Searching</li>
                  <li>Stacks and Queues</li>
                  <li>Linked Lists</li>
                </ul>
                <Button
                  className="bg-orange-600 text-white w-full py-5 text-md rounded-lg"
                  variant="outline"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transform transition-transform hover:scale-105 hover:border-primary">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Standard
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  $20/month
                </p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>Advanced Data Structures</li>
                  <li>Graph Algorithms</li>
                  <li>Dynamic Programming</li>
                  <li>Hash Tables</li>
                  <li>Binary Trees</li>
                </ul>
                <Button
                  className="bg-orange-600 text-white w-full py-5 text-md rounded-lg"
                  variant="outline"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transform transition-transform hover:scale-105 hover:border-primary">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Premium
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  $30/month
                </p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-4 text-gray-600 dark:text-gray-400">
                  <li>Machine Learning Algorithms</li>
                  <li>Backtracking Algorithms</li>
                  <li>Advanced Graph Algorithms</li>
                  <li>Algorithm Optimization</li>
                  <li>Complexity Analysis</li>
                </ul>
                <Button
                  className="bg-orange-600 text-white w-full py-5 text-md rounded-lg"
                  variant="outline"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-orange-100 dark:bg-orange-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-orange-800 dark:text-orange-200">
              DSA with C++
            </h2>
            <p className="mt-4 text-lg text-orange-600 dark:text-orange-400">
              Explore the depths of Data Structures and Algorithms in C++.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Feature 1 */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-orange-800 rounded-lg shadow-lg transform transition-transform hover:animate-rotateY hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-700">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-orange-500 dark:text-orange-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-200">
                  Comprehensive Tutorials
                </h3>
                <p className="mt-4 text-orange-600 dark:text-orange-400">
                  Dive deep into DSA concepts with detailed tutorials and code
                  examples in C++.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-orange-800 rounded-lg shadow-lg transform transition-transform hover:animate-rotateY hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-700">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-orange-500 dark:text-orange-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01M4 12h.01M20 12h.01M4.93 4.93h.01M19.07 19.07h.01M4.93 19.07h.01M19.07 4.93h.01"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-200">
                  Interactive Code Examples
                </h3>
                <p className="mt-4 text-orange-600 dark:text-orange-400">
                  Experiment with interactive code snippets to solidify your
                  understanding of DSA concepts.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-orange-800 rounded-lg shadow-lg transform transition-transform hover:animate-rotateY hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-700">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-orange-500 dark:text-orange-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V5m0 11v-3m0 0H9m3 0h3"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-200">
                  Algorithm Visualizations
                </h3>
                <p className="mt-4 text-orange-600 dark:text-orange-400">
                  Visualize complex algorithms to better understand their inner
                  workings and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-orange-100 dark:bg-orange-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-orange-800 dark:text-orange-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-orange-600 dark:text-orange-400">
              Check out some of my most popular blog posts.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <article className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-orange-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-700">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://via.placeholder.com/400x200"
                alt="Async/Await in JavaScript"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-200">
                  Understanding Async/Await in JavaScript
                </h3>
                <p className="mt-4 text-orange-600 dark:text-orange-400">
                  A deep dive into asynchronous programming in JavaScript using
                  async/await. Learn how to write cleaner and more efficient
                  code with this powerful feature.
                </p>
                <Button
                  className="bg-orange-600 text-white w-full py-5 text-md rounded-lg mt-6 border-none"
                  variant="outline"
                >
                  Read More
                </Button>
              </div>
            </article>
            {/* Blog 2 */}
            <article className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-orange-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-700">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://via.placeholder.com/400x200"
                alt="Mastering Flexbox"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-200">
                  Mastering Flexbox: A Comprehensive Guide
                </h3>
                <p className="mt-4 text-orange-600 dark:text-orange-400">
                  Learn how to use{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/flexbox"
                    className="text-orange-500 dark:text-orange-300 hover:underline"
                  >
                    Flexbox
                  </a>{" "}
                  to create flexible and responsive layouts. This guide covers
                  all the basics and advanced techniques you need to know.
                </p>
                <Button
                  className="bg-orange-600 text-white w-full py-5 text-md rounded-lg mt-6 border-none"
                  variant="outline"
                >
                  Read More
                </Button>
              </div>
            </article>
            {/* Blog 3 */}
            <article className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-orange-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-700">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://via.placeholder.com/400x200"
                alt="CSS Grid Layout"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-200">
                  CSS Grid Layout: A Beginner&#39;s Guide
                </h3>
                <p className="mt-4 text-orange-600 dark:text-orange-400">
                  An introduction to{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
                    className="text-orange-500 dark:text-orange-300 hover:underline"
                  >
                    CSS Grid Layout
                  </a>{" "}
                  with practical examples. Learn how to create complex and
                  responsive grid-based layouts with ease.
                </p>
                {/* <a href="#" className="mt-4 inline-block text-orange-500 dark:text-orange-300 hover:underline">Read more</a> */}
                <Button
                  className="bg-orange-600 text-white w-full py-5 text-md rounded-lg mt-6 border-none"
                  variant="outline"
                >
                  Read More
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
