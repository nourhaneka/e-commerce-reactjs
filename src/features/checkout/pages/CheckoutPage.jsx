import { Form, Button } from "react-bootstrap";

export default function CheckoutPage() {
  return (
    <>
      <h1>Checkout</h1>

      <Form>

        <Form.Group className="mb-3">
          <Form.Label>
            Full Name
          </Form.Label>

          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Email
          </Form.Label>

          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Address
          </Form.Label>

          <Form.Control />
        </Form.Group>

        <Button>
          Place Order
        </Button>

      </Form>
    </>
  );
}