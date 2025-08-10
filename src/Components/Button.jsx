
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Button({
  text = "Click Me",
  onClick = () => { },
  className = "",
  showIcon = true,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-0.5 px-6 py-3 rounded-full text-sm font-medium text-black bg-white hover:scale-105 transition-transform duration-200 ${className}`}
    >
      {text}
      {showIcon && <MdOutlineArrowOutward className="text-[18px]" />}
    </button>
  );
}
