"use client";
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import axiosInstance from "../../../lib/interceptors";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "token") {
        const newToken = localStorage.getItem("token");
        setToken(newToken);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      localStorage.removeItem("token");
      setToken(null);
      window.dispatchEvent(new Event("unauthorized"));
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="p-4 flex justify-end">
      {token && <Button onClick={handleLogout}>Logout</Button>}
    </nav>
  );
};

export default Navbar;
