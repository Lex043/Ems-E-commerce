import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EmsProvider } from "./context/EmsContext";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/pages/Cart";
import Success from "./components/pages/Success";
import Checkout from "./components/Checkout";

function App() {
  return (
    <EmsProvider>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Router>
      </div>
    </EmsProvider>
  );
}

export default App;
