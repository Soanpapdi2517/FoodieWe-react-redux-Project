import FoodCard from "./FoodCard";
import FoodData from "../../data/FoodData";
const Fooditems = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-4">
      {FoodData.map((item, index) => {
        return <FoodCard key={index} item={item}></FoodCard>;
      })}
    </div>
  );
};

export default Fooditems;
