// import React from "react";
// import products from "../services/dummyProductDetails";

// state = {
//   selectedOption: ""
// };
// handleChange = (event) => {
//   this.setState({ selectedOption: event.target.value });
// };

//   // render() {
//   //   const { selectedOption } = this.state;
//   //   const filteredProducts = products.filter(
//   //     (product) => product.Code === selectedOption
//   //   );

//     return (
//       <div>
//         <h1>Product List</h1>
//         <select value={selectedOption} onChange={this.handleChange}>
//           <option value="">Select an option</option>
//           <option value="1">Option 1</option>
//           <option value="2">Option 2</option>
//           <option value="3">Option 3</option>
//         </select>
//         <table>
//           <thead>
//             <tr>
//               <th>Code</th>
//               <th>Description</th>
//               <th>Unit</th>
//               <th>Discount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProducts.map((product) => (
//               <tr key={product.Code}>
//                 <td>{product.Code}</td>
//                 <td>{product.Description}</td>
//                 <td>{product.Unit}</td>
//                 <td>{product.Discount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }

// export default ProductTable;
