import features from "../array_overview"

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
            {
              features.map((feature, index) => (
                <div key={index} className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-orange-800 rounded-lg shadow-lg transform transition-transform hover:animate-rotateY hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-700">
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
                          d={feature.svgPath}
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-200">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-orange-600 dark:text-orange-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>  
        </div>  
      </section>    
    )
}    

