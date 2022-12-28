import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div className='font-tajwal bg-cover w-full h-screen bg-[url("https://geo1.esmrts.com/wp-content/uploads/2021/06/shutterstock_1228516114-scaled.jpg")]'>
        <div className="w-full bg-black/50 text-white h-full">
          <div className=" align-middle py-60 px-10">
            <h1 className="text-5xl font-extralight">
              Digitization In GISM
            </h1>
            <p className="mt-5 text-xl font-extralight max-w-[600px] text-justify">
              Courtesy of the Ministry of Public Works and its ongoing vision
              toward technological and digitized solutions. Our ICT Department
              is empowering the Geographical Information System within a
              dedicated platform able to be used anywhere and at anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
