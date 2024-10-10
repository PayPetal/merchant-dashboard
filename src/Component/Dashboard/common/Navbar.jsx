import { useState } from "react";
import logo from "../../../assets/images/logo-dark 1.png";
import avatar from "../../../assets/images/Avatar.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiCaretDown } from "react-icons/pi";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-[#F2F4F7] border-b border-b-[#D0D5DD] shadow-sm">
      <div className="container px-[37px] py-4 mx-auto flex items-center justify-between">
        <div>
          <img height="69px" width="61px" src={logo} alt="paypetal logo" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 cursor-pointer">
            <IoMdNotificationsOutline className="text-2xl mr-1 text-[#3E3CB1]" />

            <p className="text-[#667085] text-sm font-medium border-2 border-[#CFCEEB] rounded px-[10px]">
              Admin
            </p>
            <img src={avatar} alt="profile image" />
            <button
              className="flex items-center gap-2"
              onClick={() => setShowDropdown(!showDropdown)} // Toggles the dropdown
            >
              <p className="text-[#0D0A8D] font-bold text-sm">John Tom</p>
              <PiCaretDown className="text-xl text-[#98A2B3]" />
            </button>
          </div>

          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-[#D0D5DD] rounded-md shadow-lg z-20">
              <ul className="py-1">
                <li
                  className="px-4 py-2 text-sm text-[#0D0A8D] hover:bg-[#F2F4F7] cursor-pointer"
                  onClick={() => {
                    setShowDropdown(false);
                  }}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 text-sm text-[#0D0A8D] hover:bg-[#F2F4F7] cursor-pointer"
                  onClick={() => {
                    setShowDropdown(false);
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
