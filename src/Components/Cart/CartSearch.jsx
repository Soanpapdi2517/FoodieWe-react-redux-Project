import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/Slices/CartSlice";
import toast from "react-hot-toast";

const CartSearch = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4 items-center ml-4">
      <img src={items.img} className="w-[60px] h-[40px] aspect-square" alt="" />
      <div className="leading-5">
        <div className="flex justify-between gap-18 items-center">
          <h1 className="font-bold text-gray-700">{items.name}</h1>
        </div>
        <div className="flex gap-20 md:gap-1 lg:gap-28">
          <span className="text-green-500">₹{items.price}</span>
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id: items.id,
                  name: items.name,
                  price: items.price,
                  img: items.img,
                  quantity: 1,
                })
              );

              toast.success(`${items.name} Added`);
            }}
            className="active:bg-green-600 active:scale-110 active:text-white p-1 px-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSearch;
