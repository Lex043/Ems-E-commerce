import { useState } from "react";
import { useContext } from "react";
import EmsContext from "../context/EmsContext";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const key = import.meta.env.VITE_SOME_KEY;

const Checkout = () => {
  const { totalAmt } = useContext(EmsContext);

  const navigate = useNavigate();

  const publicKey = key;
  const amount = totalAmt * 46000;
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
    <div className="bg-primary min-h-screen">
      <form className="flex flex-col px-5 sm:px-10 h-80 justify-center mx-auto w-auto border-none outline-none">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          className="input-style"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter primary email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-style"
        />

        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Enter phone number"
          onChange={(e) => setPhone(e.target.value)}
          className="input-style"
        />
      </form>
      <div className="flex justify-center">
        <PaystackButton
          {...componentProps}
          className="bg-secondary px-5 py-1 rounded-md font-mono"
        />
      </div>
    </div>
  );
};

export default Checkout;
