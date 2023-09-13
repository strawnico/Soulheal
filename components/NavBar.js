"use client";
import React, { useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuApple } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { LiaHandPeace } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";

export default function NavBar({ selectedOption }) {
  return (
    <main>
      <div className="navBar w-full flex p-4 justify-center items-center gap-6 absolute bottom-0 h-24 border bg-white">
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <Link href="/home" className={selectedOption == "Home" ? "p-3 bg-[#7B9A74] rounded-full" : "p-3 rounded-full"}>
            <BiHomeAlt2 className={selectedOption == "Home" ? "selectedIcon" : "icon"} />
          </Link>
          <p className={selectedOption == "Home" ? "font-works text-[#7B9A74]" : "font-works text-[#BABABA]"}>Home</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <Link href="/diet" className={selectedOption == "Diet" ? "p-3 bg-[#7B9A74] rounded-full" : "p-3 rounded-full"}>
            <LuApple className={selectedOption == "Diet" ? "selectedIcon" : "icon"} />
          </Link>
          <p className={selectedOption == "Diet" ? "font-works text-[#7B9A74]" : "font-works text-[#BABABA]"}>Diet</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <Link href="/gym" className={selectedOption == "Gym" ? "p-3 bg-[#7B9A74] rounded-full" : "p-3 rounded-full"}>
            <CgGym className={selectedOption == "Gym" ? "selectedIcon" : "icon"} />
          </Link>
          <p className={selectedOption == "Gym" ? "font-works text-[#7B9A74]" : "font-works text-[#BABABA]"}>Gym</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <Link
            href="/meditation"
            className={selectedOption == "Meditation" ? "p-3 bg-[#7B9A74] rounded-full" : "p-3 rounded-full"}
          >
            <LiaHandPeace className={selectedOption == "Meditation" ? "selectedIcon" : "icon"} />
          </Link>
          <p className={selectedOption == "Meditation" ? "font-works text-[#7B9A74]" : "font-works text-[#BABABA]"}>
            Meditation
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <Link
            href="/profile"
            className={selectedOption == "Profile" ? "p-3 bg-[#7B9A74] rounded-full" : "p-3 rounded-full"}
          >
            <BsPerson className={selectedOption == "Profile" ? "selectedIcon" : "icon"} />
          </Link>
          <p className={selectedOption == "Profile" ? "font-works text-[#7B9A74]" : "font-works text-[#BABABA]"}>Profile</p>
        </div>
      </div>
    </main>
  );
}
