import { useContext } from "react";
import EmsContext from "../context/EmsContext";
import { useCart } from "react-use-cart";

const Products = () => {
  const { goods } = useContext(EmsContext);

  const { addItem } = useCart();

  return (
    <>
      <div className="pt-5 pb-9 h-full">
        <div className="text-black font-bold text-2xl text-center">
          <h1>OUR GADGETS</h1>
        </div>

        <div className="grid grid-cols-1 justify-center gap-6 pt-5 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {goods.map((good) => (
            <div key={good.id}>
              <div className="w-full px-3">
                <img src={good.img} alt="samsungTV" className="w-full h-full" />
              </div>

              <div className="text-center rounded-md py-3 shadow-xl font-bold ">
                <p>{good.name}</p>
                <p>
                  <span>&#8358;</span>
                  {good.price}
                </p>
                <button
                  className="text-xs border-2 border-black hover:bg-[#ff9a3d] px-6 py-2 rounded-md hover:border-0"
                  onClick={() => addItem(good)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
