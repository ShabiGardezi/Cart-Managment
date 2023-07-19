const ProductDetailsTable = ({
  selectedProducts,
  handleDeleteProduct,
  totalPrice,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
          <th>Unit</th>
          <th>Quantity</th>
          <th>Discount</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {selectedProducts.map((product) => {
          const total = (product.Unit - product.Discount) * product.Quantity;
          return (
            <tr key={product.Code}>
              <td>{product.Code}</td>
              <td>{product.Description}</td>
              <td>{product.Unit}</td>
              <td>{product.Quantity}</td>
              <td>{product.Discount}</td>
              <td>{total}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteProduct(product.Code)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductDetailsTable;
