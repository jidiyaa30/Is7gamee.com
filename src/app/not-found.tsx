import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export default function NotFound() {
  return (
    <section className="section-padding min-h-[70vh] flex items-center justify-center">
      <div className="container text-center max-w-lg">
        <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Head back to the homepage or grab the latest Is7 Game APK below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <TrackedCTALink location="not_found_cta" className="btn-cta">
            Download Is7 APK
          </TrackedCTALink>
        </div>
      </div>
    </section>
  );
}
