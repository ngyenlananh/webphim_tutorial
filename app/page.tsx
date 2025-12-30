"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, BookOpen, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">K-means Report</div>
            <div className="hidden gap-6 md:flex">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Lý Thuyết
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Trực Quan
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Code
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Ứng Dụng
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Thuật toán K-means
          </h1>
          <p className="mt-6 text-balance text-lg text-muted-foreground">
            Khám phá cách hoạt động của thuật toán phân cụm phổ biến nhất trong khai phá dữ liệu
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/theory">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Học Lý Thuyết
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/visualizer">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <BarChart3 className="h-5 w-5" />
                Thử Trực Quan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-3xl font-bold text-foreground">Báo cáo bao gồm</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Lý Thuyết</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Hiểu rõ về nguyên lý, công thức toán học và cách hoạt động của K-means
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <BarChart3 className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Trực Quan Hóa</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Xem trực tiếp cách thuật toán phân chia dữ liệu qua các bước lặp
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Code</h3>
              <p className="mt-2 text-sm text-muted-foreground">Xem ví dụ code triển khai K-means bằng Python</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <BarChart3 className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Ứng Dụng Thực Tế</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Khám phá cách K-means được sử dụng trong các bài toán thực tế
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>Báo cáo Khai Phá Dữ Liệu - K-means Clustering Algorithm</p>
        </div>
      </footer>
    </main>
  )
}
