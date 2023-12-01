'use client';

import Link from 'next/link';
import Braco from '../../public/arm.png';
import Image from 'next/image';
import { BiRun } from 'react-icons/bi'; //resistencia
import { TbJumpRope } from 'react-icons/tb'; //hiit
import { GiMuscleUp, GiBiceps, GiStrongMan } from 'react-icons/gi'; // potencia e força e hipertrofia
import PrimaryButton from '../../components/PrimaryButton';

export default function TrainType(props) {
  const names = [
    'Treino de resistência muscular',
    'Treino HIIT',
    'Treino de potência muscular',
    'Treino de força',
    'Treino de hipertrofia',
  ];

  return (
    <div>
      <div className="w-full p-4 rounded-md flex items-center gap-4">
        {props.id == 'none' ? (
          <div className="flex items-center flex-col w-full">
            <p className="text-center">Você não possuí um plano de treino</p>
            <div className="w-40 hover:opacity-70 transition-all active:scale-90">
              <PrimaryButton
                emitClickEvent={() => {
                  false;
                }}
              >
                Selecionar plano
              </PrimaryButton>
            </div>
          </div>
        ) : (
          false
        )}
        {props.id == 1 ? <BiRun className="w-16 h-16 text-white bg-verdePrincipal rounded-full p-4"></BiRun> : false}
        {props.id == 2 ? (
          <TbJumpRope className="w-16 h-16 text-white bg-verdePrincipal rounded-full p-4"></TbJumpRope>
        ) : (
          false
        )}
        {props.id == 3 ? (
          <GiMuscleUp className="w-16 h-16 text-white bg-verdePrincipal rounded-full p-4"></GiMuscleUp>
        ) : (
          false
        )}
        {props.id == 4 ? (
          <GiBiceps className="w-16 h-16 text-white bg-verdePrincipal rounded-full p-4"></GiBiceps>
        ) : (
          false
        )}
        {props.id == 5 ? (
          <GiStrongMan className="w-16 h-16 text-white bg-verdePrincipal rounded-full p-4"></GiStrongMan>
        ) : (
          false
        )}
        <div>
          <p className="font-semibold text-lg text-gray-700">{names[props.id - 1]}</p>
        </div>
      </div>
    </div>
  );
}
