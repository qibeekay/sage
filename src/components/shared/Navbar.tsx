import React, { useState } from "react";
import logo from "../../assets/sage-white-icon.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { Btn } from "./Btn";
import { AnimeBtn } from "./AnimeBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl px-4 py-3 mx-auto flex justify-between items-center rounded-xl border border-neutral-800">
        {/* left logo */}
        <img src={logo} alt="logo" className="w-14 h-10" />

        {/* cemter links */}
        <div className="hidden md:flex space-x-6">
          <a href="#works" className="hover:text-neutral-200">
            How it works
          </a>
          <a href="#pricing" className="hover:text-neutral-200">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-neutral-200">
            Testimonials
          </a>
        </div>

        {/* right buttons  */}
        <div className="hidden md:flex space-x-4 items-center">
          <div className="w-full">
            <AnimeBtn>Consult Us Now</AnimeBtn>
          </div>
        </div>

        {/* hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
            <a href="" className="hover:text-neutral-200">
              Product
            </a>
            <a href="" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="" className="hover:text-neutral-200">
              Resources
            </a>
            <a href="" className="hover:text-neutral-200">
              Login
            </a>
            <a
              href="#"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
