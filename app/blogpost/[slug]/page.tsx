// import fs from "fs";
// import matter from "gray-matter";
// import { notFound } from "next/navigation";
// import rehypeDocument from 'rehype-document';
// import rehypeFormat from 'rehype-format';
// import rehypeStringify from 'rehype-stringify';
// import remarkParse from 'remark-parse';
// import remarkRehype from 'remark-rehype';
// import { unified } from 'unified';
// import rehypePrettyCode from "rehype-pretty-code";
// import { transformerCopyButton } from "@rehype-pretty/transformers";

// interface PageProps {
//     params: {
//         slug: string;
//     };
// }   

// export default async function Page({ params }: PageProps) {
//     // Construct the file path
//     const filePath = `content/${params.slug}.md`;

//     // Check if the file exists
//     if (!fs.existsSync(filePath)) {
//         notFound();
//     }

//     // Read file content
//     const fileContent = fs.readFileSync(filePath, "utf-8");
//     const { content, data } = matter(fileContent);

//     // Create the processor for Markdown to HTML conversion
//     const processor = unified()
//         .use(remarkParse)
//         .use(remarkRehype)
//         .use(rehypeDocument, { title: '👋🌍' })
//         .use(rehypeFormat)
//         .use(rehypeStringify)
//         .use(rehypePrettyCode, {
//             theme: "one-dark-pro",
//             transformers: [
//                 transformerCopyButton({
//                     visibility: 'always',
//                     feedbackDuration: 3000,
//                 }),
//             ],
//         });

//     // Process the content to HTML
//     const htmlContent = (await processor.process(content)).toString();

//     return (
//         <div className="max-w-5xl mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
//             <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>

//             <div className="flex gap-2 italic">
//                 <p className="text-sm text-gray-500 mb-4">By {data.author}</p>
//                 <p className="text-sm text-gray-500 mb-4">{data.date}</p>
//             </div>

//             <div
//                 dangerouslySetInnerHTML={{ __html: htmlContent }}
//                 className="prose dark:prose-invert"
//             />
//         </div>
//     );
// }



// app/blogpost/[slug]/page.tsx
"use client"; // Mark this component as a Client Component

import Image from "next/image";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

interface Blog {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

// Define the Markdown processor
const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, { title: 'Blog Post' })
  .use(rehypeFormat)
  .use(rehypePrettyCode, {
    theme: "one-dark-pro",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3000,
      }),
    ],
  })
  .use(rehypeStringify);

// Define the BlogPost component
const BlogPost = ({ params }: { params: { slug: string } }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch("/content/blogs.json");
      const blogs: Blog[] = await response.json();
      const selectedBlog = blogs.find((post) => post.slug === params.slug);
      setBlog(selectedBlog || null);

      if (selectedBlog) {
        const { content } = matter(selectedBlog.content);
        
        // Process Markdown to HTML
        const file = await processor.process(content);
        setHtmlContent(String(file));
      }
      
      setLoading(false);
    };

    fetchBlog();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{blog.description}&quot;
      </p>
      <div className="flex gap-2 italic text-sm text-gray-500 mb-4">
        <span>By {blog.author}</span>
        <span>{blog.date}</span>
      </div>
      <Image
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-contain mb-6"
        width={800}
        height={400}
      />
      <div
  dangerouslySetInnerHTML={{ __html: htmlContent }}
  className="prose dark:prose-invert w-full max-w-full"
/>
    </div>
  );
};

export default BlogPost;
