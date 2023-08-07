import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa/index";

export default function ButtonsSocials() {
  return (
    <div className="flex items-center py-4 m-auto space-x-4">
      <ButtonSocial href={"github.com"} icon={<FaGithub className="w-6 h-6" />}>
        Github
      </ButtonSocial>
      <ButtonSocial
        href={"linkedin.com"}
        icon={<FaLinkedin className="w-6 h-6" />}
      >
        Linkedin
      </ButtonSocial>
    </div>
  );
}

const ButtonSocial = ({ children, icon, href }) => {
  return (
    <button className={"px-2 py-2 font-medium bg-neutral-950 rounded-lg"}>
      <a href={href} className="flex items-center gap-2 px-2">
        {icon}
        {children}
      </a>
    </button>
  );
};
