import Link from "next/link";

export default function Projects() {
  const projects = [
    { id: 1, name: "Projet Alpha", status: "En cours", progress: 75 },
    { id: 2, name: "Projet Beta", status: "Terminé", progress: 100 },
    { id: 3, name: "Projet Gamma", status: "En attente", progress: 25 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projets</h1>
        <p className="text-muted-foreground">
          Gérez tous vos projets depuis cette page.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-card rounded-lg border p-6">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.status}
            </p>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {project.progress}% complété
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href="/projects/mine"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Mes projets
        </Link>
        <Link
          href="/projects/shared"
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
        >
          Projets partagés
        </Link>
      </div>
    </div>
  );
}
