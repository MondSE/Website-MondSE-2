import React from "react";
import ProjectsContainer from "./ProjectsContainer";

export const Projects = () => {
  return (
    <div
      id="projects"
      className=" bg-text-100 text-accent-200 px-5 py-20 md:px-10 lg:px-16 lg:py-24 max-w-screen-xl mx-auto rounded-3xl mb-24"
    >
      {/* Tilte */}
      <div className=" flex gap-3 items-center mb-6 xl:gap-6 md:mb-12 xl:mb-28">
        <h1 className=" text-5xl font-bold lg:text-7xl text-primary-300">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Projects</font>
          </font>
        </h1>
      </div>
      {/* Projects contexts */}
      <ProjectsContainer />
    </div>
  );
};
