import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import logo from "../public/assets/logo.png";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header>
      <div className="min-h-8 pt-10 pl-4 w-1/2 flex justify-between items-center sm:w-full sm:px-10 ">
        <button onClick={() => setShowNavbar(!showNavbar)}>
          {showNavbar ? (
            <AiOutlineClose
              className=" transition ease-in duration-500 "
              size={30}
              aria-label="Close Navigation Menu"
            />
          ) : (
            <FiMenu size={30} aria-label="Open Navigation Menu" />
          )}
        </button>
        <div className=" w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] translate-x-[50%] sm:translate-x-[25%] ">
          <h1>
            <Image src={logo} alt="sophie herter photography logo" />
          </h1>
        </div>
        <ul className=" hidden sm:flex justify-center items-center gap-4">
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram aria-label="Link to Instagram Page" />
            </a>
          </li>
          <li>
            <a>
              <BsFillShareFill aria-label="Link to share website on social media" />
            </a>
          </li>
        </ul>
      </div>

      {/*  Navbar  */}
      <div
        className={
          showNavbar
            ? `bg-white/90 fixed left-0 top-[120px] w-full h-screen ease-in duration-300 z-10`
            : ""
        }
      >
        <div
          className={
            showNavbar
              ? `bg-transparent fixed left-0 top-[120px] w-full h-screen p-10 ease-in duration-300`
              : ` bg-transparent fixed left-[-100%] w-full  h-screen top-[120px] p-10 ease-in duration-300`
          }
        >
          <div className=" sm:w-[30%] border-b border-gray-300 my-4 ">
            <p className="text-secondary w-[85%] md:w-[90%] py-4 ">
              Professional Photographer
            </p>
          </div>
          <div className=" py-4 flex flex-col ">
            <ul className=" uppercase flex flex-col sm:w-fit">
              <Link href="/">
                <button
                  className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary"
                  onClick={() => setShowNavbar(false)}
                >
                  Home
                </button>
              </Link>
              <Link href={"/"}>
                <button
                  className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary"
                  onClick={() => setShowNavbar(false)}
                >
                  PROJECTS
                </button>
              </Link>
              <Link href={"/packages"}>
                <button
                  className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary"
                  onClick={() => setShowNavbar(false)}
                >
                  PACKAGES
                </button>
              </Link>
              <Link href={"/bio"}>
                <button
                  className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary"
                  onClick={() => setShowNavbar(false)}
                >
                  BIO
                </button>
              </Link>
              <Link href={"/contact"}>
                <button
                  className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary"
                  onClick={() => setShowNavbar(false)}
                >
                  CONTACT ME
                </button>
              </Link>
            </ul>
            <div className="  pt-24 sm:hidden ">
              <p className=" uppercase tracking-widest text-secondary ">
                LETS CONNECT
              </p>
              <div className=" flex justify-start gap-10 items-center my-10 w-full sm:w-[80%] ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-koett/"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  target="_blank"
                  href="mailto: danielkoett@gmail.com"
                  rel="noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
