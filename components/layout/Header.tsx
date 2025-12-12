"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-foreground/20"
          : "bg-background/80 backdrop-blur-sm border-foreground/10"
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              onClick={() => {
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors"
            >
              {siteConfig.name}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navigation.map((item) => {
              const isActive =
                (item.href === "/" && pathname === "/") ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm transition-colors relative",
                      isActive
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground",
                      "after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-foreground after:transition-all",
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </motion.ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
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
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={handleLinkClick}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-background border-l border-foreground/10 z-50 md:hidden overflow-y-auto"
            >
              <nav className="p-6">
                <ul className="space-y-4">
                  {navigation.map((item) => {
                    const isActive =
                      (item.href === "/" && pathname === "/") ||
                      (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "block text-base transition-colors",
                            isActive
                              ? "text-foreground font-medium"
                              : "text-foreground/70 hover:text-foreground"
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
