"use client";

import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { TbWorldSearch } from "react-icons/tb";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Page({ params }) {
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState({});
  const [ingredientsList, setIngredientsList] = useState([]);

  const href = `../../diet/category/${meal.strCategory}`;

  const getMeal = async () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal}`)
      .then(function (response) {
        setLoading(false);
        setMeal(response.data.meals[0]);
        let ingredients = [];
        let refactoredIngredients = [];
        for (const item in response.data.meals[0]) {
          if (item.startsWith("strIngredient") && response.data.meals[0][item] != " " && response.data.meals[0][item])
            ingredients.push(response.data.meals[0][item]);
        }
        for (const item in response.data.meals[0]) {
          if (item.startsWith("strMeasure") && response.data.meals[0][item] != " " && response.data.meals[0][item])
            refactoredIngredients.push({
              name: ingredients[item.split("strMeasure")[1] - 1],
              measure: response.data.meals[0][item],
            });
        }
        setIngredientsList(refactoredIngredients);
      })
      .catch(function (error) {
        return error;
      });
  };

  const formatText = (text) => {
    if (!text) return "Sem instruções";
    return text.replace(/\\n/g, "<br>");
  };

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await getMeal();
    }
    fetchData();
  }, []);
  return (
    <main className="font-works flex flex-col">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Loading></Loading>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="relative flex justify-center w-full">
            <Image
              className="w-full h-32 object-cover rounded-b-3xl"
              src={meal.strMealThumb}
              width={"100"}
              height={"100"}
              alt="Imagem da comida"
            ></Image>
            <div className="w-full h-32 object-cover rounded-b-3xl bg-black opacity-60 absolute"></div>
            <div className="flex items-center gap-4 absolute left-5 bottom-14 text-white">
              <Link href={href}>
                <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
              </Link>
              <p className="text-2xl font-semibold">{meal.strMeal}</p>
            </div>
          </div>
          <div className="p-4 flex gap-4 flex-wrap">
            {meal.strYoutube ? (
              <Link href={meal.strYoutube} target="_blank">
                <div className="w-fit p-2 rounded-md bg-[#F4F4F4] flex gap-2 cursor-pointer hover:bg-[#dddddd] transition-all active:scale-90">
                  <AiFillYoutube className="w-6 h-6 text-red-600"></AiFillYoutube>
                  <div>Abrir receita no YouTube</div>
                </div>
              </Link>
            ) : (
              false
            )}
            {meal.strSource ? (
              <Link href={meal.strSource} target="_blank">
                <div className="w-fit p-2 rounded-md bg-[#F4F4F4] flex gap-2 cursor-pointer hover:bg-[#dddddd] transition-all active:scale-90">
                  <TbWorldSearch className="w-6 h-6 text-blue-600"></TbWorldSearch>
                  <div>Abrir receita no Navegador</div>
                </div>
              </Link>
            ) : (
              false
            )}
            <div className="flex w-full p-4 gap-2 flex-col overflow-x-scroll border border-gray-300 rounded-md">
              <p className="font-semibold">Instruções</p>
              <pre className="tracking-tighter">{formatText(meal.strInstructions)}</pre>
            </div>
            <div className="flex w-full p-4 gap-2 flex-col">
              <p className="font-semibold">Ingredientes</p>
              {ingredientsList.map((ingredient) => {
                return (
                  <li className="font-semibold" key={ingredient.name}>
                    {ingredient.name.toUpperCase()}: <span className="font-normal">{ingredient.measure}</span>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
