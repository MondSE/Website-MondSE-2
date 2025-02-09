import React from "react";

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
        <div className=" flex gap-1"></div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
