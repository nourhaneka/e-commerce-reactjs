import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="py-5">
      <Container>

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1 className="display-3 fw-bold">
              Shop Smarter.
            </h1>

            <p className="lead">
              Discover premium products with
              modern shopping experience.
            </p>

            <Link to="/store">
              <Button size="lg">
                Shop Now
              </Button>
            </Link>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt=""
              className="img-fluid rounded"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}