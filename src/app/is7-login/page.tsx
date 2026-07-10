import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Login – Quick & Secure Account Access",
  description: "Is7 login guide covering all access methods, session management, and multi-device login. Learn how to log in to Is7 on any Android device quickly and securely.",
  keywords: ["Is7 login", "Is7 sign in", "Is7 account access", "Is7 login help", "Is7 login Android", "Is7 login 2026"],
  openGraph: {
    title: "Is7 Login – Quick & Secure Account Access",
    description: "Complete Is7 login guide with all access methods and security tips.",
    url: "https://Is7gamee.com/is7-login",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Login" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Login Guide", description: "Log in to Is7 quickly and securely.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-login" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Login", item: "https://Is7gamee.com/is7-login" },
  ],
};

export default function Is7LoginPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Login</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Login</span> – Get Back to Your Games
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Logging in to Is7 is quick and straightforward. Whether you use a password, biometrics, or OTP, your account is always just a few taps away. This guide covers every scenario you might encounter.
          </p>
          <TrackedCTALink location="is7_login_cta" className="btn-cta text-lg px-10 py-4">
            Open Is7 & Login
          </TrackedCTALink>
        </div>
      </section>

      {/* Quick Login Guide */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is7 Login in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Open Is7 App", desc: "Tap the Is7 icon on your home screen. The app loads in 1-2 seconds and shows the login screen if you are not already signed in." },
              { step: "2", title: "Enter Credentials", desc: "Type your registered phone number and password. Or tap the biometric icon for fingerprint login, or choose OTP login for password-free access." },
              { step: "3", title: "Start Playing", desc: "Once authenticated, you land on the Is7 home screen with full access to games, balance, promotions, and settings." },
            ].map((s, i) => (
              <div key={i} className="card-static text-center p-4">
                <div className="step-number mx-auto">{s.step}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Device Login */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Multi-Device Login</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">One Account, Multiple Devices</h3>
              <p className="text-gray-700 mb-4">
                Your Is7 account can be used on multiple Android devices. Install the Is7 app on your phone and tablet, log in with the same credentials, and your balance, game history, and preferences sync automatically across all devices.
              </p>
              <p className="text-gray-700">
                For security reasons, only one active session is allowed at a time. If you log in on a second device, the first session ends automatically. This prevents unauthorized access even if someone obtains your credentials.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Session Management</h3>
              <p className="text-gray-700 mb-4">
                Is7 sessions remain active for 30 days by default. After that, you will be prompted to re-authenticate. You can also manually end your session by tapping Profile → Settings → Log Out at any time.
              </p>
              <p className="text-gray-700">
                If you suspect unauthorized access, go to Profile → Security → Active Sessions to view all logged-in devices. You can remotely terminate any session from this screen and change your password for added protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Issues FAQ */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Common Login Issues</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "I am getting 'Invalid credentials' but my password is correct", a: "Double-check your phone number including the country code. If you registered with an email, make sure you are entering the email — not a phone number. Passwords are case-sensitive, so check your caps lock." },
              { q: "OTP is not arriving", a: "Wait 60 seconds and try again. Ensure your phone has signal and is not blocking messages from unknown numbers. If the issue persists, try the email OTP option or contact Is7 support." },
              { q: "Biometric login stopped working", a: "This usually happens after an OS update or if you re-enrolled your fingerprint. Go to Is7 Settings → Security → Biometric Login and re-enable it by scanning your fingerprint again." },
              { q: "Account locked after too many attempts", a: "For security, Is7 locks accounts after 5 failed login attempts. Wait 15 minutes for the lock to expire, or use the 'Forgot Password' flow to reset your credentials immediately." },
            ].map((item, i) => (
              <div key={i} className="card-static p-4">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_login_cta" className="btn-primary px-8 py-3">
              Login to Is7
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/is7-game-login" className="btn-outline">Is7 Game Login</Link>
            <Link href="/is7-register" className="btn-outline">Register</Link>
            <Link href="/is7-game-register" className="btn-outline">Is7 Game Register</Link>
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/is7" className="btn-outline">About Is7</Link>
          </div>
        </div>
      </section>
    </>
  );
}
