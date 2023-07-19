const ProductDropdown = ({ products, onSelect }) => {
  return (
    <select onChange={onSelect}>
      <option value="">Select a product</option>
      {products.map((product) => (
        <option key={product.Code} value={product.Code}>
          {product.Description}
        </option>
      ))}
    </select>
  );
};

export default ProductDropdown;
