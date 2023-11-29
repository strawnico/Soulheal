'use client';

import NavBar from '@/components/NavBar';
import PriButton from '../../components/PrimaryButton';
import Link from 'next/link';
import Image from 'next/image';
import WaterTop from '../../public/waterTop.png';
import { BsPlus } from 'react-icons/bs';
import ExerciseGroup from '@/components/gym/ExerciseGroup';
import Mobile from '@/components/mobile';
import { useState, useEffect } from 'react';
import EnterSafe from '../../components/safe.js';
import toast, { Toaster } from 'react-hot-toast';
import TrainType from '@/components/gym/TrainType';

export default function Home() {
  const [item, setItem] = useState('');
  const [waterQuantity, setWaterQuantity] = useState('0');
  const [currentTrainType, setCurrentTrainType] = useState('none');

  useEffect(() => {
    setItem(localStorage.getItem('formValue'));
    if (localStorage.getItem('trainType')) return setCurrentTrainType(localStorage.getItem('trainType'));
  }, []);

  const notifySuccess = () =>
    toast('Sua meta de água foi atingida, parabéns!', {
      style: {
        background: 'green',
        color: 'white',
      },
    });

  return (
    <EnterSafe>
      <div className=" h-20 w-full flex-col flex items-center justify-center shadow-lg">
        <p className="text-2xl text-verdePrincipal font-molengo font-extralight">SOULHEAL</p>
        <p className="text-base text-verdePrincipal font-works font-normal">be healthy</p>
      </div>
      <main className="flex flex-col p-6 gap-5 homeOptionsListHeight overflow-y-scroll">
        <div
          className={
            waterQuantity != 2000
              ? 'flex flex-col items-center overflow-hidden relative border-2 border-[#BABABA] min-h-[10rem] rounded-md'
              : 'flex flex-col items-center overflow-hidden relative border-2 border-[#BABABA] min-h-[10rem] rounded-md bg-[#9CCAFF]'
          }
        >
          <div className="mt-2 flex items-center justify-center w-full">
            <div className="flex flex-col items-end z-10">
              <p className="text-center font-works text-xl font-semibold">Água</p>
              <p className="text-center font-works text-gray-400">Meta 2L</p>
            </div>
            <div
              onClick={() => {
                waterQuantity != 2000 ? setWaterQuantity(Number(waterQuantity) + 200) : notifySuccess();
              }}
              className="absolute right-4 z-10 bg-gray-50 p-3 rounded-full cursor-pointer hover:opacity-50 active:scale-90 transition-all"
            >
              <BsPlus className="text-gray-500 text-xl"></BsPlus>
            </div>
          </div>
          <div className="absolute bottom-0">
            <Image src={WaterTop}></Image>
            <p className="bg-[#9CCAFF] text-center w-full absolute bottom-0">{waterQuantity}ml</p>
            <div style={{ height: waterQuantity / 14 + 'px' }} className={`w-full z-0 bg-[#9CCAFF] rounded-b-md`}></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-2 border-[#BABABA] rounded-md p-4">
          {item ? (
            <div className="text-center">
              <p>Plano atual: {JSON.parse(item).dietType}</p>
              <p>Objetivo: {JSON.parse(item).objetivo} peso</p>
              <Link href="./diet/calculator" className="w-72">
                <PriButton
                  emitClickEvent={() => {
                    location.href = './diet/calculator';
                  }}
                >
                  Trocar plano
                </PriButton>
              </Link>
            </div>
          ) : (
            <div>
              <p className="text-center font-works text-gray-400">Você não possuí um plano de dieta</p>
              <Link href="./diet/calculator" className="w-72">
                <PriButton
                  emitClickEvent={() => {
                    location.href = './diet/calculator';
                  }}
                >
                  Criar plano
                </PriButton>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center relative border-2 border-[#BABABA] rounded-md p-4 gap-5">
          {currentTrainType == 'none' ? (
            <Link href={'/gym/trainSelector'}>
              <TrainType id="none"></TrainType>
            </Link>
          ) : (
            <Link href={'/gym/trainSelector'}>
              <TrainType id={currentTrainType}></TrainType>
            </Link>
          )}
        </div>
      </main>
      <NavBar selectedOption={'Home'}></NavBar>
      <Toaster />
    </EnterSafe>
  );
}
