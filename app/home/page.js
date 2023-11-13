"use client";

import NavBar from "@/components/NavBar";
import PriButton from "../../components/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import WaterTop from "../../public/waterTop.png";
import { BsPlus } from "react-icons/bs";
import ExerciseGroup from "@/components/gym/ExerciseGroup";
import Mobile from "@/components/mobile";
import { useState, useEffect } from "react";

export default function Home() {
  const [item, setItem] = useState("");
  const [waterQuantity, setWaterQuantity] = useState("0");

  useEffect(() => {
    setItem(localStorage.getItem("formValue"));
  }, []);

  return (
    <div>
      <div className=" h-20 w-full flex-col flex items-center justify-center shadow-lg">
        <p className="text-2xl text-verdePrincipal font-molengo font-extralight">
          SOULHEAL
        </p>
        <p className="text-base text-verdePrincipal font-works font-normal">
          be healthy
        </p>
      </div>
      <main className="flex flex-col p-6 gap-5 homeOptionsListHeight overflow-y-scroll">
        <div className="flex flex-col items-center overflow-hidden relative border-2 border-[#BABABA] min-h-[10rem] rounded-md">
          <div className="mt-2 flex items-center justify-center w-full">
            <div className="flex flex-col items-end z-10">
              <p className="text-center font-works text-xl font-semibold">
                Água
              </p>
              <p className="text-center font-works text-gray-400">Meta 2L</p>
            </div>
            <div
              onClick={() => {
                setWaterQuantity(Number(waterQuantity) + 200);
              }}
              className="absolute right-4 z-10 bg-gray-50 p-3 rounded-full cursor-pointer hover:opacity-50 active:scale-90 transition-all"
            >
              <BsPlus className="text-gray-500 text-xl"></BsPlus>
            </div>
          </div>
          <div className="absolute bottom-0">
            <Image src={WaterTop}></Image>
            <p className="bg-[#9CCAFF] text-center w-full absolute bottom-0">
              {waterQuantity}ml
            </p>
            <div
              style={{ height: waterQuantity / 14 + "px" }}
              className={`w-full z-0 bg-[#9CCAFF] rounded-b-md`}
            ></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-2 border-[#BABABA] rounded-md p-4">
          {item ? (
            <div className="text-center">
              <p>Plano atual: {JSON.parse(item).dietType}</p>
              <p>Objetivo: {JSON.parse(item).objetivo} peso</p>
              <Link href="./diet/calculator" className="w-72">
                <PriButton
                  emitClickEvent={() => {
                    location.href = "./diet/calculator";
                  }}
                >
                  Trocar plano
                </PriButton>
              </Link>
            </div>
          ) : (
            <div>
              <p className="text-center font-works text-gray-400">
                Você não possuí um plano de dieta
              </p>
              <Link href="./diet/calculator" className="w-72">
                <PriButton
                  emitClickEvent={() => {
                    location.href = "./diet/calculator";
                  }}
                >
                  Criar plano
                </PriButton>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center relative border-2 border-[#BABABA] rounded-md p-4 gap-5">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-end">
              <p className="text-center font-works text-xl font-semibold">
                Treino
              </p>
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
