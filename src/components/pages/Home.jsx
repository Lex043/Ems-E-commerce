import Header from "../Header";
import Intro from "../Intro";
import Products from "../Products";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Intro />
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default Home;
