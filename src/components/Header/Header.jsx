import React from "react";

const Header = () => {
  return (
    <header>
      <nav
        className=" fixed w-full py-3 lg:py-6 z-50 bg-bg-100 bg-opacity-100"
        id="header_nav"
      >
        <div
          className=" nav flex justify-between items-center max-w-screen-xl mx-6 xl:mx-auto"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            opacity: 1,
            visibility: "inherit",
            transform: "translate(0px, 0px)",
          }}
        >
          <a href="/" className="text-lg font-bold md:text-2xl">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>almondtua.</font>
            </font>
          </a>
          <div className=" hidden lg:flex lg:visible gap-10" id="hidemune">
            <a
              href=""
              className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              Top
            </a>
            <a
              href=""
              className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              Project
            </a>
            <a
              href=""
              className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              About Me
            </a>
            <a
              href=""
              className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
