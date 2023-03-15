import headerImg from "../assets/heroImage.png";

const Header = () => {
  return (
    <section className="px-5 bg-primary">
      <div className="flex justify-between">
        <h1 className="w-44 sm:w-60 text-secondary font-bold text-2xl sm:text-3xl flex items-center">
          THE <br /> E-MILLENIAL STORE
        </h1>

        <img src={headerImg} alt="" className="w-64 h-auto overflow-hidden" />
      </div>

      <p className="text-center pb-5">
        <a
          href="#products"
          className="bg-secondary rounded px-9 py-2 mx-auto text-xs overflow-x-scroll text-white "
        >
          SHOP NOW
        </a>
      </p>
    </section>
  );
};

export default Header;
