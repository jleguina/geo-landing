import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  const navItems = [
    { title: "Home", href: "#overview" },
    { title: "Features", href: "#metrics" },
    { title: "Capabilities", href: "#capabilities" },
    { title: "Why GEO Now", href: "#why-geo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple-600 to-brand-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-bold text-neutral-900">
              GEO Advisor
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-brand-purple-600 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-neutral-600"
              asChild
            >
              <Link href="https://app.geoadvisor.io">Sign In</Link>
            </Button>
            <Button
              size="sm"
              className="bg-brand-purple-600 hover:bg-brand-purple-700"
              asChild
            >
              <Link
                href="https://calendly.com/smirpuri-mba2026/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Demo
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
