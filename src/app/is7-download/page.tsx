import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Is7 Download – Fastest Way to Get Is7 on Your Phone",
  description: "Is7 download page with speed optimization tips, mirror availability, and post-install configuration. Get Is7 running on your Android device in record time.",
  keywords: ["Is7 download", "Is7 download link", "Is7 download free", "Is7 download Android", "Is7 download fast"],
  openGraph: {
    title: "Is7 Download – Fastest Way to Get Is7 on Your Phone",
    description: "Speed-optimized Is7 download with tips and post-install configuration.",
    url: "https://Is7gamee.com/is7-download",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Is7 Download" }],
  },
  twitter: { card: "summary_large_image", title: "Is7 Download – Fast & Free", description: "Get Is7 on your phone in under 2 minutes.", images: ["/og-image.png"] },
  alternates: { canonical: "https://Is7gamee.com/is7-download" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://Is7gamee.com" },
    { "@type": "ListItem", position: 2, name: "Is7 Download", item: "https://Is7gamee.com/is7-download" },
  ],
};

export default function Is7DownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Is7 Download</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Is7 Download</span> – Quick & Reliable
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get Is7 downloaded and running on your Android device as fast as possible. This guide focuses on speed — the optimal download settings, the fastest server links, and quick-start configuration tips.
          </p>
          <TrackedCTALink location="is7_download_cta" className="btn-cta text-lg px-10 py-4">
            Download Is7 Now
          </TrackedCTALink>
        </div>
      </section>

      {/* Speed Tips */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Download Speed Optimization</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Use 5 GHz Wi-Fi", desc: "If your router supports dual-band Wi-Fi, connect to the 5 GHz network for significantly faster download speeds. The 2.4 GHz band is more prone to interference from other devices and appliances." },
              { title: "Close Background Apps", desc: "Other apps consuming bandwidth (streaming, cloud sync, social media) can slow your Is7 download. Close unnecessary apps or enable airplane mode with Wi-Fi only for the fastest possible transfer." },
              { title: "Try a Different Browser", desc: "If your default browser is slow, try Firefox or Opera. These browsers have built-in download managers that can resume interrupted downloads and may offer faster throughput." },
              { title: "Download During Off-Peak Hours", desc: "Server load varies throughout the day. Downloading during early morning or late night hours in your timezone typically results in the fastest speeds from the Is7 content delivery network." },
            ].map((tip, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-lg font-semibold mb-2 text-primary">{tip.title}</h3>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Config */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Post-Download Quick Configuration</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              After installing Is7, these configuration tweaks will give you the best experience from day one:
            </p>
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Setting</th>
                  <th className="text-left font-semibold p-3">Recommended Value</th>
                  <th className="text-left font-semibold p-3">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Graphics Quality</td><td>Auto</td><td>Lets Is7 detect your hardware and set optimal rendering</td></tr>
                <tr><td>Notifications</td><td>Enabled</td><td>Never miss bonus drops, tournament alerts, or updates</td></tr>
                <tr><td>Biometric Login</td><td>Enabled</td><td>Faster login and added security layer</td></tr>
                <tr><td>Language</td><td>Your preference</td><td>Is7 supports English, Hindi, Filipino, Thai, Vietnamese</td></tr>
                <tr><td>Sound Effects</td><td>On</td><td>Enhanced gaming immersion (adjustable per-game)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Download Is7 */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Download Is7?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "500+ Games", desc: "One download unlocks an entire gaming universe — slots, live casino, sports, arcade, cards, and lottery games." },
              { title: "Daily Rewards", desc: "Log in every day to collect free bonuses, spins, and credits. Streak bonuses amplify your rewards over time." },
              { title: "Secure Platform", desc: "256-bit SSL encryption, certified RNGs, and 24/7 monitoring ensure a safe and fair gaming environment." },
            ].map((item, i) => (
              <div key={i} className="card-static text-center p-4">
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="is7_download_cta" className="btn-primary px-8 py-3">
              Download Is7
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/download-is7" className="btn-outline">Download Is7 Guide</Link>
            <Link href="/is7-apk" className="btn-outline">Is7 APK</Link>
            <Link href="/is7-game-download" className="btn-outline">Is7 Game Download</Link>
            <Link href="/is7-game-latest-version" className="btn-outline">Latest Version</Link>
            <Link href="/is7-game-update" className="btn-outline">Update Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
