import { useShoppingCart } from "../../../context/ShoppingCartContext";
import storeItems from "../../../data/storeItems.json";

export default function CartPage() {
  const { cartItems } = useShoppingCart();

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => {
          const localItem = storeItems.find((i) => i.id === item.id);
          const name = item.name || localItem?.name;
          const price = item.price !== undefined ? item.price : localItem?.price;
          return (
            <div
              key={item.id}
              className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{name}</h5>
                <p className="mb-0 text-muted">${price} x {item.quantity}</p>
              </div>
              <div className="fw-bold fs-5">
                ${(price * item.quantity).toFixed(2)}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}