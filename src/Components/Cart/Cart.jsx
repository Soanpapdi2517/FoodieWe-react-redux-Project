
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";

const Cart = () => {
  return <>
  <div className="fixed right-0 top-0 bg-white w-full md:w-[20vw] h-full p-5">
    <div className="flex justify-between items-center my-3">
        <span className="text-xl font-bold text-gray-700">My Order</span>
        <IoMdClose className="text-bold text-xl border-2 p-1 rounded-md text-gray-600 border-gray-600 hover:text-red-300 hover:border-red-300"/>
    </div>
    <div>
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    </div>
    <div className="absolute bottom-0">
        <h1 className="text-gray-700 font-semibold">Items: </h1>
        <h1 className="text-gray-700 font-semibold">Amount: </h1>
        <hr className="w-[90vw] md:w-[18vw] my-2 text-gray-400"/>
        <button className="bg-green-500 text-white py-2 px-3 w-[90vw] md:w-[18vw] font-bold rounded-lg mb-5">Checkout</button>
    </div>
  </div>
  </>;
};

export default Cart;
