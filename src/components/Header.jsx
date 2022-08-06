import { gsap, Power3 } from "gsap";
import { useRef, useEffect } from "react";
import headerImg from "../assets/heroImage.png";

const Header = () => {
  let textItem = useRef(null);

  useEffect(() => {
    gsap.to(textItem, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <div className="px-5 bg-[#ffe9d6] h-auto">
        <div
          ref={(el) => {
            textItem = el;
          }}
          className="flex opacity-0 justify-between"
        >
          <div className="text-[#ff7a3d] font-bold text-2xl sm:text-3xl flex items-center">
            <h1 className="w-48">
              THE <br /> E-MILLENIAL STORE
            </h1>
          </div>
          <div>
            <img src={headerImg} alt="" className="w-64 h-auto" />
          </div>
        </div>
        <div className="text-center text-xs text-white pb-7">
          <button className="bg-[#ff9a3d] rounded px-9 py-2">SHOP NOW</button>
        </div>
      </div>
    </>
  );
};

export default Header;
