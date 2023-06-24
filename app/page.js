import About from "@/components/About/About";
import Main from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Projects />
    </>
  );
}
