import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import {VscSearch} from 'react-icons/vsc'

const Header = ({ setShow, show, setAbout, about, info, setTech, tech }) => {
  return (
    <div
      className={
        about
          ? "hidden"
          : info
          ? "hidden"
          : tech
          ? "hidden"
          : "flex lg:bg-[#162641] w-full p-2 justify-between header-sys "
      }
    >
      <div className="flex justify-between bg-[#162641] lg:bg-transparent p-4 rounded-full lg:p-0 lg:rounded-none">
        <button onClick={() => setShow(!show)} className=" hover:scale-105 ">
          <AiOutlineMenu size={25} className="text-white lg:mt-3 lg:mr-4 hidden lg:block" />
          <VscSearch size={15} color="white" className="lg:hidden"/>
        </button>
        <Image src={logo} alt="logo" width={220} height={100} className="hidden lg:block"/>
      </div>
      <div className="lg:flex justify-between gap-10 text-white mr-10  hidden">
        <button
          onClick={() => setAbout(true)}
          className="cursor-pointer hover:text-white/40 ease-in-out duration-150"
        >
          About The System
        </button>
        <button
          onClick={() => setTech(true)}
          className="cursor-pointer hover:text-white/40 ease-in-out duration-150"
        >
          Technical Description
        </button>
      </div>
    </div>
  );
};

export default Header;
