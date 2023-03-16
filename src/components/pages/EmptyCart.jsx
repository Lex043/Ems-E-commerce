import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="bg-primary">
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <p className="text-2xl font-mono">Your Cart is Empty 👀</p>
        <Link to="/">
          <button className="bg-secondary px-4 py-2 rounded-md text-white font-mono">
            Continue Shopping
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;
