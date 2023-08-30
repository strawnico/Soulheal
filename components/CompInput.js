"use client";
import React, { useState, forwardRef } from "react";

export default function Input(props) {
  const [value, setValue] = useState("");
  return (
    <div
      className="w-full text-input-container mt-5"
      placeholder={props.placeholder}
      data-show-label={value}
    >
      <input
        value={props.value}
        name={props.name}
        id={props.id}
        type={props.type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={props.placeholder}
        className="text-input bg-[#f1f1f1] focus:bg-white placeholder:font-normal placeholder:sm:text-base placeholder:text-sm focus:outline outline-none placeholder:text-[#cccccc] focus:outline-2 focus:outline-[#7B9A74] rounded-md w-72 h-10  text-black pl-4 font-normal "
      />
    </div>
  );
}
