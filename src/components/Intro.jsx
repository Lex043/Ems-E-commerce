import { gsap, Power3 } from "gsap";
import { useRef, useEffect } from "react";

const Intro = () => {
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
      <div className="h-auto py-9 px-5 bg-black text-white text-center">
        <p
          className="opacity-0"
          ref={(el) => {
            textItem = el;
          }}
        >
          E-Millenial Store is an hypothetical online store for gadgets we
          believe every 'Millenial' or 'Gen-Z' should have today. We've got
          mobile phones, laptops, smartwatches and other gadgets. Explore all
          our gadgets and chose the ones that suit you.
        </p>
      </div>
    </>
  );
};

export default Intro;
