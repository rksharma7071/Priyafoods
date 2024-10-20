import React, { useState } from "react";
import { Link } from "react-router-dom";
import Shop from "./Shop";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 left-0 bg-white z-50">
      <div className="flex items-center  justify-between w-full lg:w-[1200px] mx-auto py-1 bg-white px-4 md:px-8">
        {/* Hamburger icon for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle} aria-label="Toggle Menu">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Logo centered on mobile and tablet */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <img
            className="h-[3rem] w-[7rem]"
            src="https://priyafoods.com/cdn/shop/files/LOGO_155x.png?v=1632809617"
            alt="logo"
          />
        </div>

        {/* Icons section on the right */}
        <div className="lg:hidden flex gap-4">
          <SearchIcon className="cursor-pointer hover:text-red-500" />
          <PersonOutlineOutlinedIcon className="cursor-pointer hover:text-red-500" />
          <ShoppingCartOutlinedIcon className="cursor-pointer hover:text-red-500" />
        </div>

        {/* Navigation Links - hidden on mobile */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center w-full lg:w-auto bg-white lg:bg-transparent absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto p-4 lg:p-0 transition-all duration-300 ease-in-out z-10`}
        >
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <Link
              to="/"
              className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0"
            >
              Home
            </Link>
            <Link
              to="/collections/all"
              className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0"
            >
              Shop
            </Link>
            <Link
              to="/collections/festive-sale"
              className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0"
            >
              Sales
            </Link>
            <Link
              to="/collections/pickles"
              className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0"
            >
              Pickles
            </Link>
            <Link
              to="/collections/masalas"
              className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0"
            >
              Masalas
            </Link>
            <span className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0">
            <Link
              to="/collections/spices"
              className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0"
            >
              Spices
            </Link>
            </span>
            <div className="flex items-center py-2 lg:py-0">
              <span className="text-sm hover:text-red-500 cursor-pointer uppercase">
                More
              </span>
              <ExpandMoreIcon className="!text-sm !my-1 !text-gray-400" />
            </div>
            <div className="flex items-center py-2 lg:py-0">
              <span className="text-sm hover:text-red-500 cursor-pointer uppercase">
                Exports
              </span>
              <ExpandMoreIcon className="!text-sm !my-1 !text-gray-400" />
            </div>
            <span className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0">
            <Link
              to="/blogs/news"
              className="text-sm hover:text-red-500 cursor-pointer uppercase py-2 lg:py-0"
            >Blogs
            </Link>
            </span>
          </div>
        </nav>
        {/* Icons section inside the navigation on large screens */}
        <div className="hidden lg:flex gap-4">
            <SearchIcon className="cursor-pointer hover:text-red-500" />
            <PersonOutlineOutlinedIcon className="cursor-pointer hover:text-red-500" />
            <ShoppingCartOutlinedIcon className="cursor-pointer hover:text-red-500" />
          </div>
      </div>
    </div>
  );
}

export default Header;