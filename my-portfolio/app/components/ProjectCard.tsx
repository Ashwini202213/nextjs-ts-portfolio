"use client";

import { Project } from "@/app/types";
import { motion } from "framer-motion";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y:10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 200 }}
      className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg flex flex-col h-full"
      style={{ minHeight: 260 }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      <p className="text-gray-600 flex-1">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 underline font-medium"
        >
          Live Demo
        </a>
      )}
    </motion.div>
  );
}
