"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

// ------------------------ TEAM MEMBERS ------------------------
const teamMembers = [
  {
    name: "Mr. Majjid Mehbub Patel",
    role: "Technical Director & Founder",
    bio: "Vastly experienced person (43+ years) in engineering and stone metal industry. He evolved the revolutionary breakthrough of the semi-mobile crusher plant and looks after all techno-commercial aspects.",
    image: "/team/Mr._Majjid_Mehbub_Patel.png",
    linkedin: "#",
    email: "majjid.p@company.com",
  },
  {
    name: "Mr. Amir Majjid Patel",
    role: "Director (Site & Machinery)",
    bio: "Director with over 18 years experience. He manages the Pune office and oversees all activities related to site selection, plant, and machinery selection.",
    image: "/team/Mr._Amir_Majjid_Patel.png",
    linkedin: "#",
    email: "amir.p@company.com",
  },
  {
    name: "Mr. Ashif Majjid Patel",
    role: "Director (Finance & Operations)",
    bio: "Director with over 15 years experience, specializing in financial management, total project material purchases, and factory operations located at Karad.",
    image: "/team/Mr._Ashif_Majjid_Patel.png",
    linkedin: "#",
    email: "ashif.p@company.com",
  },
  {
    name: "Mr. Bashir Mehbub Patel",
    role: "Plant Head",
    bio: "Looks after overall management including stores, labor, and dispatch management, with 30+ years experience.",
    image: "/team/Mr._Bashir_Mehbub_Patel.png",
    linkedin: "#",
    email: "bashir.p@company.com",
  },
  {
    name: "Mr. Arbaaz Bashir Patel",
    role: "Spare Parts & Service Manager",
    bio: "Manages the spare parts division, plant service, quotations, and multiple company departments.",
    image: "/team/Mr._Arbaaz_Bashir_Patel.png",
    linkedin: "#",
    email: "arbaaz.p@company.com",
  },
];

const primaryGradient =
  "bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent";

// ------------------------ TEAM CARD ------------------------
const TeamCard = ({ member, index }: { member: (typeof teamMembers)[0]; index: number }) => {
  const tiltDirection = index % 2 === 0 ? "hover:rotate-y-3" : "hover:-rotate-y-3";
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`
        bg-gray-800/60 border border-blue-800/40 rounded-xl p-6
        shadow-lg shadow-black/40 hover:shadow-cyan-500/20
        transition-all duration-300 transform-gpu
        hover:border-cyan-400/60 ${tiltDirection}
      `}
    >
      {/* IMAGE FIXED – clean, centered, no overlap */}
      <div className="mb-4 w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/50 bg-gray-700">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* NAME + ROLE + BIO */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>

        <p className={`text-sm font-semibold mb-3 ${primaryGradient}`}>
          {member.role}
        </p>

        <p className="text-gray-400 text-sm italic mb-4 line-clamp-3">
          {member.bio}
        </p>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center space-x-5 border-t border-blue-800/40 pt-4">
        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>

        <motion.a
          href={`mailto:${member.email}`}
          whileHover={{ scale: 1.2 }}
          className="text-gray-400 hover:text-white transition"
        >
          <Mail className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  );
};

// ------------------------ MAIN SECTION ------------------------
export default function LeadershipTeamSection() {
  return (
    <section className="py-20 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-cyan-400 tracking-widest mb-3 font-semibold">
            OUR EXPERTS
          </p>

          <h2 className="text-5xl font-extrabold">
            Meet the <span className={primaryGradient}>Leadership Team</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Our dedicated engineers and specialists are the foundation of our
            world-class, customized crushing solutions.
          </p>
        </motion.div>

        {/* GRID: auto-aligned for 5 members (perfect spacing) */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 
          gap-8 xl:gap-6 mx-auto
        ">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
