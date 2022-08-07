import { useState } from "react";
import { useContext } from "react";
import EmsContext from "../context/EmsContext";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { totalAmt } = useContext(EmsContext);

  const navigate = useNavigate();

  const publicKey = "pk_test_845ecfe9aef12ac7903aed2db990aac02df222ef";
  const amount = totalAmt * 100; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => navigate("/success"),

    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <>
      <div className="bg-[#ffe9d6] min-h-screen">
        <form className="flex flex-col px-5 sm:px-10 h-80 justify-center mx-auto w-auto border-none outline-none">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="border-none outline-none h-8 rounded-md"
          />

          <label>Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="border-none outline-none h-8 rounded-md"
          />

          <label>Phone Number</label>
          <input
            type="numbers"
            onChange={(e) => setPhone(e.target.value)}
            className="border-none outline-none h-8 rounded-md"
          />
        </form>
        <div className="flex justify-center">
          <PaystackButton
            {...componentProps}
            className="bg-[#ff9a3d] px-5 py-1 rounded-md font-Lobster"
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
