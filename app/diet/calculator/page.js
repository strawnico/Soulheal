"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Input from "../../../components/CompInput";
import PrimaryButton from "../../../components/PrimaryButton";

export default function Calculator() {
  const [formValue, setFormValue] = useState({
    sexo: "",
    activityFrequency: "",
    idade: null,
    peso: null,
    altura: null,
  });

  const handleIdadeChange = (value) => {
    setFormValue({ ...formValue, idade: Number(value) });
  };

  const handlePesoChange = (value) => {
    setFormValue({ ...formValue, peso: Number(value) });
  };

  const handleAlturaChange = (value) => {
    setFormValue({ ...formValue, altura: Number(value) });
  };

  useEffect(() => {
    console.log(formValue);
  }, [formValue]);

  return (
    <main className="font-works flex flex-col p-6">
      <div className="flex items-center gap-4">
        <Link href={"./profile"}>
          <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
        </Link>
        <p className="text-2xl font-semibold">Calculadora de calorias</p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <select
          className="bg-[#f1f1f1] mt-5 focus:text-black font-works h-10 pl-4 rounded-md text-[#cccccc]"
          name="sexo"
          id="sexo"
          onChange={(e) => {
            setFormValue({ ...formValue, sexo: e.target.value });
          }}
        >
          <option disabled selected>
            Selecione seu sexo
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <Input placeholder="Idade" value={formValue.idade} onChange={handleIdadeChange}></Input>
        <Input placeholder="Peso" value={formValue.peso} onChange={handlePesoChange}></Input>
        <Input placeholder="Altura" value={formValue.altura} onChange={handleAlturaChange}></Input>
        <select
          className="bg-[#f1f1f1] mt-5 focus:text-black font-works h-10 pl-4 rounded-md text-[#cccccc]"
          name="activityFrequency"
          id="activityFrequency"
          onChange={(e) => {
            setFormValue({ ...formValue, activityFrequency: e.target.value });
          }}
        >
          <option disabled selected>
            Frequência de atividade física
          </option>
          <option value="sedentario">Sedentário</option>
          <option value="1a3">1 a 3 dias por semana</option>
          <option value="3a5">3 a 5 dias por semana</option>
          <option value="5a7">5 a 7 dias por semana</option>
        </select>
      </div>
      <PrimaryButton>Calcular</PrimaryButton>
    </main>
  );
}
