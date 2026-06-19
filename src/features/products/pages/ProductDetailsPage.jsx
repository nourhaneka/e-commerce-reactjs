import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Spinner, Button } from "react-bootstrap";
import { getProduct } from "../api/productsApi";
import useCartStore from "../../cart/store/cartStore";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
const addToCart = useCartStore(
  (state) => state.addToCart
);
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

      <Col md={6}>
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{
            maxHeight: "500px",
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
<div className="d-flex align-items-center gap-3 mb-3">

  <button className="btn btn-outline-dark">
    -
  </button>

  <span>1</span>

  <button className="btn btn-outline-dark">
    +
  </button>

</div>
        <Button
  variant="dark"
  onClick={() => addToCart(product)}
>
  Add To Cart
</Button>
      </Col>

    </Row>
  );
}