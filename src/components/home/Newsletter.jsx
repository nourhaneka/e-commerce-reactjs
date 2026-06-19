import { Form, Button } from "react-bootstrap";

export default function Newsletter() {
  return (
    <div className="bg-light p-5 rounded">

      <h2>
        Stay Updated
      </h2>

      <Form className="d-flex gap-2">

        <Form.Control
          placeholder="Email address"
        />

        <Button>
          Subscribe
        </Button>

      </Form>

    </div>
  );
}