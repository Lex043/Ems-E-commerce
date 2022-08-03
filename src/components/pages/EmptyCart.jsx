import emptyCart from "../../assets/PngItem_4803503.png";

const EmptyCart = () => {
  return (
    <>
      <div className="bg-[#ffe9d6] h-full">
        <div className="grid justify-items-center h-80  pt-28">
          <img src={emptyCart} alt="emptyCart" className="w-28 pt-2" />
          <p className="font-bold">Your Cart is Empty</p>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
