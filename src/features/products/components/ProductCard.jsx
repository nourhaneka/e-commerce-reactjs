import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

export default function ProductCard({ product }) {
  const { increaseCartQuantity, getItemsQuantity } = useShoppingCart();

  const quantity = getItemsQuantity(product.id);

  return (
    <Card className="h-100 shadow-sm">

      <Link
        to={`/store/${product.id}`}
        className="text-decoration-none text-dark"
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            height: "250px",
            objectFit: "contain",
            padding: "20px",
          }}
        />

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
        </Card.Body>
      </Link>

      <Card.Body className="pt-0">
        {quantity === 0 ? (
          <Button
            className="w-100"
            onClick={() => increaseCartQuantity(product.id, product)}
          >
            Add to Cart
          </Button>
        ) : (
          <Button
            className="w-100"
            variant="secondary"
            disabled
          >
            In Cart ({quantity})
          </Button>
        )}
      </Card.Body>

    </Card>
  );
}