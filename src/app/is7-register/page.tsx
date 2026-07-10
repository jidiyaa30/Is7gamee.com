import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Register – Free Account Sign-Up with Instant Bonus",
  description: "Register on Is7 for free and receive an instant welcome bonus. This guide covers registration via phone and email, referral codes, and account verification.",
  keywords: ["Is7 register", "Is7 sign up", "Is7 create account", "Is7 registration", "Is7 new account free", "Is7 register 2026"],
  openGraph: {
    title: "Is7 Register – Free Account Sign-Up with Instant Bonus",
    description: "Create your free Is7 account and get an instant welcome bonus.",
    url: "https://Is7gamee.com/is7-register",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Register" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Register – Free Sign-Up", description: "Register on Is7 and get your welcome bonus.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-register" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Register", item: "https://Is7gamee.com/is7-register" },
  ],
};

export default function Is7RegisterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Register</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Register</span> – Your Gateway to 500+ Games
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Registration is the key that unlocks the full Is7 experience. A free account gives you access to every game, every promotion, and every feature on the platform. Sign up today and discover why half a million players trust Is7.
          </p>
          <TrackedCTALink location="is7_register_cta" className="btn-cta text-lg px-10 py-4">
            Register on Is7
          </TrackedCTALink>
        </div>
      </section>

      {/* Registration Options */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Two Ways to Register</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Phone Number Registration</h3>
              <p className="text-gray-600 mb-4">
                The most popular method. Enter your mobile number, receive an OTP via SMS, and your account is created in under a minute. Phone registration also enables features like biometric login and instant password recovery.
              </p>
              <p className="text-gray-600 text-sm">
                Supported country codes: India (+91), Philippines (+63), Thailand (+66), Vietnam (+84), Bangladesh (+880), and 20+ more.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Email Registration</h3>
              <p className="text-gray-600 mb-4">
                Prefer not to share your phone number? Register with an email address instead. You will receive a verification link that activates your account. Email registration supports Gmail, Yahoo, Outlook, and all major providers.
              </p>
              <p className="text-gray-600 text-sm">
                Note: You can add a phone number later in your profile settings to unlock SMS-based features like OTP login.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Code */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Referral Codes & Extra Bonuses</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              During registration, you will see an optional field for a referral code. If someone invited you to Is7, enter their code here to receive an enhanced welcome bonus on top of the standard package. Both you and your referrer benefit from this system.
            </p>
            <p className="text-gray-700 mb-4">
              Once you have your own Is7 account, you will receive a unique referral code in your profile. Share it with friends, family, or your social media audience. For every person who registers using your code and becomes active, you earn referral commissions — a passive income stream that grows with your network.
            </p>
            <p className="text-gray-700">
              The Is7 referral program has multiple tiers, meaning you can earn from direct referrals as well as from the people they refer. Top referrers on Is7 earn significant monthly income without playing a single game themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Account Security */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Securing Your New Account</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Strong Password", desc: "Use at least 12 characters with a mix of letters, numbers, and symbols. Avoid dictionary words and personal information." },
              { title: "Two-Factor Auth", desc: "After registration, enable 2FA in your security settings. This adds an extra verification step that blocks unauthorized login attempts." },
              { title: "Recovery Options", desc: "Add both a phone number and email to your account. Having two recovery options ensures you can always regain access if you forget your password." },
            ].map((item, i) => (
              <div key={i} className="card-static p-4">
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_register_cta" className="btn-primary px-8 py-3">
              Create Is7 Account
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-register" className="btn-outline">Is7 Game Register</Link>
            <Link href="/is7-login" className="btn-outline">Login</Link>
            <Link href="/is7-game-login" className="btn-outline">Is7 Game Login</Link>
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
