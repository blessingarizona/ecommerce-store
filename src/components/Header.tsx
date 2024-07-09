import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="wrapper mx-auto flex flex-row justify-between space-x-3 items-center p-4">
      <div className="w-51 h-11 mt-7 ml-25">
        <img src="./images/logo.png" alt="" />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>
          <div className={`flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="/" className="px-2 py-1 md:mx-2 font-poppins text-[#000000] hover:text-[#FF9900] active:text-[#FF9900]">Home</a>
          <a href="#CategoryCard" className="px-2 py-1 md:mx-2 font-poppins text-[#000000] hover:text-[#FF9900] active:text-[#FF9900]">Shop</a>
          <a href="/Cart" className="px-2 py-1 md:mx-2 font-poppins text-[#000000] hover:text-[#FF9900] active:text-[#FF9900]">Cart</a>
        </div>
        </div>
    </header>
  )
}

export default Header


