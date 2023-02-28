import ems from "../assets/EMS.svg";

const Footer = () => {
  return (
    <footer className="bg-black py-1 px-5 mt-auto flex justify-between gap-4 items-center">
      <img src={ems} alt="logo" className="w-14 h-14 bg-current" />
      <p className="text-white font-mono">Designed and Crafted by Lex043</p>
    </footer>
  );
};

export default Footer;
