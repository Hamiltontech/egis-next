import React from "react";
import Image from "next/image";
import logo1 from "../../public/assets/Layer.png";
import logo2 from "../../public/assets/GeoServer.png";
import logo3 from "../../public/assets/MaxCDN.png";
import logo4 from "../../public/assets/microsoft.png";

const InfoSection = () => {
  return (
    <div className="">
      <div className=" w-full flex justify-center lg:mt-20">
        <img
          src="https://geo1.esmrts.com/wp-content/uploads/2021/05/mm.png"
          height={100}
          width={300}
        />
      </div>
      <div className="w-full mt-5 justify-center flex text-center ">
        <p className="lg:px-40 ">
          We would be more than happy to provide you with assistance. This form
          is connected to the Advance Infrastructure Department (AIM), in the
          Information Technology Center. Your Note will be reviewed by a
          specialist who will contact you using the communication information
          you included below.
        </p>
      </div>
      <div className="grid w-full lg:px-40 mt-10">
        <label className="text-gray-500 ">Full Name</label>
        <input className="border-gray-300 border outline-none py-2" />
      </div>
      <div className="flex w-full lg:px-40 lg:mt-5 gap-5 mt-2">
        <div className="grid lg:w-[50%] w-full">
        <label className="text-gray-500 ">Email</label>
        <input className="border-gray-300 border outline-none py-2" type="email"/>
        </div>
        <div className="lg:grid w-[50%] hidden ">
        <label className="text-gray-500 ">Phone Number</label>
        <input className="border-gray-300 border outline-none py-2" type="tel"/>
        </div>
        
      </div>
      <div className="grid w-full lg:hidden mt-2">
        <label className="text-gray-500 ">Phone Number</label>
        <input className="border-gray-300 border outline-none py-2" type="tel"/>
        </div>
      
      <div className="grid w-full lg:px-40 lg:mt-5 mt-2">
        <label className="text-gray-500 ">Issue Tyype</label>
        <select className="border-gray-300 border outline-none py-2 text-gray-500">
          <option>Wrong information</option>
          <option>Technical Issue</option>
          <option>System operation</option>
          <option>Suggestions</option>
          <option>Other</option>
        </select>
      </div>
        <div className="grid lg:px-40 lg:mt-5 mt-2">
        <label className="text-gray-500 ">Message</label>
        <textarea className="border-gray-300 border outline-none " type="text"/>
      </div>
      <div className="grid lg:px-40 mt-10">

        <button className="  outline-none py-2 bg-[#162641] text-white hover:bg-[#162641]/80 ease-out duration-200" type="text">Send</button>
      </div>
    </div>
  );
};

export default InfoSection;
