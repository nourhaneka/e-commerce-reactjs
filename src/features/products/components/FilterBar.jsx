export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div className="mb-4 d-flex flex-wrap gap-3">

      <input
        type="text"
        placeholder="Search products..."
        className="form-control"
        style={{ maxWidth: "250px" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="form-select"
        style={{ maxWidth: "220px" }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <select
        className="form-select"
        style={{ maxWidth: "220px" }}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low-high">
          Price Low → High
        </option>
        <option value="high-low">
          Price High → Low
        </option>
      </select>
    </div>
  );
}