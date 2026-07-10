export const GA_ID = "G-Y8BLDY3B8Z";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

export function trackCTAClick(location: string) {
  trackEvent("cta_click", {
    event_category: "engagement",
    event_label: location,
    link_url: "https://share-rxapq9cajg.raja7.org/web/share/index.html?ic=AA0RWJKX&ts=1783675200&m=2&lang=en&id=1",
  });
}

export function trackExternalLink(url: string, location: string) {
  trackEvent("external_link_click", {
    event_category: "outbound",
    event_label: location,
    link_url: url,
  });
}

export function trackNavClick(page: string) {
  trackEvent("navigation_click", {
    event_category: "navigation",
    event_label: page,
  });
}
