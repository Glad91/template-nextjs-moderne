export default function MyProjects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mes projets</h1>
        <p className="text-muted-foreground">
          Les projets dont vous êtes propriétaire.
        </p>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-4">Projets personnels</h2>
        <div className="space-y-4">
          {["Mon site web", "Application mobile", "Portfolio"].map(
            (project) => (
              <div
                key={project}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <span className="font-medium">{project}</span>
                <span className="text-sm text-muted-foreground">
                  Propriétaire
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
