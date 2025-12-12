import Link from "next/link";
import { navigation, siteConfig } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav>
            <ul className="flex items-center gap-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm text-foreground/50">
            ☺︎ {siteConfig.name} | {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
