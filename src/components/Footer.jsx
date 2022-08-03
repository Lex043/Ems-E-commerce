import ems from "../assets/EMS.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-black px-10 py-10 h-auto flex justify-between gap-4 items-center">
        <div>
          <img src={ems} alt="logo" className="w-24" />
        </div>
        <div className="text-white font-Lobster">
          <p>Designed and Crafted by Lex043</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
