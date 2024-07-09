interface CategoryCardProps {
    title: string;
    imageUrl: string;
  }
  
const CategoryCard:React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="border rounded mx-10 font-poppins relative">
    <img src={imageUrl} alt={title} className="w-full h-54.75 object-cover" />
    <div className="flex flex-row justify-between mt-3 mb-5 mr-4">
    <h3 className="text-lg font-bold p-2.5">{title}</h3>
    <button className="bg-[#FF9900] text-white px-2 py-1 mt-3 mb-5"><a href="/Cart">Shop now</a></button>
    </div>
  </div>
  )
}

export default CategoryCard