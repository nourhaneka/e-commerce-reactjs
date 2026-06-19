import { Card } from "react-bootstrap";

const categories = [
  "Electronics",
  "Jewelry",
  "Men",
  "Women",
];

export default function Categories() {
  return (
    <div className="my-5">

      <h2 className="mb-4">
        Shop By Category
      </h2>

      <div className="row">

        {categories.map((category) => (
          <div
            className="col-md-3"
            key={category}
          >
            <Card className="shadow-sm">
              <Card.Body>
                <h5>{category}</h5>
              </Card.Body>
            </Card>
          </div>
        ))}

      </div>

    </div>
  );
}