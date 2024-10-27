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


import fs from "fs";
import matter from "gray-matter";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

interface BlogData {
    title: string;
    description: string;
    author: string;
    date: string;
}

interface PageProps {
    params: {
        slug: string;
    };
    htmlContent: string; // Add htmlContent to the interface
    data: BlogData; // Add data to the interface
}

// use generateStaticParams to get all slugs from the content folder
export async function generateStaticParams() {
    const files = fs.readdirSync("content");
    return files.map(file => ({
        slug: file.replace(/\.md$/, ""), // Remove .md extension for slug
    }));
}

const Page: React.FC<PageProps> = async ({ params }) => {
    const filePath = `content/${params.slug}.md`;

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        throw new Error("File not found"); // You can customize error handling
    }

    // Read file content
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    // Create the processor for Markdown to HTML conversion
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: "one-dark-pro",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3000,
                }),
            ],
        });

    // Process the content to HTML
    const htmlContent = (await processor.process(content)).toString();

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>

            <div className="flex gap-2 italic">
                <p className="text-sm text-gray-500 mb-4">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            </div>

            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose dark:prose-invert"
            />
        </div>
    );
};

export default Page;
