import { createContext, useContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext({});

const getInitialCart = () => {
  try {
    const data = localStorage.getItem("shopping-cart");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(getInitialCart());

  // sync localStorage
  useEffect(() => {
  console.log("cartItems changed:", cartItems);
}, [cartItems]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

const increaseCartQuantity = (id) => {
  console.log("ADD CLICKED", id);

  setCartItems((currItems) => {
    const existing = currItems.find((item) => item.id === id);

    if (!existing) {
      return [...currItems, { id, quantity: 1 }];
    }

    return currItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  });
};

  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      const existing = currItems.find((item) => item.id === id);

      if (!existing) return currItems;

      if (existing.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      }

      return currItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((currItems) =>
      currItems.filter((item) => item.id !== id)
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        openCart,
        closeCart,
        cartQuantity,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => useContext(ShoppingCartContext);