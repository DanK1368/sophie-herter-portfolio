import React from 'react';
import Image from "next/image";
import { FiMenu, FiInstagram,  } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { BsFillShareFill } from 'react-icons/bs'
import logo from '../public/assets/logo.png'

const Navbar = () => {
    return (
        <header>
            <div className="min-h-8 pt-10 pl-4 w-1/2 flex justify-between items-center sm:w-full sm:px-4 ">
                <nav>
                    <FiMenu size={30} />
                </nav>
                <div className=" w-[60px] h-[60px] translate-x-[50%] ">
                    <Image src={logo} alt="sophie herter photography logo" />
                </div>
                <div className=" hidden sm:flex justify-center items-center gap-4">
                    <FiInstagram />
                    <FaFacebookF />
                    <BsFillShareFill />
                </div>
            </div>
        </header>
    );
};

export default Navbar;