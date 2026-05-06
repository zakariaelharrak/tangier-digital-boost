import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-muted-foreground">This page drifted off the funnel.</p>
        <Link to="/" className="mt-6 inline-block rounded-md px-4 py-2 text-sm font-medium" style={{ background: "var(--gradient-primary)" }}>Back home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "INFINI BOOST — SEO & Digital Marketing Agency in Tangier" },
      { name: "description", content: "INFINI BOOST is a Tangier-based digital marketing agency delivering SEO, performance marketing & growth strategy for ambitious brands." },
      { property: "og:title", content: "INFINI BOOST — SEO & Digital Marketing Agency in Tangier" },
      { property: "og:description", content: "INFINI BOOST is a Tangier-based digital marketing agency delivering SEO, performance marketing & growth strategy for ambitious brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "INFINI BOOST — SEO & Digital Marketing Agency in Tangier" },
      { name: "twitter:description", content: "INFINI BOOST is a Tangier-based digital marketing agency delivering SEO, performance marketing & growth strategy for ambitious brands." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94f2b2f5-a19f-4af2-844c-67d8211b6552/id-preview-1868531f--cc95b946-a939-4021-9f61-b3d52122c238.lovable.app-1778081089162.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94f2b2f5-a19f-4af2-844c-67d8211b6552/id-preview-1868531f--cc95b946-a939-4021-9f61-b3d52122c238.lovable.app-1778081089162.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <Toaster />
      <WhatsAppFab />
    </div>
  ),
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}
