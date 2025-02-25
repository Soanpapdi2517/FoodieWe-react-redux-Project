import FoodCard from "./FoodCard";
import FoodData from "../../data/FoodData";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Fooditems = () => {
  const TagsActive = useSelector((state) => state.active.tagsActive);
  const [filteredTags, setFilteredTags] = useState([]);
  useEffect(()=> {
    const filter = FoodData.filter((items) => items.category.includes(TagsActive))
    setFilteredTags(filter);
  }, [TagsActive])
  return (
    <div className="flex flex-wrap justify-evenly gap-4">
      {filteredTags.map((item, index) => {
        return <FoodCard key={index} item={item}></FoodCard>;
      })}
    </div>
  );
};

export default Fooditems;
