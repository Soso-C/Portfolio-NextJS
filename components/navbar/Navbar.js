"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { navbarData } from "./navbarData";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <nav className="fixed top-0 w-full bg-mirage-400 items-center flex p-6 z-40 shadow-md shadow-mirage-800 text-gray-300">
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap max-w-7xl mx-auto">
        {/* LOGO */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="text-xl text-gray-300 font-bold cursor-pointer"
          onClick={() => setToggle(false)}
        >
          SC Dev
        </Link>
        {/* Burger Btn */}
        <button
          className="flex justify-end md:hidden ring-1 ring-gray-300 rounded  hover:ring-orange-500 hover:text-orange-500 hover:duration-500"
          onClick={showNav}
        >
          <AiOutlineMenu className="w-7 h-7 flex justify-center items-center text-mirage-50 p-1" />
        </button>

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center text-mirage-50 font-medium pt-2 md:pt-0 md:space-y-0 w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          {/* navbar map link */}
          {navbarData.map((link, index) => {
            return (
              <li
                key={index}
                className="first:mt-4 first:md:mt-0 border-t w-full flex justify-center p-2.5 md:border-none md:w-auto md:p-0"
              >
                <Link
                  to={link.href}
                  smooth={true}
                  duration={600}
                  onClick={() => setToggle(false)}
                  className="cursor-pointer hover:text-orange-500 duration-500"
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
