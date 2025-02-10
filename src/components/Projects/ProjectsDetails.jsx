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
        {/* Project Summary */}
        <h2 id="resumen-del-proyecto">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Project Summary</font>
          </font>
        </h2>
        <p className="mb-5">
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
        <div className="">
          {/* 1st image group */}
          <div className="grid grid-cols-3 gap-4">
            <img
              src={ACTDO.src}
              alt="ACTDO"
              className="rounded-xl w-full h-auto"
              width={350}
              height={300}
              loading="lazy"
              decoding="async"
            />
            <img
              src={ACTDO.src}
              alt="ACTDO"
              className="rounded-xl w-full h-auto"
              width={350}
              height={300}
              loading="lazy"
              decoding="async"
            />
            <img
              src={ACTDO.src}
              alt="ACTDO"
              className="rounded-xl w-full h-auto"
              width={350}
              height={300}
              loading="lazy"
              decoding="async"
            />
            <img
              src={ACTDO.src}
              alt="ACTDO"
              className="rounded-xl w-full h-auto"
              width={350}
              height={300}
              loading="lazy"
              decoding="async"
            />
            <img
              src={ACTDO.src}
              alt="ACTDO"
              className="rounded-xl w-full h-auto"
              width={350}
              height={300}
              loading="lazy"
              decoding="async"
            />
            <img
              src={ACTDO.src}
              alt="ACTDO"
              className="rounded-xl w-full h-auto"
              width={350}
              height={300}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        {/* Objective */}
        <h2 id="Objective">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Aim</font>
          </font>
        </h2>
        <p>
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              The main goal of Project is to provide users with an all-in-on
              tool to:
            </font>
          </font>
        </p>
        <ul>
          <li>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Create and manage custom workout routines.
              </font>
            </font>
          </li>
          <li>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Consult a virtual assistant for advice and recommendations on
                exercise, nutrition and general well-being.
              </font>
            </font>
          </li>
          <li>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Make it easy to track physical progress through statistics and
                visual data.
              </font>
            </font>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default ProjectsDetails;
