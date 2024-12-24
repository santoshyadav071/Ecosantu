import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx"; 
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <div className="flex items-center px-4 md:px-6 py-4 sticky top-0 bg-white z-50">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/">
            <h2 className="text-xl md:text-2xl font-bold">Ecosantu</h2>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1">
          <ul className="flex gap-4 md:gap-6">
            <li>
              <NavLink to="/" className="hover:underline decoration-2 decoration-black">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Men" className="hover:underline decoration-2 decoration-black">
                Men
              </NavLink>
            </li>
          
            <li>
              <NavLink to="/Socks" className="hover:underline decoration-2 decoration-black">
                Socks
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Icons */}
        <nav className="flex-1 flex justify-end">
          <ul className="flex gap-4 md:gap-6 items-center">
            <li className="hidden md:block">
              <NavLink to="/Store" className="hover:underline decoration-2 decoration-black">
                Store
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink to="/Reseal" className="hover:underline decoration-2 decoration-black">
                Reseal
              </NavLink>
            </li>
            <li>
              <NavLink to="/Search"><FaSearch className="text-xl"/></NavLink>
            </li>
            <li>
              <NavLink to="/User"><FaRegUser className="text-xl"/></NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink to="/Help"><IoMdHelpCircleOutline className="text-2xl"/></NavLink>
            </li>
            <li>
              <NavLink to="/Cart"><LuShoppingCart className="text-2xl"/></NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100 z-50 border-t"> {/* Changed background color here */}
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink to="/" className="hover:underline decoration-2 decoration-black">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Men" className="hover:underline decoration-2 decoration-black">
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink to="/Women" className="hover:underline decoration-2 decoration-black">
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink to="/Socks" className="hover:underline decoration-2 decoration-black">
                  Socks
                </NavLink>
              </li>
              <li>
                <NavLink to="/Store" className="hover:underline decoration-2 decoration-black">
                  Store
                </NavLink>
              </li>
              <li>
                <NavLink to="/Reseal" className="hover:underline decoration-2 decoration-black">
                  Reseal
                </NavLink>
              </li>
              <li>
                <NavLink to="/Help" className="hover:underline decoration-2 decoration-black">
                  Help
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
