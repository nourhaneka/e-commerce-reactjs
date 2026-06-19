import { Container } from "react-bootstrap";

export default function Benefits() {
  return (
    <Container className="my-5">

      <h2 className="text-center mb-5">
        Why Choose Us
      </h2>

      <div className="row text-center">

        <div className="col-md-4">
          <h4>🚚</h4>
          <h5>Fast Shipping</h5>
        </div>

        <div className="col-md-4">
          <h4>🔒</h4>
          <h5>Secure Payments</h5>
        </div>

        <div className="col-md-4">
          <h4>⭐</h4>
          <h5>Premium Quality</h5>
        </div>

      </div>

    </Container>
  );
}