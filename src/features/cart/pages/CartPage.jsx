import useCartStore from "../store/cartStore";

export default function CartPage() {
  const cart = useCartStore(
    (state) => state.cart
  );

  return (
    <div>

      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="border rounded p-3 mb-3"
        >
          <h5>{item.title}</h5>

          <p>${item.price}</p>

          <p>
            Quantity: {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
}