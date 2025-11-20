"use client";
export default function Hero() {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="w-full h-[80vh] flex items-center justify-center text-white text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Welcome to Patel Stone Crusher
          </h1>
          <p className="text-lg mt-4 opacity-80">
            High-quality crushing machines, precision engineering, and reliable industrial solutions.
          </p>
          <button className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg">
            Explore Products
          </button>
        </div>
      </section>
    </main>
  );
}
