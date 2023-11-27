"use client";

import Image from "next/image";
import Link from "next/link";

export default function Option(props) {
  return (
    <Link href={`/meditation/detalhes/${props.optionId}`} passHref>
      <div>
        <div className="relative w-full rounded-md flex items-end justify-center text-white">
          <Image
            className="w-full rounded-md"
            alt="Imagem da meditação"
            width="100"
            height="100"
            src={props.image}
          />
          <p className="font-semibold absolute bottom-2">{props.optionName}</p>
        </div>
      </div>
    </Link>
  );
}