"use client";

import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Page({ params }) {
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState({});

  const href = `../../diet/category/${meal.strCategory}`;

  const getMeal = async () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal}`)
      .then(function (response) {
        setLoading(false);
        setMeal(response.data.meals[0]);
        console.log(response.data.meals[0]);
      })
      .catch(function (error) {
        return error;
      });
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
            ></Image>
            <div className="w-full h-32 object-cover rounded-b-3xl bg-black opacity-60 absolute"></div>
            <div className="flex items-center gap-4 absolute left-5 bottom-14 text-white">
              <Link href={href}>
                <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
              </Link>
              <p className="text-2xl font-semibold">{meal.strMeal}</p>
            </div>
          </div>
          <div className="p-4">
            <div className="w-fit p-2 rounded-md bg-[#dddddd] flex gap-2">
              <AiFillYoutube className="w-6 h-6 text-red-600"></AiFillYoutube>
              <div>Abrir receita no YouTube</div>
            </div>
            <div className="w-fit p-2 rounded-md bg-[#dddddd] flex gap-2">
              <AiFillYoutube className="w-6 h-6 text-red-600"></AiFillYoutube>
              <div>Abrir receita no Navegador</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
