export default function Page({params}: {params: {slug: string}}){

    const Blog={
        title: "First Blog",
        description: "This is the description for the first blog.",
        slug: "first-blog",
        date: "2023-10-01",
        author: "John Doe",
        image: "https://via.placeholder.com/150",
    }

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{Blog.title}</h1>
            <p className="text-lg mb-2">{Blog.description}</p>
            <div className="flex gap-2 italic"> 
                <p className="text-sm text-gray-500 mb-4">By {Blog.author}</p>
                <p className="text-sm text-gray-500 mb-4">{Blog.date}</p>
            </div>
        </div>
    )
}