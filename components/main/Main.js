"use client";
import { Link } from "react-scroll";

export default function Main() {
  return (
    <div
      id="home"
      className="w-full h-screen lg:pt-20 bg-gradient-to-r from-gray-100 to-gray-300"
    >
      <div className="flex flex-col items-start justify-center w-full h-full max-w-6xl p-2 mx-auto mt-20 lg:mt-0">
        {/* Wrapper */}
        <div className="grid h-full grid-cols-1 gap-4 sm:h-auto md:grid-cols-2 justify-items-center">
          {/* Left section */}
          <div className="order-2 w-full px-2 text-left md:order-none">
            <h1 className="py-2 text-3xl font-bold text-black">
              {`Salut, moi c'est`} <span className="text-gray-500">Sonny</span>
            </h1>
            <h2 className="py-2 text-3xl font-bold text-orange-700 md:text-4xl">
              Je suis Développeur Web
            </h2>
            <p className="py-5 text-xl font-medium leading-6 text-left text-black md:leading-loose">
              {`En 2 ans, j'ai pris plaisir à découvrir et à réaliser plusieurs
            projets avec des technos modernes`}
            </p>
            {/* Buttons */}
            <div className="flex items-center py-4 m-auto space-x-4">
              <Button href={"projects"}>Voir mes projets</Button>
              <Button variant={"secondary"} href={"skills"}>
                Voir mes technos
              </Button>
            </div>
          </div>
          <div className="my-auto">
            <img
              src="https://media.licdn.com/dms/image/C4E03AQH-QOgxxqM6mA/profile-displayphoto-shrink_400_400/0/1662312207742?e=1696464000&v=beta&t=h0TBogtkMethNZpxPzUX3rUo1Jz5akMVmjYYI3V6F9o"
              class="w-52 h-fit md:w-72 rounded-full shadow-lg"
              alt="Avatar"
            />
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
};
