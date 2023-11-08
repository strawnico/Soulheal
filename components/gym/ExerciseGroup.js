'use client';

import { BiSolidRightArrow } from 'react-icons/bi';

import Link from 'next/link';

export default function ExerciseGroup(props) {
  const href = `/gym/train/${props.name}`;

  return (
    <div
      className={
        props.isFinished
          ? 'w-full flex shadow-md p-6 flex-col gap-1 border-verdePrincipal border-4 rounded-md relative'
          : 'w-full flex shadow-md p-6 flex-col gap-1 rounded-md'
      }
    >
      <div className="flex w-full justify-between ">
        <p className="font-semibold text-2xl text-gray-700">{props.name}</p>
        {props.isFinished ? (
          false
        ) : (
          <Link href={href}>
            <div className="bg-verdePrincipal p-3 rounded-full cursor-pointer hover:opacity-50 active:scale-90 transition-all text-white">
              <BiSolidRightArrow></BiSolidRightArrow>
            </div>
          </Link>
        )}
      </div>
      <div className="flex w-full gap-2">
        {props.groups.map((group) => {
          return (
            <div className="p-1 bg-[#DEE6DC] px-2 rounded-md">
              <p>{group}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-2">{props.exercisesQuantity} exercícios</p>
      {props.isFinished ? (
        <div className="absolute bottom-0 right-0 p-2 pl-4 bg-verdePrincipal rounded-tl-full flex text-white">
          <p className="text-sm">Concluido</p>
        </div>
      ) : (
        false
      )}
    </div>
  );
}
