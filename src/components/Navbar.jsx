import { Link } from "react-router-dom";
import { useContext } from "react";
import EmsContext from "../context/EmsContext";
import logo from "../assets/EMS.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
  const { totalUniqueItems } = useContext(EmsContext);

  return (
    <nav className="bg-[#ffe9d6] px-5 flex shrink-0 justify-between py-3 sticky top-0 items-center">
      <Link to="/">
        <img src={logo} alt="" className="w-5/12" />
      </Link>

      <button className="flex shrink-0 items-center bg-[#ff9a3d] rounded-[19px] px-3 py-1 gap-1">
        <Link to="/cart">
          <img src={cart} alt="" className="w-6" />
        </Link>
        <p className="text-white text-xl font-medium">{totalUniqueItems}</p>
      </button>
    </nav>
  );
};

export default Navbar;
