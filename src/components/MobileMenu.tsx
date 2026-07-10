"use client";

import { useState } from "react";
import Link from "next/link";
import { trackCTAClick, trackNavClick } from "@/lib/gtag";

const CTA_LINK = "https://share-rxapq9cajg.raja7.org/web/share/index.html?ic=AA0RWJKX&ts=1783675200&m=2&lang=en&id=1";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
];

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 rounded-lg text-text-secondary hover:bg-surface transition-colors"
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {mobileOpen && (
        <div className="md:hidden border-t border-border-light animate-slide-down absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => { trackNavClick(link.name + "_mobile"); setMobileOpen(false); }}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-50 transition-all"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center btn-cta !rounded-lg mt-2"
              onClick={() => trackCTAClick("mobile_download_btn")}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
          </div>
        </div>
      )}
    </>
  );
}
