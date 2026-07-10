import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Register – Account Tiers, Verification & Registration Benefits",
  description: "Understand Is7 Game account types, what KYC verification unlocks, registration bonuses by day, age verification rules, and the multi-account policy before you register.",
  keywords: ["Is7 Game register", "Is7 Game account tiers", "Is7 Game verification", "Is7 Game KYC", "Is7 register benefits", "Is7 Game premium account"],
  openGraph: {
    title: "Is7 Game Register – Account Tiers, Verification & Registration Benefits",
    description: "Learn what each Is7 Game account tier unlocks, how KYC verification works, and what bonuses you earn across your first 7 days.",
    url: "https://Is7gamee.com/is7-game-register",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Register" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Register – Account Types & Benefits", description: "Everything to know about Is7 Game account tiers, verification, and registration bonuses.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-register" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Register", item: "https://Is7gamee.com/is7-game-register" },
  ],
};

export default function Is7GameRegisterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Register</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Register</span> – Account Types & Benefits
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Not all Is7 Game accounts are the same. Understanding the difference between account tiers — Basic, Verified, and Premium — before you register helps you plan your verification, maximize your registration bonuses, and know exactly what privileges you are earning as you progress. This guide covers everything you need to know.
          </p>
          <TrackedCTALink location="is7_game_register_cta" className="btn-cta text-lg px-10 py-4">
            Register Now
          </TrackedCTALink>
        </div>
      </section>

      {/* Account Tiers */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is7 Game Account Tiers Explained</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700">Is7 Game uses a three-tier account system designed to balance accessibility for new players with enhanced privileges for those who complete identity verification. Each tier unlocks progressively more platform features and higher financial limits.</p>
            {[
              { step: "1", title: "Basic Account (Registration Only)", desc: "A Basic account is created the moment you complete phone number registration and OTP verification. It gives you immediate access to the full game library, daily bonus claims, and the referral system. However, Basic accounts have capped daily withdrawal limits and cannot access certain high-limit game tables. This tier is ideal for players who want to explore the platform before committing to full verification." },
              { step: "2", title: "Verified Account (KYC Complete)", desc: "Upgrading to Verified status requires submitting a government-issued ID (national ID card, passport, or driver's license) and completing a short selfie verification. Once approved — typically within 24 hours — your withdrawal limits increase significantly, you gain access to exclusive Verified-only promotions, and your account is eligible for higher-stakes tournaments. Verified accounts also receive priority customer support." },
              { step: "3", title: "Premium Account (VIP Tier)", desc: "Premium status is earned through sustained activity and cumulative deposit volume on the platform. Is7 Game reviews accounts monthly and upgrades qualifying players automatically — there is no application process. Premium players receive a dedicated account manager, personalised bonus offers, the fastest withdrawal processing times (often under 1 hour), and invitations to private high-stakes events not available to other tiers." },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="step-number flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KYC & Age Verification */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">KYC Process & Age Verification</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6">Know Your Customer (KYC) verification is a one-time process that unlocks Verified account benefits. Is7 Game is required by its operating license to verify player identities and confirm that all users are of legal gambling age (18 years or older). The process is straightforward and your documents are handled with strict data security protocols.</p>
            <table className="info-table w-full">
              <tbody>
                <tr><td className="font-semibold">Accepted ID Documents</td><td>National ID card, passport, or driver&apos;s license</td></tr>
                <tr><td className="font-semibold">Selfie Requirement</td><td>A clear photo of your face holding your ID document</td></tr>
                <tr><td className="font-semibold">Minimum Age</td><td>18 years or older (enforced via date of birth on ID)</td></tr>
                <tr><td className="font-semibold">Review Time</td><td>Typically under 24 hours, often within 2-4 hours</td></tr>
                <tr><td className="font-semibold">Document Security</td><td>AES-256 encrypted, never shared with third parties</td></tr>
                <tr><td className="font-semibold">Re-verification</td><td>Not required unless account details change</td></tr>
              </tbody>
            </table>
            <p className="text-gray-600 mt-4 text-sm">If your KYC submission is rejected, Is7 Game support will notify you of the specific reason (blurry image, expired document, name mismatch, etc.) and you can resubmit corrected documents within your account dashboard.</p>
          </div>
        </div>
      </section>

      {/* Registration Bonus Timeline */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Registration Bonus Timeline: Days 1 to 7</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">Is7 Game rewards new players throughout their first full week on the platform, not just at the moment of signup. Understanding this timeline helps you plan deposits and logins to capture every bonus available to you.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Day 1 – Welcome Bonus", desc: "Make your first deposit on Day 1 to trigger the welcome bonus. This is your largest single bonus and is proportional to your deposit amount. The bonus funds are credited instantly and can be used across all game categories." },
                { title: "Day 2 – Daily Login Reward", desc: "Simply logging in on Day 2 of your registration week earns a daily login bonus. These are smaller than the welcome bonus but add up quickly if you log in consistently. You will find them auto-credited in your wallet." },
                { title: "Day 3 – First Referral Bonus Window", desc: "By Day 3, your referral link is fully active and any friends you have invited who sign up and deposit during your first week contribute to a boosted referral commission rate that applies for the full 7-day window." },
                { title: "Day 4-5 – Mid-Week Top-Up Offer", desc: "Is7 Game sends a mid-week deposit bonus offer to new players on Days 4 or 5. The offer appears as a notification in-app and via SMS. It typically provides a 30-50% match on a secondary deposit during this window." },
                { title: "Day 6 – Tournament Entry Unlock", desc: "New player tournaments become available from Day 6 onwards. These are beginner-bracket competitions with guaranteed prize pools funded by Is7 Game. Entry is free for players in their first 30 days." },
                { title: "Day 7 – Week-One Loyalty Reward", desc: "Completing seven consecutive days of activity earns a loyalty reward specific to your first week. This is credited automatically on the morning of Day 8 and varies based on your total activity during the week." },
              ].map((tip, i) => (
                <div key={i} className="card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-primary">{tip.title}</h3>
                  <p className="text-gray-600">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Multi-Account Policy</h3>
            <p className="text-gray-700">Is7 Game enforces a strict one-account-per-person policy. Each player may hold only one active account, tied to a unique phone number and verified identity. Creating multiple accounts to claim registration bonuses more than once is considered bonus abuse and will result in all associated accounts being permanently banned and balances forfeited. If you already have an account and cannot access it, use the account recovery process rather than registering again.</p>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_register_cta" className="btn-primary px-8 py-3">
              Register for Is7 Game
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-register" className="btn-outline">Is7 Register</Link>
            <Link href="/is7-game-login" className="btn-outline">Login</Link>
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Welcome Bonus</Link>
            <Link href="/is7-game-play" className="btn-outline">How to Play</Link>
          </div>
        </div>
      </section>
    </>
  );
}
