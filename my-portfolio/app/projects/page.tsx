import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="mt-6 grid gap-4">
       {projects.map((project)=>(
        <div key={project.id} className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
          <p className="mt-2 font-mono text-sm">Tech Stack: {project.tech.join(", ")}</p>
          {project.liveUrl && (
            <a href={project.liveUrl} className="mt-2 text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}

        </div>
       ))}
      </div>
    </main>
  );
}
