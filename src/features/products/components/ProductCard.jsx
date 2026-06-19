import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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
    <Card.Title>
      {product.title}
    </Card.Title>
  </Card.Body>
</Link>
        </Card>
    );
}