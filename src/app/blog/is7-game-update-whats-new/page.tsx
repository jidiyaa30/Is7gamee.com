import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";

export const metadata: Metadata = {
  title: "Is7 Game Latest Update – What's New in Version 2026",
  description:
    "Discover everything new in the latest Is7 Game update. New games, performance improvements, UI changes, bug fixes, and how to update your app to the newest version.",
  keywords: [
    "Is7 update",
    "Is7 latest version",
    "Is7 new version",
    "Is7 game update 2026",
    "Is7 changelog",
  ],
  openGraph: {
    title: "Is7 Game Latest Update – What's New in Version 2026",
    description:
      "Full breakdown of the latest Is7 Game update — new games, performance boosts, UI refresh, and critical bug fixes.",
    url: "https://Is7gamee.com/blog/is7-game-update-whats-new",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Game Latest Update 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is7 Game Latest Update – What's New in Version 2026",
    description: "Full breakdown of the latest Is7 Game update — new games, performance boosts, and bug fixes.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://Is7gamee.com/blog/is7-game-update-whats-new" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is7 Game Latest Update – What's New in Version 2026",
  description:
    "Discover everything new in the latest Is7 Game update. New games, performance improvements, UI changes, bug fixes, and how to update.",
  url: "https://Is7gamee.com/blog/is7-game-update-whats-new",
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  author: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  publisher: { "@type": "Organization", name: "Is7 Gaming", url: "https://Is7gamee.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://Is7gamee.com/blog/is7-game-update-whats-new" },
  keywords: "Is7 update, Is7 latest version, Is7 new version, Is7 game update 2026, Is7 changelog",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://Is7gamee.com/blog" },
    { "@type": "ListItem", position: 3, name: "Latest Update", item: "https://Is7gamee.com/blog/is7-game-update-whats-new" },
  ],
};

export default function Is7GameUpdateWhatsNewPage() {
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
            <span className="text-gray-800 font-medium">Latest Update</span>
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-sm">
            <span className="bg-primary-50 text-primary px-3 py-1 rounded-full font-medium">News</span>
            <span className="text-gray-400">May 20, 2026</span>
            <span className="text-gray-400">&#8226;</span>
            <span className="text-gray-400">5 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Is7 Game Latest Update – What&apos;s New in <span className="gradient-text">Version 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A complete breakdown of every change in the newest Is7 Game release — from fresh titles and performance upgrades to UI improvements and critical bug fixes.
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
                  <li><a href="#update-highlights" className="hover:underline">Update Highlights</a></li>
                  <li><a href="#new-games" className="hover:underline">New Games Added</a></li>
                  <li><a href="#performance" className="hover:underline">Performance Improvements</a></li>
                  <li><a href="#ui-changes" className="hover:underline">UI Changes</a></li>
                  <li><a href="#bug-fixes" className="hover:underline">Bug Fixes</a></li>
                  <li><a href="#how-to-update" className="hover:underline">How to Update</a></li>
                </ol>
              </nav>

              {/* Update Highlights */}
              <article id="update-highlights">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">Update Highlights</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The 2026 update is the largest release in Is7 Game history. The development team spent over four months reworking core systems, adding new content, and addressing player feedback collected through in-app surveys and community forums. Here are the headline numbers.
                </p>
                <ul className="space-y-3">
                  {[
                    { title: "18 New Games", desc: "The biggest single-update content drop ever, spanning four categories including the brand-new Multiplayer Tournaments section." },
                    { title: "40% Faster Load Times", desc: "A complete rewrite of the asset-loading pipeline means games launch significantly faster, especially on devices with 3 GB of RAM or less." },
                    { title: "Redesigned Navigation", desc: "The bottom navigation bar, game detail pages, and settings menu have been visually refreshed with cleaner layouts and improved accessibility." },
                    { title: "23 Bug Fixes", desc: "Every reported crash, display glitch, and connectivity issue from the previous three months has been resolved in this release." },
                  ].map((b) => (
                    <li key={b.title} className="bg-primary-50 p-4 rounded-lg">
                      <span className="font-semibold text-text-primary">{b.title}:</span>{" "}
                      <span className="text-sm text-text-secondary">{b.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* New Games Added */}
              <article id="new-games">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">New Games Added</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  This update introduces 18 new titles across multiple categories. Each game has been tested internally for over six weeks before release to ensure stability and fair gameplay. Below is the full list organized by category.
                </p>
                <div className="overflow-x-auto">
                  <table className="info-table w-full text-sm">
                    <thead>
                      <tr className="bg-primary-100">
                        <th className="text-left p-3 font-semibold text-text-primary">Game Title</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Category</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Players</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Session Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Dragon Spin Deluxe", "Arcade", "Single", "3–5 min"],
                        ["Neon Poker Pro", "Card Games", "2–6", "8–15 min"],
                        ["Speed Rally 2026", "Racing", "Single", "4–6 min"],
                        ["Trivia Champions", "Puzzle & Trivia", "1–4", "5–10 min"],
                        ["Battle Royale Mini", "Multiplayer", "2–8", "10–20 min"],
                        ["Lucky Dice Masters", "Arcade", "Single", "2–4 min"],
                        ["Chess Blitz Online", "Strategy", "2", "5–10 min"],
                        ["Golden Slots VIP", "Arcade", "Single", "3–5 min"],
                        ["Football Fever 26", "Sports", "Single", "5–8 min"],
                      ].map(([title, cat, players, session]) => (
                        <tr key={title} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-text-primary">{title}</td>
                          <td className="p-3 text-text-secondary">{cat}</td>
                          <td className="p-3 text-text-secondary">{players}</td>
                          <td className="p-3 text-text-secondary">{session}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary leading-relaxed mt-6">
                  The remaining 9 titles are rolling out in phases over the next two weeks. Players will receive an in-app notification each time a new batch becomes available. All 18 games will be fully accessible by June 5, 2026.
                </p>
              </article>

              {/* Performance Improvements */}
              <article id="performance">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Performance Improvements</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Performance was the number-one request in the 2026 player survey. The engineering team responded by reworking three core subsystems that directly affect how fast the app feels in daily use.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Asset Loading Pipeline", desc: "Games previously loaded all visual assets before the first frame rendered. The new system uses progressive loading — you see the game interface within 1.2 seconds while background assets stream in. Average launch time dropped from 3.4 seconds to 2.0 seconds across all tested devices." },
                    { title: "Memory Management", desc: "The app now uses 28% less RAM during active gameplay. On devices with 2–3 GB of RAM, this eliminates the out-of-memory crashes that affected approximately 4% of sessions in the previous version. The improvement comes from smarter texture compression and aggressive garbage collection during scene transitions." },
                    { title: "Network Optimization", desc: "API calls between the app and Is7 servers are now batched and compressed. Login time dropped from 2.1 seconds to 0.8 seconds on 4G connections. Game state synchronization — the delay between making a move and seeing the server confirm it — improved from 340ms to 120ms on average." },
                    { title: "Battery Consumption", desc: "A new frame-rate limiter caps idle screens at 30 FPS instead of the previous 60 FPS. During active gameplay, the app maintains full frame rate. Players can expect 15–20% longer play sessions on a single charge compared to the previous version." },
                  ].map((item) => (
                    <div key={item.title} className="card-static p-5 rounded-xl">
                      <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* UI Changes */}
              <article id="ui-changes">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">UI Changes</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The visual refresh in this update focuses on clarity and accessibility. The goal was not to change the app for the sake of change, but to solve specific usability problems players reported over the past six months.
                </p>
                <ul className="space-y-3">
                  {[
                    { title: "Simplified Bottom Navigation", desc: "The navigation bar now uses larger icons with text labels beneath each one. In user testing, this reduced mis-taps by 35% and helped new players find features without guessing what abstract icons meant." },
                    { title: "Dark Mode Support", desc: "Is7 Game finally supports system-level dark mode. The app reads your device preference and switches themes automatically. You can also force light or dark mode manually from Settings → Display." },
                    { title: "Improved Game Cards", desc: "Game thumbnails on the Home and Categories screens are now 20% larger with visible player-count badges and difficulty indicators. This lets you evaluate a game at a glance without opening its detail page." },
                    { title: "Accessibility Enhancements", desc: "All interactive elements now meet WCAG 2.1 AA contrast ratios. Font sizes scale with your device accessibility settings. Screen reader support has been added to all main navigation flows." },
                    { title: "Refreshed Color Palette", desc: "The primary brand color has been subtly adjusted for better readability on AMOLED screens. Button states (hover, active, disabled) are now more visually distinct, reducing accidental taps on inactive elements." },
                  ].map((change) => (
                    <li key={change.title} className="bg-accent/10 p-5 rounded-xl">
                      <h3 className="font-semibold text-accent-dark mb-1">{change.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{change.desc}</p>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Bug Fixes */}
              <article id="bug-fixes">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Bug Fixes</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  This release resolves 23 confirmed bugs. Below are the most impactful fixes that affected the largest number of players.
                </p>
                <div className="overflow-x-auto">
                  <table className="info-table w-full text-sm">
                    <thead>
                      <tr className="bg-primary-100">
                        <th className="text-left p-3 font-semibold text-text-primary">Issue</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Impact</th>
                        <th className="text-left p-3 font-semibold text-text-primary">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["App crash on login with slow 3G connections", "High – affected 4% of users", "Fixed"],
                        ["Game history not loading past 30 days", "Medium – data display error", "Fixed"],
                        ["Push notifications arriving twice", "Low – cosmetic annoyance", "Fixed"],
                        ["Profile avatar reset after app update", "Medium – affected returning users", "Fixed"],
                        ["Rewards tab showing expired promotions", "Low – visual inconsistency", "Fixed"],
                        ["Audio continuing after switching to another app", "Medium – battery drain", "Fixed"],
                        ["Deposit confirmation delayed by 10+ seconds", "High – transaction flow", "Fixed"],
                        ["Search results not updating when clearing filters", "Low – usability friction", "Fixed"],
                      ].map(([issue, impact, status]) => (
                        <tr key={issue} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-text-primary">{issue}</td>
                          <td className="p-3 text-text-secondary">{impact}</td>
                          <td className="p-3 text-green-600 font-medium">{status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary leading-relaxed mt-6">
                  If you encounter any new issues after updating, report them through the in-app support chat (Profile → Help → Live Chat). The team typically acknowledges reports within 2 hours during business hours.
                </p>
              </article>

              {/* How to Update */}
              <article id="how-to-update">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">How to Update</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Updating Is7 Game takes less than two minutes. Since the app is distributed as a direct APK, the process is slightly different from Play Store apps — but it is straightforward.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Check Your Current Version", desc: "Open Is7 Game and go to Profile → Settings → About. Your current version number is displayed at the top. If it reads \"2026.5.0\" or higher, you are already on the latest release." },
                    { step: 2, title: "Download the Latest APK", desc: "Visit the official Is7 Game website and tap the Download button. The site always serves the latest version. The file is approximately 71 MB — slightly larger than previous versions due to the new game assets included." },
                    { step: 3, title: "Install Over the Existing App", desc: "Tap the downloaded APK file. Android will detect the existing installation and offer to update it. Tap \"Install\" — your account data, preferences, and history are fully preserved during the update." },
                    { step: 4, title: "Relaunch and Verify", desc: "Open the updated app and return to Profile → Settings → About to confirm the version number has changed. The first launch after an update may take 5–10 seconds longer than usual as the app migrates local data to the new format." },
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
                  <TrackedCTALink location="is7_update_whats_new_cta" className="btn-cta inline-block">
                    Download Latest Is7 Update
                  </TrackedCTALink>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="card p-6 rounded-xl text-center sticky top-24">
                <h3 className="text-lg font-bold text-text-primary mb-2">Get the Latest Version</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Update to the newest Is7 Game with 18 new games, faster performance, and dark mode.
                </p>
                <TrackedCTALink location="is7_update_whats_new_sidebar_cta" className="btn-cta w-full block mb-4">
                  Update Now
                </TrackedCTALink>
                <p className="text-xs text-text-muted">Android 5.0+ &bull; 71 MB &bull; Free</p>
              </div>

              <div className="card-static p-6 rounded-xl">
                <h3 className="text-lg font-bold text-text-primary mb-4">Related Articles</h3>
                <ul className="space-y-3">
                  <li><Link href="/blog/is7-game-complete-guide" className="text-sm text-primary hover:underline">Is7 Game Complete Guide 2026</Link></li>
                  <li><Link href="/blog/is7-apk-download-android" className="text-sm text-primary hover:underline">How to Download Is7 APK on Android</Link></li>
                  <li><Link href="/blog/is7-vs-other-gaming-platforms" className="text-sm text-primary hover:underline">Is7 vs Other Gaming Platforms</Link></li>
                  <li><Link href="/blog/is7-game-tips-and-tricks" className="text-sm text-primary hover:underline">Is7 Game Tips and Tricks</Link></li>
                  <li><Link href="/blog/how-to-install-is7-on-android" className="text-sm text-primary hover:underline">How to Install Is7 on Android</Link></li>
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
