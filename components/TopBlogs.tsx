import Image from "next/image";
import { Button } from "./ui/button";
import courses from "../array_courses";
import Link from "next/link";

export default function TopBlogs() {
  return (
    <section className="py-12 bg-orange-100 dark:bg-orange-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-orange-800 dark:text-orange-200">
            Top Free Courses
          </h2>
          <p className="mt-4 text-lg text-orange-600 dark:text-orange-400">
            Check out some of the free courses, I learn&apos;t from.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {courses.map((blog, index) => (
            <article
              key={index}
              className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-orange-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-orange-200 dark:hover:bg-orange-700"
            >
              <Image
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-t-lg"
                src={blog.image}
                alt={blog.alt}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-200">
                  {blog.title}
                </h3>
                <p
                  className="mt-4 text-orange-600 dark:text-orange-400"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
                <Link href={blog.redirection_link} target="_blank">
                  <Button
                    className="bg-orange-600 text-white w-full py-5 text-md rounded-lg mt-6 border-none"
                    variant="outline"
                  >
                    Watch Tutorial
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
