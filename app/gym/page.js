"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import Braco from "../../public/arm.png";
import ExerciseGroup from "@/components/gym/ExerciseGroup";

export default function Gym() {
  return (
    <div>
      <main className="flex flex-col p-6 gap-10">
        <div>
          <p className="font-semibold text-xl text-gray-500">MEU TREINO</p>
          <div className="w-full p-4 shadow-md rounded-md flex items-center gap-4">
            <div className="w-16 h-16 bg-verdePrincipal rounded-full p-4">
              <Image src={Braco}></Image>
            </div>
            <div>
              <p className="font-semibold text-2xl text-gray-700">Treino de força</p>
              <p className="text-gray-500">Esse é seu plano de treino atual.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl text-gray-500">TREINOS</p>
          <div className="w-full max-h-screen overflow-y-scroll workoutListHeight">
            <ExerciseGroup name="TreinoA" groups={["Glúteo", "Posterior"]} exercisesQuantity="7"></ExerciseGroup>
            <ExerciseGroup name="TreinoB" groups={["Tríceps", "Bíceps"]} exercisesQuantity="8"></ExerciseGroup>
          </div>
        </div>
      </main>
      <NavBar selectedOption={"Gym"}></NavBar>
    </div>
  );
}
