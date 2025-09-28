"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface BreadcrumbItem {
  title: string;
  href: string;
  isCurrentPage: boolean;
}

// Configuration des titres personnalisés pour chaque route
const routeTitles: Record<string, string> = {
  "/": "Accueil",
  "/dashboard": "Tableau de bord",
  "/inbox": "Boîte de réception",
  "/calendar": "Calendrier",
  "/projects": "Projets",
  "/projects/mine": "Mes projets",
  "/projects/shared": "Projets partagés",
  "/projects/archived": "Archives",
  "/team": "Équipe",
  "/team/departments": "Départements",
  "/team/invitations": "Invitations",
  "/search": "Recherche",
  "/notifications": "Notifications",
  "/settings": "Paramètres",
  "/profile": "Mon profil",
};

export function useBreadcrumbs(): BreadcrumbItem[] {
  const pathname = usePathname();

  return useMemo(() => {
    // Si on est à la racine, pas de breadcrumb
    if (pathname === "/") {
      return [];
    }

    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Toujours ajouter l'accueil
    breadcrumbs.push({
      title: "Accueil",
      href: "/",
      isCurrentPage: false,
    });

    // Construire les breadcrumbs pour chaque segment
    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;

      breadcrumbs.push({
        title:
          routeTitles[currentPath] ||
          segment.charAt(0).toUpperCase() + segment.slice(1),
        href: currentPath,
        isCurrentPage: isLast,
      });
    });

    return breadcrumbs;
  }, [pathname]);
}
