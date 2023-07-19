import React, { useEffect, useState } from "react";
import products from "./services/dummyProductDetails";
import ProductDetailsTable from "./components/ProductDetailsTable";
import ProductDropdown from "./ProductDropdown";
import ProductPrice from "./components/ProductPrice";

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      selectedProducts.forEach((product) => {
        const productTotal =
          (product.Unit - product.Discount) * prnoduct.Quantity;
        total += productTotal;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [selectedProducts]);

  useEffect(() => {
    const calculateTotalDiscount = () => {
      let total = 0;
      selectedProducts.forEach((product) => {
        const productTotalDiscount = product.Discount;
        total += productTotalDiscount;
      });
      setTotalDiscount(total);
    };

    calculateTotalDiscount();
  }, [selectedProducts]);

  const handleProductSelect = (event) => {
    const selectedProductCode = parseInt(event.target.value, 10);
    const selectedProduct = products.find(
      (p) => p.Code === selectedProductCode
    );
    const existingProductIndex = selectedProducts.findIndex(
      (p) => p.Code === selectedProductCode
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...selectedProducts];
      const existingProduct = updatedProducts[existingProductIndex];
      existingProduct.Quantity += 1;
      existingProduct.Unit *= 2;
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([
        ...selectedProducts,
        { ...selectedProduct, Quantity: 1 },
      ]);
    }
  };
  const handleDeleteProduct = (code) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.Code !== code
    );
    console.log("clicked");
    setSelectedProducts(updatedProducts);
  };
  const handleReset = () => {
    setSelectedProducts([]);
  };
  return (
    <div>
      <h1>Product Dropdown Example</h1>
      <ProductDropdown products={products} onSelect={handleProductSelect} />
      <ProductDetailsTable
        selectedProducts={selectedProducts}
        handleDeleteProduct={handleDeleteProduct}
      />
      <ProductPrice
        selectedProducts={selectedProducts}
        totalPrice={totalPrice}
        totalDiscount={totalDiscount}
      />
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default App;
