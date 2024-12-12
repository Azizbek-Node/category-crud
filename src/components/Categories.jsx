import { request } from "@/api";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const token = useSelector((s) => s.token.value);
  const navigate = useNavigate();

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const category = Object.fromEntries(formData);

    try {
      await request.post("/product-category/create", category, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      e.target.reset();
      alert("New category successfully added");
    } catch (error) {
      alert("Error creating category: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create a New Category
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleCreateCategory}>
          <input
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            placeholder="Category Name"
            required
          />
          <textarea
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="description"
            placeholder="Category Description"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Category
          </button>
        </form>
        <button
          onClick={() => navigate("/showcategories")}
          className="mt-6 w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          View Categories
        </button>
      </div>
    </div>
  );
};

export default Categories;
