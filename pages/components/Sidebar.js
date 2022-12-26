import { React, use, useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsPinMap, BsMap } from "react-icons/bs";
import Sanitary from "../../public/data/Border_Final_join.json";
import Construction from "../../public/data/Construction_projects.json";
import Station from "../../public/data/Station_Point_Final.json";
import Mega from "../../public/data/Mega_projects.json";
import Areas from "../../public/data/area.json";
import Govs from "../../public/data/gov.json";
import { IoIosArrowDown } from "react-icons/io";
import { FaMapMarkerAlt, FaGripLinesVertical, FaArrowUp } from "react-icons/fa";
import { BsCircleFill, BsSquareFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import Image from "next/image";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const Sidebar = ({
  show,
  setShow,
  govid,
  setGovid,
  sanitary,
  setSanitary,
  construction,
  setConstruction,
  station,
  setStation,
  mega,
  setMega,
  projectCoordinated,
  setProjectCoordinates,
  setProjectCoordinates1,
  setProjectDescription,
  setProjectName,
  setInfo,
  info,
  projectPosition,
  setprojectPosition,
  areaGov,
  setAreaGov,
  zoom,
  setZoom,
}) => {
  const [constructionProject, setConstructionProject] = useState("");
  const [ShowAdvanced, setShowAdvanced] = useState(true);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 210;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 210;
  };

  // check uncheck the gov and area
  const [gov, setGov] = useState(false);
  const [area, setArea] = useState(false);

  const govCheck = () => {
    setGov(!gov);
    if (document.getElementById("area").checked === true) {
      setArea(false);
    }
  };
  const areaCheck = () => {
    setArea(!area);
    if (document.getElementById("governate").checked === true) {
      setGov(false);
    }
  };

  // projects
  const sanitaryCheck = () => {
    setSanitary(!sanitary);
    if (document.getElementById("sanitary").checked === true) {
      setConstruction(false);
      setStation(false);
      setMega(false);
    }
  };
  const ConstructionCheck = () => {
    setConstruction(!construction);
    if (document.getElementById("construction").checked === true) {
      setSanitary(false);
      setStation(false);
      setMega(false);
    }
  };
  const stationCheck = () => {
    setStation(!station);
    if (document.getElementById("station").checked === true) {
      setConstruction(false);
      setSanitary(false);
      setMega(false);
    }
  };
  const megaCheck = () => {
    setMega(!mega);
    if (document.getElementById("mega").checked === true) {
      setConstruction(false);
      setSanitary(false);
      setStation(false);
    }
  };

  return (
    <div className={info ? "hidden" : "text-center h-screen bg-[#162641]"}>
      <div className=" flex flex-col flex-auto min-h-screen text-white duration-500 ease-in-out bg-[#162641] ">
        <div
          className={` sm:w-[300px] bg-[#162641] p-1  h-full z-40 ease-in-out duration-500 w-full  ${
            show ? "translate-x-30 " : "-translate-x-full"
          }`}
        >
          <div className="flex-grow overflow-x-hidden overflow-y-auto no-scrollbar">
            <ul className="flex flex-col py-4 space-y-1">
              {/* images section */}
              <li className="px-1 ">
                <div className="flex flex-row items-center h-8">
                  <div className="text-xs tracking-wide text-white/70 uppercase">
                    Project Images
                  </div>
                </div>
                <div>
                  {construction ? (
                    Construction.features.map((item) => {
                      if (
                        item.properties.cid.toString() === constructionProject
                      ) {
                        const constImages = [
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image1,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image2,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image3,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image4,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image5,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image6,
                        ];
                        return (
                          <>
                            <div className="lg:hidden">
                              <Image
                                src={
                                  "https://geo1.esmrts.com/image/" +
                                  item.properties.image1
                                }
                                width={500}
                                height={500}
                              />
                            </div>

                            <div className="relative lg:flex items-center hidden">
                              <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                              />
                              <div
                                id="slider"
                                className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                              >
                                {constImages.map((item) => (
                                  <div key={item}>
                                    <div className=" py-1 mx-2 mt-10 mb-2  w-[200px] inline-block hover:scale-150 ease-in-out duration-300">
                                      <div className="w-full h-full  ">
                                        <Image
                                          alt=""
                                          src={item}
                                          width={500}
                                          height={500}
                                        />
                                      </div>

                                      {/* <hr className="mt-2 text-starWhite/20 " /> */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                              />
                            </div>
                            <div className="flex m-2 gap-1">
                              <FaMapMarkerAlt
                                size={20}
                                className="text-red-600"
                              />
                              <h1>{item.properties.co_name_eng}</h1>
                            </div>
                            <button
                              onClick={() => {
                                setProjectCoordinates(
                                  item.geometry.coordinates[1]
                                );
                                setProjectCoordinates1(
                                  item.geometry.coordinates[0]
                                );
                                setProjectName(item.properties.co_name_eng);
                                setProjectDescription(
                                  item.properties.description_eng
                                );
                                setprojectPosition(true);
                                setAreaGov(false);
                              }}
                              className="text-sm p-2 hover:bg-[#9d3039]/80 bg-[#9d3039]"
                            >
                              {" "}
                              Show On Map
                            </button>
                          </>
                        );
                      }
                    })
                  ) : sanitary ? (
                    Sanitary.features.map((item) => {
                      if (
                        item.properties.coid.toString() === constructionProject
                      ) {
                        const constImages = [
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image1,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image2,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image3,
                        ];
                        return (
                          <>
                           <div className="lg:hidden">
                              <Image
                                src={
                                  "https://geo1.esmrts.com/image/" +
                                  item.properties.image1
                                }
                                width={500}
                                height={500}
                              />
                            </div>
                            <div className="relative lg:flex items-center hidden">
                              <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                              />
                              <div
                                id="slider"
                                className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                              >
                                {constImages.map((item) => (
                                  <div key={item}>
                                    <div className=" py-1 mx-2 mt-10 mb-2  w-[200px] inline-block hover:scale-150 ease-in-out duration-300">
                                      <div className="w-full h-full  ">
                                        <Image
                                          alt=""
                                          src={item}
                                          width={500}
                                          height={500}
                                        />
                                      </div>

                                      {/* <hr className="mt-2 text-starWhite/20 " /> */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                              />
                            </div>
                            <div className="flex m-2 gap-1">
                              <FaGripLinesVertical
                                size={30}
                                className="text-blue-400"
                              />
                              <h1>{item.properties.co_name_eng}</h1>
                            </div>
                            <button
                              onClick={() => {
                                setProjectCoordinates(item.properties.north);
                                setProjectCoordinates1(item.properties.east);
                                setProjectName(item.properties.co_name_eng);
                                setProjectDescription(
                                  item.properties.description_eng
                                );
                                setprojectPosition(true);
                                setAreaGov(false);
                              }}
                              className="text-sm p-2 hover:bg-[#9d3039]/80 bg-[#9d3039]"
                            >
                              {" "}
                              Show On Map
                            </button>
                          </>
                        );
                      }
                    })
                  ) : station ? (
                    Station.features.map((item) => {
                      if (
                        item.properties.cid.toString() === constructionProject
                      ) {
                        const constImages = [
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image1,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image2,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image3,
                        ];
                        return (
                          <>
                           <div className="lg:hidden">
                              <Image
                                src={
                                  "https://geo1.esmrts.com/image/" +
                                  item.properties.image1
                                }
                                width={500}
                                height={500}
                              />
                            </div>
                            <div className="relative lg:flex items-center hidden">
                              <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                              />
                              <div
                                id="slider"
                                className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                              >
                                {constImages.map((item) => (
                                  <div key={item}>
                                    <div className=" py-1 mx-2 mt-10 mb-2  w-[200px] inline-block hover:scale-150 ease-in-out duration-300">
                                      <div className="w-full h-full  ">
                                        <Image
                                          alt=""
                                          src={item}
                                          width={500}
                                          height={500}
                                        />
                                      </div>

                                      {/* <hr className="mt-2 text-starWhite/20 " /> */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                              />
                            </div>
                            <div className="flex m-2 gap-1">
                              <FaMapMarkerAlt
                                size={20}
                                className="text-blue-500"
                              />
                              <h1>{item.properties.st_name_eng}</h1>
                            </div>
                            <button
                              onClick={() => {
                                setProjectCoordinates(
                                  item.geometry.coordinates[0][1]
                                );
                                setProjectCoordinates1(
                                  item.geometry.coordinates[0][0]
                                );
                                setProjectName(item.properties.st_name_eng);
                                setProjectDescription(
                                  item.properties.description_eng
                                );
                                setprojectPosition(true);
                                setAreaGov(false);
                              }}
                              className="text-sm p-2 hover:bg-[#9d3039]/80 bg-[#9d3039]"
                            >
                              {" "}
                              Show On Map
                            </button>
                          </>
                        );
                      }
                    })
                  ) : mega ? (
                    Mega.features.map((item) => {
                      if (
                        item.properties.cid.toString() === constructionProject
                      ) {
                        const constImages = [
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image1,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image2,
                          "https://geo1.esmrts.com/image/" +
                            item.properties.image3,
                        ];
                        return (
                          <>
                           <div className="lg:hidden">
                              <Image
                                src={
                                  "https://geo1.esmrts.com/image/" +
                                  item.properties.image1
                                }
                                width={500}
                                height={500}
                              />
                            </div>
                            <div className="relative lg:flex items-center hidden">
                              <MdChevronLeft
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideLeft}
                                size={40}
                              />
                              <div
                                id="slider"
                                className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                              >
                                {constImages.map((item) => (
                                  <div key={item}>
                                    <div className=" py-1 mx-2 mt-10 mb-2  w-[200px] inline-block hover:scale-150 ease-in-out duration-300">
                                      <div className="w-full h-full  ">
                                        <Image
                                          alt=""
                                          src={item}
                                          width={500}
                                          height={500}
                                        />
                                      </div>

                                      {/* <hr className="mt-2 text-starWhite/20 " /> */}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <MdChevronRight
                                className="opacity-50 cursor-pointer hover:opacity-100"
                                onClick={slideRight}
                                size={40}
                              />
                            </div>
                            <div className="flex m-2 gap-1">
                              <FaMapMarkerAlt
                                size={20}
                                className="text-blue-500"
                              />
                              <h1>{item.properties.co_name_eng}</h1>
                            </div>
                            <button
                              onClick={() => {
                                setProjectCoordinates(
                                  item.geometry.coordinates[0][1]
                                );
                                setProjectCoordinates1(
                                  item.geometry.coordinates[0][0]
                                );
                                setProjectName(item.properties.co_name_eng);
                                setProjectDescription(
                                  item.properties.description_eng
                                );
                                setprojectPosition(true);
                                setAreaGov(false);
                              }}
                              className="text-sm p-2 hover:bg-[#9d3039]/80 bg-[#9d3039]"
                            >
                              {" "}
                              Show On Map
                            </button>
                          </>
                        );
                      }
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </li>

              <li className="px-1">
                <div className="flex flex-row items-center h-8 justify-between">
                  <div className="text-xs tracking-wide text-white/70 uppercase">
                    Advanced Search
                  </div>
                  <button
                    className="p-2"
                    onClick={() => setShowAdvanced(!ShowAdvanced)}
                  >
                    <IoIosArrowDown />
                  </button>
                </div>
              </li>

              {/* location type */}

              {ShowAdvanced && (
                <>
                  <li>
                    <div>
                      <h1 className="relative flex flex-row items-center pr-6 text-white duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-600 h-11 focus:outline-none hover:bg-gray-50 border-[#9d3039]">
                        <span className="inline-flex items-center justify-center ml-1">
                          <CiLocationArrow1 />
                        </span>
                        <span className="ml-2 text-md tracking-wide truncate ">
                          Select Location Type
                        </span>
                      </h1>
                      <div class="flex pl-5 text-[14px]">
                        {gov ? (
                          <input
                            type="radio"
                            id="governate"
                            name="governate"
                            className="accent-[#9d3039]"
                            onClick={govCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            id="governate"
                            name="governate"
                            className="accent-[#9d3039]"
                            onClick={govCheck}
                            checked={false}
                          />
                        )}

                        <label for="governate" className="m-1">
                          Governorate
                        </label>
                      </div>

                      <div className="flex pl-5 text-[14px]">
                        {area ? (
                          <input
                            type="radio"
                            name="area"
                            id="area"
                            className="accent-[#9d3039]"
                            onClick={areaCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            name="area"
                            id="area"
                            className="accent-[#9d3039]"
                            onClick={areaCheck}
                            checked={false}
                          />
                        )}

                        <label for="area" className="m-1">
                          Area
                        </label>
                      </div>
                    </div>
                  </li>

                  <hr className="mx-4" />

                  <li>
                    <div>
                      <h1 className="relative flex flex-row items-center -6 text-white duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-600 h-11 focus:outline-none hover:bg-gray-50 border-[#9d3039]">
                        <span className="inline-flex items-center justify-center ml-1">
                          <GoLocation />
                        </span>
                        <span className="ml-2 text-md tracking-wide truncate">
                          Select Location
                        </span>
                      </h1>
                      <select
                        className="select w-[250px] max-w-xs text-gray-600 p-1 outline-none m-1 mb-2"
                        onChange={(e) => {
                          e.preventDefault;
                          setGovid(e.target.value);
                          setprojectPosition(false);
                          setAreaGov(true);
                        }}
                      >
                        {gov ? (
                          <>
                            <option disabled selected value={0}>
                              --
                            </option>
                            <option value={0}>Al-Jahraa</option>
                            <option value={1}>Al-Ahmadi</option>
                            <option value={2}>Hawali</option>
                            <option value={3}>Mubarak Al-Kabeer</option>
                            <option value={4}>The Capital</option>
                            <option value={5}>AL-Farwanieh</option>
                          </>
                        ) : area ? (
                          <>
                            <option disabled selected>
                              --
                            </option>
                            {Areas.features.slice(0, -6).map((item) => (
                              <>
                                <option value={item.properties.area_id}>
                                  {item.properties.area_eng}
                                </option>
                              </>
                            ))}
                          </>
                        ) : (
                          <option>--</option>
                        )}
                      </select>
                    </div>
                  </li>
                  {/* end of select location */}

                  <hr className="mx-4" />

                  {/* search methiods */}
                  <li>
                    <div>
                      <h1 className="relative flex flex-row items-center pr-6 text-white duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-600 h-11 focus:outline-none hover:bg-gray-50 border-[#9d3039]">
                        <span className="inline-flex items-center justify-center ml-1">
                          <BsPinMap />
                        </span>
                        <span className="ml-2 text-md tracking-wide truncate">
                          Select Project Type
                        </span>
                      </h1>
                      <div class="flex pl-5 text-[14px] ">
                        {sanitary ? (
                          <input
                            type="radio"
                            id="sanitary"
                            name="sanitary-contract-name"
                            className="accent-[#9d3039]"
                            onClick={sanitaryCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            id="sanitary"
                            name="sanitary-contract-name"
                            className="accent-[#9d3039]"
                            onClick={sanitaryCheck}
                            checked={false}
                          />
                        )}

                        <label for="sanitary-contract-name" className="m-1">
                          Sanitary Contract Name
                        </label>
                      </div>

                      <div className="flex pl-5 text-[14px]">
                        {construction ? (
                          <input
                            type="radio"
                            name="construction"
                            id="construction"
                            className="accent-[#9d3039]"
                            onClick={ConstructionCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            name="construction"
                            id="construction"
                            className="accent-[#9d3039]"
                            onClick={ConstructionCheck}
                            checked={false}
                          />
                        )}

                        <label for="construction-project-name" className="m-1">
                          Construction Project Name
                        </label>
                      </div>

                      <div className="flex pl-5 text-[14px]">
                        {station ? (
                          <input
                            type="radio"
                            name="station"
                            id="station"
                            className="accent-[#9d3039]"
                            onClick={stationCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            name="station"
                            id="station"
                            className="accent-[#9d3039]"
                            onClick={stationCheck}
                            checked={false}
                          />
                        )}

                        <label for="station" className="m-1">
                          Sanitary station
                        </label>
                      </div>

                      <div className="flex pl-5 text-[14px]">
                        {mega ? (
                          <input
                            type="radio"
                            name="mega"
                            id="mega"
                            className="accent-[#9d3039]"
                            onClick={megaCheck}
                            checked={true}
                          />
                        ) : (
                          <input
                            type="radio"
                            name="mega"
                            id="mega"
                            className="accent-[#9d3039]"
                            onClick={megaCheck}
                            checked={false}
                          />
                        )}

                        <label for="mega" className="m-1">
                          Mega projects
                        </label>
                      </div>
                    </div>
                  </li>
                  {/* end of search methods */}
                  <hr className="mx-4 mt-2" />

                  {/* search project */}
                  <li>
                    <div>
                      <h1 className="relative flex flex-row items-center pr-6 text-white duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-600 h-11 focus:outline-none hover:bg-gray-50 border-[#9d3039]">
                        <span className="inline-flex items-center justify-center ml-1">
                          <BsMap />
                        </span>
                        <span className="ml-2 text-md tracking-wide truncate">
                          Select Project Name
                        </span>
                      </h1>
                      <select
                        className="select w-[250px] max-w-xs text-gray-600 p-1 outline-none m-1 mb-2"
                        onChange={(e) => {
                          setConstructionProject(e.target.value);
                        }}
                      >
                        {sanitary ? (
                          <>
                            <option disabled selected>
                              Sanitary projects
                            </option>
                            {Sanitary.features.map((item) => {
                              if (item.properties.gov_id.toString() === govid) {
                                return (
                                  <>
                                    <option value={item.properties.coid}>
                                      {item.properties.co_name_eng}
                                    </option>
                                  </>
                                );
                              } else if (
                                item.properties.area_id.toString() === govid
                              ) {
                                return (
                                  <>
                                    <option value={item.properties.coid}>
                                      {item.properties.co_name_eng}
                                    </option>
                                  </>
                                );
                              }
                            })}
                          </>
                        ) : construction ? (
                          <>
                            <option disabled selected>
                              Construction projects
                            </option>
                            {Construction.features.map((item) => {
                              if (item.properties.gov_id.toString() === govid) {
                                return (
                                  <>
                                    <option value={item.properties.cid}>
                                      {item.properties.co_name_eng}
                                    </option>
                                  </>
                                );
                              } else if (
                                item.properties.area_id.toString() === govid
                              ) {
                                return (
                                  <>
                                    <option value={item.properties.cid}>
                                      {item.properties.co_name_eng}
                                    </option>
                                  </>
                                );
                              }
                            })}
                          </>
                        ) : station ? (
                          <>
                            <option disabled selected>
                              Station projects
                            </option>
                            {Station.features.map((item) => {
                              if (
                                item.properties.gove_numbe.toString() === govid
                              ) {
                                return (
                                  <>
                                    <option value={item.properties.cid}>
                                      {item.properties.st_name_eng}
                                    </option>
                                  </>
                                );
                              } else if (
                                item.properties.area_id.toString() === govid
                              ) {
                                return (
                                  <>
                                    <option value={item.properties.cid}>
                                      {item.properties.st_name_eng}
                                    </option>
                                  </>
                                );
                              }
                            })}
                          </>
                        ) : mega ? (
                          <>
                            <option disabled selected>
                              Mega projects
                            </option>
                            {Mega.features.map((item) => {
                              if (item.properties.gov_id.toString() === govid) {
                                return (
                                  <>
                                    <option value={item.properties.cid}>
                                      {item.properties.co_name_eng}
                                    </option>
                                  </>
                                );
                              } else if (
                                item.properties.area_id.toString() === govid
                              ) {
                                return (
                                  <>
                                    <option value={item.properties.cid}>
                                      {item.properties.co_name_eng}
                                    </option>
                                  </>
                                );
                              }
                            })}
                          </>
                        ) : (
                          <>
                            <option disabled selected>
                              ---
                            </option>
                          </>
                        )}
                      </select>
                    </div>
                  </li>
                </>
              )}

              {/* end of search project */}
              <br />

              {/* <div className="flex items-center justify-center mx-4 h-10 text-[14px] cursor-pointer hover:text-white/50 ease-in-out duration-150">
              
              </div> */}

              <div>
                <button
                  onClick={() => {
                    setConstruction(false);
                    setStation(false);
                    setMega(false);
                    setSanitary(false);
                    setGov(false);
                    setArea(false);
                    setProjectCoordinates(29.3117);
                    setProjectCoordinates1(47.4818);
                  }}
                  className="bg-[#9d3039] p-1 w-[250px] hover:bg-[#9d3039]/70 ease-in-out duration-200"
                >
                  Clear Search
                </button>
                <div>
                  <button
                    onClick={() => window.print()}
                    className="bg-[#9d3039] mt-1 p-1 w-[250px] hover:bg-[#9d3039]/70 ease-in-out duration-200"
                  >
                    Print
                  </button>
                </div>
              </div>

              <div>
                <button
                  className="bg-[#9d3039] p-1 w-[250px] mb-5 hover:bg-[#9d3039]/70 ease-in-out duration-200"
                  onClick={() => setInfo(true)}
                >
                  Need Help ?
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-2 text-md ">
                <a
                  href="https://egis-ar.vercel.app/"
                  className="hover:text-white/50 ease-in-out duration-150 p-1"
                >
                  العربية
                </a>
              </div>
              <div className="flex items-center justify-center mx-4 text-[11px]">
                All Rights Reserved 2021 © Ministry of Public Works
              </div>
            </ul>

            <hr className="mx-4" />
            <div className="grid grid-cols-2 text-xs justify-between py-4 lg:hidden">
              <div className="flex pt-2 ">
                <FaMapMarkerAlt size={15} className="text-blue-500" />
                <p className="mx-1">Stations</p>
              </div>

              <div className="flex pt-2">
                <FaMapMarkerAlt size={15} className="text-red-600 " />
                <p className=" mx-1">Construction</p>
              </div>

              <div className="flex pt-2 ">
                <FaGripLinesVertical size={15} className="text-blue-400" />
                <p className="mx-1">Pipe</p>
              </div>

              <div className="flex pt-2  ">
                <BsCircleFill size={15} className="text-gray-200" />
                <p className="mx-1 ">Manhole</p>
              </div>

              <div className="flex pt-2">
                <FaArrowUp size={15} className="text-orange-400" />
                <p className="mx-1">Flow Direction</p>
              </div>

              <div className="flex pt-2 ">
                <BsSquareFill size={15} className="text-orange-400 mr-1" />
                <p className="">House Connection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
