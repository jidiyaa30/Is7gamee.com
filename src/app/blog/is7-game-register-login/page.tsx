import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "How to Register & Login on Is7 Game – Complete Tutorial 2026",
  description:
    "Create your Is7 Game account and log in securely with our 2026 tutorial. Covers registration steps, login methods, password recovery, 2FA setup, and account management best practices.",
  keywords: [
    "Is7 Game register",
    "Is7 Game login",
    "create Is7 account",
    "Is7 Game sign up",
    "Is7 login help",
  ],
  openGraph: {
    title: "How to Register & Login on Is7 Game – Complete Tutorial 2026",
    description:
      "Step-by-step guide to creating your Is7 Game account, logging in, recovering passwords, and securing your profile.",
    url: "https://Is7gamee.com/blog/is7-game-register-login",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Register & Login Tutorial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game Register & Login Tutorial 2026",
    description: "Step-by-step guide to creating your Is7 Game account, logging in, and securing your profile.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/blog/is7-game-register-login" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Register & Login on Is7 Game – Complete Tutorial 2026",
  description:
    "Create your Is7 Game account and log in securely. Covers registration, login, password recovery, 2FA, and account management.",
  url: "https://Is7gamee.com/blog/is7-game-register-login",
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  author: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  publisher: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://Is7gamee.com/blog/is7-game-register-login" },
  keywords: "Is7 Game register, Is7 Game login, create Is7 account, Is7 Game sign up, Is7 login help",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://Is7gamee.com/blog" },
    { "@type": "ListItem", position: 3, name: "Register & Login", item: "https://Is7gamee.com/blog/is7-game-register-login" },
  ],
};

export default function Is7RegisterLoginPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Register &amp; Login</span>
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-sm">
            <span className="bg-primary-50 text-primary px-3 py-1 rounded-full font-medium">Tutorial</span>
            <span className="text-gray-400">June 25, 2026</span>
            <span className="text-gray-400">&#8226;</span>
            <span className="text-gray-400">6 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            How to Register &amp; Login on <span className="gradient-text">Is7 Game</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From creating your account in under 60 seconds to enabling biometric login and recovering a forgotten password — this tutorial covers every aspect of Is7 Game authentication.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* TOC */}
              <nav className="card-static p-6 rounded-xl">
                <h2 className="text-lg font-bold mb-4 text-text-primary">Table of Contents</h2>
                <ol className="space-y-2 list-decimal list-inside text-sm text-primary">
                  <li><a href="#why-create" className="hover:underline">Why Create an Is7 Account?</a></li>
                  <li><a href="#registration" className="hover:underline">Registration Step-by-Step</a></li>
                  <li><a href="#login" className="hover:underline">Login Step-by-Step</a></li>
                  <li><a href="#security" className="hover:underline">Account Security Best Practices</a></li>
                  <li><a href="#forgot-password" className="hover:underline">Forgot Password Recovery</a></li>
                  <li><a href="#account-management" className="hover:underline">Account Management Tips</a></li>
                </ol>
              </nav>

              {/* Why Create */}
              <article id="why-create">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">Why Create an Is7 Account?</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  A registered Is7 Game account is your passport to the full platform. While the app lets you browse the game catalog without signing in, an account unlocks capabilities that make the experience worthwhile:
                </p>
                <ul className="space-y-3">
                  {[
                    { title: "Cloud-Synced Progress", desc: "Your balance, achievements, VIP tier, and preferences are saved server-side. Switch devices or reinstall the app without losing a thing." },
                    { title: "Welcome Bonus Eligibility", desc: "Only registered users qualify for the first-deposit match and daily check-in rewards — the two fastest ways to build your starting balance." },
                    { title: "Referral Link Access", desc: "Your unique invite URL is generated at registration. Start sharing immediately and earn commissions from day one." },
                    { title: "Transaction History & Receipts", desc: "Every deposit, withdrawal, and bonus is logged under your account with timestamps, amounts, and status — useful for personal budgeting." },
                    { title: "Priority Customer Support", desc: "Registered accounts can open in-app support tickets with faster response times compared to guest inquiries via email." },
                  ].map((b) => (
                    <li key={b.title} className="bg-primary-50 p-4 rounded-lg">
                      <span className="font-semibold text-text-primary">{b.title}:</span>{" "}
                      <span className="text-sm text-text-secondary">{b.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Registration */}
              <article id="registration">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Registration Step-by-Step</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The entire sign-up flow takes about 45 seconds. Is7 Game uses phone-number verification instead of email to minimize friction and reduce fake accounts.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Open Is7 Game & Tap Register", desc: "Launch the app and tap the blue \"Register\" button on the welcome screen. If you already see the login form, tap \"Don't have an account? Sign up\" at the bottom." },
                    { step: 2, title: "Select Country Code & Enter Phone Number", desc: "The app auto-detects your region, but you can manually select a different country code from the dropdown. Enter your 10–12 digit mobile number — this becomes your primary login credential." },
                    { step: 3, title: "Verify via OTP", desc: "A 6-digit code arrives by SMS within 10 seconds. Type it into the verification field. If the code does not arrive, check that your phone number is correct and tap \"Resend OTP\" after the 60-second cooldown expires." },
                    { step: 4, title: "Create Your Password", desc: "Choose a password with at least 8 characters that includes uppercase letters, lowercase letters, numbers, and one special character. The on-screen strength meter turns green when your password meets all criteria." },
                    { step: 5, title: "Add a Referral Code (Optional)", desc: "If a friend invited you, paste their referral code into the optional field. Both accounts receive a sign-up bonus — the exact amount is displayed before you confirm." },
                    { step: 6, title: "Tap \"Create Account\"", desc: "Hit the confirmation button. The app creates your profile, logs you in automatically, and redirects to the main dashboard where a welcome bonus prompt awaits." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="step-number flex-shrink-0">{s.step}</div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">{s.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <TrackedCTALink location="is7_game_register_login_cta" className="btn-cta inline-block">
                    Register on Is7 Game
                  </TrackedCTALink>
                </div>
              </article>

              {/* Login */}
              <article id="login">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Login Step-by-Step</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Is7 Game supports three login methods: password, OTP, and biometric. Here is the standard password-based flow.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Launch the App", desc: "Tap the Is7 Game icon. If an update is available, a modal will prompt you to download the latest version — always update before logging in to ensure compatibility with the server." },
                    { step: 2, title: "Enter Your Phone Number", desc: "Type the mobile number you registered with. The app remembers your last-used number, so returning users often just need to confirm it." },
                    { step: 3, title: "Enter Your Password", desc: "Type your password. Use the eye icon to toggle visibility if you want to double-check for typos. After 5 failed attempts the account is temporarily locked for 15 minutes as a security measure." },
                    { step: 4, title: "Complete Two-Factor Authentication", desc: "If you have enabled 2FA, enter the 6-digit code from your authenticator app (Google Authenticator, Authy, etc.) or the SMS OTP sent to your phone. This step is skipped if 2FA is not active." },
                    { step: 5, title: "Access Your Dashboard", desc: "Tap \"Login\". Authentication completes in 1–2 seconds. You land on the dashboard showing your current balance, active promotions, and quick-access game tiles." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="step-number flex-shrink-0">{s.step}</div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">{s.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Security */}
              <article id="security">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Account Security Best Practices</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Your Is7 Game account holds real value — treat its security the same way you would an online banking profile. These five habits drastically reduce the risk of unauthorized access.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Enable Two-Factor Authentication", desc: "Go to Settings → Security → Enable 2FA. Pair with an authenticator app for the strongest protection. SMS-based 2FA is available but less secure due to SIM-swap risks." },
                    { title: "Use a Unique Password", desc: "Do not reuse a password from another service. A unique 12+ character password with mixed character types is virtually uncrackable through brute force." },
                    { title: "Review Active Sessions Weekly", desc: "Under Settings → Security → Active Sessions, you can see every device currently logged into your account. If you spot an unfamiliar device, tap \"Revoke\" immediately." },
                    { title: "Never Share Your OTP", desc: "Is7 Gaming staff will never ask for your one-time password via chat, email, or phone. Anyone requesting it is attempting a social-engineering attack." },
                    { title: "Update the App Promptly", desc: "Security patches are bundled into every release. Running an outdated version may leave known vulnerabilities unpatched. Enable auto-update or check manually each week." },
                  ].map((tip) => (
                    <div key={tip.title} className="bg-accent/10 p-5 rounded-xl">
                      <h3 className="font-semibold text-accent-dark mb-1">{tip.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Forgot Password */}
              <article id="forgot-password">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Forgot Password Recovery</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Locked out? Is7 Game&apos;s password reset flow takes under a minute and does not require contacting support.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Tap \"Forgot Password\"", desc: "On the login screen, tap the \"Forgot Password?\" link below the password field. This opens the recovery flow." },
                    { step: 2, title: "Enter Your Registered Phone Number", desc: "Type the mobile number linked to your account. The system checks that the number exists in its database before proceeding." },
                    { step: 3, title: "Verify via OTP", desc: "A 6-digit code is sent to your phone. Enter it within the 5-minute validity window. If it expires, tap \"Resend\" for a fresh code." },
                    { step: 4, title: "Set a New Password", desc: "Create a new password that meets the standard requirements (8+ characters, mixed types). The app confirms the change and redirects you to the login screen where you can sign in with your new credentials." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="step-number flex-shrink-0">{s.step}</div>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">{s.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Account Management */}
              <article id="account-management">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Account Management Tips</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Once your account is up and running, these four practices will keep it organized and optimized for the best Is7 Game experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Complete Your Profile", desc: "Add a display name and avatar in Settings → Profile. A complete profile builds trust if you participate in community leaderboards or tournaments." },
                    { title: "Set Deposit & Session Limits", desc: "Under Settings → Responsible Play, configure daily deposit caps and session-time reminders. These self-imposed limits help maintain healthy engagement habits." },
                    { title: "Link a Backup Recovery Method", desc: "Add an email address as a secondary recovery channel. If you ever lose access to your phone number, the email serves as an alternative verification path." },
                    { title: "Export Transaction History", desc: "Tap Settings → Transactions → Export CSV to download a spreadsheet of all deposits, withdrawals, and bonuses. Useful for personal record-keeping and budgeting." },
                  ].map((tip) => (
                    <div key={tip.title} className="card-static p-5 rounded-xl">
                      <h3 className="font-semibold text-text-primary mb-1">{tip.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="card p-6 rounded-xl text-center sticky top-24">
                <h3 className="text-lg font-bold text-text-primary mb-2">Get Is7 Game</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Download the app, register in 60 seconds, and claim your welcome bonus.
                </p>
                <TrackedCTALink location="is7_game_register_login_cta" className="btn-cta w-full block mb-4">
                  Download &amp; Register
                </TrackedCTALink>
                <p className="text-xs text-text-muted">Android 5.0+ &bull; 71 MB &bull; Free</p>
              </div>

              <div className="card-static p-6 rounded-xl">
                <h3 className="text-lg font-bold text-text-primary mb-4">Related Articles</h3>
                <ul className="space-y-3">
                  <li><Link href="/blog/is7-game-complete-guide" className="text-sm text-primary hover:underline">Is7 Game Complete Guide 2026</Link></li>
                  <li><Link href="/blog/is7-apk-download-android" className="text-sm text-primary hover:underline">How to Download Is7 APK on Android</Link></li>
                  <li><Link href="/blog/is7-game-security-guide" className="text-sm text-primary hover:underline">Is7 Game Security Guide</Link></li>
                  <li><Link href="/blog/is7-game-for-beginners" className="text-sm text-primary hover:underline">Is7 Game for Beginners</Link></li>
                  <li><Link href="/blog/is7-game-rewards-and-bonuses" className="text-sm text-primary hover:underline">Is7 Game Rewards and Bonuses</Link></li>
                  <li><Link href="/download" className="text-sm font-semibold text-accent-dark hover:underline">Download Is7 APK Now</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
