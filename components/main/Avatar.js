import React from "react";
// import face from "./avatar/face.png";

export default function Avatar() {
  return (
    <div className="justify-end my-auto w-fit md:w-full md:flex">
      <img
        src={
          "https://cdn.discordapp.com/attachments/720905773256933457/1137052159582675014/IMG_0838__1_-removebg-preview_2-modified.png"
        }
        className="rounded-full shadow-lg w-52 h-fit md:w-60"
        alt="Avatar"
      />
    </div>
  );
}
