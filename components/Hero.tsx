"use client";
import { Hammer, Truck, Layers, Cog } from "lucide-react";

export default function Hero() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="w-full h-[80vh] bg-linear-to-r from-gray-900 to-gray-800 flex items-center justify-center text-white text-center px-6">
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

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Strengths</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition">
            <Truck className="w-10 h-10 mx-auto text-yellow-600" />
            <h3 className="text-xl font-semibold mt-4">Heavy Duty Feeding</h3>
            <p className="text-gray-600 mt-2">Reliable performance for bulk material feeding.</p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition">
            <Hammer className="w-10 h-10 mx-auto text-yellow-600" />
            <h3 className="text-xl font-semibold mt-4">Powerful Crushing</h3>
            <p className="text-gray-600 mt-2">Precision-engineered crushers for maximum output.</p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition">
            <Layers className="w-10 h-10 mx-auto text-yellow-600" />
            <h3 className="text-xl font-semibold mt-4">Multi-Stage Screening</h3>
            <p className="text-gray-600 mt-2">Accurate screening for different aggregate sizes.</p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition">
            <Cog className="w-10 h-10 mx-auto text-yellow-600" />
            <h3 className="text-xl font-semibold mt-4">Low Maintenance</h3>
            <p className="text-gray-600 mt-2">Built with durable materials for long life.</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">

          <div>
            <h2 className="text-4xl font-bold">About Our Company</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Patel Stone Crusher delivers premium-quality industrial crushing solutions.
              Our machines are engineered for durability, power, and precision, ensuring
              consistent performance in all applications.
            </p>
            <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Read More
            </button>
          </div>

          <div className="w-full h-80 bg-gray-300 rounded-xl shadow-inner"></div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-24 bg-white">
        <h2 className="text-4xl font-bold text-center">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mt-12">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="w-full h-56 bg-gray-300"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">Product {n}</h3>
                <p className="text-gray-600 mt-2">
                  High-efficiency crushing machines built for heavy industrial use.
                </p>
                <button className="mt-4 px-5 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600">
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-500 text-center text-black">
        <h2 className="text-4xl font-bold">Want to Discuss Your Requirements?</h2>
        <p className="mt-4 text-lg">Our team will guide you in choosing the right machine.</p>
        <button className="mt-8 px-10 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
          Contact Us
        </button>
      </section>

    </main>
  );
}
