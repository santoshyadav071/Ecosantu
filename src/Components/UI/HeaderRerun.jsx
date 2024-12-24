import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const HeaderRerun = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#E0DACF] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">ReRun</h2>
            </div>

            {/* Mobile menu button */}
            <div className="flex sm:hidden">
              <button
                type="button"
                className="text-gray-800 hover:text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <IoMdClose className="h-6 w-6" />
                ) : (
                  <RxHamburgerMenu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex flex-1 items-center justify-center">
              <ul className="flex space-x-8">
                <li>
                  <NavLink
                    to="/Shop"
                    className="text-gray-800 hover:text-black hover:underline decoration-2"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/AboutRerun"
                    className="text-gray-800 hover:text-black hover:underline decoration-2"
                  >
                    About Rerun
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/HolidayDeal"
                    className="text-gray-800 hover:text-black hover:underline decoration-2"
                  >
                    Holiday Deal
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Search and Cart */}
            <div className="hidden sm:flex items-center space-x-6">
              <div className="relative">
                <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="search"
                  placeholder="Need help?.."
                  className="w-48 lg:w-64 pl-10 pr-4 py-2 text-sm border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <NavLink
                to="/Reruncart"
                className="text-gray-800 hover:text-black"
              >
                <BsCart2 className="text-2xl" />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:hidden bg-[#E0DACF] border-t border-gray-200`}
        >
          <div className="px-4 pt-2 pb-4 space-y-4">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/Shop"
                  className="block text-gray-800 hover:text-black hover:underline decoration-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AboutRerun"
                  className="block text-gray-800 hover:text-black hover:underline decoration-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Rerun
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/HolidayDeal"
                  className="block text-gray-800 hover:text-black hover:underline decoration-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Holiday Deal
                </NavLink>
              </li>
            </ul>
            <div className="pt-4 border-t border-gray-200">
              <div className="relative">
                <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="search"
                  placeholder="Need help?.."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <NavLink
                to="/Reruncart"
                className="flex items-center mt-4 text-gray-800 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                <BsCart2 className="text-2xl mr-2" />
                <span>Cart</span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
