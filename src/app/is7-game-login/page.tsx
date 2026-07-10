import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Login – Access Your Account Securely",
  description: "Log in to your Is7 Game account. Learn about login methods, biometric authentication, password recovery, and how to keep your Is7 account secure.",
  keywords: ["Is7 Game login", "Is7 login", "Is7 Game sign in", "Is7 account login", "Is7 Game account access", "Is7 Game login 2026"],
  openGraph: {
    title: "Is7 Game Login – Access Your Account Securely",
    description: "Log in to Is7 Game. Multiple login methods, biometric support, and account security tips.",
    url: "https://Is7gamee.com/is7-game-login",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Login" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Login", description: "Access your Is7 Game account securely.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-game-login" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Game Login", item: "https://Is7gamee.com/is7-game-login" },
  ],
};

export default function Is7GameLoginPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Game Login</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game Login</span> – Access Your Account
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Already have an Is7 Game account? Log in to access your games, check your balance, claim daily rewards, and pick up right where you left off. Multiple login methods are supported for your convenience.
          </p>
          <TrackedCTALink location="is7_game_login_cta" className="btn-cta text-lg px-10 py-4">
            Open Is7 Game & Login
          </TrackedCTALink>
        </div>
      </section>

      {/* Login Methods */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Login Methods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Phone Number + Password", desc: "The standard login method. Enter your registered phone number and password on the Is7 Game login screen. This works reliably on all devices and connections.", steps: ["Open Is7 Game app", "Tap 'Login'", "Enter phone number", "Enter password", "Tap 'Sign In'"] },
              { title: "Biometric Login", desc: "For faster access, enable fingerprint or face recognition in your Is7 profile settings. After setup, a single touch or glance logs you in instantly — no need to type anything.", steps: ["Open Is7 Game app", "Tap the fingerprint icon", "Scan your fingerprint", "You're in!"] },
              { title: "OTP Login", desc: "Forgot your password? Use the OTP login option. Is7 sends a one-time code to your registered phone number, which you enter to access your account without needing your password.", steps: ["Open Is7 Game app", "Tap 'Login with OTP'", "Enter phone number", "Enter the code sent via SMS", "Access granted"] },
            ].map((method, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-3 text-primary">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.desc}</p>
                <ol className="list-decimal list-inside text-sm text-gray-500 space-y-1">
                  {method.steps.map((s, j) => <li key={j}>{s}</li>)}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Keep Your Is7 Login Secure</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { tip: "Use a Strong Password", detail: "Combine uppercase letters, lowercase letters, numbers, and special characters. Avoid using your name, birthdate, or common words. A 12+ character password is ideal." },
              { tip: "Enable Two-Factor Authentication", detail: "Go to Profile → Security → 2FA and link your phone number. Every login will require both your password and a verification code sent to your phone." },
              { tip: "Never Share Your Credentials", detail: "Is7 support will never ask for your password. Do not share login details with anyone, including friends or family members. Each person should have their own account." },
              { tip: "Log Out on Shared Devices", detail: "If you log in on someone else's phone or a public device, always log out when you are done. Go to Profile → Settings → Log Out to end your session securely." },
              { tip: "Monitor Login History", detail: "Check Profile → Security → Login History periodically. If you see logins from unfamiliar devices or locations, change your password immediately and contact support." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                <span className="text-primary font-bold text-lg flex-shrink-0">🔒</span>
                <div>
                  <h3 className="font-semibold">{item.tip}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Password Recovery */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Forgot Your Password?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">If you cannot remember your Is7 Game password, follow these steps to reset it:</p>
            <div className="space-y-4">
              {[
                "Open the Is7 Game app and tap 'Login'",
                "Tap 'Forgot Password?' below the password field",
                "Enter your registered phone number or email address",
                "Receive a 6-digit verification code via SMS or email",
                "Enter the code and create a new strong password",
                "Log in with your new password — your account and balance are intact",
              ].map((step, i) => (
                <div key={i} className="card-static flex items-center gap-4 p-4">
                  <div className="step-number flex-shrink-0">{i + 1}</div>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_game_login_cta" className="btn-primary px-8 py-3">
              Login to Is7 Game
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-login" className="btn-outline">Is7 Login</Link>
            <Link href="/is7-game-register" className="btn-outline">Register</Link>
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/is7-game-bonus" className="btn-outline">Bonuses</Link>
            <Link href="/is7-game" className="btn-outline">Is7 Game</Link>
          </div>
        </div>
      </section>
    </>
  );
}
