'use client';
import React, { useState } from 'react';

export default function Button({ children, emitClickEvent }) {
  const handleClick = (event) => {
    emitClickEvent(event, 'Data');
  };

  return (
    <main>
      <div className="w-full mt-4">
        <button
          onClick={handleClick}
          className="bg-[#7B9A74] font-works transition-all active:scale-90 rounded-md w-full h-10 text-white sm:text-base text-sm font-medium "
        >
          {children}
        </button>
      </div>
    </main>
  );
}
