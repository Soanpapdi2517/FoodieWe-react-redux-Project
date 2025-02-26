import { Link } from "react-router-dom";
import { menuHeader } from "../mockData/data";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { StateSliceAction } from "../Store/Slices/StateSlice";
import FoodData from "../data/FoodData";
import CartSearch from "./Cart/CartSearch";

const Navbar = () => {
  const activeMenu = useSelector((state) => state.active.navbarActive);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.cart);
  const [searching, setSeaching] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    if (searching !== "") {
      const filter = FoodData.filter((item) =>
        item.name.toUpperCase().includes(searching.toUpperCase())
      );
      setFilteredItems(filter);
    } else {
      setFilteredItems([]);
    }
  }, [searching]);
  return (
    <>
      <nav className="flex justify-between flex-col md:flex-row py-3 mx-5 md:mx-6 mb-10">
        <div>
          <h3 className="text-xl font-bold text-gray-600">
            {new Date().toDateString()}
          </h3>
          <Link to={"/"} className="text-2xl font-bold">
            <span>Foodie </span>us
          </Link>
        </div>
        {/*Menu section */}
        <div className="hidden md:block">
          <div>
            <ul className="flex items-center py-2 justify-center lg:gap-10 gap-5">
              {menuHeader.map((menus) => (
                <li
                  className={`text-lg font-semibold text-gray-500 hover:text-red-400 px-2 ${
                    activeMenu === menus.name
                      ? "text-white bg-green-400 rounded-xl hover:text-white"
                      : ""}
                  }`}
                  key={menus.id}
                  onClick={() =>
                    {dispatch(
                      StateSliceAction.setnavbarActive({ menu: menus.name })
                    );
                  }

                  }
                >
                  <a>{menus.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="search"
            className="p-3 border border-gray-400 rounded-lg outline-none text-sm w-full md:w-[220px] lg:w-[350px]"
            name="search"
            id="search"
            placeholder="Search your meals"
            onChange={(event) => setSeaching(event.target.value)}
          />
          <div className="hidden md:inline-block">
            <div
              onClick={() => dispatch(StateSliceAction.setactive())}
              className="bg-gray-300 flex items-center justify-center rounded-full p-2 font-bold hover:text-white hover:bg-green-400 active:text-white active:bg-green-500 "
            >
              <FaShoppingCart className={`text-4xl p-2 ${cartItems.length > 0 && "animate-bounce delay-500 transition-all"} `} />
            </div>
          </div>
        </div>
      </nav>
      <div className="block md:hidden">
        <div
          onClick={() => dispatch(StateSliceAction.setactive())}
          className="bg-gray-300 flex items-center justify-center rounded-full p-2 font-bold hover:text-white hover:bg-green-400 active:text-white active:bg-green-500 fixed z-40 bottom-10 right-5"
        >
          <FaShoppingCart className={`text-4xl p-2 ${cartItems.length > 0 && "animate-bounce delay-300 transition-all"} `} />
        </div>
      </div>

      <div
        className={` ${
          filteredItems.length === 0 ? "hidden" : ""
        } duration-300 absolute z-40 text-sm w-full md:w-[250px] lg:w-[350px] h-[90vh] md:h-[60vh] bg-white md:right-15  lg:right-20 top-30 md:top-20 rounded-xl overflow-y-scroll`}
      >
        <div>
          {filteredItems.map((items) => {
            return <CartSearch items={items} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
