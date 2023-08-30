"use client";
import React, { useState } from "react";

export default function Button({ children, onClick }) {
  return (
    <main>
      <div className="w-full mt-4">
        <button onClick={onClick} className="bg-[#7B9A74] font-works transition-all active:scale-90 rounded-md w-72 h-10 text-white sm:text-base text-sm font-medium ">
          {children}
        </button>
      </div>
    </main>
  );
}