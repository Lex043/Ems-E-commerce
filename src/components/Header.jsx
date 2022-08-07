import headerImg from "../assets/heroImage.png";

const Header = () => {
  return (
    <div className="px-5 bg-[#ffe9d6]">
      <div className="flex justify-between">
        <h1 className="w-48 text-[#ff7a3d] font-bold text-2xl sm:text-3xl flex items-center">
          THE <br /> E-MILLENIAL STORE
        </h1>

        <img src={headerImg} alt="" className="w-64 h-auto overflow-hidden" />
      </div>

      <p className="text-center pb-5">
        <a
          href="#products"
          className="bg-[#ff9a3d] rounded px-9 py-2 mx-auto text-xs scroll-smooth overflow-x-scroll text-white"
        >
          SHOP NOW
        </a>
      </p>
    </div>
  );
};

export default Header;
