"use client";

import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";
import PriButton from "../../components/PrimaryButton";
import Input from "../../components/CompInput";
import Category from "../../components/diet/Category";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Diet() {
  const [loading, setLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [originalCategoriesList, setOriginalCategoriesList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getCategories = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(function (response) {
        setLoading(false);
        setCategoriesList(response.data.categories);
        setOriginalCategoriesList(response.data.categories);
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
    const newList = originalCategoriesList.filter((category) =>
      category.strCategory.toLowerCase().includes(searchValue.toLowerCase())
    );
    setCategoriesList(newList);
  }, [searchValue, originalCategoriesList]);

  return (
    <div>
      <main className="flex flex-col p-6">
        <div className="flex flex-col items-center justify-center border-2 border-[#BABABA] rounded-md h-40">
          <p className="text-center font-works text-gray-400">Você não possuí um plano de dieta</p>
          <PriButton>Criar plano</PriButton>
        </div>
        <Input placeholder="Buscar" value={searchValue} onChange={handleInputChange}></Input>
        {loading ? (
          <div className="h-72 flex justify-center items-center">
            <Loading></Loading>
          </div>
        ) : (
          <div className="mt-4 gap-5 grid grid-cols-2 justify-between overflow-y-scroll listHeigth">
            {categoriesList.map((category) => {
              return (
                <Category key={category.idCategory} name={category.strCategory} image={category.strCategoryThumb}></Category>
              );
            })}
          </div>
        )}
      </main>
      <NavBar selectedOption={"Diet"}></NavBar>
    </div>
  );
}
