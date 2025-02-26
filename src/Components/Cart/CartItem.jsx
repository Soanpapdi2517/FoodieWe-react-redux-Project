import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeFromCart,
} from "../../Store/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-4 gap-2 shadow-md rounded-lg p-2 mb-4 items-center">
      <img src={items.img} className="w-[60px] h-[40px] aspect-square" alt="" />
      <div className="leading-5 col-span-3 grid grid-cols-3">
        <div className="flex flex-col mr-8 col-span-2">
          <h1 className="font-bold text-gray-700">{items.name}</h1>
          <span className="text-green-500">₹{items.price}</span>
        </div>
        <div className="flex flex-col ml-1">
        <button className="ml-5">
            <MdDelete
              onClick={() =>{

                dispatch(removeFromCart({ id: items.id }));
                toast(`${items.name} Removed!`, {icon: "⛔"});

              }
              }
              className=" active:scale-140 active:text-red-600 duration-500 active:animate-ping text-lg cursor-pointer"
            />
          </button>
          
          <div className="flex gap-2">
            <button>
              <AiOutlineMinus
                onClick={() => {
                  dispatch(decrementItem({ id: items.id }));
                }}
                className="border-2 text-gray-600 font-bold border-gray-600 rounded-md text-xl active:bg-green-600 active:scale-110 active:text-white hover:text-white hover:bg-green-500 hover:border-none duration-300 transition-all ease-linear cursor-pointer"
              />
            </button>
            <p>{items.quantity}</p>
            <button>
              <AiOutlinePlus
                onClick={() => dispatch(incrementItem({ id: items.id }))}
                className="active:bg-green-600 active:scale-110 active:text-white border-2 text-gray-600 font-bold border-gray-600 rounded-md text-xl hover:text-white hover:bg-green-500 hover:border-none duration-300 transition-all ease-linear cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
