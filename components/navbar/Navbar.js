"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { navbarData } from "./navbarData";

// Link of react-scroll
import { Link } from "react-scroll";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <header>
      <nav
        className={`${
          toggle && "h-fit"
        } fixed top-0 flex items-center w-full p-3 z-100 bg-zinc-950 md:h-[90px] md:p-6`}
      >
        <div className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto md:flex-nowrap">
          {/* LOGO */}
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="overflow-hidden text-xl font-bold cursor-pointer text-gray-50"
            onClick={() => setToggle(false)}
          >
            <img
              src="./logo/sc_dev_logo.png"
              alt="logo scdev"
              className="max-h-[80px] max-w-[80px] md:max-h-[90px] md:max-w-[90px]"
            />
          </Link>
          {/* Burger Btn */}
          <button
            className="flex justify-end rounded md:hidden ring-1 ring-gray-300 hover:ring-orange-500 hover:text-orange-500 hover:duration-500"
            onClick={showNav}
          >
            <AiOutlineMenu className="flex items-center justify-center p-1 w-7 h-7 text-gray-50" />
          </button>

          <ul
            className={`${
              toggle ? " flex animate-navbarDown" : " hidden"
            } flex-col justify-center items-center text-gray-50 font-medium pt-2 md:pt-0 md:space-y-0 w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
          >
            {/* navbar map link */}
            {navbarData.map((link, index) => {
              return (
                <NavbarLink
                  key={index}
                  link={link}
                  setToggle={setToggle}
                  toggle={toggle}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

// Navbar Link
const NavbarLink = ({ link, setToggle, toggle }) => {
  return (
    <li
      className={`${
        toggle && " animate-fade"
      } first:mt-4 first:md:mt-0 border-t w-full flex justify-center p-2.5 md:border-none md:w-auto md:p-0`}
    >
      <Link
        to={link.href}
        smooth={true}
        duration={600}
        onClick={() => setToggle(false)}
        className="cursor-pointer hover:duration-500 hover:text-orange-500"
      >
        {link.title}
      </Link>
    </li>
  );
};
