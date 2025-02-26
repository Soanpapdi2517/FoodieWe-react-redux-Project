import React from "react";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/Slices/CartSlice";

const FoodCard = ({ item, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-1">
      <img
        src={item.img}
        className="w-[250px] cursor-grab hover:scale-110 transition-all duration-200 ease-in-out aspect-square"
      />
      <div className="text-sm flex justify-between py-1">
        <h1 className="">{item.name}</h1>
        <h2 className="text-green-500">₹{item.price}</h2>
      </div>
      <p className="py-2 font-normal text-sm">{item.desc.slice(0, 50)}...</p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          <span className="text-yellow-400 border-[1px] ">
            <GoStarFill />
          </span>{" "}
          {item.rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                img: item.img,
                quantity: 1,
              })
            );
            handleToast(item.name);
          }}
          className="active:bg-green-600 active:scale-110 active:text-white p-1 px-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
