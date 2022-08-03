import { useContext } from "react";
import EmsContext from "../context/EmsContext";
import { useCart } from "react-use-cart";

const Products = () => {
  const { goods } = useContext(EmsContext);

  const { addItem } = useCart();

  return (
    <>
      <div className="h-auto pt-5 pb-9 px-10">
        <div className="text-black font-bold text-2xl text-center">
          <h1>OUR GADGETS</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-5 md:gap-8 lg:grid grid-cols-6 justify-items-center lg:gap-8">
          {goods.map((good) => (
            <div key={good.id}>
              <div>
                <img src={good.img} alt="samsungTV" className="w-40" />
              </div>

              <div className="text-center rounded-md pb-2 shadow-xl font-bold ">
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
