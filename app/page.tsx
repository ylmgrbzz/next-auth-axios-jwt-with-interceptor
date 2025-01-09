import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <div className="flex gap-8">
          <Link href="/login" className="border p-4 rounded">
            Login
          </Link>
          <Link href="/signup" className="border p-4 rounded">
            Signup
          </Link>
        </div>
      </main>
    </div>
  );
}
