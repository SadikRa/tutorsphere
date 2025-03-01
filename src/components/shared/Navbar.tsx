"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Menu } from "lucide-react";
import logo from "../../app/assets/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-md z-50">
      <div className=" flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={logo}
              alt="TutorSphere Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-extrabold text-primary"
          >
            TutorSphere
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-foreground font-medium">
          <li>
            <Link href="/" className="hover:text-[#2563EB] transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/browse-tutors"
              className="hover:text-[#2563EB] transition"
            >
              Browse Tutors
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-[#2563EB] transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-[#2563EB] transition">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-[#2563EB] transition">
              Blog
            </Link>
          </li>
        </ul>

        {/* Right Side: Mode Toggle, User Dropdown, and Login/Logout Button */}
        <div className="flex items-center space-x-4">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={"https://github.com/shadcn.png"} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>
                {/* <Link to={"/"}>Dashboard</Link> */}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="bg-red-500 cursor-pointer text-white">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/login"
            className="hidden sm:inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300"
          >
            Login
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-2xl text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border shadow-md">
            <ul className="flex flex-col space-y-4 p-6 text-foreground font-medium">
              <li>
                <Link href="/" className="hover:text-[#2563EB] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/browse-tutors"
                  className="hover:text-[#2563EB] transition"
                >
                  Browse Tutors
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-[#2563EB] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#2563EB] transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#2563EB] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Button className="w-full px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-300">
                  LogOut
                </Button>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
