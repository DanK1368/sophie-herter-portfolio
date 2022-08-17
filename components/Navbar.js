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
      <div className="min-h-8 pt-10 pl-4 w-1/2 flex justify-between items-center sm:w-full sm:px-4 ">
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
        <div className=" w-[60px] h-[60px] translate-x-[50%] ">
          <Image src={logo} alt="sophie herter photography logo" />
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
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF aria-label="Link to Facebook Page" />
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
            ? ` fixed left-0 top-[10vh] w-full h-screen bg-gray-400/10`
            : ""
        }
      >
        <div
          className={
            showNavbar
              ? `bg-transparent fixed left-0 top-[10vh] w-full h-screen bg-white p-10 ease-in duration-300`
              : ` bg-transparent fixed left-[-100%] w-full  h-screen top-[10vh] p-10 ease-in duration-300`
          }
        >
          <div className=" sm:w-[30%] border-b border-gray-300 my-4 ">
            <p className="text-secondary w-[85%] md:w-[90%] py-4 ">
              Professional Photographer
            </p>
          </div>
          <div className=" py-4 flex flex-col ">
            <ul className=" uppercase flex flex-col">
              <Link href="/">
                <button className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary">
                  Home
                </button>
              </Link>
              <Link href={"/"}>
                <button className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary">
                  PROJECTS
                </button>
              </Link>
              <Link href={"/#skills"}>
                <button className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary">
                  BIO
                </button>
              </Link>
              <Link href={"/#projects"}>
                <button className="uppercase text-left py-4 text-md font-light tracking-wider text-gray-400 hover:ease-in hover:duration-300 hover:text-secondary">
                  CONTACT ME
                </button>
              </Link>
            </ul>
            <div className=" pt-20 pt-24 sm:hidden ">
              <p className=" uppercase tracking-widest text-secondary ">
                LETS CONNECT
              </p>
              <div className=" flex justify-between gap-10 items-center my-10 w-full sm:w-[80%] ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-koett/"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  target="_blank"
                  href="https://github.com/DanK1368"
                  rel="noreferrer"
                >
                  <FaFacebookF />
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
