import { ArrowRight, Moon, Sun } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ({ isDarkMode, setIsDarkMode }: NavbarProps) {
  // Toggle light/dark theme class on <html> element
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  };
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Logo />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted)]">
          <a
            href="#features"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Interactive Demo
          </a>
          <a
            href="#pricing"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            FAQ
          </a>
          <Link
            href="/extension"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Try our Chrome Extension
          </Link>
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            className="p-2 rounded-xl text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] border border-transparent hover:border-[var(--border)] transition-all"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="/chat"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold transition-all shadow-sm active:scale-95"
          >
            <span>Try EchoGPT</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </header>
  );
}
