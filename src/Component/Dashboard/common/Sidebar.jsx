import React, { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active item
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);

  const SIDEBAR_ITEMS = [
    { icon: CgMenuMotion, name: "Get Started", href: "/get-started" },
    { icon: GoHome, name: "Home", href: "/" },
  ];

  return (
    <div
      className={`bg-[#F2F4F7] min-h-screen py-10 flex flex-col gap-5 border-r border-r-[#D0D5DD] ${
        isSidebarOpen ? "w-[270px]" : "w-[70px]"
      } transition-all duration-300 ease-in-out`}
    >
      <div>
        {/* <div
          className={`flex flex-col  ${
            isSidebarOpen ? "items-end px-3" : "items-center"
          }`}
        >
          <button
            onClick={() => setIsSideBarOpen(!isSidebarOpen)}
            className="mb-5 p-2 text-3xl"
          >
            {isSidebarOpen ? <IoCloseSharp /> : <LuMenu />}
          </button>
        </div> */}
        {SIDEBAR_ITEMS.map((item, index) => (
          <Link
            to={item.href}
            key={index}
            className={`flex items-center gap-3 p-3 cursor-pointer  ${
              activeIndex === index
                ? "font-semibold border-y border-[#B7B6E2] bg-[#E7E7F5] text-[#0E0B9D]" // Apply border when active
                : "text-[#667085]"
            }`}
            onClick={() => setActiveIndex(index)} // Set the clicked item as active
          >
            <item.icon
              size={25}
              className={`${activeIndex === index ? "font-bold" : ""} ${
                isSidebarOpen ? "" : "mx-auto"
              }`}
            />
            <p
              className={`transition-all duration-300 ease-in-out ${
                isSidebarOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              {isSidebarOpen && item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
