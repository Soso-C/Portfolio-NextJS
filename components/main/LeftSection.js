import React from "react";
import ButtonMain from "../Button/ButtonMain";
import ButtonsSocials from "../Button/ButtonsSocials";

export default function LeftSection() {
  return (
    <div className="order-2 w-full col-span-2 px-2 text-left md:order-none">
      <h1 className="py-2 text-3xl font-bold text-black">
        {`Salut, moi c'est`} <span className="text-zinc-700">Sonny</span>
      </h1>
      <h2 className="py-2 text-2xl font-bold text-orange-700 md:text-4xl">
        {"< Je suis Développeur Web />"}
      </h2>
      <p className="py-2 text-lg font-medium leading-normal text-left text-black md:text-xl/6">
        {`En 2 ans, j'ai pris plaisir à découvrir et à réaliser plusieurs
            projets avec des technos modernes`}
      </p>
      {/* Buttons */}
      <div className="flex items-center py-4 m-auto space-x-4">
        <ButtonMain href={"projects"}>Voir mes projets</ButtonMain>
        <ButtonMain variant={"secondary"} href={"skills"}>
          Voir mes technos
        </ButtonMain>
      </div>
      <ButtonsSocials />
    </div>
  );
}
