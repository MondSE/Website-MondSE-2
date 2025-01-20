import React from "react";

const Hero = () => {
  return (
    <section id="home" className=" pt-24 md:pt-32 2xl:pt-36">
      <div className=" relative ml-6 max-w-screen-xl xl:mx-auto sm:px-10 lg:px-24 lg:,x-auto overflow-hidden">
        <div className="">
          <p
            className="hero-span text-2xl xl:text-3xl"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            <font>
              <font>Hi, I'm </font>
            </font>
            <span className="underline font-semibold">
              <font>
                <font>Almond Rae</font>
              </font>
            </span>
          </p>
          <h1
            className=" hero-title text-6xl font-bold mb-5 md:mb-14 lg:mb-16 text-text-100 sm:text-8xl 2xl:tracking-wide 2xl:text[140px]"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px,0px)",
            }}
          >
            <font>
              <font>Software</font>
            </font>
            <br />
            <span className=" relative">
              <font>
                <font>Engineer</font>
              </font>
            </span>
          </h1>
          <div
            className=" hero-paragraph md:mb-6"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            <p className=" text-lg md:text-xl max-w-[240px] md:max-w-[320px] lg:max-w-[400px] text-text-200 mb-4">
              <font>
                <font>I am a </font>
              </font>
              <span className=" font-bold border-text-100 text-text-100">
                <font>Software Engineer </font>
              </span>
              <font>
                <font>and </font>
              </font>
              <span className=" font-bold border-text-100 text-text-100">
                <font>Front-End </font>
              </span>
              <font>
                <font>and </font>
              </font>
              <span className=" font-bold border-text-100 text-text-100">
                <font>Back-End </font>
              </span>
              <font>
                <font>specialized in the creation of efficient websites.</font>
              </font>
            </p>
            <div className=" hero-social flex gap-4 mt-8 mb-5">
              {/* for social icon  */}
            </div>
          </div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className=" group hero-button btn btn-primary"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            <p>
              <font>
                <font>Downloadt CV</font>
              </font>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
