interface ItemCardProps {
    title: string;
    price: string;
    discount?: string;
    imageUrl: string;
  }

const ItemCard: React.FC<ItemCardProps> = ({ title, price, discount, imageUrl }) => {
  return (
    <div className="border rounded mx-10 font-poppins relative">
      {discount && <span className="absolute top-3 w-27 h-13 right-2 bg-[#FF9900] text-white p-2.5 text-xs">{discount}</span>}
      <img src={imageUrl} alt={title} className="w-full h-54.75 object-cover" />
      <div className="flex flex-row font-poppins justify-between mt-3 mb-5 mr-4">
      <h3 className="text-lg p-2.5">{title}<br /><span className="text-black-600 font-bold">{price}</span></h3> 
      <button className="text-white bg-[#FF9900] px-2 py-1 mt-3 mb-5"><a href="/Cart">Buy now</a></button>
      </div>
    </div>
  )
}

export default ItemCard