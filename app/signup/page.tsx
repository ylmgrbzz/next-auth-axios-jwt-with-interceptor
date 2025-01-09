"use client";
import SignupForm from "@/components/auth/SignupForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SignupPage() {
  return (
    <ProtectedRoute redirectTo="/">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold">Signup</h1>
          <div className="border p-4 rounded">
            <SignupForm />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
