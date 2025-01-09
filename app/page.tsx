import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <div className="flex gap-8">
          <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <LoginForm />
          </div>
          <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-4">Signup</h2>
            <SignupForm />
          </div>
        </div>
      </main>
    </div>
  );
}
