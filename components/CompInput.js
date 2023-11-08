'use client';
import React, { useState, forwardRef, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Input(props) {
  const [value, setValue] = useState('');
  const [inputType, setInputType] = useState('text');

  useEffect(() => {
    if (props.type) {
      setInputType(props.type);
    }
  }, []);

  return (
    <div
      className="w-full text-input-container mt-5 flex gap-2"
      placeholder={props.placeholder}
      data-show-label={value}
    >
      <div
        className={
          value
            ? 'flex text-input bg-white placeholder:font-normal placeholder:sm:text-base placeholder:text-sm outline outline-none placeholder:text-[#cccccc] outline-2 outline-verdePrincipal rounded-md w-full h-10  text-black font-normal'
            : 'flex text-input bg-[#f1f1f1] focus-within:bg-white placeholder:font-normal placeholder:sm:text-base placeholder:text-sm focus-within:outline outline-none placeholder:text-[#cccccc] focus-within:outline-2 focus-within:outline-verdePrincipal rounded-md w-full h-10  text-black font-normal'
        }
      >
        <input
          value={props.value}
          name={props.name}
          id={props.id}
          type={inputType}
          onChange={(e) => {
            const newValue = e.target.value;
            setValue(newValue);
            props.onChange(newValue);
          }}
          placeholder={props.placeholder}
          className={
            value
              ? 'w-full placeholder:font-normal placeholder:sm:text-base placeholder:text-sm outline outline-none placeholder:text-[#cccccc] rounded-md text-black pl-4 font-normal'
              : 'w-full placeholder:font-normal focus:bg-white bg-[#f1f1f1] placeholder:sm:text-base placeholder:text-sm outline-none placeholder:text-[#cccccc] rounded-md text-black pl-4 font-normal'
          }
        />
        {props.hasShowHidePassword ? (
          <div
            onClick={() => {
              inputType == 'password' ? setInputType('text') : setInputType('password');
            }}
            className="w-12 rounded-md flex items-center justify-center cursor-pointer hover:opacity-50 transition-all active:scale-90"
          >
            {inputType == 'password' ? (
              <AiOutlineEye className="text-xl text-gray-500"></AiOutlineEye>
            ) : (
              <AiOutlineEyeInvisible className="text-xl text-gray-500"></AiOutlineEyeInvisible>
            )}
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
}
