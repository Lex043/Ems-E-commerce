import emptyCart from "../../assets/PngItem_4803503.png";

const EmptyCart = () => {
  return (
    <div className="bg-[#ffe9d6]">
      <div className="flex flex-col gap-4 justify-center items-center h-80">
        <img src={emptyCart} alt="emptyCart" className="w-28 h-28 pt-2" />
        <p className="font-bold">Your Cart is Empty</p>
      </div>
    </div>
  );
};

export default EmptyCart;
