import React from 'react'
import { FaMapMarkerAlt, FaGripLinesVertical, FaArrowUp } from 'react-icons/fa'
import {BsCircleFill, BsSquareFill} from 'react-icons/bs'

const Legends = () => {
    return (
        <div className="bg-[#162641] flex justify-evenly p-3 text-white text-xs legends lg:px-60" >
            <div className="lg:flex justify-center px-2">
                <FaMapMarkerAlt size={20} className="text-blue-500" />
                <p className="lg:mx-1">Stations</p>
            </div>

            <div className="lg:flex justify-center px-2">
                <FaMapMarkerAlt size={20} className="text-red-600 " />
                <p className="lg:mx-1 ">Construction</p>
            </div>

            <div className="lg:flex justify-center px-2">
                <FaGripLinesVertical size={20} className="text-blue-400" />
                <p className="lg:mx-1">Pipe</p>
            </div>

            <div className="lg:flex justify-center px-2 ">
                <BsCircleFill size={20} className="text-gray-200" />
                <p className="lg:mx-1 ">Manhole</p>
            </div>

            <div className="lg:flex justify-center px-2">
                <FaArrowUp size={20} className="text-orange-400" />
                <p className="lg:mx-1">Flow Direction</p>
            </div>

            <div className="lg:flex justify-center px-2">
                <BsSquareFill size={20} className="text-orange-400" />
                <p className="lg:mx-1">House Connection</p>
            </div>
        </div>
    )
}

export default Legends