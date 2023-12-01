'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import TrainType from '@/components/gym/TrainType';

export default function TrainSelector() {
  const setTypeToLocalStorage = (val) => {
    localStorage.setItem('trainType', val);
    window.location.href = '../gym';
  };

  return (
    <main className="font-works flex flex-col p-6">
      <div className="flex items-center gap-4">
        <Link href={'../gym'}>
          <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
        </Link>
        <p className="text-2xl font-semibold">Selecionar treino</p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div
          onClick={() => {
            setTypeToLocalStorage('1');
          }}
          className="border rounded-md cursor-pointer hover:opacity-50 transition-all active:scale-90"
        >
          <TrainType id="1"></TrainType>
        </div>
        <div
          onClick={() => {
            setTypeToLocalStorage('2');
          }}
          className="border rounded-md cursor-pointer hover:opacity-50 transition-all active:scale-90"
        >
          <TrainType id="2"></TrainType>
        </div>
        <div
          onClick={() => {
            setTypeToLocalStorage('3');
          }}
          className="border rounded-md cursor-pointer hover:opacity-50 transition-all active:scale-90"
        >
          <TrainType id="3"></TrainType>
        </div>
        <div
          onClick={() => {
            setTypeToLocalStorage('4');
          }}
          className="border rounded-md cursor-pointer hover:opacity-50 transition-all active:scale-90"
        >
          <TrainType id="4"></TrainType>
        </div>
        <div
          onClick={() => {
            setTypeToLocalStorage('5');
          }}
          className="border rounded-md cursor-pointer hover:opacity-50 transition-all active:scale-90"
        >
          <TrainType id="5"></TrainType>
        </div>
      </div>
    </main>
  );
}
