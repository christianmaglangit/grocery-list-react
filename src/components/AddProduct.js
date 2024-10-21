function AddProduct() {
  return (
    <div class="addproduct" id="addproduct">
      <h4>Add Product</h4>
      <div class="addItem">
        <input type="text" id="productName" placeholder="Product Name" />
        <input type="text" id="brand" placeholder="Brand" />
        <input type="number" id="price" placeholder="Price" />
        <input type="text" id="weightVolume" placeholder="Weight/Volume" />
        <input type="text" id="quantity" placeholder="Quantity" />
        <input type="text" id="store" placeholder="Store" />
        <input type="file" id="productImage" placeholder="Product Image" />
        <button id="addButton">Add</button>
      </div>
    </div>
  );
}

export default AddProduct;
