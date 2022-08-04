import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EmsProvider } from "./context/EmsContext";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/pages/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <EmsProvider>
        <div className="min-h-screen flex flex-col">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </div>
      </EmsProvider>
    </CartProvider>
  );
}

export default App;
