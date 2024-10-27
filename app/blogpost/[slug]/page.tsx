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


// import matter from 'gray-matter';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';

// Mock function to simulate fetching markdown content based on the slug
async function fetchMarkdownContent(slug: string) {
    // Simulate a data fetching process (this could be an API call, etc.)
    const markdownData = {
        title: "Sample Title",
        description: "Sample Description",
        author: "Author Name",
        date: "2024-01-01",
        content: "## Markdown Content\n\nThis is a sample markdown content." // Your markdown content here
    };
    return markdownData; // Return your mocked data
}

interface BlogData {
    title: string;
    description: string;
    author: string;
    date: string;
    content: string; // Added content field
}

interface PageProps {
    params: {
        slug: string; // This slug is now being used to fetch content
    };
}

// Use generateStaticParams to get all slugs (assuming this is where you define the slugs)
export async function generateStaticParams() {
    // Simulating a list of slugs
    const slugs = ['sample-title', 'another-sample']; // Replace with actual slugs from your data source
    return slugs.map(slug => ({
        slug,
    }));
}

const Page: React.FC<PageProps> = async ({ params }) => {
    // Fetch the markdown content based on the slug
    const { content, title, description, author, date }: BlogData = await fetchMarkdownContent(params.slug);

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
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{description}&quot;</p>

            <div className="flex gap-2 italic">
                <p className="text-sm text-gray-500 mb-4">By {author}</p>
                <p className="text-sm text-gray-500 mb-4">{date}</p>
            </div>

            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose dark:prose-invert"
            />
        </div>
    );
};

export default Page;
