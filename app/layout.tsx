import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monprojet.vercel.app"),
  title: "Template Next.js | App Moderne | Mon Projet",
  description:
    "Template Next.js 15 avec App Router, TypeScript, Tailwind CSS et shadcn/ui. Solution moderne et optimisée pour vos projets web.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Template",
  ],
  authors: [{ name: "Benjamin" }],
  creator: "Benjamin",
  publisher: "Mon Projet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://monprojet.vercel.app",
    title: "Template Next.js | App Moderne | Mon Projet",
    description:
      "Template Next.js 15 avec App Router, TypeScript, Tailwind CSS et shadcn/ui. Solution moderne et optimisée pour vos projets web.",
    siteName: "Mon Projet",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Template Next.js - App Moderne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Template Next.js | App Moderne | Mon Projet",
    description:
      "Template Next.js 15 avec App Router, TypeScript, Tailwind CSS et shadcn/ui. Solution moderne et optimisée pour vos projets web.",
    images: ["/og-image.jpg"],
    creator: "@moncompte",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://monprojet.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <AppHeader />
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
