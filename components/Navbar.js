"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          CollegeAlumni
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center">
          <li>
            <Link href="/" className="block p-2" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about" className="block p-2" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/contact" className="block p-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;