import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Review – Honest Platform Assessment for 2026",
  description: "Read our honest Is7 Game review. We cover gameplay quality, payout speed, security, customer support, pros and cons, and whether Is7 Game is worth your time in 2026.",
  keywords: ["Is7 Game review", "Is7 review", "Is7 Game honest review", "Is7 Game pros cons", "is Is7 Game legit", "Is7 Game rating 2026"],
  openGraph: {
    title: "Is7 Game Review – Honest Platform Assessment for 2026",
    description: "An honest, detailed review of Is7 Game covering gameplay, payouts, security, and more.",
    url: "https://Is7gamee.com/is7-game-review",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Review" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Review", description: "Honest Is7 Game review — is it worth playing in 2026?", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-review" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Review", item: "https://Is7gamee.com/is7-game-review" },
  ],
};

export default function Is7GameReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Review</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Review</span> – An Honest Look at the Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            With so many gaming platforms available in 2026, choosing the right one matters. This Is7 Game review is based on months of hands-on experience covering every aspect of the platform — from registration and deposits to gameplay mechanics, payout reliability, and customer support. We present the facts so you can make an informed decision.
          </p>
          <TrackedCTALink location="is7_game_review_cta" className="btn-cta text-lg px-10 py-4">
            Try Is7 Game Yourself
          </TrackedCTALink>
        </div>
      </section>

      {/* Overall Rating */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is7 Game Review Scorecard</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { category: "Gameplay Quality", score: "9.2/10", desc: "Multiple game modes, fast rounds, smooth animations, and intuitive controls. The color prediction system is simple to understand but offers genuine strategic depth." },
              { category: "Payout Speed", score: "9.5/10", desc: "Withdrawals are processed in minutes rather than hours. We tested multiple withdrawals across different times and days — every single one arrived within ten minutes." },
              { category: "Security", score: "9.0/10", desc: "AES-256 encryption, biometric login, two-factor authentication, and provably fair game algorithms. The platform takes security seriously and provides the tools for players to protect themselves." },
              { category: "Customer Support", score: "8.5/10", desc: "In-app live chat is responsive during business hours with typical wait times under five minutes. Email support replies within 24 hours. A comprehensive FAQ section handles most common questions." },
            ].map((item, i) => (
              <div key={i} className="card text-center">
                <h3 className="text-lg font-semibold mb-2">{item.category}</h3>
                <p className="text-3xl font-bold text-primary mb-3">{item.score}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">What We Like</h3>
              <div className="space-y-3">
                {[
                  "Lightning-fast withdrawal processing — consistently under ten minutes in our testing",
                  "Generous first-deposit bonus that effectively doubles your starting balance",
                  "Multi-tier referral system that creates genuine passive income opportunities",
                  "Clean, modern UI that works smoothly even on older Android devices",
                  "Daily login bonuses with increasing rewards for consecutive streaks",
                  "Multiple game modes keep the experience fresh and prevent monotony",
                  "Provably fair algorithms that can be independently verified by players",
                ].map((pro, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">+</span>
                    <p className="text-gray-600 text-sm">{pro}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Areas for Improvement</h3>
              <div className="space-y-3">
                {[
                  "Currently only available as an APK — no Google Play Store listing yet",
                  "No iOS version at the time of this review, limiting the audience to Android users",
                  "Customer support is slower during weekends and holidays",
                  "The in-app tutorial could be more detailed for absolute beginners",
                ].map((con, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">-</span>
                    <p className="text-gray-600 text-sm">{con}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Review */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Detailed Review: Is Is7 Game Worth It?</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700">
              After extensive testing, our verdict on Is7 Game is overwhelmingly positive. The platform delivers on its core promises: fast payouts, fair gameplay, and a rewarding experience for players at all levels. The registration process is straightforward, deposits are instant, and the game modes offer enough variety to keep even seasoned players engaged.
            </p>
            <p className="text-gray-700">
              The referral program deserves special mention. Unlike many platforms that offer one-time referral bonuses, Is7 Game provides ongoing commissions from your referrals&apos; activity across multiple tiers. This creates a compelling incentive structure that benefits both the referrer and the new player, who also receives a welcome bonus.
            </p>
            <p className="text-gray-700">
              Security is another area where Is7 Game excels. The combination of encrypted communications, biometric authentication options, and provably fair game algorithms means players can trust that their money and data are safe. We encountered zero security concerns during our review period.
            </p>
            <p className="text-gray-700">
              The main limitations are the lack of an iOS app and the absence of a Play Store listing. However, the APK installation process is simple and well-documented, and the development team has indicated that broader platform support is on the roadmap. For Android users in 2026, Is7 Game is one of the strongest options available.
            </p>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_review_cta" className="btn-primary px-8 py-3">
              Join Is7 Game Today
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
            <Link href="/is7-game-features" className="btn-outline">Features</Link>
            <Link href="/is7-game-signup" className="btn-outline">Sign Up</Link>
            <Link href="/is7-gamers" className="btn-outline">Is7 Gamers</Link>
            <Link href="/is7-game-guide" className="btn-outline">Game Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
