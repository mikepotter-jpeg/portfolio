import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-hero text-foreground mb-4">404</h1>
        <h2 className="text-h2 text-muted mb-8">Page not found</h2>
        <p className="text-body text-muted mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="text-body text-foreground underline hover:text-muted transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
