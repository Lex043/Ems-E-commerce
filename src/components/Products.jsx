import { useContext } from "react";
import EmsContext from "../context/EmsContext";

const Products = () => {
  const { goods, addItem } = useContext(EmsContext);

  return (
    <section id="products" className="my-6">
      <h1 className="text-black font-bold text-2xl text-center my-4">
        OUR GADGETS
      </h1>

      <div className="grid min-h-screen grid-cols-1 justify-center gap-6 my-6 px-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {goods.map((good) => (
          <div
            key={good.id}
            className="rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
          >
            <div className="w-full">
              <img
                src={good.img}
                alt="samsungTV"
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>

            <div className="text-center py-3 font-bold ">
              <p>{good.name}</p>
              <p>${good.price}</p>
              <button
                className=" text-xs border-2 border-black hover:bg-secondary px-6 py-2 rounded-md hover:border-secondary hover:text-white "
                onClick={() => {
                  addItem(good);
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
