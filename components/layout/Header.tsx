"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/content";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="max-w-container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation links - centered or left */}
          <ul className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive =
                (item.href === "/" && pathname === "/") ||
                (item.href !== "/" && pathname.startsWith(item.href.replace("/#", "/")));
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-small transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -ml-2 text-muted hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Empty div for spacing on desktop */}
          <div className="hidden md:block" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background"
          >
            <nav className="px-6 py-4">
              <ul className="space-y-3">
                {navigation.map((item) => {
                  const isActive =
                    (item.href === "/" && pathname === "/") ||
                    (item.href !== "/" && pathname.startsWith(item.href.replace("/#", "/")));
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className={`block text-body transition-colors ${
                          isActive
                            ? "text-foreground"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
