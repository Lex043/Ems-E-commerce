import { createContext, useState, useEffect } from "react";
import data from "../data/model";

const EmsContext = createContext();

export const EmsProvider = ({ children }) => {
  const [goods, setGoods] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  const initialValue = 0;
  const totalAmt = cartItems.reduce(
    (accumulator, current) => accumulator + current.price * current.qty,
    initialValue
  );

  const addItem = (goods) => {
    const exist = cartItems.find((x) => x.id === goods.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === goods.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...goods, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const removeItem = (goods) => {
    const exist = cartItems.find((x) => x.id === goods.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== goods.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === goods.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  // delete items from cart
  const deleteItem = (goods) => {
    const newCartItems = cartItems.filter((x) => x.id !== goods.id);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);

  return (
    <EmsContext.Provider
      value={{
        goods,
        removeItem,
        totalAmt,
        addItem,
        cartItems,
        deleteItem,
      }}
    >
      {children}
    </EmsContext.Provider>
  );
};

export default EmsContext;
