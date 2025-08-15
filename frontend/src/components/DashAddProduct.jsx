import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "../redux/product/productSlice.js";
import { useNavigate } from "react-router-dom";

const categoryFields = {
  mobile: [
    "model",
    "brand",
    "storage_capacity",
    "ram",
    "screen_size",
    "battery_capacity",
    "camera",
    "operating_system",
    "colors",
  ],
  cosmetics: [
    "brand",
    "type",
    "shade_color",
    "skin_type",
    "weight_volume",
    "ingredients",
  ],
  electronics: [
    "brand",
    "model",
    "power_consumption",
    "dimensions",
    "warranty_period",
    "weight",
    "voltage",
  ],
  furniture: [
    "material",
    "dimensions",
    "weight",
    "color",
    "assembly_required",
    "style",
  ],
  watches: [
    "brand",
    "gender",
    "movement_type",
    "dial_color",
    "strap_material",
    "water_resistant",
  ],
  decor: ["type", "material", "dimensions", "weight", "color", "style_theme"],
  accessories: ["type", "material", "color", "size", "weight"],
  footwear: [
    "brand",
    "type",
    "color",
    "sizes",
    "material",
    "sole_type",
    "gender",
  ],
};

const DashAddProduct = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      return toast.error("Please select a category");
    }

    // Create form data directly from form fields
    const form = new FormData(e.target);
    form.append("category", category);

    // Append images separately
    images.forEach((img) => form.append("product_images", img));

    try {
      dispatch(addProductStart());
      const res = await fetch("/backend/product/addProduct", {
        method: "POST",
        credentials: "include",
        body: form,
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(addProductSuccess(data.product));
        toast.success(data.message);
        e.target.reset(); // clear form
        setImages([]);
        setCategory("");
        navigate("dashboard?tab=products");
      } else {
        dispatch(addProductFailure(data.message));
        toast.error(data.message);
      }
    } catch (err) {
      dispatch(addProductFailure("Something went wrong!"));
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-6 mb-10 py-2 px-2 w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {/* Common Fields */}
        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          className="border p-2 rounded-md"
          required
        />
        <textarea
          name="product_description"
          placeholder="Product Description"
          className="border p-2 rounded-md"
          required
        />
        <input
          type="number"
          name="product_price"
          placeholder="Product Price"
          className="border p-2 rounded-md"
          required
        />
        <input
          type="number"
          name="product_discounted_price"
          placeholder="Product Discounted Price"
          className="border p-2 rounded-md"
          required
        />

        {/* Category Selector */}
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border p-2 rounded-md"
          required
        >
          <option value="">Select Category</option>
          {Object.keys(categoryFields).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Dynamic Fields */}
        {category &&
          categoryFields[category]?.map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.replace(/_/g, " ")}
              className="border p-2"
            />
          ))}

        {/* Images */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="border-dashed p-2 rounded-md"
          required
        />

        <button
          type="submit"
          className="bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default DashAddProduct;
