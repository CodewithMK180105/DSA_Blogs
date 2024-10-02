import Image from "next/image";
import { Button } from "./ui/button";

export default function TopBlogs(){
    return (
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
              <Image
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://res.cloudinary.com/dffoynel3/image/upload/v1727843594/dsa_ie3zse.png"
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
            <Image
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://res.cloudinary.com/dffoynel3/image/upload/v1727843594/dsa_ie3zse.png"
                alt="Async/Await in JavaScript"
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
            <Image
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://res.cloudinary.com/dffoynel3/image/upload/v1727843594/dsa_ie3zse.png"
                alt="Async/Await in JavaScript"
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
    )
}