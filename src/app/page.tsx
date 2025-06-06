import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard App</h1>
      <Link href="/dashboard" className="text-blue-600 underline">
        Go to Dashboard
      </Link>
    </main>
  );
}
