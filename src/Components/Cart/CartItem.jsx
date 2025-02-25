import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrementItem, incrementItem, removeFromCart } from "../../Store/Slices/CartSlice";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4 items-center">
      <img src={items.img} className="w-[60px] h-[40px] aspect-square" alt="" />
      <div className="leading-5">
        <div className="flex justify-between gap-18 items-center">
          <h1 className="font-bold text-gray-700">{items.name}</h1>
          <button className="">
            <MdDelete
              onClick={() => dispatch(removeFromCart({ id: items.id }))}
              className="text-lg cursor-pointer"
            />
          </button>
        </div>
        <div className="flex justify-between gap-4 ">
          <span className="text-green-500">₹{items.price}</span>
          <div className="flex gap-2">
            <button>
              <AiOutlineMinus onClick={() => {dispatch(decrementItem({id: items.id}))}} className="border-2 text-gray-600 font-bold border-gray-600 rounded-md text-xl hover:text-white hover:bg-green-500 hover:border-none duration-300 transition-all ease-linear cursor-pointer" />
            </button>
            <p>{items.quantity}</p>
            <button>
              <AiOutlinePlus onClick={() => dispatch(incrementItem({id: items.id}))} className="border-2 text-gray-600 font-bold border-gray-600 rounded-md text-xl hover:text-white hover:bg-green-500 hover:border-none duration-300 transition-all ease-linear cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
