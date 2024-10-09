import Nav from "Component/Auth/Nav";
import React from "react";

export default function Authlayout({ children }) {
  return (
    <div className="bg-bg-image h-screen  bg-no-repeat bg-cover bg-link-a  overflow-hidden">
      <Nav />
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
