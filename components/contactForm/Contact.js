import React from "react";
import Form from "./Form";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="w-full h-full text-center lg:py-20 bg-gradient-to-r from-gray-100 to-gray-300"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header form */}
        <div className="flex flex-col w-full mb-10 text-center">
          <h2 className="mb-4 text-2xl font-bold text-black md:text-4xl">
            Contact
          </h2>
          <p className="font-medium text-orange-500">
            {"Contactez moi pour plus d'informations"}
          </p>
        </div>

        {/* Form */}
        <Form />
      </div>
    </section>
  );
}
