"use client";

export default function ClickableCard({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="card overflow-hidden !bg-black cursor-pointer" onClick={() => { window.open(href, "_blank"); }}>
      {children}
    </div>
  );
}
