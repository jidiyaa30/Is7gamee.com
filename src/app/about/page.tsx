import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "About Is7 Game – Our Story, Mission & Why Millions Choose Is7 Gaming",
  description: "Discover the story behind Is7 Game. Learn how Is7 Gaming became the go-to Android platform for 2M+ players worldwide, offering 500+ games, top-tier security, and a community-first approach.",
  keywords: ["About Is7 Game", "Is7 Gaming story", "Is7 Game mission", "Is7 Game team", "Is7 platform", "Is7 Game history"],
  openGraph: {
    title: "About Is7 Game – Our Story & Mission | Is7 Gaming",
    description: "Learn how Is7 Gaming became the go-to Android platform for 2M+ players worldwide with 500+ games and top-tier security.",
    url: "https://Is7gamee.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Is7 Game" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Is7 Game – Our Story & Mission | Is7 Gaming",
    description: "Learn how Is7 Gaming became the go-to Android platform for 2M+ players worldwide with 500+ games and top-tier security.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/about" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://Is7gamee.com/about" },
  ],
};

const stats = [
  { value: "2M+", label: "Downloads Worldwide" },
  { value: "4.8", label: "Average User Rating" },
  { value: "24/7", label: "Player Support" },
  { value: "500+", label: "Premium Games" },
];

const values = [
  {
    icon: "⚡",
    title: "Performance",
    description: "Every element of Is7 Game is engineered for speed. From sub-second load times to buttery-smooth animations, we obsess over performance so you never miss a beat during gameplay.",
  },
  {
    icon: "🔒",
    title: "Security",
    description: "Your safety is non-negotiable. Is7 Game employs 256-bit SSL encryption, multi-factor authentication, and isolated data servers to ensure your personal and financial information stays protected.",
  },
  {
    icon: "🔄",
    title: "Regular Updates",
    description: "Our development team ships weekly updates that introduce fresh games, squash bugs, and refine features. Is7 Game evolves with its community, never standing still.",
  },
  {
    icon: "👤",
    title: "User-Centric Design",
    description: "We build for real people, not focus groups. Every menu, button, and transition in Is7 Game is shaped by player feedback, making the interface intuitive from day one.",
  },
];

const benefits = [
  { icon: "🎮", title: "Massive Game Library", description: "Browse 500+ titles spanning slots, live dealer tables, sports wagering, card games, and arcade favorites — all curated for quality." },
  { icon: "🌍", title: "Global Community", description: "Join over two million players from dozens of countries. Compete on leaderboards, share strategies, and make friends worldwide." },
  { icon: "🎁", title: "Generous Rewards", description: "Daily login bonuses, weekly promotions, and a tiered VIP program ensure loyal players always have something extra to look forward to." },
  { icon: "📱", title: "Optimized for Mobile", description: "Designed from the ground up for Android, Is7 Game runs flawlessly on devices from budget phones to flagship tablets." },
  { icon: "💬", title: "Dedicated Support", description: "Our multilingual support team is available around the clock via in-app chat, email, and social channels — average response time under 5 minutes." },
  { icon: "🚀", title: "Constant Innovation", description: "From AI-powered game recommendations to real-time multiplayer modes, Is7 Game continuously pushes the boundaries of mobile entertainment." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Story Behind <span className="gradient-text">Is7 Game</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Built by gamers for gamers, Is7 Gaming set out to create the most accessible, feature-rich mobile entertainment platform on Android. Here is how we got here — and where we are headed next.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container px-2 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="card-static text-center p-4 p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-gray-600 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Is7 Game? */}
      <section className="section-padding bg-gray-50">
        <div className="container max-w-4xl px-2 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What is Is7 Game?</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Is7 Game started as a straightforward idea: give Android users a single destination where they can discover, download, and enjoy hundreds of premium games without jumping between fragmented app stores or questionable third-party sites. What began as a small catalog of 50 hand-picked titles has grown into a powerhouse library of over 500 games — each one tested for fairness, performance, and entertainment value.
            </p>
            <p>
              Unlike generic app marketplaces, Is7 Game is purpose-built for the gaming experience. The platform bundles a lightweight APK installer, a personalized dashboard, real-time leaderboards, and a reward engine into a single cohesive interface that weighs 71 MB. Whether you are into fast-paced arcade action, strategic card games, live-streamed table sessions, or immersive slot adventures, Is7 has a category — and a community — waiting for you.
            </p>
            <p>
              Security sits at the core of everything we build. Every data packet between your device and our servers travels through 256-bit SSL tunnels, and our authentication layer supports biometric login, OTP verification, and optional two-factor authentication. We never sell user data, and our transparent privacy policy spells out exactly what we collect and why.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container px-2 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Core Values</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Four pillars guide every decision we make — from which games enter the catalog to how we design each screen in the Is7 app.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container px-2 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Players Choose Is7 Gaming</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            From a massive game selection to round-the-clock support, these are the reasons millions of Android gamers call Is7 home.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center max-w-2xl px-2 mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Is7 Game?</h2>
          <p className="text-gray-600 mb-8">
            Download the APK, create your free account, and dive into 500+ premium games today. The Is7 community is waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTALink location="about_cta" className="btn-cta">
              Download Is7 APK
            </TrackedCTALink>
            <Link href="/features" className="btn-outline">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
