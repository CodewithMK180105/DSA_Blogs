import Image from "next/image";

export default function Hero(){
    return (
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-2xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> of Data
            Structures and Algorithms (DSA)
            <br className="hidden lg:block" /> codes using C++
            <span className="font-semibold underline decoration-primary">
              [Manishkumar](https://tailwindcss.com/)
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            pen source DSA code snippets and examples to{" "}
            <br className="hidden lg:block" /> bootstrap your projects, practice
            sessions, or coding challenges!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
            width={500}
            height={500}
          />
        </div>
      </section>
    )
}