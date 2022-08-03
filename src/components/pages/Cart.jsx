import { useContext } from "react";
import { Link } from "react-router-dom";
import EmsContext from "../../context/EmsContext";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, totalAmt } =
    useContext(EmsContext);

  return (
    <>
      <div className="h-screen bg-[#ffe9d6]">
        {isEmpty ? (
          <EmptyCart />
        ) : (
          items.map((item) => (
            <div className="mb-5 shadow-xl lg:shadow-2xl" key={item.id}>
              <div className="flex justify-between h-32 items-center px-5">
                <div>
                  <img src={item.img} alt="" className="w-28 h-28" />
                </div>

                <div className=" text-xl leading-relaxed">
                  <p>
                    {item.name}. <br /> <span>&#8358;</span>
                    {item.quantity * item.price}
                  </p>
                </div>
              </div>

              <div className="flex justify-between h-16 px-5">
                <div>
                  <button
                    className="border px-2 py-2 hover:text-white hover:bg-[#ff9a3d]"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove Item
                  </button>
                </div>

                <div className="flex gap-4 items-center ">
                  <button
                    className="bg-[#ff9a3d] px-2 py-2 w-9 text-white"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="bg-[#ff9a3d] px-2 py-2 w-9 text-white "
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                {/* <div>
                  <button
                    className="border px-2 py-2 hover:text-white hover:bg-[#ff9a3d]"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove Item
                  </button>
                </div> */}

                {/* <div className="flex gap-4 items-center ">
                  <button
                    className="bg-[#ff9a3d] px-2 py-2 w-9 text-white"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="bg-[#ff9a3d] px-2 py-2 w-9 text-white "
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div> */}
              </div>
            </div>
          ))
        )}
        <div className="px-10 font-bold text-2xl bg-[#ffe9d6] pt-4 pb-20">
          <div className="flex justify-between">
            <div>
              <p>Subtotal</p>
            </div>
            <div>
              <p>
                <span>&#8358;</span>
                {totalAmt}
              </p>
            </div>
          </div>

          <Link to="/checkout">
            <div className="text-center py-1 text-white bg-[#ff9a3d] rounded-md">
              <button>Checkout</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
