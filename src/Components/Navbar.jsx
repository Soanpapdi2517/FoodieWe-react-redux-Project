import { Link } from "react-router-dom";
import { menuHeader } from "../mockData/data";
import {  useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { StateSliceAction } from "../Store/Slices/StateSlice";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const dispatch = useDispatch();
  const valueofSearch = useRef()
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const filt = valueofSearch.current.value;
    console.log(filt)
  })
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
                    active === menus.name
                      ? "text-white bg-green-400 rounded-xl hover:text-white"
                      : ""
                  }`}
                  key={menus.id}
                  onClick={() => setActive(`${menus.name}`)}
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
            ref={valueofSearch}
          />
          <div className="hidden md:inline-block">
            <div
              onClick={() => dispatch(StateSliceAction.setactive())}
              className="bg-gray-300 flex items-center justify-center rounded-full p-2 font-bold hover:text-white hover:bg-green-400 active:text-white active:bg-green-500 "
            >
              <FaShoppingCart className="text-4xl p-2" />
            </div>
          </div>
        </div>
      </nav>
      <div className="block md:hidden">
        <div
          onClick={() => dispatch(StateSliceAction.setactive())}
          className="bg-gray-300 flex items-center justify-center rounded-full p-2 font-bold hover:text-white hover:bg-green-400 active:text-white active:bg-green-500 fixed z-40 bottom-10 right-5"
        >
          <FaShoppingCart className="text-4xl p-2" />
        </div>
      </div>

    <div className="absolute z-40 h-[60vh] w-[21vw] bg-white right-20 top-17 rounded-xl">
      <div>
        yes
      </div>
    </div>
    </>
  );
};

export default Navbar;
