// "use client";

// import { motion } from "framer-motion";
// import { Shield, Settings, Star , Hammer} from "lucide-react";

// export default function AboutSection() {
//   return (
//     <section className="relative py-28 overflow-hidden">
//       {/* Decorative Gradient Rings */}
//       {/* <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.15 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="absolute top-10 left-20 w-60 h-60 rounded-full bg-primary/30 blur-3xl"
//       />
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.15 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl"
//       /> */}

//       {/* Floating Icons */}
//       {/* <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute top-20 left-32 text-primary opacity-70"
//       >
//         <Hammer size={55} />
//       </motion.div>

//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute top-24 right-32 text-primary opacity-70"
//       >
//         <Settings size={55} />
//       </motion.div> */}

//       {/* CONTENT */}
//       <div className="relative max-w-4xl mx-auto text-center px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold mb-4 text-primary"
//         >
//           About Us
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-gray-700 leading-relaxed max-w-2xl mx-auto"
//         >
//           We engineer high-performance crushing plants with precision,
//           durability, and modern innovation delivering unmatched productivity
//           across all industrial applications.
//         </motion.p>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">
//           {[ 
//             { icon: Shield, title: "Reliability" },
//             { icon: Settings, title: "Engineering" },
//             { icon: Star, title: "Performance" },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.15, duration: 0.7 }}
//               viewport={{ once: true }}
//               className="
//                 p-7 bg-white rounded-2xl
//                 border border-primary/10 
//                 shadow-[0_8px_25px_rgba(0,0,0,0.06)]
//                 hover:shadow-[0_12px_35px_rgba(1,13,245,0.18)]
//                 hover:border-primary/40
//                 transition-all duration-300
//               "
//             >
//               <item.icon className="text-primary w-12 h-12 mx-auto mb-4" />
//               <h4 className="font-semibold text-gray-900 text-lg">
//                 {item.title}
//               </h4>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT — TEXT */}
        <div>
          <h4 className="text-sm tracking-[0.25em] text-gray-500 mb-3">
            ABOUT US
          </h4>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Helping industries grow <br />
            <span className="text-primary">with reliable engineering.</span>
          </h2>

          <p className="text-gray-700">
            We design and manufacture advanced crushing solutions built for
            durability, performance, and long-term efficiency. Our machinery
            supports businesses across mining, construction, and industrial
            sectors with precision and innovation.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="w-full">
          <img
            src="/your-image.jpg"
            alt="About Us"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
