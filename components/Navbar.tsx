import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ThemeButton";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href={"/"}>Manishkumar DSA</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:scale-110 font-semibold transition-transform duration-300">Home</Link>
          <Link href="/about" className="hover:scale-110 font-semibold transition-transform duration-300">About</Link>
          <Link href="/blog" className="hover:scale-110 font-semibold transition-transform duration-300">Blog</Link>
          <Link href="/contact" className="hover:scale-110 font-semibold transition-transform duration-300">Contact</Link>
          <div className="flex items-center">
            <Link href="/login">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            </Link>
            <Link href="/register">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            </Link>           
            <ModeToggle />           
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <span className="mr-3"><ModeToggle /></span>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent className="">
              <SheetHeader>
                <SheetTitle className="font-bold mt-6">Manishkumar Blogs</SheetTitle>
                <SheetDescription className="mx-auto">
                  <div className="flex flex-col gap-6 mt-6">
                    <Link className="text-center" href="/">Home</Link>
                    <Link className="text-center" href="/about">About</Link>
                    <Link className="text-center" href="/blog">Blog</Link>
                    <Link className="text-center" href="/contact">Contact</Link>
                    <div>
                    <Link href="/login">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            </Link>
            <Link href="/register">
            <Button className="mx-1" variant="outline">
              Sign In
            </Button>
            </Link>  
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
