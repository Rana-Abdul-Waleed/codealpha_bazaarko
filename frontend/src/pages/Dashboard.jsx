import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar.jsx";
import DashProfile from "../components/DashProfile.jsx";
import DashProducts from "../components/DashProducts.jsx";
import DashUsers from "../components/DashUsers.jsx";
import DashOrders from "../components/DashOrders.jsx";
import DashMyOrders from "../components/DashMyOrders.jsx";
import DashLikedProducts from "../components/DashLikedProducts.jsx";
import DashAddProduct from "../components/DashAddProduct.jsx";
import { useSelector } from "react-redux";
import DashProductDetails from "../components/DashProductDetails.jsx";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div>
        {/* sidebar */}
        <DashSidebar />
      </div>

      {/* profile */}
      {tab === "profile" && <DashProfile />}

      {/* my orders */}
      {tab === "myorders" && <DashMyOrders />}

      {/* liked products */}
      {tab === "likedproducts" && <DashLikedProducts />}

      {/* users */}
      {currentUser.user.isAdmin ? tab === "users" && <DashUsers /> : ""}

      {/* products */}
      {currentUser.user.isAdmin ? tab === "products" && <DashProducts /> : ""}

      {/* products/addProduct */}
      {currentUser.user.isAdmin
        ? tab === "products/addProduct" && <DashAddProduct />
        : ""}

      {/* products/productDetails/productId */}
      {currentUser.user.isAdmin
        ? tab === "products/productDetails/productId" && <DashProductDetails />
        : ""}

      {/* orders */}
      {currentUser.user.isAdmin ? tab === "orders" && <DashOrders /> : ""}
    </div>
  );
};

export default Dashboard;
