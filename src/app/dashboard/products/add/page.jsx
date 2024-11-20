"use client";

import React, { useState } from "react";
import Sidebar from "../../../../components/dashboard/Sidebar";
import Header from "../../../../components/dashboard/Header";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    image: null,
  });
  const [products, setProducts] = useState([]);

  const handleProductSubmit = (e) => {
    e.preventDefault();
    // Add the new product to the list
    const newProduct = {
      ...product,
      id: products.length + 1,
      image: product.image ? URL.createObjectURL(product.image) : null, // Temporary image URL
    };
    setProducts([...products, newProduct]);

    // Clear the form after submission
    setProduct({
      name: "",
      category: "",
      image: null,
    });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <form onSubmit={handleProductSubmit} className="mb-6">
            <input
              type="text"
              placeholder="Product Name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <select
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="">Select Category</option>
              <option value="Shirts">Shirts</option>
              <option value="Pants">Pants</option>
              <option value="Shoes">Shoes</option>
              <option value="Accessories">Accessories</option>
            </select>
            <input
              type="file"
              onChange={(e) =>
                setProduct({ ...product, image: e.target.files[0] })
              }
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Product
            </button>
          </form>

          {/* Product Table View */}
          <h3 className="text-xl font-semibold mb-4">Products List</h3>
          {products.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Image</th>
                  <th className="border px-4 py-2 text-left">Product Name</th>
                  <th className="border px-4 py-2 text-left">Category</th>
                  <th className="border px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => (
                  <tr key={prod.id}>
                    <td className="border px-4 py-2">
                      {prod.image ? (
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-16 h-16 object-cover"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="border px-4 py-2">{prod.name}</td>
                    <td className="border px-4 py-2">{prod.category}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="text-blue-500 mr-4"
                        onClick={() => console.log("Edit product", prod.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteProduct(prod.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
