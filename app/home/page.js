"use client";

import NavBar from "@/components/NavBar";
import PriButton from "../../components/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import WaterTop from "../../public/waterTop.png";
import { BsPlus } from "react-icons/bs";
import ExerciseGroup from "@/components/gym/ExerciseGroup";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col p-6 gap-5 homeOptionsListHeight overflow-y-scroll">
        <div className="flex flex-col items-center relative border-2 border-[#BABABA] h-40">
          <div className="mt-2 flex items-center justify-center w-full">
            <div className="flex flex-col items-end">
              <p className="text-center font-works text-xl font-semibold">Água</p>
              <p className="text-center font-works text-gray-400">Meta 2L</p>
            </div>
            <div className="absolute right-4 bg-gray-50 p-3 rounded-full cursor-pointer hover:opacity-50 active:scale-90 transition-all">
              <BsPlus className="text-gray-500 text-xl"></BsPlus>
            </div>
          </div>
          <div className="absolute bottom-0">
            <Image src={WaterTop}></Image>
            <p className="bg-[#9CCAFF] text-center">450ml</p>
            <div className="w-full h-4 bg-[#9CCAFF] rounded-b-md"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-2 border-[#BABABA] rounded-md p-4">
          <p className="text-center font-works text-gray-400">Você não possuí um plano de dieta</p>
          <Link href="./diet/calculator" className="w-72">
            <PriButton>Criar plano</PriButton>
          </Link>
        </div>

        <div className="flex flex-col items-center relative border-2 border-[#BABABA] rounded-md p-4 gap-5">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-end">
              <p className="text-center font-works text-xl font-semibold">Treino</p>
              <p className="text-center font-works text-gray-400">de Força</p>
            </div>
          </div>
          <div>
            <ExerciseGroup
              isFinished="true"
              name="TreinoA"
              groups={["Glúteo", "Posterior"]}
              exercisesQuantity="7"
            ></ExerciseGroup>
          </div>
        </div>
      </main>
      <NavBar selectedOption={"Home"}></NavBar>
    </div>
  );
}
