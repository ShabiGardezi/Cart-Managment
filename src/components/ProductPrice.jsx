const ProductPrice = ({ selectedProducts, totalDiscount, totalPrice }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Discount</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr key="">
          <td>{totalDiscount}</td>
          <td>{totalPrice}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductPrice;
