"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import ImagemInicial from "../../public/imgInicial.png";
import { BsPerson } from "react-icons/bs";
import SecButton from "../../components/SecondaryButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { db } from "../../auth/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Profile() {
  const [userName, setUserName] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getName();
      } else {
        console.log("Usuário não autenticado");
      }
    });

    return () => unsubscribe();
  }, []);

  async function getName() {
    const user = auth.currentUser;

    if (!user) {
      console.log("Usuário não autenticado");
      return;
    }

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userName = docSnap.data().name;
      setUserName(userName);
    } else {
      console.log("error");
    }
  }

  return (
        <main className="font-works flex flex-col gap-10">
          <div className="relative flex justify-center w-full">
            <Image
              className="w-full h-32 object-cover rounded-b-3xl"
              src={ImagemInicial}
            ></Image>
            <div className="flex justify-center items-center w-28 h-28 rounded-full bg-gray-200 absolute bottom-[-2rem]">
              <BsPerson className="w-12 h-12 text-gray-400"></BsPerson>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <p className="text-xl font-bold">{userName}</p>
            <p>Desde 2023</p>
          </div>
          <div className="w-full flex flex-col gap-4 items-center">
            <Link href={"/profile/config"}>
              <SecButton>Configurações</SecButton>
            </Link>
            <Link href={"/profile/plan"}>
              <SecButton>Planos</SecButton>
            </Link>
            <Link href="/">
              <button className="bg-[#ffe8e873] font-works transition-all active:scale-90 rounded-md w-72 h-10 text-[#ee644c] sm:text-base text-sm font-medium ">
                Sair
              </button>
            </Link>
          </div>
          <NavBar selectedOption={"Profile"}></NavBar>
        </main>
  );
}
