import { Button } from "./ui/button";

export default function PricingPlans(){
    return (
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
    )
}