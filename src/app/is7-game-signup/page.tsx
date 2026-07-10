import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Signup – Create Your Account in Minutes",
  description: "Sign up for Is7 Game with this step-by-step walkthrough. Learn about registration requirements, verification, welcome bonuses, and how to get started playing immediately.",
  keywords: ["Is7 Game signup", "Is7 signup", "Is7 Game registration", "create Is7 account", "Is7 Game sign up 2026", "Is7 Game new account"],
  openGraph: {
    title: "Is7 Game Signup – Create Your Account in Minutes",
    description: "Complete Is7 Game signup guide. Create your account, verify, and start playing in minutes.",
    url: "https://Is7gamee.com/is7-game-signup",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Signup" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Signup", description: "Sign up for Is7 Game — quick and easy registration walkthrough.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-signup" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Signup", item: "https://Is7gamee.com/is7-game-signup" },
  ],
};

export default function Is7GameSignupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Signup</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Signup</span> – Your Account Awaits
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Creating an Is7 Game account is fast, free, and straightforward. In under two minutes, you will have a fully verified account ready to play, deposit, and earn rewards. This walkthrough covers every step of the Is7 Game signup process so you know exactly what to expect — no surprises, no hidden requirements.
          </p>
          <TrackedCTALink location="is7_game_signup_cta" className="btn-cta text-lg px-10 py-4">
            Sign Up for Is7 Game Now
          </TrackedCTALink>
        </div>
      </section>

      {/* Signup Steps */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is7 Game Signup Process: Step by Step</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { title: "Download the Is7 Game App", detail: "Visit the official Is7 Game website or use the download link on this page. The APK file is lightweight (under 30MB) and installs on any Android device running version 5.0 or later. You will need to enable 'Install from Unknown Sources' in your device settings if you have not already." },
                { title: "Open the App and Tap Register", detail: "Launch Is7 Game after installation. On the welcome screen, you will see options for both Login and Register. Tap 'Register' to begin creating your new account. The registration form is clean and requires only essential information." },
                { title: "Enter Your Phone Number", detail: "Type your active mobile phone number. This number will be used for account verification, login, and password recovery. Make sure it is a number you have permanent access to, as it becomes your primary account identifier on Is7 Game." },
                { title: "Create a Strong Password", detail: "Choose a password that is at least eight characters long and includes a mix of uppercase letters, lowercase letters, numbers, and special characters. Avoid using your name, birthdate, or simple sequences. A strong password protects your balance and personal data." },
                { title: "Enter a Referral Code (Optional)", detail: "If someone referred you to Is7 Game, enter their referral code in the designated field. Both you and the referrer will receive bonuses when you complete your first deposit. If you do not have a referral code, you can skip this step — you will still receive the standard welcome bonus." },
                { title: "Verify via OTP", detail: "After submitting the registration form, Is7 Game sends a one-time password (OTP) to your phone number via SMS. Enter the six-digit code within 60 seconds to verify your account. If the code does not arrive, tap 'Resend OTP' after the countdown expires." },
                { title: "Account Created — Start Playing", detail: "Once verified, your Is7 Game account is fully active. You are automatically logged in and taken to the home screen where you can explore game modes, make your first deposit, and claim your welcome bonus." },
              ].map((step, i) => (
                <div key={i} className="card-static flex items-center gap-4 p-4">
                  <div className="step-number flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get After Signup */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What You Get After Signing Up</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Welcome Bonus", desc: "Every new Is7 Game account receives a welcome bonus upon first deposit. This bonus effectively doubles your initial balance, giving you extra room to explore games and develop your strategy without risking too much of your own money." },
              { title: "Your Referral Link", desc: "Immediately after signup, you receive a unique referral link in your profile. Share this link with friends, family, or on social media. When someone signs up through your link and makes a deposit, you earn a commission on their activity — and this extends across multiple referral tiers." },
              { title: "Full Platform Access", desc: "From the moment your account is verified, you have access to every feature Is7 Game offers: all game modes, the wallet system for deposits and withdrawals, daily bonus claims, tournament entries, and the VIP rewards program. There are no locked features or premium tiers required to start." },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Signup FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Is Is7 Game signup free?", a: "Yes, creating an Is7 Game account is completely free. You only spend money when you choose to make a deposit to play games. Registration itself has no cost." },
              { q: "Can I sign up with an email instead of a phone number?", a: "Currently, Is7 Game requires a phone number for registration and verification. This provides stronger security than email-based accounts and enables instant OTP verification." },
              { q: "What if I do not receive the OTP?", a: "Wait for the 60-second countdown to expire, then tap 'Resend OTP.' Ensure your phone has network coverage and that your SMS inbox is not full. If the issue persists, contact Is7 Game support through the in-app chat." },
              { q: "Can I create multiple accounts?", a: "Each phone number can only be associated with one Is7 Game account. Creating multiple accounts violates the platform's terms of service and may result in all accounts being suspended." },
              { q: "Is my personal information safe?", a: "Is7 Game uses AES-256 encryption for all data transmissions and stores personal information on secure servers. Your phone number and account details are never shared with third parties." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-primary-100 rounded-lg">
                <span className="text-primary font-bold text-lg flex-shrink-0">Q</span>
                <div>
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_signup_cta" className="btn-primary px-8 py-3">
              Create Your Is7 Game Account
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-login" className="btn-outline">Login</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/is7-game-guide" className="btn-outline">Game Guide</Link>
            <Link href="/is7-game-review" className="btn-outline">Review</Link>
          </div>
        </div>
      </section>
    </>
  );
}
