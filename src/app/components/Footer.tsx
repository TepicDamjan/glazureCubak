

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "O nama" },
    { href: "#process", label: "Kako radimo" },
    { href: "#qa", label: "FAQ" },
    { href: "#gallery", label: "Galerija" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <footer className="w-full py-8 md:py-10 text-spaceIndigo border-t border-granite/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-base md:text-lg font-bold text-spaceIndigo">Glazure Cubak</p>
          <a href="tel:+38765921847" className="text-bronze hover:underline">
            065 921 847
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm md:text-base text-spaceIndigo hover:text-bronze transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col items-center gap-1 text-center">
        <a
          href="https://damjantepic.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base text-bronze hover:underline transition-colors"
        >
          Designed and made by DT.
        </a>
        <p className="text-xs md:text-sm text-spaceIndigo/70">
          Copyright {year} Zoran Tepić. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
