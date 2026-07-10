"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { trackCTAClick, trackNavClick } from "@/lib/gtag";

const CTA_LINK = "https://share-rxapq9cajg.raja7.org/web/share/index.html?ic=AA0RWJKX&ts=1783675200&m=2&lang=en&id=1";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
];

const allRoutes = [
  "/", "/download", "/about", "/features", "/blog",
  "/blog/is7-game-complete-guide",
  "/blog/is7-apk-download-android",
  "/blog/is7-game-register-login",
  "/is7", "/is7-game", "/is7-gaming", "/is7-gamers",
  "/is7-apk", "/is7-game-apk", "/is7-apk-download",
  "/is7-game-download", "/is7-game-login", "/is7-game-register",
  "/is7-game-app", "/is7-game-2026", "/is7-game-android",
  "/is7-app-download", "/is7-login", "/is7-register",
  "/download-is7", "/is7-game-online", "/is7-game-play",
  "/is7-game-bonus", "/is7-game-install", "/is7-game-free",
  "/is7-game-latest-version", "/is7-game-update",
  "/is7-download", "/is7-game-apk-download", "/is7-game-rewards",
  "/is7-game-apk-2026", "/is7-game-features", "/is7-game-guide",
  "/is7-game-review", "/is7-game-signup",
  "/privacy-policy", "/disclaimer",
];

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const mainTimer = setTimeout(() => {
      allRoutes.forEach((route, index) => {
        const routeTimer = setTimeout(() => {
          router.prefetch(route);
        }, index * 100);
        timers.push(routeTimer);
      });
    }, 5000);

    return () => {
      clearTimeout(mainTimer);
      timers.forEach(clearTimeout);
    };
  }, [router]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light shadow-sm relative">
      <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 py-2 relative">
        <div className="flex items-center justify-between h-10">
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
            onClick={() => trackCTAClick("header_logo")}
          >
            <Image
              src="/logo.webp"
              alt="Is7 Game Official Logo - Download Is7 APK"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              priority
            />
            <span className="text-lg font-bold text-text-primary tracking-tight">
              Is7<span className="text-primary">Game</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200"
                onClick={() => trackNavClick(link.name)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-cta !py-2.5 !px-5 !text-sm !rounded-lg"
              onClick={() => trackCTAClick("header_download_btn")}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
