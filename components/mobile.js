"use client";
import React, { useState } from "react";

export default function Mobile({ children }) {
  return (
    <main className="flex">
      <div className="justify-center flex-col mx-auto flex">
        <div className="border-2 border-[#00000]">{children}</div>
      </div>
    </main>
  );
}
