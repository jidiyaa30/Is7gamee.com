import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";

export const metadata: Metadata = {
  title: "Is7 Game Security Guide – How Your Data Stays Safe in 2026",
  description:
    "Learn how Is7 Game protects your data with encryption, two-factor authentication, and secure download practices. A complete security guide for Is7 players in 2026.",
  keywords: [
    "Is7 security",
    "Is7 safe",
    "is Is7 game safe",
    "Is7 data protection",
    "Is7 two-factor authentication",
  ],
  openGraph: {
    title: "Is7 Game Security Guide – How Your Data Stays Safe in 2026",
    description:
      "Complete guide to Is7 Game security: encryption, 2FA setup, privacy policies, and safe download practices.",
    url: "https://Is7gamee.com/blog/is7-game-security-guide",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Security Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game Security Guide 2026",
    description: "Complete guide to Is7 Game security: encryption, 2FA setup, privacy policies, and safe download practices.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/blog/is7-game-security-guide" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is7 Game Security Guide – How Your Data Stays Safe in 2026",
  description:
    "Learn how Is7 Game protects your data with encryption, two-factor authentication, and secure download practices. A complete security guide for players.",
  url: "https://Is7gamee.com/blog/is7-game-security-guide",
  datePublished: "2026-05-30",
  dateModified: "2026-05-30",
  author: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  publisher: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://Is7gamee.com/blog/is7-game-security-guide" },
  keywords: "Is7 security, Is7 safe, is Is7 game safe, Is7 data protection, Is7 two-factor authentication",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://Is7gamee.com/blog" },
    { "@type": "ListItem", position: 3, name: "Security Guide", item: "https://Is7gamee.com/blog/is7-game-security-guide" },
  ],
};

export default function Is7SecurityGuidePage() {
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
            <span className="text-gray-800 font-medium">Security Guide</span>
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-sm">
            <span className="bg-primary-50 text-primary px-3 py-1 rounded-full font-medium">Guide</span>
            <span className="text-gray-400">May 30, 2026</span>
            <span className="text-gray-400">&#8226;</span>
            <span className="text-gray-400">6 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Is7 Game <span className="gradient-text">Security Guide</span> – How Your Data Stays Safe
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about how Is7 Game protects your personal data, financial transactions, and account security in 2026.
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
                  <li><a href="#encryption" className="hover:underline">Encryption Standards</a></li>
                  <li><a href="#account-security" className="hover:underline">Account Security Features</a></li>
                  <li><a href="#two-factor" className="hover:underline">Two-Factor Authentication Setup</a></li>
                  <li><a href="#privacy-policy" className="hover:underline">Privacy Policy Overview</a></li>
                  <li><a href="#safe-downloads" className="hover:underline">Safe Download Practices</a></li>
                  <li><a href="#compromised" className="hover:underline">What to Do If Your Account Is Compromised</a></li>
                </ol>
              </nav>

              {/* Encryption Standards */}
              <article id="encryption">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">Encryption Standards</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Is7 Game employs industry-standard encryption protocols to ensure that every piece of data transmitted between your device and Is7 servers is unreadable to third parties. Whether you are logging in, making a deposit, or chatting with support, your information is protected by multiple layers of cryptographic security.
                </p>
                <div className="overflow-x-auto">
                  <table className="info-table w-full text-sm">
                    <thead>
                      <tr className="bg-primary-100">
                        <th className="text-left p-3 font-semibold text-text-primary">Security Layer</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Technology</th>
                        <th className="text-left p-3 font-semibold text-text-primary">What It Protects</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Data in Transit", "TLS 1.3 (256-bit)", "All communication between your device and Is7 servers"],
                        ["Data at Rest", "AES-256 Encryption", "Stored personal data, account details, and transaction records"],
                        ["Passwords", "Bcrypt Hashing + Salt", "Login credentials — even Is7 staff cannot see your password"],
                        ["Payment Data", "PCI DSS Compliance", "Credit card numbers, bank details, and payment tokens"],
                        ["API Requests", "HMAC Authentication", "Server-to-server calls that process your gameplay and transactions"],
                      ].map(([layer, tech, protects]) => (
                        <tr key={layer} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-text-primary">{layer}</td>
                          <td className="p-3 text-text-secondary">{tech}</td>
                          <td className="p-3 text-text-secondary">{protects}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary leading-relaxed mt-4">
                  These encryption standards are the same ones used by major banks and financial institutions worldwide. Is7 Game undergoes regular third-party security audits to verify that these protections remain effective against evolving threats.
                </p>
              </article>

              {/* Account Security Features */}
              <article id="account-security">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Account Security Features</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Beyond encryption, Is7 Game provides several account-level security features that give you direct control over who can access your account and how. These features work together to create a defense-in-depth approach where compromising one layer still leaves your account protected by the others.
                </p>
                <ul className="space-y-3">
                  {[
                    { title: "Strong Password Requirements", desc: "Is7 Game enforces a minimum of 8 characters with at least one uppercase letter, one number, and one special character. The system also checks your password against databases of known breached credentials and rejects any matches." },
                    { title: "Session Management", desc: "You can view all active sessions (devices currently logged into your account) from your security settings. Unrecognized sessions can be terminated with a single tap, immediately logging out the suspicious device." },
                    { title: "Login Notifications", desc: "Every time your account is accessed from a new device or IP address, Is7 Game sends an instant notification via email and in-app alert. If the login was not you, you can lock your account directly from the notification." },
                    { title: "Automatic Lockout", desc: "After five consecutive failed login attempts, the account is temporarily locked for 30 minutes. This brute-force protection makes automated password guessing attacks practically impossible." },
                    { title: "Withdrawal Confirmation", desc: "Every withdrawal request requires email verification before processing. This ensures that even if someone gains access to your account, they cannot transfer funds without also having access to your registered email address." },
                  ].map((b) => (
                    <li key={b.title} className="bg-primary-50 p-4 rounded-lg">
                      <span className="font-semibold text-text-primary">{b.title}:</span>{" "}
                      <span className="text-sm text-text-secondary">{b.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Two-Factor Authentication */}
              <article id="two-factor">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Two-Factor Authentication Setup</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Two-factor authentication (2FA) adds a second verification step to your login process. Even if someone obtains your password, they cannot access your account without the time-sensitive code generated by your authenticator app. Is7 Game supports all major TOTP-based authenticator apps. Here is how to enable it.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Open Security Settings", desc: "Log into your Is7 Game account and navigate to Settings → Security → Two-Factor Authentication. Tap \"Enable 2FA\" to begin the setup process." },
                    { step: 2, title: "Install an Authenticator App", desc: "If you do not already have one, download Google Authenticator, Microsoft Authenticator, or Authy from your device's app store. All three are free and work identically with Is7 Game." },
                    { step: 3, title: "Scan the QR Code", desc: "Is7 Game will display a QR code on screen. Open your authenticator app, tap the add (+) button, and scan the code. The app will immediately begin generating 6-digit codes that refresh every 30 seconds." },
                    { step: 4, title: "Enter the Verification Code", desc: "Type the current 6-digit code from your authenticator app into the Is7 Game confirmation field. This verifies that the pairing was successful and your app is generating valid codes." },
                    { step: 5, title: "Save Your Backup Codes", desc: "Is7 Game will provide a set of one-time backup codes. Save these in a secure location — a password manager, a printed sheet in a safe, or an encrypted note. If you lose access to your authenticator app, these codes are your only way back into your account." },
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
                  <TrackedCTALink location="is7_security_guide_cta" className="btn-cta inline-block">
                    Secure Your Is7 Account Now
                  </TrackedCTALink>
                </div>
              </article>

              {/* Privacy Policy */}
              <article id="privacy-policy">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Privacy Policy Overview</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Is7 Game is committed to transparency about how your data is collected, used, and stored. The full privacy policy is available on the platform, but here are the key points every player should understand.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Data Collection Is Minimal", desc: "Is7 Game collects only the information necessary to operate your account: email address, username, and payment details for transactions. The platform does not collect or store unnecessary personal information like physical addresses or government IDs unless required by regulatory compliance in your jurisdiction." },
                    { title: "No Data Selling to Third Parties", desc: "Your personal information is never sold, rented, or traded to advertisers or data brokers. Is7 Game generates revenue through its platform services, not through data monetization. Third-party integrations (like payment processors) receive only the minimum data required to complete a specific transaction." },
                    { title: "Data Retention Periods", desc: "Account data is retained for the duration of your active membership plus a legally mandated retention period (typically 5 years for financial records). After this period, data is permanently deleted from all systems, including backups." },
                    { title: "Right to Deletion", desc: "You can request complete deletion of your account and all associated data at any time through Settings → Account → Delete Account. The deletion process is irreversible and completed within 30 days, with confirmation sent to your registered email." },
                    { title: "Cookie Usage", desc: "Is7 Game uses essential cookies for session management and optional analytics cookies to improve platform performance. Analytics cookies can be disabled in your browser settings without affecting functionality. No tracking cookies from third-party advertising networks are used." },
                  ].map((item) => (
                    <div key={item.title} className="card-static p-5 rounded-xl">
                      <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Safe Downloads */}
              <article id="safe-downloads">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Safe Download Practices</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Since Is7 Game distributes its mobile app as a direct APK download, it is important to follow safe download practices to ensure you are installing the genuine, unmodified application. Fake or repackaged APKs are a common attack vector used by malicious actors to distribute malware.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Download Only from Is7gamee.com", desc: "The official Is7 Game website is the only authorized distribution channel. Do not download the APK from third-party app stores, APK mirror sites, or file-sharing platforms. Even if the file appears identical, repackaged APKs can contain hidden malware that is invisible during installation." },
                    { title: "Verify the File Size and Name", desc: "The official Is7 Game APK is approximately 71 MB and named with a recognizable pattern (e.g., Is7Game-latest.apk). If the file you downloaded is significantly smaller or larger, or has an unusual filename, delete it immediately and re-download from the official source." },
                    { title: "Keep Play Protect Enabled", desc: "Google Play Protect scans all APK installations — even those from outside the Play Store. Ensure it remains enabled at all times (Settings → Security → Google Play Protect). It provides an additional verification layer that can catch known malware signatures." },
                    { title: "Update Promptly", desc: "Security patches are included in every Is7 Game update. When a new version is available, install it as soon as possible. Running outdated versions leaves your device exposed to vulnerabilities that have already been identified and fixed in newer releases." },
                  ].map((tip) => (
                    <div key={tip.title} className="bg-accent/10 p-5 rounded-xl">
                      <h3 className="font-semibold text-accent-dark mb-1">{tip.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* What to Do If Compromised */}
              <article id="compromised">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">What to Do If Your Account Is Compromised</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  If you suspect unauthorized access to your Is7 Game account — unexpected login notifications, balance changes you did not make, or password reset emails you did not request — act immediately. Speed is critical to limiting potential damage. Follow these steps in order.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Change Your Password Immediately", desc: "Go to Settings → Security → Change Password. Choose a completely new password that you have never used on any other platform. If you cannot log in because the attacker changed your password, use the \"Forgot Password\" flow to reset it via your registered email." },
                    { step: 2, title: "Terminate All Active Sessions", desc: "Navigate to Settings → Security → Active Sessions and tap \"Log Out All Devices\". This immediately invalidates every active session, forcing anyone using your account — including the attacker — to re-authenticate." },
                    { step: 3, title: "Enable Two-Factor Authentication", desc: "If you did not have 2FA enabled, set it up now using the steps in the section above. If you already had 2FA and were still compromised, reset your 2FA by generating a new QR code and re-pairing your authenticator app." },
                    { step: 4, title: "Contact Is7 Support", desc: "Reach out to Is7 Game's support team through the in-app chat or the official support email. Report the incident, provide details about the unauthorized activity, and request a security review of your account. The support team can freeze transactions and investigate the breach." },
                    { step: 5, title: "Check Your Email Security", desc: "Since your Is7 Game account is tied to your email address, a compromised email account can lead to a compromised gaming account. Change your email password, enable 2FA on your email, and review recent email login activity for signs of unauthorized access." },
                    { step: 6, title: "Monitor Your Account for 30 Days", desc: "After securing your account, watch for any unusual activity over the next month. Check your transaction history, login logs, and notification center regularly. If you notice anything suspicious, contact support again immediately." },
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
                  <TrackedCTALink location="is7_security_guide_cta" className="btn-cta inline-block">
                    Protect Your Is7 Account
                  </TrackedCTALink>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="card p-6 rounded-xl text-center sticky top-24">
                <h3 className="text-lg font-bold text-text-primary mb-2">Secure Your Account</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Enable 2FA and set a strong password to keep your Is7 Game account safe.
                </p>
                <TrackedCTALink location="is7_security_guide_cta" className="btn-cta w-full block mb-4">
                  Get Started Securely
                </TrackedCTALink>
                <p className="text-xs text-text-muted">256-bit encryption &bull; 2FA supported &bull; 24/7 support</p>
              </div>

              <div className="card-static p-6 rounded-xl">
                <h3 className="text-lg font-bold text-text-primary mb-4">Related Articles</h3>
                <ul className="space-y-3">
                  <li><Link href="/blog/is7-game-complete-guide" className="text-sm text-primary hover:underline">Is7 Game Complete Guide 2026</Link></li>
                  <li><Link href="/blog/is7-game-register-login" className="text-sm text-primary hover:underline">How to Register &amp; Login on Is7</Link></li>
                  <li><Link href="/blog/is7-apk-download-android" className="text-sm text-primary hover:underline">How to Download Is7 APK on Android</Link></li>
                  <li><Link href="/blog/is7-game-tips-and-tricks" className="text-sm text-primary hover:underline">Is7 Game Tips and Tricks</Link></li>
                  <li><Link href="/blog/is7-game-update-whats-new" className="text-sm text-primary hover:underline">Is7 Game Update - What's New</Link></li>
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
