import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Welcome to My Portfolio
        </h1>
      </main>
    </div>
  );
}
