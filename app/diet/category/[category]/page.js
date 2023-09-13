"use client";

import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Input from "../../../../components/CompInput";

import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";
import PriButton from "../../../../components/PrimaryButton";
import Meal from "../../../../components/diet/Meal";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [loading, setLoading] = useState(false);
  const [meelsList, setMeelsList] = useState([]);
  const [originalMeelsList, setOriginalMeelsList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getCategories = async () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`)
      .then(function (response) {
        setLoading(false);
        setMeelsList(response.data.meals);
        setOriginalMeelsList(response.data.meals);
      })
      .catch(function (error) {
        return error;
      });
  };

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await getCategories();
    }
    fetchData();
  }, []);

  useEffect(() => {
    const newList = originalMeelsList.filter((category) =>
      category.strMeal.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMeelsList(newList);
  }, [searchValue, originalMeelsList]);

  return (
    <main className="font-works flex flex-col p-6">
      <div className="flex items-center gap-4">
        <Link href={"../../diet"}>
          <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
        </Link>
        <p className="text-2xl font-semibold">{params.category}</p>
      </div>
      <Input placeholder="Buscar" value={searchValue} onChange={handleInputChange}></Input>
      {loading ? (
        <div className="h-72 flex justify-center items-center">
          <Loading></Loading>
        </div>
      ) : (
        <div className="mt-4 gap-5 grid grid-cols-2 justify-between overflow-y-scroll max-h-screen">
          {meelsList.map((meal) => {
            return <Meal key={meal.idMeal} id={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb}></Meal>;
          })}
        </div>
      )}
    </main>
  );
}
