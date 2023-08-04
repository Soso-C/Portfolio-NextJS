import React from "react";
import { Link } from "react-scroll";

export default function ButtonMain({ children, variant = "primary", href }) {
  return (
    <button
      className={`p-3 font-medium text-white md:py-3 md:px-7 rounded-lg hover:scale-105 duration-500 ${
        variant === "primary"
          ? "bg-orange-600 hover:bg-orange-800"
          : "bg-zinc-900 hover:bg-zinc-950"
      }`}
    >
      <Link to={href} smooth={true} duration={600}>
        {children}
      </Link>
    </button>
  );
}
