import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Spinner, Button } from "react-bootstrap";
import { getProduct } from "../api/productsApi";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const productId = parseInt(id);

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart();
  const quantity = getItemsQuantity(productId);
  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner />
      </div>
    );
  }

  return (
    <Row className="mt-5">

      <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{
            maxHeight: "450px",
            objectFit: "contain",
          }}
        />
      </Col>

      <Col md={6}>
        <h2>{product.title}</h2>

        <p className="text-muted">
          {product.category}
        </p>

<div className="mb-3">

  <div>
    ⭐ {product.rating.rate}
  </div>

  <div>
    {product.rating.count} Reviews
  </div>

</div>

<h3>${product.price}</h3>
        <p>
          {product.description}
        </p>
        {quantity === 0 ? (
          <Button
            variant="dark"
            className="w-100"
            onClick={() => increaseCartQuantity(productId, product)}
          >
            Add To Cart
          </Button>
        ) : (
          <div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <Button
                variant="outline-dark"
                onClick={() => decreaseCartQuantity(productId)}
              >
                -
              </Button>
              <span className="fs-5 fw-bold">{quantity}</span>
              <Button
                variant="outline-dark"
                onClick={() => increaseCartQuantity(productId, product)}
              >
                +
              </Button>
            </div>
            <Button
              variant="danger"
              className="w-100"
              onClick={() => removeItemFromCart(productId)}
            >
              Remove From Cart
            </Button>
          </div>
        )}
      </Col>

    </Row>
  );
}