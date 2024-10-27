import { Button } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

interface Blog {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}

const dirContent = fs.readdirSync("content", "utf-8");
console.log(dirContent);
const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`);
  const { data } = matter(fileContent);
  return data;
});

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 duration-200 cursor-pointer"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.description.split(" ").length > 20
                  ? blog.description.split(" ").slice(0, 20).join(" ") + "..."
                  : blog.description}
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{blog.date}</span> | <span>{blog.author}</span>
              </div>
              <Link className="text-center" href={`/blogpost/${blog.slug}`}>
                <Button className="mx-1" variant="outline">
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
