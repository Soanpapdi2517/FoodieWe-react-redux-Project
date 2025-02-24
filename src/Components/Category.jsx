import React from "react";
import { FoodTags } from "../mockData/data";

const Category = () => {
  return (
    <section className="md:mx-6 mx-5">

    <div>
      <h3 className="text-xl font-bold mt-8">Find the Best Food</h3>
    </div>
    <div>
        <ul className="flex items-center justify-start gap-4 my-5 overflow-x-scroll md:overflow-x-hidden scroll-smooth">
            {
                FoodTags.map((tag) => (
                    <li className="text-lg px-3 py-1 cursor-pointer font-medium text-black bg-gray-200 hover:text-white hover:bg-green-500 rounded-lg">{tag.name}</li>
                ))
            }
        </ul>
    </div>
    </section>
  );
};

export default Category;
