"use client";

export default function Exercise(props) {
  return (
    <div className="flex gap-5 items-center border-b pb-4">
      <div className="bg-verdePrincipal p-3 rounded-full h-10 w-10 flex items-center justify-center text-white">
        <p className="font-semibold">{props.id}</p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-xl">{props.name}</p>
        <p className="text-gray-400">
          {props.seriesQuantity} series | {props.repsQuantity} repetições
        </p>
      </div>
    </div>
  );
}
