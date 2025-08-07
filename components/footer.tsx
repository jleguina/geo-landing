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
    <footer className="bg-neutral-900 text-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-purple-600 to-brand-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">
                G
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">GEO Advisor</h3>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto px-4 sm:px-0">
            The leading platform for Generative Engine Optimization and AI
            search analytics.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {sections.map((section) => (
            <div key={section.title} className="text-center">
              <a
                href={section.href}
                className="text-sm sm:text-base text-neutral-300 hover:text-white transition-colors font-medium block py-2"
              >
                {section.title}
              </a>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 GEO Advisor. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white text-xs sm:text-sm transition-colors"
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
