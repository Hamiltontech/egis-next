import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

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
          : "flex bg-[#162641] w-full p-2 justify-between header-sys"
      }
    >
      <div className="flex justify-between">
        <button onClick={() => setShow(!show)}>
          <AiOutlineMenu size={25} className="text-white mt-3 mr-4" />
        </button>
        <Image src={logo} alt="logo" width={220} height={100} />
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
