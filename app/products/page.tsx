import React from "react";

type Product = {
	id: string;
	name: string;
	slug: string;
	price: number;
	description: string;
	image?: string;
};

const products: Product[] = [
	{
		id: "p-1",
		name: "Precision Pump",
		slug: "precision-pump",
		price: 2499.0,
		description: "High-efficiency centrifugal pump for industrial applications.",
		image: "",
	},
	{
		id: "p-2",
		name: "Control Valve",
		slug: "control-valve",
		price: 899.0,
		description: "Durable control valve with precise flow regulation.",
		image: "",
	},
	{
		id: "p-3",
		name: "Heat Exchanger",
		slug: "heat-exchanger",
		price: 3999.0,
		description: "Compact shell-and-tube heat exchanger for process systems.",
		image: "",
	},
	{
		id: "p-4",
		name: "Level Sensor",
		slug: "level-sensor",
		price: 199.0,
		description: "Reliable level sensor for tanks and vessels.",
		image: "",
	},
];

export default function ProductsPage() {
	return (
		<main style={{ padding: 24, fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
			<header style={{ marginBottom: 18 }}>
				<h1 style={{ margin: 0, fontSize: 28 }}>Products</h1>
				<p style={{ margin: "6px 0 0", color: "#374151" }}>
					Browse our featured engineering products. Click a product to view details.
				</p>
			</header>

			<section
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
					gap: 16,
				}}
			>
				{products.map((p) => (
					<article
						key={p.id}
						style={{
							border: "1px solid #e6e6e6",
							borderRadius: 8,
							padding: 12,
							background: "#fff",
							boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<div>
							<div
								style={{
									background: "#f3f4f6",
									height: 140,
									borderRadius: 6,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginBottom: 10,
									overflow: "hidden",
								}}
							>
								{/* placeholder image: replace image property with real URL when available */}
								<span style={{ color: "#6b7280", fontSize: 14 }}>{p.name}</span>
							</div>

							<h2 style={{ margin: "0 0 8px", fontSize: 16 }}>{p.name}</h2>
							<p style={{ margin: "0 0 12px", color: "#4b5563", fontSize: 14 }}>{p.description}</p>
						</div>

						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
							<strong style={{ fontSize: 16 }}>${p.price.toFixed(2)}</strong>
							<a
								href={`/products/${p.slug}`}
								style={{
									background: "#111827",
									color: "#fff",
									padding: "8px 12px",
									borderRadius: 6,
									textDecoration: "none",
									fontSize: 14,
								}}
							>
								View
							</a>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}
