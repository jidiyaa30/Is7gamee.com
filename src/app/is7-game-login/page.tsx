import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Game Login Security – 2FA, Sessions & Account Protection",
  description: "Protect your Is7 Game account with two-factor authentication, session management, login audit logs, biometric setup, and suspicious activity alerts. Full security guide.",
  keywords: ["Is7 Game login security", "Is7 2FA setup", "Is7 account protection", "Is7 Game session management", "Is7 biometric login", "Is7 Game login audit"],
  openGraph: {
    title: "Is7 Game Login Security – 2FA, Sessions & Account Protection",
    description: "Set up 2FA, manage active sessions, review login history, and protect your Is7 Game account from unauthorized access.",
    url: "https://Is7gamee.com/is7-game-login",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Login Security" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Game Login Security", description: "Full guide to securing your Is7 Game account.", images: ["/og-image.png"] },
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
            <span className="gradient-text">Is7 Game Login</span> – Security & Account Protection
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your Is7 Game account holds real balances and personal data — protecting it is not optional. This guide covers every security layer available to Is7 players: two-factor authentication, session management, login audit logs, biometric login setup, suspicious activity alerts, and how to quickly revoke access if something looks wrong.
          </p>
          <TrackedCTALink location="is7_game_login_cta" className="btn-cta text-lg px-10 py-4">
            Open Is7 Game & Login
          </TrackedCTALink>
        </div>
      </section>

      {/* 2FA Setup */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Setting Up Two-Factor Authentication (2FA)</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700">Two-factor authentication is the single most effective step you can take to protect your Is7 Game account. Even if someone obtains your password, they cannot log in without the second factor — the one-time code sent to your phone. Setting up 2FA takes less than two minutes.</p>
            {[
              { step: "1", title: "Open Profile Settings", desc: "Log in to Is7 Game and navigate to your Profile icon in the top right corner. Tap 'Settings', then select the 'Security' section from the menu." },
              { step: "2", title: "Enable Two-Factor Authentication", desc: "Toggle the '2FA' switch to ON. You will be prompted to confirm your current password before the change takes effect — this prevents someone else from enabling or disabling 2FA on your account." },
              { step: "3", title: "Link Your Phone Number", desc: "Enter the phone number you want to receive 2FA codes on. This can be the same number used for registration, or a separate number you consider more secure. Verify it with an OTP." },
              { step: "4", title: "Test the Setup", desc: "Log out of Is7 Game and log back in. After entering your password, you will now be prompted for a 6-digit code sent to your linked number. Enter it to confirm 2FA is working correctly." },
              { step: "5", title: "Save Backup Codes", desc: "Is7 Game generates a set of one-time backup codes during 2FA setup. Save these in a secure offline location (printed paper or a password manager). They allow you to regain access if you ever lose your phone." },
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

      {/* Session Management */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Session Management & Revoking Access</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-700 mb-6">Is7 Game lets you view and control every active session on your account. If you have ever logged in from a friend&apos;s phone, a new device, or a secondary tablet, all of those sessions remain active until you revoke them — even if you did not explicitly log out. Managing sessions closes these open doors to your account.</p>
            {[
              { tip: "View Active Sessions", detail: "Go to Profile → Security → Active Sessions. You will see a list of every device currently logged into your account, including device model, operating system, approximate location, and the date and time of the last activity." },
              { tip: "Identify Unfamiliar Devices", detail: "Scan the session list for any device you do not recognize. Pay attention to unusual locations or devices logged in at times when you were not playing. Even a session from a city you visited once should be reviewed and revoked." },
              { tip: "Revoke Individual Sessions", detail: "Tap the 'Revoke' or 'Log Out' button next to any session you want to terminate. That device will be instantly signed out and will need to enter credentials again to regain access." },
              { tip: "Revoke All Sessions at Once", detail: "If you suspect your account has been compromised, use the 'Log Out of All Devices' option at the bottom of the Active Sessions screen. This immediately terminates every session including your own current one, forcing a full re-authentication." },
              { tip: "Set Session Timeout", detail: "In Security settings, you can configure an automatic session timeout ranging from 1 hour to 30 days. Shorter timeouts reduce risk on shared or lost devices at the cost of having to log in more frequently." },
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

      {/* Login Audit Log & Suspicious Activity */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Login Audit Log & Suspicious Activity Alerts</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">The Is7 Game login audit log is your account&apos;s security history. Every successful login, failed login attempt, password change, and 2FA event is recorded with a timestamp, device fingerprint, and IP-based location. You can access the full log at Profile → Security → Login History.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { title: "What the Audit Log Shows", desc: "Each entry in your login history includes the date and time, the device type (Android phone, tablet, etc.), the approximate city and country, whether the login succeeded or was blocked, and whether 2FA was used." },
                { title: "Suspicious Activity Alerts", desc: "Is7 Game automatically flags logins from new devices, new countries, or multiple failed attempts and sends an SMS alert to your registered number. You can review and dismiss alerts from the Security section." },
                { title: "Failed Login Tracking", desc: "Repeated failed login attempts from the same IP address trigger a temporary account lock as a brute-force protection measure. You will receive an alert and can unlock your account via OTP verification." },
                { title: "What to Do If You See Unknown Logins", desc: "If your audit log shows a login you do not recognize: immediately change your password, revoke all sessions, enable or re-verify 2FA, and contact Is7 support through the in-app chat to flag the incident." },
              ].map((item, i) => (
                <div key={i} className="card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Biometric Login Setup</h2>
            <p className="text-gray-700 mb-4">Biometric login — fingerprint or face recognition — combines speed with security. Once configured, you can unlock your Is7 Game account in under a second without typing a password. Biometrics are stored locally on your device and never transmitted to Is7 servers.</p>
            <div className="space-y-3">
              {[
                "Go to Profile → Settings → Login Options",
                "Tap 'Enable Biometric Login'",
                "Authenticate once with your current password to confirm the change",
                "Follow your device prompts to register your fingerprint or face",
                "On next login, tap the biometric icon instead of typing your password",
                "Note: 2FA is still required the first time you log in on a new device, even with biometrics enabled",
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
