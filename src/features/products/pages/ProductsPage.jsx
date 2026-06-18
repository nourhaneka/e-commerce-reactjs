import { Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import useProducts from "../hooks/useProducts";

export default function ProductsPage() {
  const {
    loading,
    filteredProducts,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
  } = useProducts();

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-4">Store</h1>

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}