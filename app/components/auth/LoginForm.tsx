"use client";
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import axiosInstance from "../../../lib/interceptors";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleUnauthorized = () => {
      router.push("/");
    };

    window.addEventListener("unauthorized", handleUnauthorized);

    return () => {
      window.removeEventListener("unauthorized", handleUnauthorized);
    };
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosInstance.post("/api/auth/login", {
        username,
        password,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 text-foreground"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 text-foreground"
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
