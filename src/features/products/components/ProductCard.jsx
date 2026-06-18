import { Card, Button } from "react-bootstrap";

export default function ProductCard({ product }) {
    return (
        <Card className="h-100 shadow-sm">
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
                <Card.Title
                    style={{
                        minHeight: "48px",
                        fontSize: "1rem",
                    }}
                >
                    {product.title}
                </Card.Title>

                <Card.Text>
                    ${product.price}
                </Card.Text>

                <Button variant="dark">
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>
    );
}