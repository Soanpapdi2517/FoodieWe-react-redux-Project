import FoodCard from "./FoodCard";
import FoodData from "../../data/FoodData";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Fooditems = () => {
  const TagsActive = useSelector((state) => state.active.tagsActive);
  const [filteredTags, setFilteredTags] = useState([]);
  useEffect(() => {
    const filter = FoodData.filter((items) =>
      items.category.includes(TagsActive)
    );
    setFilteredTags(filter);
  }, [TagsActive]);

  const handleToast = (name) => {
    toast.success(`${name} Added`);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap justify-evenly gap-4">
        {filteredTags.map((item, index) => {
          return <FoodCard key={index} item={item} handleToast={handleToast}></FoodCard>;
        })}
      </div>
    </>
  );
};

export default Fooditems;
