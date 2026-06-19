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
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id, productDetails) => {
    setCartItems((currItems) => {
      const existing = currItems.find((item) => item.id === id);

      if (!existing) {
        return [
          ...currItems,
          {
            id,
            quantity: 1,
            name: productDetails?.title || productDetails?.name,
            price: productDetails?.price,
            imgUrl: productDetails?.image || productDetails?.imgUrl,
          },
        ];
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