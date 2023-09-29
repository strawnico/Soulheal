"use client";

import NavBar from "@/components/NavBar";
import Option from "@/components/medidation/option";
import { BsCloudMoon } from "react-icons/bs";
import { SiOxygen } from "react-icons/si";
import { RiFocus2Line } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";

export default function Meditation() {
  return (
    <div>
      <main className="grid grid-cols-2 p-6 gap-4">
        <Option name="Descansar"></Option>
        <Option name="Relaxar"></Option>
        <Option name="Atenção Plena"></Option>
        <Option name="Gratidão e Apreciaçao"></Option>
        <Option name="Equílibrio Energético e chakras"></Option>
      </main>
      <NavBar selectedOption={"Meditation"}></NavBar>
    </div>
  );
}
