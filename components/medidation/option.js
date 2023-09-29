"use client";

import { BsCloudMoon } from "react-icons/bs";
import { SiOxygen } from "react-icons/si";
import { RiFocus2Line } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";

export default function Option(props) {
  return (
    <div className="shadow-md hover:opacity-50 transition-all active:scale-90 cursor-pointer rounded-md p-5 flex font-semibold text-lg flex-col items-center gap-5 justify-center">
      <div className="flex relative flex-col">
        <p>{props.icon}</p>
        <div className="bg-[#C7D5C5] h-12 w-12 rounded-full absolute top-7 left-4"></div>
      </div>
      <p className="text-center">{props.name}</p>
    </div>
  );
}
