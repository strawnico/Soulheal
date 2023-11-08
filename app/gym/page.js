'use client';

import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Braco from '../../public/arm.png';
import ExerciseGroup from '@/components/gym/ExerciseGroup';
import Mobile from '@/components/mobile';
import Link from 'next/link';
import TrainType from '@/components/gym/TrainType';
import { useEffect, useState } from 'react';

export default function Gym() {
  const [currentTrainType, setCurrentTrainType] = useState('none');

  useEffect(() => {
    if (localStorage.getItem('trainType')) return setCurrentTrainType(localStorage.getItem('trainType'));
  }, []);

  return (
    <main>
      <div className=" h-20 w-full flex-col flex items-center justify-center shadow-lg">
        <p className="text-2xl text-black font-works font-semibold">Treinos</p>
      </div>
      <main className="flex flex-col p-6 gap-6">
        <div>
          <p className="font-semibold text-xl text-gray-500">MEU TREINO</p>
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
        {currentTrainType != 'none' ? (
          <div>
            <p className="font-semibold text-xl text-gray-500">TREINOS</p>
            <div className="w-full max-h-screen overflow-y-scroll workoutListHeight flex flex-col gap-2">
              <ExerciseGroup name="TreinoA" groups={['Glúteo', 'Posterior']} exercisesQuantity="7"></ExerciseGroup>
              <ExerciseGroup name="TreinoB" groups={['Tríceps', 'Bíceps']} exercisesQuantity="8"></ExerciseGroup>
            </div>
          </div>
        ) : (
          false
        )}
      </main>
      <NavBar selectedOption={'Gym'}></NavBar>
    </main>
  );
}
