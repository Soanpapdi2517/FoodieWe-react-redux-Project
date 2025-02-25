import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { StateSliceAction } from "../../Store/Slices/StateSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const activeCheck = useSelector((state) => state.active.active);
  const cartItems = useSelector((state) => state.Cart.cart);

  return (
    <>
      <div
        className={` fixed right-0 top-0 bg-white w-full md:w-[20vw] h-full p-5 ${
          activeCheck ? "translate-x-full" : "translate-x-0"
        } duration-300 transition-all ease-in-out z-50`}
      >
        <div className="flex justify-between items-center my-3 z-50">
          <span className="text-xl font-bold text-gray-700">My Order</span>
          <IoMdClose
            onClick={() => {
              dispatch(StateSliceAction.setactive());
            }}
            className="text-bold text-xl border-2 p-1 rounded-md text-gray-600 border-gray-600 hover:text-red-300 hover:border-red-300"
          />
        </div>
        <div>
          {cartItems.length === 0 ? (
            <div className="text-gray-500 text-2xl font-bold text-center mt-10">Your Cart is Empty</div>
          ) : (
            <div
              className={`md:h-[70vh] h-[65vh] ${
                cartItems.length >= 7 && "overflow-y-scroll"
              }  overflow-x-hidden`}
            >
              {cartItems.map((item) => {
                return <CartItem key={item.id} items={item} />;
              })}
            </div>
          )}
        </div>
        <div className="absolute bottom-0">
          <h1 className="text-gray-700 font-semibold">Items: </h1>
          <h1 className="text-gray-700 font-semibold">Amount: </h1>
          <hr className="w-[90vw] md:w-[18vw] my-2 text-gray-400" />
          <button className="bg-green-500 text-white py-2 px-3 w-[90vw] md:w-[18vw] font-bold rounded-lg mb-5">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
