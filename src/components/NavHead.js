import React, { useState } from "react";

function Navhead() {
  const [activeSection, setActiveSection] = useState("home");
  const [products, setProducts] = useState([]); // State to hold product list
  const [newProduct, setNewProduct] = useState({
    productName: "",
    brand: "",
    price: "",
    weightVolume: "",
    quantity: "",
    store: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    if (newProduct.productName && newProduct.brand) {
      if (isEditing) {
        // Update existing product
        const updatedProducts = products.map((product, index) =>
          index === editIndex ? newProduct : product
        );
        setProducts(updatedProducts);
        setIsEditing(false);
      } else {
        // Add new product
        setProducts((prev) => [...prev, newProduct]);
      }
      // Reset the form
      setNewProduct({
        productName: "",
        brand: "",
        price: "",
        weightVolume: "",
        quantity: "",
        store: "",
      });
    } else {
      alert("Please fill in the required fields."); // Basic validation
    }
  };

  const handleEditProduct = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setNewProduct(products[index]); // Populate form with the selected product
    setActiveSection("edit"); // Navigate to edit section
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts); // Remove the product
  };

  return (
    <div className="navhead">
      <ul className="aea">
        <li onClick={() => handleNavigation("home")} className={activeSection === "home" ? "active" : ""}>Home</li>
        <li onClick={() => handleNavigation("add")} className={activeSection === "add" ? "active" : ""}>Add list</li>
        <li onClick={() => handleNavigation("edit")} className={activeSection === "edit" ? "active" : ""}>Edit list</li>
      </ul>

      {/* Home Section */}
      <div style={{ display: activeSection === "home" ? "block" : "none" }} id="home">
        <div className="container_menu_main">
          <div className="menu_main">
            <div className="title">
              <h3>Items</h3>
            </div>
            <div className="menu" id="productList">
              {products.length === 0 ? (
                <p>No products added yet.</p>
              ) : (
                products.map((product, index) => (
                  <div key={index} className="item">
                    <h4>{product.productName}</h4>
                    <p>Brand: {product.brand}</p>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Weight/Volume: {product.weightVolume}</p>
                    <p>Store: {product.store}</p>
                    <div className="edit_remove">
                      <button onClick={() => handleEditProduct(index)}>Edit</button>
                      <button onClick={() => handleRemoveProduct(index)}>Remove</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add Product Section */}
      <div
        style={{ display: activeSection === "add" ? "flex" : "none" }}
        className="addproduct"
        id="addproduct"
      >
        <h4>Add Product</h4>
        <div className="addItem">
          <input type="text" name="productName" placeholder="Product Name" value={newProduct.productName} onChange={handleInputChange} />
          <input type="text" name="brand" placeholder="Brand" value={newProduct.brand} onChange={handleInputChange} />
          <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
          <input type="text" name="weightVolume" placeholder="Weight/Volume" value={newProduct.weightVolume} onChange={handleInputChange} />
          <input type="text" name="quantity" placeholder="Quantity" value={newProduct.quantity} onChange={handleInputChange} />
          <input type="text" name="store" placeholder="Store" value={newProduct.store} onChange={handleInputChange} />
          <button onClick={handleAddProduct}>{isEditing ? "Update" : "Add"}</button>
        </div>
      </div>

      {/* Edit Product Section */}
      <div style={{ display: activeSection === "edit" ? "flex" : "none" }} id="editproduct">
      <h4>Edit Product</h4>
        <div className="editItem">
          <input type="text" name="productName" placeholder="Product Name" value={newProduct.productName} onChange={handleInputChange} />
          <input type="text" name="brand" placeholder="Brand" value={newProduct.brand} onChange={handleInputChange} />
          <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
          <input type="text" name="weightVolume" placeholder="Weight/Volume" value={newProduct.weightVolume} onChange={handleInputChange} />
          <input type="text" name="quantity" placeholder="Quantity" value={newProduct.quantity} onChange={handleInputChange} />
          <input type="text" name="store" placeholder="Store" value={newProduct.store} onChange={handleInputChange} />
          <button onClick={handleAddProduct}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Navhead;
