import { Link } from "react-router-dom";
import { useContext } from "react";
import EmsContext from "../context/EmsContext";
import logo from "../assets/EMS.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
  const { totalUniqueItems } = useContext(EmsContext);

  return (
    <>
      <ul className="bg-[#ffe9d6] px-5 flex shrink-0 justify-between gap-2 h-14 items-center">
        <Link to="/">
          <li>
            <img src={logo} alt="" className="w-16 h-16 " />
          </li>
        </Link>

        <div className="flex shrink-0 items-center bg-[#ff9a3d] rounded-[19px] px-3 py-1 gap-1">
          <Link to="/cart">
            <li>
              <img src={cart} alt="" className="w-6 h-6" />
            </li>
          </Link>
          <li className="text-white text-xl font-medium">
            <p>{totalUniqueItems}</p>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
