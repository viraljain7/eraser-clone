import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            <strong className="font-extrabold text-blue-400 sm:block">
              Documents & diagrams
            </strong>
            for engineering teams
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded px-12 py-3  bg-white text-sm font-medium text-blue-400 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              {"Try Eraser -->"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
