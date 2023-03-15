import { Link } from "react-router-dom";
import { useContext } from "react";
import EmsContext from "../context/EmsContext";
import logo from "../assets/EMS.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
  const { cartItems } = useContext(EmsContext);

  return (
    <nav className="bg-primary px-5 flex shrink-0 justify-between py-3 sticky top-0 items-center z-50">
      <Link to="/">
        <img src={logo} alt="" className="w-5/12" />
      </Link>

      <Link to="/cart">
        <button className="flex shrink-0 items-center bg-secondary rounded-[19px] px-3 py-1 gap-1">
          <img src={cart} alt="" className="w-6" />
          <p className="text-white text-xl font-medium">{cartItems.length}</p>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
