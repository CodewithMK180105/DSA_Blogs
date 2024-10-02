export default function CoursesCards(){
    return (
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
    )
}