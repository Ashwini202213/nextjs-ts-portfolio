"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-[70vh] flex flex-col justify-center"
    >
      <motion.h1 variants={item} className="text-4xl font-bold">
        Hi, I'm FreeSoul 👋
      </motion.h1>

      <motion.p variants={item} className="mt-4 text-lg">
        Frontend Developer • React • Next.js • TypeScript
      </motion.p>

      <motion.div variants={item} className="mt-6">
        <button className="btn-primary">View Projects</button>
      </motion.div>
    </motion.section>
  );
}
