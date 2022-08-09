import React from "react";
import check from "../../assets/check.svg";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="h-screen bg-primary flex justify-center items-center ">
      <div className="bg-white px-5 mx-auto flex flex-col justify-center items-center w-4/5 sm:w-3/5 h-3/5">
        <img src={check} alt="" className="w-60 h-60" />
        <p className="text-3xl">Success</p>
        <p className="text-center pt-4">
          Thanks for doing business with us! Come back soon!!
        </p>
        <div className="flex mt-5 justify-items-end">
          <Link to="/">
            <button className="bg-secondary px-5 py-1 rounded-md font-medium">
              Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;
