import { FoodTags } from "../mockData/data";
import { useDispatch, useSelector } from "react-redux";
import { StateSliceAction } from "../Store/Slices/StateSlice";

const Category = () => {
 const activeIndex = useSelector((state) => state.active.tagsActive);
 const dispatch = useDispatch();
  return (
    <section className="md:mx-6 mx-5">

    <div>
      <h3 className="text-xl font-bold mt-8">Find the Best Food</h3>
    </div>
    <div>
        <ul className="flex items-center justify-start gap-4 my-5 overflow-x-scroll md:overflow-x-hidden scroll-smooth">
            {
                FoodTags.map((tag, index) => (
                    <li key={index} onClick={() => dispatch(StateSliceAction.setTagsActive({index: tag.id}))} className={`${activeIndex ===tag.id ? "bg-green-500 text-white": ""} text-lg px-3 py-1 cursor-pointer font-medium text-black bg-gray-200 hover:text-white hover:bg-green-500 rounded-lg`} >{tag.name}</li>
                ))
            }
        </ul>
    </div>
    </section>
  );
};

export default Category;
