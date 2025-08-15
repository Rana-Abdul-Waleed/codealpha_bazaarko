import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DashProducts = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Base URL of backend (set this in frontend .env as VITE_BACKEND_URL=http://localhost:8000)
  const backendBase = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await fetch("/backend/product/getAllProducts", {
          credentials: "include",
        });

        const data = await res.json();

        if (res.ok && data.success) {
          setProducts(data.data || []);
        } else {
          toast.error(data.message || "Failed to load products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Something went wrong while loading products");
      }
    };

    getAllProducts();
  }, []);

  return (
    <div className="p-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Add a new product</h2>

      {/* Add Product Button */}
      <button
        onClick={() => navigate("/dashboard?tab=products/addProduct")}
        className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-200 mb-6"
      >
        Add Product
      </button>

      {/* All Products Heading */}
      <h2 className="text-2xl font-bold mb-4">All products</h2>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => {
            // Build image src robustly:
            // - If first image is already absolute, use as-is.
            // - Else prefix with backendBase (from VITE_BACKEND_URL).
            const firstImg = item.product_images?.[0] || null;
            const imgSrc =
              firstImg && /^https?:\/\//i.test(firstImg)
                ? firstImg
                : firstImg
                ? `${backendBase}${firstImg}`
                : null;

            return (
              <div
                key={item._id}
                className="bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Product Image */}
                {imgSrc ? (
                  <img
                    src={imgSrc} // <-- change here: use constructed imgSrc
                    alt={item.product_name || "Product"}
                    className="w-full h-[220px] object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-[220px] bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </div>
                )}

                {/* ...rest unchanged */}
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center font-semibold text-gray-800 gap-3">
                    <h2 className="truncate max-w-[150px] sm:max-w-[180px]">
                      {item.product_name}
                    </h2>
                    <div className="flex flex-col items-center">
                      <p className="text-gray-500 text-[13px] line-through">
                        PKR {item.product_price}
                      </p>
                      <p className="text-black text-[15px]">
                        PKR {item.product_discounted_price}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 truncate">
                    {item.product_description}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center text-yellow-500 text-sm gap-1 mt-1">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span className="text-gray-500 ml-1">(12)</span>
                    </div>
                  </div>

                  <Link
                    to={`/dashboard?tab=products/productDetails/${item._id}`}
                    className="mt-3 w-full text-center border border-pink-500 hover:border-pink-600 bg-pink-500 hover:bg-pink-600 text-sm text-white py-1.5 rounded-md transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default DashProducts;
