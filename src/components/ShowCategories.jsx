import { request } from "@/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShowCategories = () => {
  const token = useSelector((s) => s.token.value);
  const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    request
      .get("/product-category/get")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, [refresh]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    try {
      await request.delete(`/product-category/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Category deleted successfully");
      setRefresh((prev) => !prev);
    } catch (error) {
      alert("Error deleting category: This category might be in use.");
    }
  };

  const categoryItems = categories.map((category) => (
    <div
      key={category.id}
      className="w-full sm:w-80 p-4 border rounded-lg bg-gray-50 shadow-md flex flex-col gap-3"
    >
      <h3 className="font-semibold text-lg">{category.name}</h3>
      <p className="text-gray-600 line-clamp-3">{category.description}</p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => handleDelete(category.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Edit
        </button>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categoryItems}
        </div>
      </div>
    </div>
  );
};

export default ShowCategories;
