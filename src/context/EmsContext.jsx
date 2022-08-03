import { createContext, useState, useRef } from "react";
import data from "../model";
import { useCart } from "react-use-cart";

const EmsContext = createContext();

export const EmsProvider = ({ children }) => {
  const [goods, setGoods] = useState(data);

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const initialValue = 0;
  const totalAmt = items.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );

  return (
    <EmsContext.Provider
      value={{
        goods,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        totalAmt,
      }}
    >
      {children}
    </EmsContext.Provider>
  );
};

export default EmsContext;
