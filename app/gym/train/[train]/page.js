'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import Exercise from '@/components/gym/Exercise';
import Button from '@/components/PrimaryButton';

export default function Page({ params }) {
  return (
    <main className="font-works flex flex-col">
      <div className="h-20 w-full flex items-center justify-center shadow-lg">
        <Link href={'../'}>
          <IoIosArrowBack className="text-2xl ml-4"></IoIosArrowBack>
        </Link>
        <p className="text-2xl text-black font-works font-semibold flex-1 text-center mr-6">{params.train}</p>
      </div>

      <div className="w-full mt-4 gap-4 flex flex-col px-6">
        <Exercise id="1" name="Agachamento livre" seriesQuantity="4" repsQuantity="12"></Exercise>
        <Exercise id="2" name="Leg press horizontal" seriesQuantity="3" repsQuantity="10"></Exercise>
        <Exercise id="3" name="Afundo com halteres" seriesQuantity="3" repsQuantity="12"></Exercise>
        <Exercise id="4" name="Cadeira extensora" seriesQuantity="4" repsQuantity="10"></Exercise>
        <Exercise id="5" name="Cadeira flexora" seriesQuantity="4" repsQuantity="10"></Exercise>
        <Exercise id="6" name="Levantamento terra" seriesQuantity="3" repsQuantity="12"></Exercise>
        <Exercise id="7" name="Máquina adutora" seriesQuantity="3" repsQuantity="12"></Exercise>
        <Exercise id="8" name="Máquina abdutora" seriesQuantity="3" repsQuantity="12"></Exercise>
        <Exercise id="9" name="Stiff" seriesQuantity="4" repsQuantity="10"></Exercise>
        <Exercise id="10" name="Panturrilha no leg press" seriesQuantity="4" repsQuantity="15"></Exercise>
      </div>
      <Button
        emitClickEvent={() => {
          localStorage.setItem('finishedTrain', params.train);
          window.location.href = '../../gym';
        }}
      >
        Concluir treino
      </Button>
    </main>
  );
}
