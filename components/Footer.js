import React from "react";

const Footer = () => {
  return (
    <footer className=" min-h-6 pb-3 grid place-content-center ">
      <p className=" text-[10px] text-gray-300 ">
        Sophie Herter Photography Copyright&copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
