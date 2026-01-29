// app/component/popDownInfo.tsx
"use client";
import React, { useState } from "react";
type Props = {
  title: string;
  info: string;
};
export default function PopDownInfo({ title, info }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className={
          isOpen
            ? "py-3 mb-0 px-2  bg-[#006241] my-3 rounded-t-xl flex justify-between items-center cursor-pointer"
            : " onClick={() => setIsOpen((v) => !v)"
        }
        aria-expanded={isOpen}
      >
        <h2 className="text-white text-2xl knewave-regular">{title}</h2>
        <img
          src={
            isOpen
              ? "/plus-circle-svgrepo-com-colored.svg"
              : "/plus-circle-svgrepo-com.svg"
          }
          alt="toggle"
          className="h-9"
        />
      </div>

      <div
        className={
          (isOpen
            ? "max-h-96 px-2 py-4 bg-[#D4E9E2]  border-black border-solid"
            : "max-h-0 p-0") +
          " overflow-hidden transition-all duration-300 rounded mb-3"
        }
        role="region"
        aria-hidden={!isOpen}
      >
        <p className="text-black">{info}</p>
      </div>
    </div>
  );
}
