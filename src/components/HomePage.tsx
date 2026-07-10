import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ClickableCard from "./ClickableCard";
import FaqAccordion from "./FaqAccordion";
import TrackedCTALink from "./TrackedCTALink";

const infoRows = [
  { label: "App Name", value: "Is7 Game APK" },
  { label: "Version", value: "2.1.5 (Latest 2026)" },
  { label: "App Size", value: "71 MB" },
  { label: "Platform", value: "Android 5.0+" },
  { label: "Game Library", value: "500+ Premium Titles" },
  { label: "Sign-Up Bonus", value: "Rs. 500 Free" },
  { label: "Login Method", value: "Mobile Number / Email" },
  { label: "Withdrawal", value: "UPI, Net Banking, IMPS" },
  { label: "Updates", value: "Weekly New Content" },
  { label: "Security", value: "256-bit SSL Encrypted" },
];

const benefits = [
  { icon: "🎮", title: "500+ Games Available" },
  { icon: "⚡", title: "Instant Account Setup" },
  { icon: "🎨", title: "Sleek Mobile Interface" },
  { icon: "🚀", title: "Lightning-Fast Loading" },
  { icon: "🔄", title: "Weekly Game Updates" },
  { icon: "🎁", title: "Daily Reward System" },
  { icon: "👤", title: "Beginner Friendly" },
  { icon: "🔒", title: "Bank-Level Security" },
  { icon: "🌐", title: "Multi-Language Support" },
  { icon: "💎", title: "VIP Loyalty Program" },
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    title: "60-Second Registration",
    desc: "Create your Is7 Game account in under a minute. No lengthy forms, no waiting — just enter your details and start playing immediately.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Military-Grade Security",
    desc: "Your account is protected with 256-bit SSL encryption and multi-factor authentication. Play with total peace of mind.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Smart Game Dashboard",
    desc: "Navigate effortlessly through 500+ games with intelligent categories, search filters, and personalized recommendations.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Generous Bonus System",
    desc: "Welcome bonuses, daily login rewards, VIP cashback, referral commissions, and seasonal mega-events keep the excitement alive.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Built for Android",
    desc: "Engineered from scratch for Android devices. Optimized for battery life, low data usage, and smooth performance even on mid-range phones.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Instant Transactions",
    desc: "Deposits reflect in seconds. Withdrawals are processed within minutes — not hours. Supports e-wallets, bank transfers, and crypto.",
  },
];

const testimonials = [
  { quote: "The Is7 Apk is small in size, easy to download, and runs smoothly on my device.", name: "Rahul K.", city: "New Delhi" },
  { quote: "I loved the Is7 Yono integration. The ₹500 sign-up bonus is amazing and really got me started.", name: "Priya S.", city: "Mumbai" },
  { quote: "Referral program works really well. I invited 3 friends and started getting rewards immediately.", name: "Amit R.", city: "Bangalore" },
  { quote: "The Is7 Wheel keeps me engaged every day. Simple yet entertaining with real rewards.", name: "Sneha M.", city: "Kolkata" },
  { quote: "Withdrawal process is super fast. I received my money within hours of requesting it.", name: "Vikram J.", city: "Chennai" },
  { quote: "The variety of games is impressive. I never get bored as there's always something new to try.", name: "Neha T.", city: "Hyderabad" },
];

const exploreTopics = [
  { title: "Is7 Wheel", desc: "The Is7 Wheel is the most engaging part of the app. Users can spin daily to unlock rewards, bonuses, and offers. It's designed with vibrant colors and smooth animations for an enjoyable experience." },
  { title: "Is7 Rummy", desc: "Some users refer to Is7 Rummy because of the multiple mini-games inside the app. This variation adds card-style gameplay features, allowing users to enjoy rummy-style games alongside the spin wheel." },
  { title: "Is7 Yono Login", desc: "The Is7 Yono Login makes sign-up and verification easy. You can log in with your number and access all features securely. The login process is streamlined for quick access to your account." },
  { title: "Is7 Online Free", desc: "The Is7 Online Free Game allows you to test and enjoy the app without making any deposits. It's a great way to explore the features and games before deciding to play with real money." },
  { title: "Is7 Game", desc: "Some versions of the app include a Is7 Game, which adds variety and makes it more entertaining. This slot-style game offers additional chances to win rewards and keeps the gaming experience fresh." },
  { title: "Is7 Bonus", desc: "The Is7 Bonus system includes not only the ₹500 sign-up bonus but also daily login rewards, referral bonuses, and special event bonuses. These incentives make playing even more rewarding." },
];

const faqs = [
  {
    q: "What is Is7 Game and how does it work?",
    a: "Is7 Game is a premium Android gaming platform offering 500+ games across categories like slots, live tables, sports, and arcade. Download the APK, create a free account, and start playing instantly.",
  },
  {
    q: "Is Is7 Game free to download and use?",
    a: "Yes, the Is7 Game APK is completely free to download and install. Creating an account costs nothing, and new players receive a welcome bonus to get started.",
  },
  {
    q: "How do I create an Is7 Game account?",
    a: "Open the Is7 app, tap Register, enter your mobile number or email, set a password, verify via OTP, and your account is ready in under 60 seconds.",
  },
  {
    q: "Is my personal information safe on Is7 Game?",
    a: "Absolutely. Is7 Game uses 256-bit SSL encryption, secure servers, and multi-factor authentication to protect all user data and transactions.",
  },
  {
    q: "What devices are compatible with Is7 Game?",
    a: "Is7 Game runs on any Android device with Android 5.0 or higher, at least 2GB RAM, and 71 MB of free storage. It is optimized for both phones and tablets.",
  },
  {
    q: "How do I login to Is7 Game?",
    a: "Use your registered mobile number and password to login. Is7 Game also supports OTP-based login for quick access. If you forget your password, use the forgot password option to reset it.",
  },
  {
    q: "Can I withdraw my bonus money from Is7 Game?",
    a: "Bonus usage depends on the app terms. Usually, bonus amounts must be wagered before withdrawal. Check the Is7 Game app for current bonus terms and withdrawal requirements.",
  },
  {
    q: "Is Is7 Game available on the Play Store?",
    a: "Currently, Is7 Game is available via direct APK download from the official website. This allows faster updates and the full feature set without Play Store restrictions.",
  },
  {
    q: "What payment methods does Is7 Game support?",
    a: "Is7 Game supports UPI (PhonePe, GPay, Paytm), Net Banking, and IMPS for both deposits and withdrawals. Transactions are fast, secure, and have no hidden charges.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-4 pb-2 sm:py-2 sm:py-4relative">
          <div className="text-center mx-auto">
            <Image
              src="/is7-game.webp"
              alt="Is7 Game - Premium Android Gaming Platform APK Download"
              width={180}
              height={180}
              className="w-[100px] sm:w-[180px] mx-auto mb-6 drop-shadow-2xl animate-fade-in sm:pt-10"
              priority
            />
            <span className="inline-block px-2 sm:px-4 py-1.5 rounded-full bg-white/20 text-black text-sm font-medium mb-3 sm:mb-4 animate-fade-in backdrop-blur-sm">
              Is7 Game &bull; Is7 APK &bull; Is7 Gaming
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight mb-4 sm:mb-6 animate-slide-up">
              Is7 Game – The Ultimate Android Gaming Platform with 500+ Premium Games
            </h1>
            <p className="text-sm sm:text-xl text-black leading-relaxed mb-4 sm:mb-5 animate-slide-up delay-200 mx-auto">
              Experience next-level mobile gaming with Is7. Download the Is7 APK, register in 60 seconds, and unlock daily rewards, exclusive bonuses, and a massive game library — all optimized for your Android device.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
              <TrackedCTALink location="hero_download_btn" className="btn-cta !text-lg !py-3 sm:!py-4 !px-10 !bg-white !text-white !shadow-xl hover:!bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Is7 APK Free
              </TrackedCTALink>
              <Link href="/features" className="btn-outline !border-[#dc2626] !text-[#dc2626] hover:!bg-white hover:!text-primary !text-lg !py-2 sm:!py-4 !px-10">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 22C384 25 480 40 576 48C672 55 768 55 864 48C960 40 1056 25 1152 22C1248 20 1344 30 1392 35L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Info Table */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-4relative">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Is7 Game at a Glance
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Everything you need to know about the Is7 Game platform — quick overview of key details.
            </p>
          </div>
          <div className="card-static overflow-hidden">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Detail</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                {infoRows.map((row) => (
                  <tr key={row.label}>
                    <td className="font-medium text-text-primary">{row.label}</td>
                    <td className="text-text-secondary">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <TrackedCTALink location="info_table_download_btn" className="btn-cta !text-lg !py-4 !px-10 w-full sm:w-auto justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Get Is7 Game Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5 relative">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              App Preview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Is7 Game App Screenshots
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Take a look inside the Is7 Game app — explore referral rewards, VIP bonuses, game providers, and more.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { src: "/img/1.jpg", alt: "Is7 Game app home screen with games and features" },
              { src: "/img/2.jpg", alt: "Is7 Game jackpot ranking leaderboard with daily, weekly, and monthly rewards" },
              { src: "/img/3.jpg", alt: "Is7 Game APK download screen for Android devices" },
              { src: "/img/4.jpg", alt: "Is7 Game login and registration screen" },
            ].map((img, i) => (
              <ClickableCard key={i} href="https://share-rxapq9cajg.raja7.org/web/share/index.html?ic=AA0RWJKX&ts=1783675200&m=2&lang=en&id=1">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                  loading="lazy"
                />
              </ClickableCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5  relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
                Why Is7 Game
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-5">
                What Makes Is7 Game the #1 Choice for Mobile Gamers
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Is7 Game was built from the ground up as a mobile-first gaming platform. Unlike bloated desktop ports, every pixel of the Is7 interface is designed for touch screens, optimized for battery life, and engineered to run smoothly on devices from budget to flagship.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4 sm:mb-6">
                With 500+ games updated weekly, a daily reward engine that keeps players engaged, and bank-level security protecting every transaction, Is7 Game delivers an experience that rivals top-tier gaming platforms worldwide.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Is7
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.slice(0, 6).map((b, i) => (
                <div key={i} className="card p-5 text-center">
                  <span className="text-2xl mb-2 block">{b.icon}</span>
                  <p className="text-sm font-medium text-text-primary">{b.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5  relative">
          <div className="text-center mb-5">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              Powerful Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Why Thousands Choose Is7 Game Every Day
            </h2>
            <p className="text-text-secondary mx-auto">
              From instant registration to lightning-fast payouts — here is what sets Is7 Game apart from every other platform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-7 group">
                <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/features" className="btn-outline">
              View All Features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Download & Registration Guide */}
      <section className="section-padding hero-gradient-soft">
        <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5  relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
                Getting Started
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 sm:mb-6">
                How to Download Is7 Game APK
              </h2>
              <div className="space-y-4">
                {[
                  "Tap the download button to get the latest Is7 APK.",
                  "Allow installation from unknown sources in Settings.",
                  "Open the downloaded file and tap Install.",
                  "Launch Is7 Game and create your free account.",
                  "Claim your welcome bonus and start playing!",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="step-number">{i + 1}</div>
                    <p className="text-text-secondary pt-2">{step}</p>
                  </div>
                ))}
              </div>
              <TrackedCTALink location="guide_download_btn" className="btn-cta mt-8 inline-flex">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Is7 APK Now
              </TrackedCTALink>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-5 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Is7 Game Login
              </h3>
              <div className="card-static p-6 mb-8">
                <ol className="space-y-3">
                  {[
                    "Open the Is7 Game application.",
                    "Enter your registered mobile number or email.",
                    "Type your password or OTP verification code.",
                    "Tap the Login button.",
                    "Access your personalized game dashboard.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-5 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Is7 Game Registration
              </h3>
              <div className="card-static p-6">
                <ol className="space-y-3">
                  {[
                    "Open Is7 Game and tap Register.",
                    "Enter your mobile number or email address.",
                    "Create a strong password.",
                    "Verify your identity via OTP.",
                    "Complete registration and claim your welcome bonus.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent-dark text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hindi Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5">
          <p className="text-text-secondary text-center leading-relaxed">
            👉 ऊपर दिए गए सभी चरणों का पालन करके, आप सफलतापूर्वक Is7 Game एप्लिकेशन के अंदर एक खाता बना सकते हैं और ₹500 साइन-अप बोनस प्राप्त कर सकते हैं। Is7 APK डाउनलोड करें, रजिस्टर करें, और तुरंत खेलना शुरू करें। Is7 Game भारत का सबसे लोकप्रिय गेमिंग प्लेटफॉर्म है जो 500+ प्रीमियम गेम्स, दैनिक रिवॉर्ड्स, और सुरक्षित लेनदेन प्रदान करता है।
          </p>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5  relative">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent-dark text-sm font-medium mb-4">
              Rewards & Bonuses
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Is7 Game Rewards That Keep You Coming Back
            </h2>
            <p className="text-text-secondary mx-auto">
              Is7 Game offers one of the most generous reward systems in mobile gaming. Here is what awaits you.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🎉", label: "Welcome Bonus" },
              { icon: "📅", label: "Daily Login Rewards" },
              { icon: "🤝", label: "Refer & Earn" },
              { icon: "💎", label: "VIP Cashback" },
              { icon: "🎊", label: "Festival Events" },
              { icon: "🏆", label: "Tournament Prizes" },
            ].map((r, i) => (
              <div key={i} className="card p-5 text-center">
                <span className="text-3xl mb-3 block">{r.icon}</span>
                <p className="text-sm font-semibold text-text-primary">{r.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-muted mt-6">
            Promotions are updated regularly. Check the Is7 Game app for the latest offers and eligibility.
          </p>
        </div>
      </section>

      {/* How Is7 Works */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5 relative">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              How Is7 Game Works
            </h2>
            <p className="text-text-secondary mx-auto">
              Start earning in just 5 simple steps — from registration to withdrawal.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { step: "1", icon: "📝", title: "Register", desc: "Sign up using your mobile number" },
              { step: "2", icon: "🎉", title: "Get Bonus", desc: "Receive Rs.500 sign-up bonus instantly" },
              { step: "3", icon: "🎮", title: "Play Games", desc: "Choose from 500+ premium games" },
              { step: "4", icon: "✅", title: "Complete Tasks", desc: "Earn daily rewards and bonuses" },
              { step: "5", icon: "💸", title: "Withdraw", desc: "Cash out via UPI or bank transfer" },
            ].map((s) => (
              <div key={s.step} className="card p-5 text-center">
                <span className="text-3xl mb-2 block">{s.icon}</span>
                <p className="text-sm font-bold text-text-primary mb-1">{s.title}</p>
                <p className="text-xs text-text-secondary">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deposit & Withdrawal */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5 relative">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent-dark text-sm font-medium mb-4">
              Payments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Is7 Game Deposit & Withdrawal Methods
            </h2>
            <p className="text-text-secondary mx-auto">
              Fast, secure, and hassle-free transactions with multiple payment options.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">💳</span> Deposit Methods
              </h3>
              <ul className="space-y-3">
                {[
                  { method: "UPI", detail: "PhonePe, GPay, Paytm" },
                  { method: "Net Banking", detail: "All major banks supported" },
                  { method: "IMPS", detail: "Instant bank transfer" },
                ].map((p) => (
                  <li key={p.method} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-text-primary">{p.method}</span>
                    <span className="text-text-secondary">{p.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted mt-4">Instant deposits with no hidden charges</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">💸</span> Withdrawal Methods
              </h3>
              <ul className="space-y-3">
                {[
                  { method: "UPI Transfer", detail: "Credited within minutes" },
                  { method: "Bank Transfer", detail: "Direct to your account" },
                  { method: "IMPS", detail: "Fast & secure payout" },
                ].map((p) => (
                  <li key={p.method} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-text-primary">{p.method}</span>
                    <span className="text-text-secondary">{p.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted mt-4">No hidden charges — minimum withdrawal limits apply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-4relative">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Pro Tips for Is7 Game Players
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🔐", tip: "Enable two-factor authentication for maximum account security." },
              { icon: "🔄", tip: "Update Is7 Game weekly to access new games and performance improvements." },
              { icon: "📖", tip: "Read bonus terms carefully — wagering requirements vary by promotion." },
              { icon: "🛡️", tip: "Never share your login credentials or OTP with anyone." },
              { icon: "✅", tip: "Only download the Is7 APK from Is7gamee.com or the official link." },
              { icon: "🎮", tip: "Set a daily time limit to enjoy gaming responsibly." },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-4 card-static p-5">
                <span className="text-xl">{t.icon}</span>
                <p className="text-text-secondary font-medium">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              User Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              What Users Say About Is7 Game
            </h2>
            <p className="text-text-secondary mx-auto">
              Read genuine reviews from our users who have experienced the Is7 App
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-6">
                <p className="text-text-secondary italic text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More About Is7 */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent-dark text-sm font-medium mb-4">
              Learn More
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Explore More About Is7
            </h2>
            <p className="text-text-secondary mx-auto">
              Learn about the various features and versions of Is7 App
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {exploreTopics.map((topic, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2">{topic.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-4relative">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Frequently Asked Questions About Is7 Game
            </h2>
            <p className="text-text-secondary">
              Quick answers to the most common questions about Is7 Game, Is7 APK download, and account management.
            </p>
          </div>
          <Suspense fallback={<div className="text-center text-text-muted py-8">Loading FAQs...</div>}>
            <FaqAccordion faqs={faqs} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
