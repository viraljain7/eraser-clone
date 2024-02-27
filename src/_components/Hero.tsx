import React from "react";

const Hero = () => {
  return (
    <section className="bg-black">
      <div className=" flex justify-center items-baseline pt-44">
        <h2 className="text-white border border-white rounded-xl py-2  px-4 ">
          See what’s new | <span className="text-blue-300">AI Diagrams</span>
        </h2>
      </div>
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-16 ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            <strong className="font-extrabold text-blue-400 sm:block">
              Documents & diagrams
            </strong>
            for engineering teams
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
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
