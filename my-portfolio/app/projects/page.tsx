import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="p-6">
      <AnimatedSection>
      <h1 className="text-3xl font-bold">Projects</h1>
      </AnimatedSection>

      <div className="mt-6 grid ">
       {projects.map((project)=>(
        <AnimatedSection key={project.id}>
          <div className="m-2 p-4 rounded border hover:shadow transition">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
          <p className="mt-2 font-mono text-sm">Tech Stack: {project.tech.join(", ")}</p>
          {project.liveUrl && (
            <a href={project.liveUrl} className="mt-2 text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          
          )
          }
         </div>
        </AnimatedSection>
       ))}
      </div>
    </main>
  );
}
