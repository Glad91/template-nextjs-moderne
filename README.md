# 🚀 Template Next.js Moderne

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-000000?style=flat&logoColor=white)](https://ui.shadcn.com/)

[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![Biome](https://img.shields.io/badge/Code%20Quality-Biome-60A5FA?style=flat&logo=biome&logoColor=white)](https://biomejs.dev/)
[![pnpm](https://img.shields.io/badge/Package%20Manager-pnpm-F69220?style=flat&logo=pnpm&logoColor=white)](https://pnpm.io/)

> Template Next.js 15 production-ready avec App Router, TypeScript, Tailwind CSS v4, shadcn/ui, dark mode et sidebar avancée.

## ✨ Fonctionnalités

### 🎯 **Core Features**
- ⚡ **Next.js 15** avec App Router et Turbopack
- 🔷 **TypeScript** en mode strict pour la sécurité des types
- 🎨 **Tailwind CSS v4** avec configuration avancée
- 🧩 **shadcn/ui** pour des composants modernes
- 🌙 **Dark Mode** avec `next-themes` et persistance
- 📱 **Responsive Design** mobile-first

### 🧭 **Navigation & UX**
- 🏗️ **Sidebar collapsible** avec tooltips et états actifs
- 📍 **Breadcrumb dynamique** basé sur l'URL
- 🎛️ **Header professionnel** avec toggle dark mode
- 🔄 **États de navigation** intelligents
- ⌨️ **Raccourcis clavier** (`Cmd+B` pour toggle sidebar)

### 🛠️ **Developer Experience**
- 🔧 **Biome** pour linting et formatage
- 🚀 **Scripts optimisés** avec Turbopack
- 📚 **Hooks personnalisés** pour la réutilisabilité
- 🎪 **Architecture modulaire** et scalable

### 🌐 **SEO & Performance**
- 🎯 **Métadonnées optimisées** selon les standards Google
- 🏷️ **Open Graph** et Twitter Cards
- 🔍 **Schema.org** ready
- ⚡ **Core Web Vitals** optimisés

## 🏗️ Architecture du Projet

```
template_next/
├── app/                          # App Router (Next.js 15)
│   ├── layout.tsx               # Layout principal avec providers
│   ├── page.tsx                # Page d'accueil
│   ├── dashboard/              # Pages de démonstration
│   ├── projects/
│   │   ├── page.tsx
│   │   └── mine/page.tsx
│   └── globals.css            # Styles globaux avec variables CSS
├── components/                  # Composants réutilisables
│   ├── ui/                    # shadcn/ui components
│   ├── app-sidebar.tsx        # Sidebar avec sous-menus
│   ├── app-header.tsx         # Header avec breadcrumb
│   ├── theme-provider.tsx     # Provider pour dark mode
│   └── theme-toggle.tsx       # Toggle dark/light mode
├── hooks/                      # Hooks personnalisés
│   ├── use-breadcrumbs.ts     # Gestion des breadcrumbs
│   ├── use-pathname.ts        # États actifs navigation
│   └── use-mobile.ts          # Hook responsive
├── lib/                       # Utilitaires
│   └── utils.ts              # Helpers Tailwind
└── components.json            # Configuration shadcn/ui
```

## 🚀 Installation et Démarrage

### Prérequis

- **Node.js** 18+
- **pnpm** (recommandé) ou npm/yarn

### Installation

```bash
# Cloner le template
git clone https://github.com/votre-username/template-nextjs-moderne.git
cd template-nextjs-moderne

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📋 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `pnpm dev` | Démarre le serveur de développement avec Turbopack |
| `pnpm build` | Construit l'application pour la production |
| `pnpm start` | Démarre le serveur de production |
| `pnpm lint` | Vérifie le code avec Biome |
| `pnpm lint:errors` | Vérifie le code avec Biome (warnings = errors) |
| `pnpm format` | Formate le code avec Biome |
| `pnpm typecheck` | Vérifie les types TypeScript |
| `pnpm check` | Lance lint + typecheck |
| `pnpm check:strict` | Lance lint strict + typecheck |
| `pnpm fix` | Formate + corrige automatiquement |
| `pnpm ci` | Pipeline CI (typecheck + lint + build) |
| `pnpm validate` | Validation complète (format + typecheck + build) |

## 🎨 Stack Technique

### **Frontend**
| Technologie | Version | Description |
|-------------|---------|-------------|
| [Next.js](https://nextjs.org/) | `15.5.4` | Framework React avec App Router |
| [React](https://reactjs.org/) | `19.1.0` | Bibliothèque UI avec Server Components |
| [TypeScript](https://www.typescriptlang.org/) | `5.x` | Typage statique JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | `4.x` | Framework CSS utility-first |

### **UI/UX**
| Technologie | Version | Description |
|-------------|---------|-------------|
| [shadcn/ui](https://ui.shadcn.com/) | `Latest` | Composants UI modernes et accessibles |
| [Radix UI](https://www.radix-ui.com/) | `Latest` | Primitives UI headless |
| [Lucide React](https://lucide.dev/) | `0.544.0` | Icônes SVG optimisées |
| [next-themes](https://github.com/pacocoursey/next-themes) | `0.4.6` | Gestion du dark mode |

### **Développement**
| Technologie | Version | Description |
|-------------|---------|-------------|
| [Biome](https://biomejs.dev/) | `2.2.0` | Linter et formateur ultra-rapide |
| [Turbopack](https://turbo.build/pack) | `Intégré` | Bundler Next-gen pour le dev |

## 🎛️ Configuration

### **Personnalisation des couleurs**

Les couleurs sont définies dans `app/globals.css` avec support du dark mode :

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... autres variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... autres variables */
}
```

### **Ajout de nouvelles pages**

1. Créer le fichier dans `app/nouvelle-page/page.tsx`
2. Ajouter l'entrée dans `hooks/use-breadcrumbs.ts` :
```typescript
const routeTitles: Record<string, string> = {
  "/nouvelle-page": "Titre de la page",
  // ...
}
```
3. Optionnel : Ajouter dans la sidebar (`components/app-sidebar.tsx`)

### **Configuration SEO**

Personnalisez les métadonnées dans `app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: "Votre App | Description | Marque",
  description: "Description optimisée 150-160 caractères",
  // ... autres métadonnées
}
```

## 🧩 Composants Disponibles

### **Sidebar Avancée**
- ✅ Collapsible avec mode icône
- ✅ Tooltips automatiques
- ✅ États actifs basés sur l'URL
- ✅ Sous-menus hiérarchiques
- ✅ Badges de notification
- ✅ Menu utilisateur avec dropdown

### **Header Professionnel**
- ✅ Toggle sidebar intégré
- ✅ Breadcrumb dynamique
- ✅ Toggle dark mode
- ✅ Design responsive

### **Dark Mode**
- ✅ Toggle 3 états (Clair/Sombre/Système)
- ✅ Persistance automatique
- ✅ Transitions fluides
- ✅ Variables CSS optimisées

## 📱 Responsive Design

| Breakpoint | Taille | Comportement |
|------------|--------|--------------|
| `mobile` | `< 768px` | Sidebar en drawer modal |
| `tablet` | `768px - 1024px` | Sidebar collapsible |
| `desktop` | `> 1024px` | Sidebar pleine largeur |

## 🔧 Personnalisation Avancée

### **Ajouter un nouveau composant shadcn/ui**

```bash
pnpm dlx shadcn@latest add [component-name]
```

### **Modifier la sidebar**

Éditez `components/app-sidebar.tsx` pour :
- Ajouter des sections
- Modifier les icônes
- Configurer les tooltips
- Ajuster les styles

### **Personnaliser le thème**

1. Utilisez le [Theme Builder](https://ui.shadcn.com/themes) de shadcn/ui
2. Copiez les variables CSS dans `app/globals.css`
3. Testez en mode clair et sombre

## 🚀 Déploiement

### **Vercel (Recommandé)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/votre-username/template-nextjs-moderne)

```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

### **Variables d'environnement**

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_APP_URL=https://votre-domaine.com
# Ajoutez vos variables ici
```

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Crédits

- **[Next.js](https://nextjs.org/)** - Framework React
- **[shadcn/ui](https://ui.shadcn.com/)** - Composants UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS
- **[Lucide](https://lucide.dev/)** - Icônes SVG

## 🔮 Roadmap

- [ ] Authentification avec NextAuth.js
- [ ] Base de données avec Prisma
- [ ] Tests avec Vitest et Testing Library
- [ ] Storybook pour la documentation des composants
- [ ] PWA avec service worker
- [ ] Internationalisation (i18n)

---

<div align="center">

**Développé avec ❤️ par [Benjamin](https://github.com/votre-username)**

🤖 *Généré avec [Claude Code](https://claude.com/claude-code)*

</div>