"use client";

import { BsCloudMoon } from "react-icons/bs";

export default function Option(props) {
  return (
    <div className="shadow-md hover:opacity-50 transition-all active:scale-90 cursor-pointer rounded-md p-5 flex font-semibold text-lg flex-col items-center gap-5 justify-center">
      <div className="flex relative flex-col">
        <BsCloudMoon className="text-6xl text-[#494949] z-10"></BsCloudMoon>
        <div className="bg-[#C7D5C5] h-12 w-12 rounded-full absolute top-7 left-4"></div>
      </div>
      <p className="text-center">{props.name}</p>
    </div>
  );
}
