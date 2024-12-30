import React, { useState } from "react";
import { Camera, Compass, Gamepad, Map, Menu, UserCircle, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-50/95 backdrop-blur-md border-b border-blue-200 fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
     
          <div className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              COOL
            </span>
            <span className="text-indigo-700">TOUR</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-indigo-600 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group font-medium"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              <span>Home</span>
            </a>
            <a
              href="/ragam-budaya"
              className="text-indigo-600 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group font-medium"
            >
              <Map className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Ragam Budaya</span>
            </a>
            <a
              href="/games"
              className="text-indigo-600 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group font-medium"
            >
              <Gamepad className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Games</span>
            </a>
            <a
              href="/petualangan-budaya"
              className="text-indigo-600 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group font-medium"
            >
              <Camera className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Petualangan Budaya</span>
            </a>
            {/* New "Tentang Kami" Menu Item */}
            <a
              href="/tentang-kami"
              className="text-indigo-600 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group font-medium"
            >
              <UserCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Tentang Kami</span>
            </a>
            <a
              href="/profile"
              className="text-indigo-600 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group font-medium"
            >
              <UserCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Profile</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-indigo-600 hover:text-blue-500 transition-all duration-300 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="border-t border-blue-200 py-2 space-y-1">
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-indigo-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              <Compass className="w-5 h-5" />
              <span>Home</span>
            </a>
            <a
              href="/ragam-budaya"
              className="flex items-center gap-3 px-4 py-3 text-indigo-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              <Map className="w-5 h-5" />
              <span>Ragam Budaya</span>
            </a>
            <a
              href="/games"
              className="flex items-center gap-3 px-4 py-3 text-indigo-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              <Gamepad className="w-5 h-5" />
              <span>Games</span>
            </a>
            <a
              href="/petualangan-budaya"
              className="flex items-center gap-3 px-4 py-3 text-indigo-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              <Camera className="w-5 h-5" />
              <span>Petualangan Budaya</span>
            </a>
            {/* New "Tentang Kami" Menu Item for Mobile */}
            <a
              href="/tentang-kami"
              className="flex items-center gap-3 px-4 py-3 text-indigo-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              <UserCircle className="w-5 h-5" />
              <span>Tentang Kami</span>
            </a>
            <a
              href="/profile"
              className="flex items-center gap-3 px-4 py-3 text-indigo-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              <UserCircle className="w-5 h-5" />
              <span>Profile</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
