export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Vue d'ensemble de vos métriques et activités.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={`metric-${i}`} className="bg-card rounded-lg border p-6">
            <h3 className="text-sm font-medium">Métrique {i + 1}</h3>
            <p className="text-2xl font-bold">1,234</p>
            <p className="text-xs text-muted-foreground">
              +12% depuis le mois dernier
            </p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-4">Activité récente</h2>
        <div className="bg-muted/50 h-64 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Graphique des activités</p>
        </div>
      </div>
    </div>
  );
}
