import { Link } from "react-router-dom";
import { useContext } from "react";
import EmsContext from "../context/EmsContext";
import logo from "../assets/EMS.svg";

const Navbar = () => {
  const { cartItems } = useContext(EmsContext);

  return (
    <nav className="bg-primary px-5 flex shrink-0 justify-between py-3 sticky top-0 items-center z-50">
      <Link to="/">
        <img src={logo} alt="" className="w-5/12" />
      </Link>

      <Link to="/cart">
        <button className="flex items-center gap-1">
          <span className="uppercase text-xs font-semibold">cart</span>
          <span className="flex h-5 w-8 items-center justify-center rounded-full bg-secondary p-2 text-xs text-white">
            {cartItems.length}
          </span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
