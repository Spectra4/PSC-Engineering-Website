"use client";

export default function Hero() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="videos/bg-banner.mp4" type="video/mp4" />
      </video>

      {/* Overlay (dark shade for readability) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <section className="relative w-full h-full flex items-center justify-center text-white text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-xl">
            Welcome to Patel Stone Crusher
          </h1>

          <p className="text-lg mt-4 opacity-90 drop-shadow-lg">
            High-quality crushing machines, precision engineering, and reliable industrial solutions.
          </p>

          <button className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white hover:text-black font-semibold rounded-lg shadow-lg">
            Explore Products
          </button>
        </div>
      </section>
    </main>
  );
}
