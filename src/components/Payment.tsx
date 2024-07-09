const Payment = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
    <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
    <p className="font-semibold mb-4">make payment via</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
        <h3 className="text-xl font-semibold font-poppins mb-4">Bank transfer</h3>
        <form>
        <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="block font-medium font-poppins text-sm mb-2">Bank Name</label>
          <input type="text" className="border rounded p-2 w-full mb-4 rounded text-[#000000] font-poppins text-sm font-semibold" placeholder="Kuda Bank"/>
          </div>
          <div className="flex-1">
          <label className="block font-medium font-poppins text-sm mb-2">Account Number</label>
          <input type="text" className="border rounded p-2 w-full mb-4 rounded text-[#000000] font-poppins text-sm font-semibold" placeholder="2022345890"/>
          </div>
          </div>
          <label className="block font-medium font-poppins text-sm mb-2">Account Name</label>
          <input type="text" className="border rounded p-2 w-full mb-4 rounded text-[#000000] font-poppins text-sm font-semibold" placeholder="John Doe"/>
          <button className="bg-[#FF9900] text-white p-2 w-2/5 rounded flex justify-center items-center">I have made the transfer</button>
        </form>
        <h3 className="text-xl font-semibold font-poppins mb-4 mt-5">Credit/debit card</h3>
        <form>
        <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="block font-medium font-poppins text-sm mb-2">Card Number</label>
          <input type="text" className="border rounded p-2 w-full mb-4 rounded text-[#000000] font-poppins text-sm font-semibold" placeholder="0000 0000 0000 0000"/>
          </div>
          <div className="flex-1">
          <label className="block font-medium font-poppins text-sm mb-2">CVV</label>
          <input type="text" className="border rounded p-2 w-full mb-4 rounded text-[#000000] font-poppins text-sm font-semibold" placeholder="123"/>
          </div>
          </div>
          <label className="block font-medium font-poppins text-sm mb-2">Expiry Date</label>
          <input type="text" className="border rounded p-2 w-full mb-4 rounded text-[#000000] font-poppins text-sm font-semibold" placeholder="11/20"/>
          <button className="bg-[#FF9900] text-white p-2 w-2/5 rounded flex justify-center items-center">Make Payment</button>
        </form>
      </div>
      <div>
      </div> 
      
      </div>
      <div className="flex-1 my-56 ml-40">
      <h3 className="text-xl font-poppins font-bold mb-5">Payment Summary</h3>
      <p className="font-poppins">Total Amount to be paid<br/><span className="font-poppins font-bold">27,200</span></p>
    </div>
    </div>
    
  </div>
  )
}

export default Payment