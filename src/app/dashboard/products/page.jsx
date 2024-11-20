"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "../../../components/dashboard/Sidebar";
import Header from "../../../components/dashboard/Header";

const ProductList = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <Link
            href="/dashboard/products/add"
            className="bg-blue-500 text-white p-2 rounded mb-4 inline-block"
          >
            Add Product
          </Link>

          {/* Category Table */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
