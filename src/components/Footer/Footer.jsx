import React from "react";

const Footer = () => {
  return (
    <footer className=" grid grid-cols-1 gap-14 mx-6 max-w-screen-xl xl:mx-auto rounded-2xl pt-10 lg:mx-24">
      <div className=" flex flex-col lg:flex-row lg:justify-between gap-6">
        <div className=" flex flex-col gap-4 justify-between">
          <h2 className=" uppercase italic text-5xl">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                let's work together
              </font>
            </font>
          </h2>
          <a
            href=""
            className=" btn-primary text-white btn mb-10 w-fit text-lg group"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Contact me</font>
            </font>
          </a>
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className=" uppercase italic text-2xl">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>social networks</font>
            </font>
          </h2>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
          >
            github
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
          >
            linkedin
          </a>
        </div>
      </div>
      <div className="space-y-1">
        <h1>Almond Rae Tuazon</h1>
        <div className="flex justify-between pb-8">
          <p className="">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Copyright 2025. All right
              </font>
            </font>
          </p>
          <p className="">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Philippines, 2025.
              </font>
            </font>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
