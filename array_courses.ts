interface Course {
    id: number;
    image: string;
    alt: string;
    title: string;
    description: string;
    redirection_link: string;
}

const courses: Course[] = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dffoynel3/image/upload/v1730090212/CW_C__DSA_pzqv2v.png",
        alt:"C++ - DSA",
        title: 'Understanding DSA with C++ - A Tutorial by College Wallah',
        description: "A deep dive into Data Structures and Algorithms (DSA) using C++ with College Wallah’s tutorial. Learn to write cleaner, efficient code and master essential concepts with this powerful resource. Perfect for building a strong foundation in C++.",
        redirection_link: "https://www.youtube.com/playlist?list=PLxgZQoSe9cg0df_GxVjz3DD_Gck5tMXAd"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dffoynel3/image/upload/v1730090699/harry_sigma_web_development_nx6ran.png",
        alt:"Full Stack - Web",
        title: 'Mastering Web Development - A Tutorial by Code with Harry',
        description: "Explore the world of web development with Code with Harry’s comprehensive tutorial. Learn to build modern, responsive websites from scratch and master essential web technologies. Ideal for beginners and those looking to solidify their skills in web development.",
        redirection_link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dffoynel3/image/upload/v1730091104/TS_chaiAurCode_bi8xig.png",
        alt:"Typescript - Hitesh",
        title: 'Learning TypeScript - A Tutorial by Chai aur Code',
        description: "Get started with TypeScript in this engaging tutorial by Chai aur Code. Understand the fundamentals of TypeScript and how it enhances JavaScript for building robust applications. Perfect for those looking to strengthen their skills in typed programming.",
        redirection_link: "https://www.youtube.com/playlist?list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW"
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dffoynel3/image/upload/v1730091140/NextJs_Vishwas_u1m3pj.png",
        alt:"Next JS - Vishwas",
        title: 'Mastering Next.js - A Tutorial by Codevolution',
        description: "Learn the ins and outs of Next.js with Codevolution's comprehensive tutorial series. Covering everything from the basics to advanced topics, this course is ideal for developers aiming to build powerful server-rendered React applications with Next.js.",
        redirection_link: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dffoynel3/image/upload/v1730111254/Redux_Hitesh_abz8lg.png",
        alt: "Redux - Hitesh",
        title: 'Mastering Redux - A Tutorial by Chai aur Code',
        description: "Dive into state management with Redux in this tutorial by Chai aur Code. Learn to efficiently manage application state, handle complex data flows, and create scalable applications using Redux. Perfect for anyone looking to enhance their React development skills.",
        redirection_link: "https://www.youtube.com/watch?v=1i04-A7kfFI&t=3721s"
    }    
];

export default courses;
