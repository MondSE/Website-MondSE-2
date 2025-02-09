import React from "react";
import ACTDO from "../../assets/project/ACTDO_IMS_IMG/1.png";

const ProjectsDetails = () => {
  return (
    <div className=" contianer px-4 pt-20 lg:pt-32 mx-auto max-w-screen-lg">
      <h1 className=" text-3xl lg:text-5xl mb-5 font-bold">title project</h1>
      <div className=" flex gap-2">
        <h3 className=" text-pretty text-text-100/60">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Technologies:</font>
          </font>
        </h3>
        <div className=" flex flex-wrap gap-2 mb-10">
          <div className=" py-1 px-2 rounded-md bg-accent-200 flex justify-center gap-2 items-center border text-text-100">
            <p className=" capitalize text-sm">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}># HTML</font>
              </font>
            </p>
          </div>
          <div className=" py-1 px-2 rounded-md bg-accent-200 flex justify-center gap-2 items-center border text-text-100">
            <p className=" capitalize text-sm">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}># HTML</font>
              </font>
            </p>
          </div>
          <div className=" py-1 px-2 rounded-md bg-accent-200 flex justify-center gap-2 items-center border text-text-100">
            <p className=" capitalize text-sm">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}># HTML</font>
              </font>
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap gap-2 mb-10">
        <p className="">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>GitHub:</font>
          </font>
        </p>
        <div className=" flex gap-1">
          <a
            href="http://"
            target="_blank"
            className=" text-pretty text-primary-100 underline"
          >
            https://github.com
          </a>
        </div>
        <p></p>
      </div>
      <article className=" prose mb-20 lg:prose-lg">
        <h2 id="resumen-del-proyecto">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Project Summary</font>
          </font>
        </h2>
        <p className="">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              GymCoach is a web application designed to help users manage their
              workout routines efficiently. It includes a virtual assistant
              based on the OpenAI API, allowing users to get personalized
              recommendations, answer fitness-related questions, and improve
              their overall gym experience.
            </font>
          </font>
        </p>
        <img
          src={ACTDO.src}
          alt="ACTDO"
          className="rounded-xl"
          width={700}
          height={600}
          loading="lazy"
          decoding="async"
        />
      </article>
    </div>
  );
};

export default ProjectsDetails;
