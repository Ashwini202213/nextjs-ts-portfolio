import FadeIn from "@/components/animations/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my projects built with Next.js and TypeScript",
};

export default function ProjectsPage() {
  return (
    <main className="p-6 m-8">
      <h1 className="text-3xl font-bold mb-6 flex justify-center p-4">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
}