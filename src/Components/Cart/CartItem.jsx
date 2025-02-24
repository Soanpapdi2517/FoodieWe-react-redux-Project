import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const CartItem = () => {
  const cartItems = useSelector((state) => state.Cart.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4">
      <img
        src={cartItems.img}
        className="w-[50px] aspect-square"
        alt=""
      />
      <div className="leading-5">
        <div className="flex justify-between items-center">
        <h1 className="font-bold text-gray-700">{cartItems.name}</h1>
        <button onClick={()=> dispatch({id: cartItems.id})}><MdDelete className="text-lg cursor-pointer"/></button>
        </div>
        <div className="flex justify-between gap-4">
            <span className="text-green-500">₹{cartItems.price}</span>
          <div className="flex gap-2 ml-25 md:ml-17">
            <button>
              <AiOutlineMinus className="border-2 text-gray-600 font-bold border-gray-600 rounded-md text-xl hover:text-white hover:bg-green-500 hover:border-none duration-300 transition-all ease-linear cursor-pointer" />
            </button>
            <p>{cartItems.quantity}</p>
            <button>
              <AiOutlinePlus className="border-2 text-gray-600 font-bold border-gray-600 rounded-md text-xl hover:text-white hover:bg-green-500 hover:border-none duration-300 transition-all ease-linear cursor-pointer" />
            </button>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default CartItem;
