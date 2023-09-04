"use client";

import NavBar from "@/components/NavBar";
import PriButton from "../../components/PrimaryButton";
import Input from "../../components/CompInput";
import Category from "../../components/diet/Category";

export default function Diet() {
  return (
    <div>
      <main className="flex flex-col p-6">
        <div className="flex flex-col items-center justify-center border-2 border-[#BABABA] rounded-md h-40">
          <p>Você não possuí um plano de dieta</p>
          <PriButton>Criar plano</PriButton>
        </div>
        <Input placeholder="Buscar"></Input>
        <div className="mt-4 gap-5 flex flex-wrap justify-between">
          <Category></Category>
          <Category></Category>
          <Category></Category>
          <Category></Category>
        </div>
      </main>
      <NavBar selectedOption={"Diet"}></NavBar>
    </div>
  );
}
