import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={`${type}`}
      required
      placeholder={`${placeholder}`}
      className="w-[294px] text-sm border border-gray-300 rounded-md p-2"
    />
  );
};

export default Input;
