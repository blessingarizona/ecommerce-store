type CartItemProps = {
    item: {
      image: string;
      name: string;
      price: number;
      quantity: number;
    };  
    onRemove: () => void;
}
const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
    <div className="flex-1 ml-4">
      <h2 className="text-lg">{item.name}</h2>
      <p>Price: #{item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
    <button onClick={onRemove} className="text-red-500">
      Remove
    </button>
  </div>
  )
}

export default CartItem