"use client";
import { Link } from "react-scroll";

export default function Main() {
  return (
    <div
      id="home"
      className="w-full h-screen text-center lg:pt-20 bg-gradient-to-r from-gray-100 to-gray-300"
    >
      <div className="flex flex-col items-center justify-center w-full h-full p-2 mx-auto mt-20 max-w-7xl lg:mt-0">
        <div>
          <h1 className="py-2 text-3xl font-bold text-black">
            {`Salut, moi c'est`} <span className="text-gray-500">Sonny</span>
          </h1>
          <h2 className="py-2 text-2xl font-bold text-orange-700 md:text-4xl">
            Je suis Développeur Web
          </h2>
          <p className="py-5 leading-6 text-xl md:leading-loose text-black font-medium max-w-[90%] lg:max-w-[75%] m-auto">
            {`En 2 ans, j'ai pris plaisir à découvrir et à réaliser plusieurs
            projets avec des technos modernes`}
          </p>
          <div className="flex items-center justify-center py-4 m-auto space-x-4">
            <Button href={"projects"}>Voir mes projets</Button>
            <Button variant={"secondary"} href={"technos"}>
              Voir mes technos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Button Main
const Button = ({ children, variant = "primary", href }) => {
  return (
    <button
      className={`p-4 font-medium text-white md:py-3 md:px-7 rounded-lg hover:scale-105 duration-500 ${
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
};
