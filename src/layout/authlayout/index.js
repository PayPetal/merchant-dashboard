import Nav from "Component/Auth/Nav";
import React from "react";

//we are going to pass anything it wraps has a child prop
export default function Authlayout({ children }) {
  return (
    <div className="bg-bg-img h-screen overflow-scroll  bg-no-repeat bg-cover bg-link-a ">
      <Nav />
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
