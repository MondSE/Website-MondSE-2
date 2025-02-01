import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" xl:mt-20 py-12 xl:py-24 lg:px-24 sm:px-10 lg:mx-auto mx-6  max-w-screen-xl xl:mx-auto"
    >
      <div className=" grid grid-cols-1 gap-4 xl:gap-20 mx-2 mb-12">
        <div className=" flex flex-col gap-4 xl:flex-row justify-between content-between items-start mt-2 mb-4 w-full">
          <div className="">
            <h1 className=" text-text-100 text-4xl font-bold tracking-normal lg:text-5xl xl:text-6xl relative">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>About Me</font>
              </font>
            </h1>
          </div>
          <div className=" max-w-[634px] xl:text-lg text-pretty">
            <p className=" mb-4">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  I'm a Software Engineer and a Fullstack Developer I work on
                  projects including websites, web apps, mobile apps, full-stack
                  software development, web scraping and data analytics. When
                  I'm not writing code, I enjoy reading and learning about
                  emerging technologies, minimalism, and startup culture but
                  still continuous developing my skill to the evolving
                  technology.
                </font>
              </font>
            </p>
          </div>
        </div>
        <div className=" flex flex-col xl:flex-row xl:justify-between content-between items-start mt-2 mb-4 w-full">
          <div className=" flex flex-col gap-3 items-start mt-2 mb-4 lg:gap-8 xl:w-[500px]">
            <h1 className=" text-text-100 text-4xl font-bold tracking-normal lg:text-5xl xl:text-6xl">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Education and experience
                </font>
              </font>
            </h1>
          </div>
          <div className=" flex flex-col gap-3 items-start mt-2 mb-4 lg:gap-8 xl:w-[634px]">
            <div className=" relative flex flex-col items-start mb-6 lg:gap-8 xl:w-[500px] group">
              <div className=" absolute left-5  bottom-full sm:h-[100px] group-[&:not(:first-child)]:before:block group-[&:not(:first-child)]:before:w-px group-[&:not(:first-child)]:before:h-full group-[&:not(:first-child)]:before:border-l-2 group-[&:not(:first-child)]:before:border-dashed group-[&:not(:first-child)]:before:border-primary-200 group-[&:not(:first-child)]:before:content-['']"></div>
              <div className=" flex gap-4 items-center mb-4">
                <div className=" h-fit grid content-center bg-primary-200 rounded-lg p-2 text-accent-200"></div>
                <div className="">
                  <h1 className=" text-xl font-bold">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        {" "}
                        Software Engineer
                      </font>
                    </font>
                  </h1>
                  <p className=" font-medium">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        2022 - Present
                      </font>
                    </font>
                  </p>
                </div>
              </div>
              <div className=" ml-14">
                <p className=" text-pretty max-w-[500px]">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      I am currently studying Software Engineering at the
                      National University of San Marcos (UNMSM)
                    </font>
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
