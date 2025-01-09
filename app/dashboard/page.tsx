"use client";
import { useEffect, useState } from "react";
import axiosInstance from "../../lib/interceptors";
import ProtectedRoute from "../components/ProtectedRoute";

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/api/users");
        setUsers(response.data.users);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <ProtectedRoute redirectTo="/">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <ul>
          {users.map((user: any) => (
            <li key={user._id} className="mb-2">
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
