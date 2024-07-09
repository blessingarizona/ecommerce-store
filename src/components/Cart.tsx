import CartItem from "./CartItem"

const Cart = () => {
  const cartItems = [
    { image: './images/item6.jpg', name: 'Pallazo', price: 8000, quantity: 1 },
    { image: './images/item2.jpg', name: 'Blue Jeans', price: 12000, quantity: 2 },
  ];
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl mb-4">View items in your cart</h1>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} onRemove={() => console.log('Remove item')} />
        ))}
      </div>
      <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded"><a href="/Payment">Proceed to checkout</a></button>
    </div>
    
  )
}

export default Cart