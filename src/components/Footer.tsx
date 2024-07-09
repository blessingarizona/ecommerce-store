const Footer = () => {
  return (
    <footer className="bg-[#8C5400] text-white mt-539">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row ml-8 justify-between">
          <div className="mb-4 mt-10">
            <img src="./images/logo.png" alt=""/>
          </div>
            <ul className="mt-10 space-y-4">
              <li><a href="/" className="flex items-center gap-1 hover:text-[#FF9900]">Home</a></li>
              <li><a href="#CategoryCard" className="flex items-center gap-1 hover:text-[#FF9900]">Shop</a></li>
              <li><a href="/Cart" className="flex items-center gap-1 hover:text-[#FF9900]">Cart</a></li>
            </ul>
        <form className="my-10 mr-5">
        <p>Have a question or complaint? Send us a message!</p>
          <textarea className="w-full p-4 mt-2" placeholder="Talk to us..."></textarea>
          <button type="submit" className="bg-[#FF9900] text-white p-2 mt-2">Send message</button>
        </form>
        </div>
        </div>

    </footer>
  )
}

export default Footer