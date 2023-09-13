"use client";

import Image from "next/image";

export default function Category(props) {
  return (
    <div className="flex justify-center items-center w-full h-28 rounded-md relative hover:opacity-80 cursor-pointer active:scale-90 transition-all">
      <Image className="w-full h-full rounded-md" alt="Imagem da comida" width="100" height="100" src={props.image}></Image>
      <div className="w-full h-full absolute bg-black rounded-md opacity-50"></div>
      <p className="text-white absolute">{props.name}</p>
    </div>
  );
}
