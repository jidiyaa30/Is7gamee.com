import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";

export const metadata: Metadata = {
  title: "Is7 Game for Beginners – Start Playing Like a Pro in 2026",
  description:
    "Complete beginner guide to Is7 Game. Learn how to create your account, navigate the app, choose games, and avoid common mistakes. Start playing like a pro today.",
  keywords: [
    "Is7 for beginners",
    "Is7 game guide",
    "Is7 new player",
    "Is7 getting started",
    "how to play Is7",
  ],
  openGraph: {
    title: "Is7 Game for Beginners – Start Playing Like a Pro in 2026",
    description:
      "Complete beginner guide to Is7 Game. Learn how to create your account, navigate the app, and start playing like a pro.",
    url: "https://Is7gamee.com/blog/is7-game-for-beginners",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Beginner Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game for Beginners – Start Playing Like a Pro in 2026",
    description: "Complete beginner guide to Is7 Game. Create your account, navigate the app, and start playing like a pro.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/blog/is7-game-for-beginners" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is7 Game for Beginners – Start Playing Like a Pro in 2026",
  description:
    "Complete beginner guide to Is7 Game. Learn how to create your account, navigate the app, choose games, and avoid common mistakes.",
  url: "https://Is7gamee.com/blog/is7-game-for-beginners",
  datePublished: "2026-05-25",
  dateModified: "2026-05-25",
  author: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  publisher: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://Is7gamee.com/blog/is7-game-for-beginners" },
  keywords: "Is7 for beginners, Is7 game guide, Is7 new player, Is7 getting started, how to play Is7",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://Is7gamee.com/blog" },
    { "@type": "ListItem", position: 3, name: "Is7 for Beginners", item: "https://Is7gamee.com/blog/is7-game-for-beginners" },
  ],
};

export default function Is7GameForBeginnersPage() {
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
            <span className="text-gray-800 font-medium">Beginner Guide</span>
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-sm">
            <span className="bg-primary-50 text-primary px-3 py-1 rounded-full font-medium">Guide</span>
            <span className="text-gray-400">May 25, 2026</span>
            <span className="text-gray-400">&#8226;</span>
            <span className="text-gray-400">8 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Game</span> for Beginners – Start Playing Like a Pro
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything a new player needs to know about Is7 Game — from creating your account to mastering the interface and picking the right games to play in 2026.
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
                  <li><a href="#what-is-is7" className="hover:underline">What is Is7 Game?</a></li>
                  <li><a href="#creating-account" className="hover:underline">Creating Your First Account</a></li>
                  <li><a href="#navigating-app" className="hover:underline">Navigating the App</a></li>
                  <li><a href="#choosing-game" className="hover:underline">Choosing Your First Game</a></li>
                  <li><a href="#game-categories" className="hover:underline">Understanding Game Categories</a></li>
                  <li><a href="#mistakes-to-avoid" className="hover:underline">Beginner Mistakes to Avoid</a></li>
                </ol>
              </nav>

              {/* What is Is7 Game */}
              <article id="what-is-is7">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">What is Is7 Game?</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Is7 Game is a comprehensive mobile gaming platform that brings together hundreds of games across multiple categories into a single, easy-to-use application. Unlike standalone game apps that each require their own download, Is7 Game acts as a unified hub where players can discover, play, and track progress across a wide variety of games — all from one account.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Launched initially as a lightweight Android app, Is7 Game has grown into one of the most popular gaming platforms in Southeast Asia and beyond. The platform is designed for both casual players who want a quick five-minute session and dedicated gamers looking for deeper, strategy-driven experiences. Every game on the platform is optimized for mobile performance, so even budget devices can run them smoothly.
                </p>
                <ul className="space-y-3">
                  {[
                    { title: "All-in-One Platform", desc: "Access hundreds of games without downloading separate apps. One account, one app, endless entertainment." },
                    { title: "Free to Get Started", desc: "Creating an account and exploring the game library costs nothing. You can browse categories, try demo modes, and learn the interface at your own pace." },
                    { title: "Cross-Device Progress", desc: "Your account data is stored on Is7 servers, so you can switch phones or reinstall the app without losing your history, preferences, or achievements." },
                    { title: "Regular Content Updates", desc: "New games and features are added weekly. The Is7 team actively listens to player feedback to prioritize the most requested additions." },
                  ].map((b) => (
                    <li key={b.title} className="bg-primary-50 p-4 rounded-lg">
                      <span className="font-semibold text-text-primary">{b.title}:</span>{" "}
                      <span className="text-sm text-text-secondary">{b.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Creating Your First Account */}
              <article id="creating-account">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Creating Your First Account</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Registration on Is7 Game takes less than two minutes. The platform keeps the sign-up process minimal so you can start exploring games as quickly as possible. Follow these steps to set up your account.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Download and Open the Is7 App", desc: "If you have not installed the app yet, download the official APK from the Is7 Game website. Once installed, tap the Is7 icon on your home screen to launch the app." },
                    { step: 2, title: "Tap \"Register\" on the Welcome Screen", desc: "The first screen presents two options: Login and Register. Tap Register to begin creating your new account. Do not use the Login button unless you already have credentials." },
                    { step: 3, title: "Enter Your Details", desc: "Provide a valid phone number or email address, create a username (3–16 characters, letters and numbers only), and set a strong password with at least 8 characters including one uppercase letter and one number." },
                    { step: 4, title: "Verify Your Identity", desc: "Is7 sends a 6-digit verification code to the phone number or email you provided. Enter the code within 5 minutes. If you do not receive it, tap \"Resend Code\" — but wait at least 60 seconds before requesting again." },
                    { step: 5, title: "Complete Your Profile", desc: "Choose a display name and avatar. These are visible to other players in leaderboards and multiplayer lobbies. You can change both later from the Settings menu." },
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

              {/* Navigating the App */}
              <article id="navigating-app">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Navigating the App</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The Is7 Game interface is built around a bottom navigation bar with five main tabs. Understanding what each tab does will help you move around the app confidently from day one.
                </p>
                <div className="overflow-x-auto">
                  <table className="info-table w-full text-sm">
                    <thead>
                      <tr className="bg-primary-100">
                        <th className="text-left p-3 font-semibold text-text-primary">Tab</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Purpose</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Key Features</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Home", "Main dashboard with featured games", "Banners, trending games, personalized picks"],
                        ["Categories", "Browse games by type", "Filters, search bar, sorting options"],
                        ["Play", "Quick-launch your recent games", "Last played list, favorites, resume session"],
                        ["Rewards", "Track bonuses and promotions", "Daily check-in, referral rewards, event prizes"],
                        ["Profile", "Manage your account settings", "Edit info, transaction history, support chat"],
                      ].map(([tab, purpose, features]) => (
                        <tr key={tab} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-text-primary">{tab}</td>
                          <td className="p-3 text-text-secondary">{purpose}</td>
                          <td className="p-3 text-text-secondary">{features}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary leading-relaxed mt-6">
                  The Home tab also features a search icon in the top-right corner. Tapping it opens a universal search that scans game titles, categories, and even help articles. If you ever feel lost, the search function is the fastest way to find what you need.
                </p>
              </article>

              {/* Choosing Your First Game */}
              <article id="choosing-game">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Choosing Your First Game</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  With hundreds of titles available, picking your first game can feel overwhelming. The best approach is to start with games that have low complexity and short session times. This lets you learn the platform mechanics — how to start a round, track results, and manage your balance — without getting bogged down in complicated rules.
                </p>
                <ul className="space-y-3">
                  {[
                    { title: "Check the Popularity Tag", desc: "Games marked as \"Popular\" or \"Trending\" on the Home tab are played by thousands of users daily. High player counts usually indicate straightforward gameplay and reliable performance." },
                    { title: "Read the Game Description", desc: "Every game has a detail page with rules, payout information, and player ratings. Spend 30 seconds reading through it before jumping in. This prevents confusion during your first round." },
                    { title: "Start with Demo Mode", desc: "Many games offer a demo or practice mode that lets you play without risking your balance. Use this to learn the interface and test strategies before committing real funds." },
                    { title: "Set a Session Timer", desc: "Is7 Game includes a built-in session timer in Settings → Responsible Gaming. Set a 15-minute reminder for your first few sessions. This helps you stay in control and evaluate the experience objectively." },
                  ].map((tip) => (
                    <li key={tip.title} className="bg-primary-50 p-4 rounded-lg">
                      <span className="font-semibold text-text-primary">{tip.title}:</span>{" "}
                      <span className="text-sm text-text-secondary">{tip.desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <TrackedCTALink location="is7_beginners_guide_mid_cta" className="btn-cta inline-block">
                    Start Playing Is7 Game
                  </TrackedCTALink>
                </div>
              </article>

              {/* Understanding Game Categories */}
              <article id="game-categories">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Understanding Game Categories</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Is7 Game organizes its library into distinct categories so you can quickly find titles that match your interests. Here is a breakdown of the main categories and what to expect from each one.
                </p>
                <div className="overflow-x-auto">
                  <table className="info-table w-full text-sm">
                    <thead>
                      <tr className="bg-primary-100">
                        <th className="text-left p-3 font-semibold text-text-primary">Category</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Game Count</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Difficulty</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Avg. Session</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Arcade & Casual", "120+", "Easy", "3–5 min"],
                        ["Card Games", "80+", "Medium", "5–10 min"],
                        ["Strategy", "45+", "Hard", "10–20 min"],
                        ["Sports & Racing", "60+", "Easy–Medium", "5–8 min"],
                        ["Multiplayer", "35+", "Medium–Hard", "10–30 min"],
                        ["Puzzle & Trivia", "50+", "Easy", "2–5 min"],
                      ].map(([cat, count, diff, session]) => (
                        <tr key={cat} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-text-primary">{cat}</td>
                          <td className="p-3 text-text-secondary">{count}</td>
                          <td className="p-3 text-text-secondary">{diff}</td>
                          <td className="p-3 text-text-secondary">{session}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary leading-relaxed mt-6">
                  For absolute beginners, we recommend starting with Arcade & Casual or Puzzle & Trivia. These categories feature the simplest mechanics and the shortest rounds, making them ideal for learning how the platform works without any pressure. Once you are comfortable, graduate to Card Games or Strategy for more engaging sessions.
                </p>
              </article>

              {/* Beginner Mistakes to Avoid */}
              <article id="mistakes-to-avoid">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Beginner Mistakes to Avoid</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Every new player makes mistakes — but you can skip the learning curve by being aware of the most common pitfalls before they happen.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Skipping the Tutorial", desc: "Many games include a short tutorial or guided first round. Skipping it might save 30 seconds, but it often leads to confusion that wastes far more time. Always complete the tutorial at least once." },
                    { title: "Ignoring the Demo Mode", desc: "Jumping straight into real-money games without practicing is the single biggest mistake beginners make. Demo mode exists specifically to help you learn the rules and test strategies risk-free." },
                    { title: "Not Setting a Budget", desc: "Before your first session, decide on a fixed amount you are comfortable with and stick to it. Is7 Game includes deposit limit tools under Settings → Responsible Gaming that enforce your budget automatically." },
                    { title: "Playing Too Many Games at Once", desc: "It is tempting to try everything in the library immediately, but spreading your attention across ten games means you master none of them. Pick two or three titles and focus on those for your first week." },
                    { title: "Forgetting to Claim Daily Rewards", desc: "Is7 Game offers daily login bonuses and periodic promotions. Many beginners forget to visit the Rewards tab. Make it a habit to check rewards every time you open the app — the bonuses accumulate significantly over time." },
                    { title: "Using Weak Passwords", desc: "Your Is7 account holds personal data and potentially funds. Use a unique password with at least 8 characters, mixing letters, numbers, and symbols. Never reuse a password from another site." },
                  ].map((item) => (
                    <div key={item.title} className="card-static p-5 rounded-xl">
                      <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="card p-6 rounded-xl text-center sticky top-24">
                <h3 className="text-lg font-bold text-text-primary mb-2">Ready to Start?</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Join thousands of players on Is7 Game. Create your free account in under 2 minutes.
                </p>
                <TrackedCTALink location="is7_beginners_guide_sidebar_cta" className="btn-cta w-full block mb-4">
                  Play Is7 Game Now
                </TrackedCTALink>
                <p className="text-xs text-text-muted">Android 5.0+ &bull; Free &bull; No credit card required</p>
              </div>

              <div className="card-static p-6 rounded-xl">
                <h3 className="text-lg font-bold text-text-primary mb-4">Related Articles</h3>
                <ul className="space-y-3">
                  <li><Link href="/blog/is7-game-complete-guide" className="text-sm text-primary hover:underline">Is7 Game Complete Guide 2026</Link></li>
                  <li><Link href="/blog/is7-apk-download-android" className="text-sm text-primary hover:underline">How to Download Is7 APK on Android</Link></li>
                  <li><Link href="/blog/is7-game-register-login" className="text-sm text-primary hover:underline">How to Register &amp; Login on Is7</Link></li>
                  <li><Link href="/blog/is7-game-tips-and-tricks" className="text-sm text-primary hover:underline">Is7 Game Tips and Tricks</Link></li>
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
