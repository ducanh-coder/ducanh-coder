"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems: Array<{ href: string; label: string }> = [
  { href: "/", label: "Trang chủ" },
  { href: "/huong-dan", label: "Hướng dẫn" },
  { href: "/tai-game", label: "Tải game" },
  { href: "/su-kien", label: "Sự kiện" },
  { href: "/bang-xep-hang", label: "Bảng xếp hạng" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto h-14 px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          NRO Community
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={
                  `px-3 py-1.5 rounded-md transition-colors ` +
                  (isActive
                    ? "bg-foreground text-background"
                    : "hover:bg-foreground/10")
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
