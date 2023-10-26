"use client";

import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";
import PriButton from "../../components/PrimaryButton";
import Input from "../../components/CompInput";
import Category from "../../components/diet/Category";
import axios from "axios";
import { useDeferredValue, useEffect, useState } from "react";
import Link from "next/link";
import Mobile from "@/components/mobile";

export default function Diet() {
  const [categoriesList, setCategoriesList] = useState([
    {
      name: "Cafés da manhã",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1646830167722-5146f8cb4532?auto=format&fit=crop&q=80&w=2802&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Almoços",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lanches",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=2865&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jantas",
      id: 4,
      image:
        "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  const [originalCategoriesList, setOriginalCategoriesList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    setOriginalCategoriesList(categoriesList);
  }, []);

  useEffect(() => {
    const newList = originalCategoriesList.filter((category) =>
      category.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setCategoriesList(newList);
  }, [searchValue, originalCategoriesList]);

  return (
    <main>
      <div className="flex flex-col p-6">
        <div className="flex flex-col items-center justify-center border-2 border-[#BABABA] rounded-md h-40">
          {localStorage?.getItem("formValue") ? (
            <div>
              <p>
                Plano atual:{" "}
                {JSON.parse(localStorage?.getItem("formValue")).dietType}
              </p>
              <p>
                Objetivo:{" "}
                {JSON.parse(localStorage?.getItem("formValue")).objetivo} peso
              </p>
              <Link href="./diet/calculator" className="w-72">
                <PriButton>Trocar plano</PriButton>
              </Link>
            </div>
          ) : (
            <div>
              <p className="text-center font-works text-gray-400">
                Você não possuí um plano de dieta
              </p>
              <Link href="./diet/calculator" className="w-72">
                <PriButton>Criar plano</PriButton>
              </Link>
            </div>
          )}
        </div>
        {localStorage?.getItem("formValue") ? (
          <div>
            <Input
              placeholder="Buscar"
              value={searchValue}
              onChange={handleInputChange}
            ></Input>
            <div className="mt-4 gap-2 grid grid-cols-2">
              {categoriesList.map((category) => {
                return (
                  <Category
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    image={category.image}
                  ></Category>
                );
              })}
            </div>
          </div>
        ) : (
          false
        )}
      </div>
      <NavBar selectedOption={"Diet"}></NavBar>
    </main>
  );
}
