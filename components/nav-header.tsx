"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavHeader() {
  const pathname = usePathname()

  const navItems = [
    { label: "Trang Chủ", href: "/" },
    { label: "Lý Thuyết", href: "/theory" },
    { label: "Trực Quan", href: "/visualizer" },
    { label: "Code", href: "/implementation" },
    { label: "Ứng Dụng", href: "/applications" },
  ]

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            K-means
          </Link>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary border-b-2 border-primary pb-4"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
