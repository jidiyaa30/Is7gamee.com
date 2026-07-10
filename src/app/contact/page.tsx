import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";

export const metadata: Metadata = {
  title: "Contact Us – Is7 Game | Get in Touch",
  description: "Have questions, suggestions, or feedback about Is7 Game? Contact us via email or through our contact page. We respond to all legitimate inquiries as soon as possible.",
  keywords: ["Contact Is7 Game", "Is7 Game support", "Is7 contact", "Is7 Game email", "Is7 help"],
  openGraph: {
    title: "Contact Us – Is7 Game",
    description: "Have questions or feedback about Is7 Game? Get in touch with us. We respond to all inquiries as soon as possible.",
    url: "https://Is7gamee.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Is7 Game" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us – Is7 Game",
    description: "Have questions or feedback about Is7 Game? Get in touch with us.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/contact" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://Is7gamee.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative">
          <nav className="flex items-center justify-center gap-2 text-sm text-[#b91c1c] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-medium">Contact Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Contact <span className="text-[#b91c1c]">Is7 Game</span>
          </h1>
          <p className="text-lg text-[#b91c1c] max-w-2xl mx-auto">
            We appreciate your visit and welcome your feedback, questions, and suggestions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Get in Touch */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              </div>
              <p className="text-muted mb-6">
                If you have any inquiries regarding our content, guides, or website information, feel free to contact us. We aim to respond to all legitimate requests as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a href="mailto:jidiyaa30@gmail.com" className="text-primary hover:underline">jidiyaa30@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Website</p>
                    <a href="https://Is7gamee.com" className="text-primary hover:underline">Is7gamee.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Why Contact Us?</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Report incorrect or outdated information",
                  "Suggest improvements to our content",
                  "Ask general questions about our website",
                  "Report technical issues or broken links",
                  "Share feedback and recommendations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center card p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">Ready to Start Playing?</h3>
            <p className="text-muted mb-6">Download the Is7 Game APK and explore 500+ premium games on your Android device.</p>
            <TrackedCTALink
              location="contact_cta"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3.5 px-8 rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Is7 APK Free
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}
