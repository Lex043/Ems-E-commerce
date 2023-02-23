import { useContext } from "react";
import EmsContext from "../context/EmsContext";

const CartItems = () => {
  const { cartItems, removeItem, deleteItem, addItem } = useContext(EmsContext);
  return (
    <section className="grid grid-cols-1 gap-2 animate-fade-in-up sm:grid-cols-2 lg:grid-cols-3">
      {cartItems.map((item) => (
        <div className="mb-5 shadow-md lg:shadow-lg" key={item.id}>
          <div className="flex justify-between h-32 pt-4 px-5">
            <img src={item.img} alt="" className="w-28 h-28" />

            <p className="text-xl leading-relaxed">
              {item.name}. <br /> <span>&#8358;</span>
              {Number(item.price.replace(/\,/g, "")) * item.qty}
            </p>
          </div>

          <div className="flex justify-between items-center h-16 px-5">
            <div>
              <button
                className="border px-2 py-2 hover:text-white hover:bg-secondary"
                onClick={() => {
                  deleteItem(item);
                }}
              >
                Remove Item
              </button>
            </div>

            <div className="flex items-center ">
              <button
                className="bg-secondary px-2 py-2 w-9 text-white"
                onClick={() => {
                  removeItem(item);
                }}
              >
                -
              </button>
              <p className="w-9 text-center">{item.qty}</p>
              <button
                className="bg-secondary px-2 py-2 w-9 text-white "
                onClick={() => {
                  addItem(item);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CartItems;
