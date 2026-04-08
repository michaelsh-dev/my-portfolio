import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width min-h-[calc(100vh-88px)] flex flex-col md:flex-row justify-center items-center md:-translate-y-6">    <div className="w-full md:w-1/2">
      <h1
        ref={h11}
        className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
      >
        Hi,👋<br />My Name is<br />
      </h1>

      <h1
        ref={h12}
        className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
      >
        {name}
      </h1>

      <h2
        ref={h13}
        className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
      >
        {tagline}
      </h2>
    </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          ref={myimageref}
          className="w-2/3 md:w-1/2 rounded-full"
          src={img}
          alt={name}
        />
      </div>
    </main>
  );
}

export default Home;