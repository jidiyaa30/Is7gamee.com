import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Features – 500+ Games, Security, Rewards & More",
  description: "Explore every feature that makes Is7 Game the top Android gaming platform. From a 500+ game library and 256-bit encryption to daily rewards and real-time leaderboards — see what sets Is7 apart.",
  keywords: ["Is7 Game features", "Is7 Game games", "Is7 security", "Is7 rewards", "Is7 leaderboards", "Is7 Game benefits", "Is7 Gaming features"],
  openGraph: {
    title: "Is7 Game Features – Everything You Need in One App",
    description: "500+ games, bank-level security, daily rewards, real-time leaderboards, and more. Discover what makes Is7 Game the ultimate Android gaming platform.",
    url: "https://Is7gamee.com/features",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game Features – Everything You Need in One App",
    description: "500+ games, bank-level security, daily rewards, and more. Discover Is7 Game.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/features" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many games are available on Is7 Game?",
      acceptedAnswer: { "@type": "Answer", text: "Is7 Game offers over 500 premium games across categories including slots, live dealer tables, sports betting, card games, and arcade classics. New titles are added every week." },
    },
    {
      "@type": "Question",
      name: "Is Is7 Game secure for personal data?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Is7 Game uses 256-bit SSL encryption, multi-factor authentication, and undergoes quarterly third-party security audits. The platform has a strict no-data-sale policy." },
    },
    {
      "@type": "Question",
      name: "Does Is7 Game offer daily rewards?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Is7 Game features escalating daily login bonuses, weekly promotional tournaments, a tiered VIP loyalty program, and referral rewards for inviting friends." },
    },
    {
      "@type": "Question",
      name: "What makes Is7 Game faster than other platforms?",
      acceptedAnswer: { "@type": "Answer", text: "Is7 Game is built on a native-optimized engine delivering sub-second load times and 60 fps animations. The entire APK is 71 MB with adaptive quality for older devices." },
    },
    {
      "@type": "Question",
      name: "Does Is7 Game have customer support?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Is7 Game offers 24/7 multilingual customer support via in-app live chat, email, and social media channels with an average response time under 5 minutes." },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://Is7gamee.com/features" },
  ],
};

const features = [
  {
    icon: "🎮",
    title: "500+ Premium Game Library",
    description: "Is7 Game curates a massive collection of titles spanning slots, live dealer tables, sports betting, card games, arcade classics, and more. Every game undergoes rigorous testing for fairness and performance before it reaches your screen.",
    highlights: ["New titles added every week", "Categories for every play style", "Certified RNG for fair outcomes", "Instant play — no extra downloads"],
  },
  {
    icon: "🔒",
    title: "Bank-Level Security",
    description: "Your data travels through 256-bit SSL tunnels, and our authentication stack supports biometric login, one-time passwords, and optional two-factor verification. We never sell user information, and our servers undergo quarterly penetration testing.",
    highlights: ["256-bit SSL encryption end-to-end", "Multi-factor authentication options", "Quarterly third-party security audits", "Strict no-data-sale policy"],
  },
  {
    icon: "🎁",
    title: "Daily Rewards & VIP Program",
    description: "From the moment you sign up, Is7 Game showers you with bonuses. Log in daily for escalating rewards, participate in weekly tournaments for bonus prizes, and climb the VIP ladder to unlock exclusive perks and higher cashback rates.",
    highlights: ["Escalating daily login bonuses", "Weekly promotional tournaments", "Tiered VIP loyalty program", "Referral rewards for inviting friends"],
  },
  {
    icon: "📊",
    title: "Real-Time Leaderboards",
    description: "Compete against players around the globe with live-updating leaderboards. Track your ranking, compare stats with friends, and climb seasonal ladders to earn bragging rights and exclusive rewards.",
    highlights: ["Global and regional rankings", "Seasonal competitive ladders", "Friend comparison dashboards", "Achievement badges and trophies"],
  },
  {
    icon: "⚡",
    title: "Lightning-Fast Performance",
    description: "Is7 Game is built on a native-optimized engine that delivers sub-second load times and silky 60 fps animations, even on mid-range Android hardware. The entire APK weighs 71 MB, leaving plenty of room on your device.",
    highlights: ["Sub-second game load times", "60 fps smooth animations", "71 MB total footprint", "Adaptive quality for older devices"],
  },
  {
    icon: "💬",
    title: "24/7 Multilingual Support",
    description: "Stuck on something? Our support team is online around the clock via in-app live chat, email, and social media channels. Available in multiple languages, with an average response time of under five minutes.",
    highlights: ["In-app live chat available 24/7", "Support in multiple languages", "Average reply under 5 minutes", "Comprehensive FAQ & help center"],
  },
];

const comparison = [
  { feature: "Game Library Size", is7: "500+", others: "50–200" },
  { feature: "APK File Size", is7: "71 MB", others: "100–300 MB" },
  { feature: "Daily Rewards", is7: "Yes, escalating", others: "Limited or none" },
  { feature: "Encryption Standard", is7: "256-bit SSL", others: "128-bit or none" },
  { feature: "Leaderboards", is7: "Real-time, global", others: "Static or absent" },
  { feature: "Support Availability", is7: "24/7 multilingual", others: "Business hours only" },
  { feature: "VIP Program", is7: "Multi-tier with cashback", others: "Basic or none" },
  { feature: "Update Frequency", is7: "Weekly", others: "Monthly or less" },
];

export default function FeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Features</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features of <span className="gradient-text">Is7 Game</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a world-class mobile gaming experience — packed into a single, lightweight Android app.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* Features Detail */}
      <section className="section-padding">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-16 container mx-auto px-2">
            {features.map((f, i) => (
              <div key={f.title} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="card-static p-10 text-center">
                    <span className="text-6xl">{f.icon}</span>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-3">{f.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{f.description}</p>
                  <ul className="space-y-2">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-primary mt-0.5">&#10003;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="container max-w-3xl px-2 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Is7 Game vs. the Competition</h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            See how Is7 stacks up against typical Android gaming platforms across key metrics.
          </p>
          <div className="overflow-x-auto">
            <table className="info-table w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-primary-50 font-semibold">Feature</th>
                  <th className="text-left p-4 bg-primary-50 font-semibold">Is7 Game</th>
                  <th className="text-left p-4 bg-primary-50 font-semibold">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.feature}>
                    <td className="p-4 font-medium">{c.feature}</td>
                    <td className="p-4 text-primary font-semibold">{c.is7}</td>
                    <td className="p-4 text-gray-500">{c.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl px-2 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">Everything you need to know about Is7 Game features.</p>
          <div className="space-y-4">
            {[
              { q: "How many games are available on Is7 Game?", a: "Is7 Game offers over 500 premium games across categories including slots, live dealer tables, sports betting, card games, and arcade classics. New titles are added every week." },
              { q: "Is Is7 Game secure for personal data?", a: "Yes, Is7 Game uses 256-bit SSL encryption, multi-factor authentication, and undergoes quarterly third-party security audits. The platform has a strict no-data-sale policy." },
              { q: "Does Is7 Game offer daily rewards?", a: "Yes, Is7 Game features escalating daily login bonuses, weekly promotional tournaments, a tiered VIP loyalty program, and referral rewards for inviting friends." },
              { q: "What makes Is7 Game faster than other platforms?", a: "Is7 Game is built on a native-optimized engine delivering sub-second load times and 60 fps animations. The entire APK is 71 MB with adaptive quality for older devices." },
              { q: "Does Is7 Game have customer support?", a: "Yes, Is7 Game offers 24/7 multilingual customer support via in-app live chat, email, and social media channels with an average response time under 5 minutes." },
            ].map((faq) => (
              <details key={faq.q} className="card p-5 group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center max-w-2xl px-2 mx-auto">
          <h2 className="text-3xl font-bold mb-4">Experience Every Feature Today</h2>
          <p className="text-gray-600 mb-8">
            Download Is7 Game for free and see why over 2 million Android gamers have made it their platform of choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedCTALink location="features_cta" className="btn-cta">
              Download Is7 APK
            </TrackedCTALink>
            <Link href="/about" className="btn-outline">
              Learn About Is7
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
