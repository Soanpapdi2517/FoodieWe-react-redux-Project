import Cart from "../Components/Cart/Cart";
import Category from "../Components/Category";
import Fooditems from "../Components/Food/Fooditems";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

const home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Fooditems />
      <Cart />
      <Footer/>
    </>
  );
};

export default home;
