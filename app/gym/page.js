'use client';

import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Braco from '../../public/arm.png';
import ExerciseGroup from '@/components/gym/ExerciseGroup';
import Mobile from '@/components/mobile';
import Link from 'next/link';
import TrainType from '@/components/gym/TrainType';
import { useEffect, useState } from 'react';
import EnterSafe from '../../components/safe.js';

export default function Gym() {
  const [currentTrainType, setCurrentTrainType] = useState('none');
  const [finishedTrain, setFinishedTrain] = useState('');

  useEffect(() => {
    if (localStorage.getItem('finishedTrain')) setFinishedTrain(localStorage.getItem('finishedTrain'));
    if (localStorage.getItem('trainType')) setCurrentTrainType(localStorage.getItem('trainType'));
    console.log(finishedTrain);
  }, []);

  return (
    <EnterSafe>
      <div className=" h-20 w-full flex-col flex items-center justify-center shadow-lg">
        <p className="text-2xl text-black font-works font-semibold">Treinos</p>
      </div>
      <main className="flex flex-col p-6 gap-6">
        <div>
          <p className="font-semibold text-xl text-gray-500">MEU TREINO</p>
          {currentTrainType == 'none' ? (
            <div className="border rounded-md">
              <Link href={'/gym/trainSelector'}>
                <TrainType id="none"></TrainType>
              </Link>
            </div>
          ) : (
            <div className="border rounded-md">
              <Link href={'/gym/trainSelector'}>
                <TrainType id={currentTrainType}></TrainType>
              </Link>
            </div>
          )}
        </div>
        {currentTrainType != 'none' ? (
          <div>
            <p className="font-semibold text-xl text-gray-500">TREINOS</p>
            <div className="w-full max-h-screen overflow-y-scroll workoutListHeight flex flex-col gap-2">
              <ExerciseGroup
                isFinished={finishedTrain == 'TreinoA'}
                name="TreinoA"
                groups={['Glúteo', 'Posterior']}
                exercisesQuantity="7"
              ></ExerciseGroup>
              <ExerciseGroup
                isFinished={finishedTrain == 'TreinoB'}
                name="TreinoB"
                groups={['Tríceps', 'Bíceps']}
                exercisesQuantity="8"
              ></ExerciseGroup>
            </div>
          </div>
        ) : (
          false
        )}
      </main>
      <NavBar selectedOption={'Gym'}></NavBar>
    </EnterSafe>
  );
}
