import { Link } from "react-router-dom";
import { menuHeader } from "../mockData/data";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(null);
  return (
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
          <ul className="flex items-center py-2 justify-center gap-10">
            {menuHeader.map((menus) => (
              <li
                className={`text-lg font-semibold text-gray-500 hover:text-red-400 px-2 ${
                  active === menus.id ? "text-white bg-green-400 rounded-xl hover:text-white" : ""}`}
                key={menus.id}
                onClick={() => setActive(menus.id)}
              >
                <a>{menus.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <input
          type="search"
          className="p-3 border border-gray-400 rounded-lg outline-none text-sm w-full md:w-[250px] lg:w-[400px]"
          name="search"
          id="search"
          placeholder="Search your meals"
        />
      </div>
    </nav>
  );
};

export default Navbar;
