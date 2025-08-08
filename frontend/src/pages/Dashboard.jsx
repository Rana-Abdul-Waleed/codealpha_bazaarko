import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar.jsx";
import DashProfile from "../components/DashProfile.jsx";
import DashProducts from "../components/DashProducts.jsx";
import DashUsers from "../components/DashUsers.jsx";
import DashOrders from "../components/DashOrders.jsx";
import DashMyOrders from "../components/DashMyOrders.jsx";
import DashLikedProducts from "../components/DashLikedProducts.jsx";

const Dashboard = () => {
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
      {tab === "users" && <DashUsers />}

      {/* products */}
      {tab === "products" && <DashProducts />}

      {/* orders */}
      {tab === "orders" && <DashOrders />}
    </div>
  );
};

export default Dashboard;
