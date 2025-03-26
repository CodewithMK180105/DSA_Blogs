'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typed from "typed.js";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export default function Hero(){

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Arrays', 'Vectors', 'Strings', 'Searching', 'Sorting', 'Prefix-Suffix Sum', 'Sliding Window', 'Bitwise Operator', 'Math And Prime', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Hash Tables'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  // <span ref={el} />


    return (
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-2xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> of Data
            Structures and Algorithms (DSA)
            <br className="hidden lg:block" /> <span ref={el} /> <br />
            <span className="flex items-center gap-2 mt-3 text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <Link href="https://github.com/CodewithMK180105/DSA-using-Cpp">Visit Repository</Link>
              <FaArrowUpRightFromSquare />
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