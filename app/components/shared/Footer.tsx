import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-12 px-4 text-xs text-[var(--muted)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="font-bold text-sm text-[var(--foreground)]">
            EchoGPT
          </span>
          <span>
            © {new Date().getFullYear()} EchoGPT Inc. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Features
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
            href="/chat"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Launch Workspace
          </Link>
        </div>
      </div>
    </footer>
  );
}
