import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – Is7 Gaming",
  description: "Read the Is7 Gaming privacy policy. Learn how Is7gamee.com collects, uses, and protects your personal information when you visit our independent informational website.",
  keywords: ["Is7 Game privacy policy", "Is7 Gaming privacy", "Is7gamee.com privacy"],
  openGraph: {
    title: "Privacy Policy – Is7 Gaming",
    description: "Learn how Is7gamee.com collects, uses, and protects your personal information.",
    url: "https://Is7gamee.com/privacy-policy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Privacy Policy" }],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy – Is7 Gaming",
    description: "Learn how Is7gamee.com collects, uses, and protects your personal information.",
  },
  alternates: { canonical: "https://Is7gamee.com/privacy-policy" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://Is7gamee.com/privacy-policy" },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Privacy Policy</span>
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
          {/* Independent Website Notice */}
          <div className="bg-primary-50 border border-red-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-primary mb-2">Independent Website Notice</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Is7gamee.com is an independently operated informational website. We are not the official developer or publisher of the Is7 Game application. This privacy policy covers only the data practices of this website (Is7gamee.com) and does not govern the Is7 Game app itself. For the app&apos;s own privacy practices, please refer to the privacy policy provided within the application.
            </p>
          </div>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
              <p className="mb-3">When you visit Is7gamee.com, we may automatically collect certain non-personal information, including:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URL and pages visited</li>
                <li>Approximate geographic location (country/region level, derived from IP)</li>
                <li>Time and date of your visit</li>
              </ul>
              <p className="mt-3 text-sm">We do not intentionally collect personally identifiable information (such as names, email addresses, or phone numbers) unless you voluntarily provide it through a contact form or email.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">The non-personal information we gather is used solely to:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Analyze website traffic and usage patterns to improve content quality</li>
                <li>Diagnose technical issues and optimize site performance</li>
                <li>Understand which guides and articles are most valuable to visitors</li>
                <li>Ensure site security and prevent abuse</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. Cookies & Tracking Technologies</h2>
              <p className="text-sm">
                Is7gamee.com may use cookies and similar tracking technologies (such as web beacons and local storage) to enhance your browsing experience and collect aggregate analytics data. You can control cookie behavior through your browser settings. Disabling cookies may affect certain site features but will not prevent you from accessing informational content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. Third-Party Services</h2>
              <p className="text-sm">
                We may use third-party analytics services (e.g., Google Analytics) that collect, monitor, and analyze visitor data on our behalf. These services have their own privacy policies governing how they handle data. We do not sell, rent, or trade your information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. External Links</h2>
              <p className="text-sm">
                This website contains links to external sites, including the Is7 Game application portal and related resources. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party site you visit through links on Is7gamee.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">6. Data Security</h2>
              <p className="text-sm">
                We implement reasonable technical and organizational measures to protect the information collected through this website. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">7. Children&apos;s Privacy</h2>
              <p className="text-sm">
                Is7gamee.com is not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a child has provided us with personal data, please contact us immediately so we can take steps to remove that information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">8. Your Rights</h2>
              <p className="mb-3 text-sm">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-3 text-sm">To exercise any of these rights, please contact us using the details below.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">9. Changes to This Policy</h2>
              <p className="text-sm">
                We may update this privacy policy from time to time to reflect changes in our practices or applicable regulations. Any updates will be posted on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">10. Contact Us</h2>
              <p className="text-sm">
                If you have any questions or concerns about this privacy policy or our data practices, you may reach us by visiting the contact information provided on our website. We aim to respond to all inquiries within a reasonable timeframe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
