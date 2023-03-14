import { useContext } from "react";
import { Link } from "react-router-dom";
import EmsContext from "../../context/EmsContext";
import EmptyCart from "./EmptyCart";
import CartItems from "../CartItems";

const Cart = () => {
  const { cartItems, totalAmt } = useContext(EmsContext);

  return (
    <section className="min-h-screen  bg-primary">
      <div className="pt-5">
        {cartItems.length === 0 ? <EmptyCart /> : <CartItems />}
      </div>

      <div className="px-10 font-bold text-2xl bg-primary mt-auto">
        <div className="flex justify-between">
          <p>Subtotal</p>

          <p>${totalAmt}</p>
        </div>

        <Link to="/checkout">
          <div
            // logic to display checkout button
            style={{ display: cartItems.length === 0 ? "none" : "block" }}
            className="text-center py-1 text-white bg-secondary rounded-md"
          >
            <button>Checkout</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
