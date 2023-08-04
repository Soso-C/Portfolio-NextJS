import About from "@/components/About/About";
import ContactForm from "@/components/contactForm/Contact";
import Main from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      {/* <About /> */}
      <Skills />
      <Projects />
      <ContactForm />
    </>
  );
}
