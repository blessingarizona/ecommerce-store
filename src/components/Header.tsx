const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="wrapper mx-auto flex flex-row justify-between space-x-3 items-center p-4">
      <div className="w-51 h-11 mt-7 ml-25">
        <img src="./images/logo.png" alt="" />
        </div>
        <nav className="h-50 ml-109.25 mt-5.3 grid grid-cols-3 gap-4 space-x-3">
          <a href="/" className="font-poppins text-[#000000] hover:text-[#FF9900] active:text-[#FF9900]">Home</a>
          <a href="#CategoryCard" className="font-poppins text-[#000000] hover:text-[#FF9900] active:text-[#FF9900]">Shop</a>
          <a href="/Cart" className="font-poppins text-[#000000] hover:text-[#FF9900] active:text-[#FF9900]">Cart</a>
        </nav>
        </div>
    </header>
  )
}

export default Header
