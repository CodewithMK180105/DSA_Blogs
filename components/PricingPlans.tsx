import { Button } from "./ui/button";
import plans from "../array_pricingPlans";


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
            {
              plans.map((plan) => (
                <div
                  key={plan.name}
                  className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transform transition-transform hover:scale-105 hover:border-primary"
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      {plan.name}
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">{plan.price}</p>
                  </div>
                  <div className="p-6">
                    <ul className="mb-6 space-y-4 text-gray-600 dark:text-gray-400">
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <Button
                      className="bg-orange-600 text-white w-full py-5 text-md rounded-lg"
                      variant="outline"
                    >
                      Choose Plan
                    </Button>
                  </div>
                </div>
              ))
                      
            }
          </div>
        </div>
      </section>
    )
}

