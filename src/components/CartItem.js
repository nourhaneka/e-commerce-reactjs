import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import storeItems from "../data/storeItems.json";
import FormatCurrency from "./formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({id , quantity}) => {
    const { removeItemFromCart }= useShoppingCart();
    const item = storeItems.find((i) => i.id === id);
  if(item == null) return null;
    return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
<img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "155px", height: "155px", objectFit: "cover" }}
      />
<div className="me-auto">
    <div>
        {item.name}{" "}
        {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
    </div>
        
    </div>  
    <div>
        {FormatCurrency(item.price * quantity)}
        </div>
    <Button variant='outline-danger' size="sm" onClick={()=> removeItemFromCart(id) }>&times;</Button>
    </Stack>
  )
}

export default CartItem;