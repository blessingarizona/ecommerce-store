import SearchBar from "./SearchBar"; 
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import ItemCard from "./ItemCard";

const Home = () => {
  return (
    <div>
        <SearchBar />
        <div className="container mx-auto p-4">
        <h2 className="text-2xl text-center font-bold font-poppins my-4">Available Items on Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard title="Trouser" discount="40% off" imageUrl="./images/trousers.jpg" />
          <ProductCard title="Hats" discount="40% off" imageUrl="./images/hats.jpg" />
          <ProductCard title="Gowns" discount="40% off" imageUrl="./images/gowns.jpg" />
        </div>
        <button className="mt-6 mb-8 mx-auto bg-[#FF9900] w-64 h-17.5 flex justify-center items-center text-white px-38 py-4 rounded">See more</button>

        <h2 id="CategoryCard" className="text-2xl text-center font-bold font-poppins my-4">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CategoryCard title="Men" imageUrl="./images/men.jpg" />
          <CategoryCard title="Women" imageUrl="./images/women.jpg" />
          <CategoryCard title="Children" imageUrl="./images/children.jpg" />
        </div>
        <button className="mt-6 mb-8 mx-auto bg-[#FF9900] w-64 flex justify-center items-center text-white px-38 py-4 rounded">View more categories</button>

        <h2 className="text-2xl text-center font-bold font-poppins my-4">Available Items on Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ItemCard title="Brown Cargo pants" price="$12000" discount="40% off" imageUrl="./images/item1.jpg" />
          <ItemCard title="Blue Jeans" price="$12000" discount="10% off" imageUrl="./images/item2.jpg" />
          <ItemCard title="Sweatpants" price="$15000"  discount="20% off" imageUrl="./images/item3.jpg" />
          <ItemCard title="Leggings" price="$2000" discount="25% off" imageUrl="./images/item4.jpg" />
          <ItemCard title="Chinos pants" price="$4000" discount="20% off" imageUrl="./images/item5.jpg" />
          <ItemCard title="Pallazo" price="$8000"  discount="10% off" imageUrl="./images/item6.jpg" />
        </div>
      </div>
      
      </div>
  )
}

export default Home