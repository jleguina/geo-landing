export function Footer() {
  const sections = [
    { title: "Home", href: "#overview" },
    { title: "Features", href: "#metrics" },
    { title: "AI Models", href: "#models" },
    { title: "Query Analysis", href: "#queries" },
    { title: "Capabilities", href: "#capabilities" },
    { title: "Why GEO Now", href: "#why-geo" },
  ];

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple-600 to-brand-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <h3 className="text-2xl font-bold">GEO Advisor</h3>
          </div>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            The leading platform for Generative Engine Optimization and AI
            search analytics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {sections.map((section) => (
            <div key={section.title} className="text-center">
              <a
                href={section.href}
                className="text-neutral-300 hover:text-white transition-colors font-medium block py-2"
              >
                {section.title}
              </a>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 GEO Advisor. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
