import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="relative max-w-md mx-auto text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <p className="font-mono text-sm text-accent mb-4 tracking-wider">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-muted leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist — or it moved
          while you weren&apos;t looking.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-200"
        >
          <ArrowLeft size={15} />
          Back home
        </Link>
      </div>
    </section>
  );
}
