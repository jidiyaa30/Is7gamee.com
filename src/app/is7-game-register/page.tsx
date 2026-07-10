import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Register – Create Your Free Account in 60 Seconds",
  description: "Register for Is7 Game in under a minute. Free account creation, OTP verification, welcome bonus included. Step-by-step registration guide with tips for new players.",
  keywords: ["Is7 Game register", "Is7 Game sign up", "Is7 Game create account", "Is7 Game registration", "Is7 Game new account", "Is7 register free"],
  openGraph: {
    title: "Is7 Game Register – Create Your Free Account in 60 Seconds",
    description: "Register for Is7 Game. Free, fast, and includes a welcome bonus.",
    url: "https://Is7gamee.com/is7-game-register",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Register" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Register – Free Account", description: "Create your Is7 Game account in 60 seconds.", images: ["/og-image.png"] },
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
            <span className="gradient-text">Is7 Game Register</span> – Join 500K+ Players
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Creating your Is7 Game account is free, takes under 60 seconds, and unlocks immediate access to 500+ premium games plus a generous welcome bonus. Here is exactly how to do it.
          </p>
          <TrackedCTALink location="is7_game_register_cta" className="btn-cta text-lg px-10 py-4">
            Register Now
          </TrackedCTALink>
        </div>
      </section>

      {/* Registration Steps */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Register for Is7 Game</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "1", title: "Open Is7 Game", desc: "Launch the Is7 app on your Android device. If you do not have it yet, download it from our official link — it is free and takes under a minute to install." },
              { step: "2", title: "Tap 'Register'", desc: "On the welcome screen, tap the 'Register' or 'Sign Up' button. This takes you to the registration form where you will enter your basic details." },
              { step: "3", title: "Enter Your Phone Number", desc: "Type your mobile phone number with the correct country code. This number will be used for account verification, password recovery, and important security notifications." },
              { step: "4", title: "Create a Password", desc: "Choose a strong password with at least 8 characters including uppercase, lowercase, numbers, and a special character. This password protects your account and financial information." },
              { step: "5", title: "Verify via OTP", desc: "Is7 sends a 6-digit verification code to your phone via SMS. Enter this code within 5 minutes to confirm your phone number is valid and belongs to you." },
              { step: "6", title: "Claim Welcome Bonus", desc: "Registration complete! Your welcome bonus is automatically credited to your account. Head to the game library to start exploring 500+ titles." },
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

      {/* What You Need */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What You Need to Register</h2>
          <div className="max-w-2xl mx-auto">
            <table className="info-table w-full">
              <tbody>
                <tr><td className="font-semibold">Mobile Phone Number</td><td>Active number that can receive SMS</td></tr>
                <tr><td className="font-semibold">Password</td><td>8+ characters, mix of types</td></tr>
                <tr><td className="font-semibold">Age Requirement</td><td>Must be 18 years or older</td></tr>
                <tr><td className="font-semibold">Cost</td><td>Completely free</td></tr>
                <tr><td className="font-semibold">Time Required</td><td>Under 60 seconds</td></tr>
                <tr><td className="font-semibold">Referral Code (Optional)</td><td>Enter a friend&apos;s code for extra bonus</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips for New Players */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Tips for New Is7 Game Players</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Complete Your Profile", desc: "Add a display name and avatar after registering. A complete profile unlocks additional trust features and may qualify you for exclusive promotions." },
              { title: "Explore Before Depositing", desc: "Use your welcome bonus to try different game categories. Find out whether you prefer slots, live tables, sports, or arcade games before committing any funds." },
              { title: "Enable Notifications", desc: "Turn on push notifications to receive alerts about daily bonuses, tournament schedules, and limited-time promotions. Many of these offers are time-sensitive." },
              { title: "Join the Community", desc: "Check out the in-app chat rooms and the official Telegram group. Other Is7 players share strategies, game recommendations, and bonus codes regularly." },
            ].map((tip, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-lg font-semibold mb-2 text-primary">{tip.title}</h3>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            ))}
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
