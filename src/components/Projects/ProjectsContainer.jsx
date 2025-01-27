import React from "react";
import ACTDO from "../../assets/project/ACTDO_IMS_IMG/1.png";

const ProjectsContainer = () => {
  console.log("ACTDO inside component:", ACTDO);
  return (
    <div className=" grid grid-cols-1 gap-4 xl:gap-20 mx-2 mb-12">
      <div
        id="project"
        className=" mb-20 last:mb-10 flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-10 gap-5"
      >
        <div className=" flex flex-col gap-3 items-start mt-2 mb-4 lg:gap-8 lg:w-[500px]">
          <h1 className=" text-primary-300 text-4xl font-bold tracking-normal lg:text-5xl">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                1. Sample Project
              </font>
            </font>
          </h1>
          <p className=" max-w-[300px] font-light lg:text-lg mb-4">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Web application that allows you to manage your exercise routines
                and ask a virtual assistant using the OpenAI API.
              </font>
            </font>
          </p>
          <div className=" max-w-[300px] flex gap-2 flex-wrap">
            <div className=" py-1 px-2 rounded-md bg-accent-200 flex justify-center gap-2 items-center border text-text-100">
              <p className=" capitalize text-sm">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}># MYSQL</font>
                </font>
              </p>
            </div>
            <div className=" py-1 px-2 rounded-md bg-accent-200 flex justify-center gap-2 items-center border text-text-100">
              <p className=" capitalize text-sm">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}># MYSQL</font>
                </font>
              </p>
            </div>
            <div className=" py-1 px-2 rounded-md bg-accent-200 flex justify-center gap-2 items-center border text-text-100">
              <p className=" capitalize text-sm">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}># MYSQL</font>
                </font>
              </p>
            </div>
          </div>
        </div>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className=" block overflow-hidden"
        >
          <div className=" overflow-hidden rounded-xl relative exclude-noise">
            <div className=" pointer-events-none absolute p-4 bottom-4 right-4 z-20 rounded-full bg-text-100"></div>
          </div>
          <img
            src={ACTDO.src}
            alt="ACTDO"
            slot="media"
            className=" aspect-video object-cover transition-transform duration-500 hover:scale-105 rounded-xl w-full xl:max-w-4xl"
            width={700}
            height={400}
            decoding="async"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectsContainer;
