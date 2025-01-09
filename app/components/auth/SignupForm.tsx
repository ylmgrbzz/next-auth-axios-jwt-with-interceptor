"use client";
import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import axiosInstance from "../../../lib/interceptors";
import { useRouter } from "next/navigation";
import { isTokenExpired } from "../../../lib/auth";

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosInstance.post("/api/auth/signup", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      window.dispatchEvent(new StorageEvent("storage", { key: "token" }));
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
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
      <Button type="submit">Signup</Button>
    </form>
  );
};

export default SignupForm;
