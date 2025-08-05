import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-400 py-2 px-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">
          <img
            src="https://placehold.co/120x60"
            alt="Logo MercadoClone"
            className="h-10"
          />
          <div className="relative w-full ml-4 hidden md:block">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full py-2 px-4 rounded-md shadow-sm"
            />
            <button className="absolute right-0 top-0 h-full px-4 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav className="flex items-center space-x-4">
          <button className="text-gray-800 hover:text-gray-600 transition-all">
            Categorías
          </button>
          <button className="text-gray-800 hover:text-gray-600 transition-all">
            Ofertas
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-all">
            Ingresar
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
