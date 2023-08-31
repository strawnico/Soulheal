"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import ImagemInicial from "../../public/imgInicial.png";
import { BsPerson } from "react-icons/bs";
import SecButton from "../../components/SecondaryButton";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="font-works flex flex-col gap-10">
      <div className="relative flex justify-center w-full">
        <Image className="w-full h-32 object-cover rounded-b-3xl" src={ImagemInicial}></Image>
        <div className="flex justify-center items-center w-28 h-28 rounded-full bg-gray-200 absolute bottom-[-2rem]">
          <BsPerson className="w-12 h-12 text-gray-400"></BsPerson>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-xl font-bold">Gustavo Braga</p>
        <p>Desde 2023</p>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <Link href={"./config"}>
          <SecButton>Configurações</SecButton>
        </Link>
        <SecButton>Planos</SecButton>
      </div>
      <NavBar selectedOption={"Profile"}></NavBar>
    </main>
  );
}
