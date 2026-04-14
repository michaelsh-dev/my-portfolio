import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const h11 = useRef(null);
  const h12 = useRef(null);
  const h13 = useRef(null);
  const myimageref = useRef(null);

  useLayoutEffect(() => {
    const elements = [h11.current, h12.current, h13.current, myimageref.current];

    gsap.set(elements, {
      opacity: 1,
      x: 0,
      clearProps: "transform",
    });

    const tl = gsap.timeline();

    tl.from(h11.current, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        h12.current,
        {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        h13.current,
        {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        myimageref.current,
        {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

    return () => {
      tl.kill();
      gsap.set(elements, {
        clearProps: "all",
      });
    };
  }, []);

  return (
    <main
      id="home"
      className="container mx-auto max-width min-h-[calc(100vh-88px)] flex flex-col md:flex-row justify-center items-start md:items-center">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-semibold"
        >
          Halo, 👋
          <br />
          Saya
          <br />
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

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">        
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