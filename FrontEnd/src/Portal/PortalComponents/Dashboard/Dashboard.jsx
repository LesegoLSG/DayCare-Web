import React, { useEffect, useState } from "react";
import axiosInstance from "../../../AuthServices/Axios/AxiosInstance";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axiosInstance.get("/dashboard/stats");
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  console.log("dashboard data: ", dashboardData);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {dashboardData ? (
        <div>
          <h2 className="text-2xl font-bold mb-6">Dashboard Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Users
              </h3>
              <p className="text-2xl font-bold text-blue-500">
                {dashboardData.totalUsers}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Admin Users
              </h3>
              <p className="text-2xl font-bold text-green-500">
                {dashboardData.adminUsers}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Content Creator Users
              </h3>
              <p className="text-2xl font-bold text-yellow-500">
                {dashboardData.contentCreatorUsers}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Blogs
              </h3>
              <p className="text-2xl font-bold text-red-500">
                {dashboardData.totalBlogs}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading dashboard data...</p>
      )}
    </div>
  );
};

export default Dashboard;
