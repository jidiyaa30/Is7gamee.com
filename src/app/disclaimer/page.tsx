import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer – Is7 Gaming",
  description: "Read the Is7gamee.com disclaimer. Understand the terms under which this independent informational website provides content about Is7 Game.",
  keywords: ["Is7 Game disclaimer", "Is7 Gaming disclaimer", "Is7gamee.com disclaimer"],
  openGraph: {
    title: "Disclaimer – Is7 Gaming",
    description: "Understand the terms under which Is7gamee.com provides content about Is7 Game.",
    url: "https://Is7gamee.com/disclaimer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Disclaimer" }],
  },
  twitter: {
    card: "summary",
    title: "Disclaimer – Is7 Gaming",
    description: "Understand the terms under which Is7gamee.com provides content about Is7 Game.",
  },
  alternates: { canonical: "https://Is7gamee.com/disclaimer" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Disclaimer", item: "https://Is7gamee.com/disclaimer" },
  ],
};

export default function DisclaimerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Disclaimer</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Disclaimer</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: July 1, 2026
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-3xl px-2 mx-auto">
          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-yellow-800 mb-2">Important Notice</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Please read this disclaimer carefully before using Is7gamee.com. By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by the terms outlined below.
            </p>
          </div>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Independent Website</h2>
              <p className="text-sm">
                Is7gamee.com is an independently operated informational website. We are not affiliated with, endorsed by, or officially connected to the developers, publishers, or operators of the Is7 Game application. All product names, logos, brands, and trademarks mentioned on this site are the property of their respective owners and are used here solely for informational and descriptive purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. Content Accuracy</h2>
              <p className="text-sm">
                The information provided on Is7gamee.com — including guides, tutorials, feature descriptions, and general platform details — is compiled from publicly available sources and our own research. While we strive to keep content accurate and up to date, we make no warranties or representations regarding the completeness, reliability, or timeliness of any information on this site. Features, requirements, and availability of the Is7 Game application may change without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. External Links</h2>
              <p className="text-sm">
                This website contains links to external websites and resources, including download portals for the Is7 Game application. These links are provided for your convenience and informational purposes only. We do not control the content, privacy practices, or availability of external sites and accept no responsibility for any loss or damage that may arise from your use of them. We recommend reviewing the terms and policies of any third-party site before interacting with it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. No Guarantees</h2>
              <p className="text-sm">
                Is7gamee.com does not guarantee any specific outcomes from using the Is7 Game application or following the guides published on this site. All content is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any kind, express or implied. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. User Responsibility</h2>
              <p className="text-sm">
                You are solely responsible for your decisions and actions when using information from this website. This includes ensuring that downloading and using the Is7 Game application complies with all applicable laws and regulations in your jurisdiction. Is7gamee.com shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or use of this site or any external resources linked herein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">6. Changes to This Disclaimer</h2>
              <p className="text-sm">
                We reserve the right to modify or update this disclaimer at any time without prior notice. Changes will be effective immediately upon posting to this page. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision. Continued use of the website after changes constitutes acceptance of the revised disclaimer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">7. Contact</h2>
              <p className="text-sm">
                If you have any questions about this disclaimer, please reach out through the contact information available on our website. We will do our best to address your concerns promptly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
