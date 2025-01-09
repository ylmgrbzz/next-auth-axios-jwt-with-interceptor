"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isTokenExpired } from "../../lib/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo,
}) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const isExpired = isTokenExpired(token);
      if (isExpired) {
        localStorage.removeItem("token");
        router.push(redirectTo);
      } else {
        router.push("/dashboard");
      }
    }
  }, [router, redirectTo]);

  return <>{children}</>;
};

export default ProtectedRoute;
