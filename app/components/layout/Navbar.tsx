"use client";
import React from "react";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import axiosInstance from "../../../lib/interceptors";

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      localStorage.removeItem("token");
      window.dispatchEvent(new Event("unauthorized"));
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="p-4 flex justify-end">
      <Button onClick={handleLogout}>Logout</Button>
    </nav>
  );
};

export default Navbar;
