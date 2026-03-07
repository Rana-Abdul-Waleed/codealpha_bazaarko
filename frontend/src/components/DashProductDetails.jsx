// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import {
//   getProductByIdStart,
//   getProductByIdSuccess,
//   getProductByIdFailure,
//   clearCurrentProduct,
// } from "../redux/product/productSlice.js";

// const DashProductDetails = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     currentProduct,
//     loading,
//     error: errorMessage,
//   } = useSelector((state) => state.product);

//   // DEBUG: Log all query parameters
//   console.log("All search params:", Object.fromEntries([...searchParams]));

//   // Extract product ID from URL query parameters - FIXED approach
//   const getProductIdFromUrl = () => {
//     const tabValue = searchParams.get("tab");
//     console.log("Tab value from URL:", tabValue);

//     if (tabValue && tabValue.includes("productDetails/")) {
//       // Handle both patterns:
//       // - products/productDetails/productId
//       // - productDetails/productId
//       const parts = tabValue.split("/");
//       const productIdIndex =
//         parts.findIndex((part) => part === "productDetails") + 1;

//       if (productIdIndex > 0 && parts[productIdIndex]) {
//         return parts[productIdIndex];
//       }
//     }
//     return null;
//   };

//   const productId = getProductIdFromUrl();
//   console.log("Extracted Product ID:", productId);

//   useEffect(() => {
//     const getProductById = async () => {
//       // Clear previous product data
//       dispatch(clearCurrentProduct());

//       if (!productId) {
//         console.error("No product ID found in URL");
//         toast.error("Product ID not found in URL");
//         navigate("/dashboard?tab=products");
//         return;
//       }

//       try {
//         dispatch(getProductByIdStart());
//         console.log("Fetching product with ID:", productId);

//         // Call API to get product by ID using axios
//         const res = await axios.get(
//           `/backend/product/getProductById/${productId}`,
//           {
//             withCredentials: true,
//           }
//         );

//         const data = res.data;
//         console.log("API Response:", data);

//         if (res.status === 200 && data.success) {
//           dispatch(getProductByIdSuccess(data.data));
//           toast.success("Product details loaded successfully");
//         } else {
//           dispatch(
//             getProductByIdFailure(
//               data.message || "Failed to load product details"
//             )
//           );
//           toast.error(data.message || "Failed to load product details");
//           navigate("/dashboard?tab=products");
//         }
//       } catch (error) {
//         console.error("Error fetching product details:", error);

//         // PROPER error handling - UNCOMMENTED
//         let errorMsg = "Something went wrong while loading product details";
//         if (error.response && error.response.data) {
//           errorMsg = error.response.data.message || errorMsg;
//           console.error("Backend error response:", error.response.data);
//         }

//         dispatch(getProductByIdFailure(errorMsg));
//         toast.error(errorMsg);
//         navigate("/dashboard?tab=products");
//       }
//     };

//     if (productId) {
//       getProductById();
//     }
//   }, [productId, dispatch, navigate]);

//   console.log("Redux State - Current Product:", currentProduct);
//   console.log("Redux State - Loading:", loading);
//   console.log("Redux State - Error:", errorMessage);

//   // Handle loading state
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-gray-600">Loading product details...</p>
//       </div>
//     );
//   }

//   // Handle error state
//   if (errorMessage) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-red-600">Error: {errorMessage}</p>
//         <button
//           onClick={() => navigate("/dashboard?tab=products")}
//           className="ml-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
//         >
//           Back to Products
//         </button>
//       </div>
//     );
//   }

//   // Handle case where product is not found
//   if (!currentProduct) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-gray-600">No product data available</p>
//         <button
//           onClick={() => navigate("/dashboard?tab=products")}
//           className="ml-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
//         >
//           Back to Products
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Product Details</h2>

//       {/* Basic product info */}
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold mb-2">
//           {currentProduct.product_name}
//         </h3>
//         <p className="text-gray-600 mb-2">
//           {currentProduct.product_description}
//         </p>

//         <div className="flex gap-4 mb-3">
//           <p className="text-gray-500 line-through">
//             PKR {currentProduct.product_price}
//           </p>
//           <p className="text-black font-bold">
//             PKR {currentProduct.product_discounted_price}
//           </p>
//         </div>

//         <p className="text-sm text-gray-500">
//           Category: {currentProduct.category}
//         </p>

//         {/* Display product images */}
//         {currentProduct.product_images &&
//           currentProduct.product_images.length > 0 && (
//             <div className="mt-4">
//               <h4 className="font-semibold mb-2">Product Images:</h4>
//               <div className="flex gap-2 flex-wrap">
//                 {currentProduct.product_images.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt={`Product ${index + 1}`}
//                     className="w-24 h-24 object-cover rounded-md"
//                     onError={(e) => {
//                       e.target.style.display = "none";
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}
//       </div>

//       <button
//         onClick={() => navigate("/dashboard?tab=products")}
//         className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-200"
//       >
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default DashProductDetails;

// -------------------------------------------------

import React from "react";

const DashProductDetails = () => {
  return <div>DashProductDetails</div>;
};

export default DashProductDetails;
