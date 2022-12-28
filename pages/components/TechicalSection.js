import React from "react";

const TechicalSection = () => {
  return (
    <div
      className="font-tajwal h-full w-full bg-cover bg-[url('https://geo1.esmrts.com/wp-content/uploads/2021/06/shutterstock_1228516114-scaled.jpg')]
    "
    >
      <div className="w-full h-full bg-white/70 grid place-items-center">
        <h1 className="font-extrabold text-5xl text-[#162641] grid text-center mt-20">
          4.0.0
          <h1 className="text-[#162641] tracking-widest font-light text-3xl max-w-[800px] my-5">
            Built over NEXTJS, Tailwind running over NodeJS Server with
            GeoServer & QGIS as the backend in integration with PgSQL
          </h1>
        </h1>
        <img
          alt="/"
          src="https://geo1.esmrts.com/wp-content/uploads/2021/05/3-app-stores-2048x222.png"
          width="50%"
          className="-mt-[500px]"
        />
      </div>
    </div>
  );
};

export default TechicalSection;
