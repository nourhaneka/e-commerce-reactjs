import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import storeItems from "../data/storeItems.json";
import FormatCurrency from "./formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity, name, price, imgUrl }) => {
  const { removeItemFromCart } = useShoppingCart();
  
  // Find local item as fallback
  const localItem = storeItems.find((i) => i.id === id);
  
  const displayName = name || localItem?.name;
  const displayPrice = price !== undefined ? price : localItem?.price;
  const displayImgUrl = imgUrl || localItem?.imgUrl;

  if (!displayName) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={displayImgUrl}
        alt="cart-img"
        style={{ width: "75px", height: "75px", objectFit: "contain" }}
      />
      <div className="me-auto">
        <div>
          {displayName}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {FormatCurrency(displayPrice)}
          </div>
        </div>
      </div>  
      <div>
        {FormatCurrency(displayPrice * quantity)}
      </div>
      <Button variant='outline-danger' size="sm" onClick={() => removeItemFromCart(id)}>&times;</Button>
    </Stack>
  );
}

export default CartItem;