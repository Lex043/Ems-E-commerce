import ems from "../assets/EMS.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-black px-5 bottom-0 flex justify-between gap-4 items-center">
        <div>
          <img src={ems} alt="logo" className="w-24 h-24" />
        </div>
        <div className="text-white font-Lobster">
          <p>Designed and Crafted by Lex043</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
