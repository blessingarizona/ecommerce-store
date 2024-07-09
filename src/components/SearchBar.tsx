const SearchBar = () => {
  return (
    <div className="container p-5 mx-auto">
      <div className="flex justify-items-end space-x-4">
        <input type="text" placeholder="Search" className="px-4 py-2.5 mr-56.5 w-5/6 p-2 border border-gray-300 rounded" />
        
        <button className="w-57.8 h-70 font-poppins bg-[#FF9900] text-white px-4 py-2 rounded">Search</button>
      </div>
    </div>
  )
}

export default SearchBar