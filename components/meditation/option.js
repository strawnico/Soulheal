'use client';

import Image from 'next/image';

export default function Option(props) {
  return (
    <div className="relative w-full rounded-md flex items-end justify-center text-white">
      <Image className="w-full rounded-md" alt="Imagem da comida" width="100" height="100" src={props.image}></Image>
      <p className="font-semibold absolute bottom-2">{props.optionName}</p>
    </div>
  );
}
