'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillYoutube } from 'react-icons/ai';
import { TbWorldSearch } from 'react-icons/tb';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';

export default function Page({ params }) {
  const href = `../../diet`;

  const [meal, setMeal] = useState({
    name: 'Omelete de Espinafre',
    image: 'https://www.anamariareceitas.com.br/wp-content/uploads/2022/10/Omelete-de-espinafre-e-queijo.jpg ',
    ingredientes: [
      '200g de carne moída magra',
      '1 abacate maduro',
      'Alface e tomate para acompanhar',
      'Sal e pimenta a gosto',
      'Azeite de oliva',
    ],
    modo_preparo: [
      'Tempere a carne moída com sal e pimenta e forme um hambúrguer.',
      'Grelhe o hambúrguer até que esteja cozido ao seu gosto.',
      'Corte o abacate em fatias.',
      'Monte o hambúrguer com abacate, alface e tomate.',
    ],
    tabela_nutricional: [
      {
        name: 'Calorias',
        value: '550',
      },
      {
        name: 'Proteínas',
        value: '30g',
      },
      {
        name: 'Carboidratos',
        value: '15g',
      },
      {
        name: 'Gorduras',
        value: '40g',
      },
      {
        name: 'Fibras',
        value: '8g',
      },
    ],
  });

  return (
    <main className="font-works flex flex-col">
      <div className="flex flex-col">
        <div className="relative flex justify-center w-full">
          <Image
            className="w-full h-32 object-cover rounded-b-3xl"
            src={meal.image}
            width={'100'}
            height={'100'}
            alt="Imagem da comida"
          ></Image>
          <div className="w-full h-32 object-cover rounded-b-3xl bg-black opacity-60 absolute"></div>
          <div className="flex items-center gap-4 absolute left-5 bottom-14 text-white">
            <Link href={href}>
              <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
            </Link>
            <p className="text-2xl font-semibold">{meal.name}</p>
          </div>
        </div>
        <div className="p-4 flex gap-4 flex-wrap">
          <div className="flex w-full p-4 gap-2 flex-col overflow-x-scroll border border-gray-300 rounded-md">
            <p className="font-semibold">Tabela nutricional</p>
            {meal.tabela_nutricional.map((item) => {
              return (
                <p>
                  {item.name} : {item.value}
                </p>
              );
            })}
          </div>
          <div className="flex w-full p-4 gap-2 flex-col overflow-x-scroll border border-gray-300 rounded-md">
            <p className="font-semibold">Instruções</p>
            <p>{meal.modo_preparo}</p>
          </div>
          <div className="flex w-full p-4 gap-2 flex-col">
            <p className="font-semibold">Ingredientes</p>
            <p>{meal.ingredientes}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
