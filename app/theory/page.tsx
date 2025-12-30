"use client"

import { NavHeader } from "@/components/nav-header"
import { Card } from "@/components/ui/card"

export default function TheoryPage() {
  return (
    <>
      <NavHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground">Lý Thuyết K-means</h1>
            <p className="mt-2 text-muted-foreground">
              Hiểu rõ về nguyên lý, công thức toán học và cách hoạt động của thuật toán K-means
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Giới Thiệu K-means</h2>
            <Card className="border-border bg-card p-6">
              <p className="text-foreground mb-4">
                <strong>K-means</strong> là một trong những thuật toán phân cụm (clustering) phổ biến nhất trong khai
                phá dữ liệu. Nó được sử dụng để phân chia một tập dữ liệu thành K cụm (clusters) khác nhau.
              </p>
              <p className="text-foreground mb-4">Mục tiêu của K-means là tìm ra K điểm tâm của các cụm sao cho:</p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Các điểm dữ liệu trong cùng một cụm có độ tương đồng cao</li>
                <li>Các điểm dữ liệu ở các cụm khác nhau có độ khác biệt cao</li>
              </ul>
            </Card>
          </section>

          {/* Algorithm Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Các Bước Thuật Toán</h2>
            <div className="space-y-4">
              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Bước 1: Khởi Tạo</h3>
                <p className="text-foreground mb-3">
                  Chọn ngẫu nhiên K điểm từ tập dữ liệu làm những điểm tâm (centroids) ban đầu.
                </p>
              </Card>

              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Bước 2: Gán Cụm</h3>
                <p className="text-foreground mb-3">
                  Gán mỗi điểm dữ liệu đến cụm mà điểm tâm của nó gần nhất (dựa trên khoảng cách Euclidean).
                </p>
                <div className="bg-secondary/20 p-4 rounded border border-primary/30 overflow-x-auto">
                  <p className="text-sm font-mono text-foreground whitespace-nowrap">
                    Khoảng cách Euclidean: d(x, c) = √(Σ(xᵢ - cᵢ)²)
                  </p>
                </div>
              </Card>

              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Bước 3: Cập Nhật Tâm Cụm</h3>
                <p className="text-foreground mb-3">
                  Tính toán lại điểm tâm của mỗi cụm bằng cách lấy trung bình cộng của tất cả các điểm trong cụm đó.
                </p>
                <div className="bg-secondary/20 p-4 rounded border border-primary/30 overflow-x-auto">
                  <p className="text-sm font-mono text-foreground whitespace-nowrap">cⱼ = (1/|Sⱼ|) Σ xᵢ, với xᵢ ∈ Sⱼ</p>
                </div>
              </Card>

              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Bước 4: Kiểm Tra Hội Tụ</h3>
                <p className="text-foreground mb-3">
                  Lặp lại các bước 2 và 3 cho đến khi các tâm cụm không thay đổi hoặc đạt được số lần lặp tối đa.
                </p>
              </Card>
            </div>
          </section>

          {/* Mathematics Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Công Thức Toán Học</h2>

            <Card className="border-border bg-card p-6 mb-4">
              <h3 className="text-lg font-semibold text-primary mb-4">Hàm Mục Tiêu (Objective Function)</h3>
              <p className="text-foreground mb-4">
                K-means cố gắng minimize tổng bình phương khoảng cách từ các điểm đến tâm cụm gần nhất:
              </p>
              <div className="bg-secondary/20 p-6 rounded border border-primary/30 overflow-x-auto">
                <div className="text-center">
                  <p className="text-sm font-mono text-foreground">J = Σₖ Σᵢ ||xᵢ - cₖ||²</p>
                </div>
              </div>
              <p className="text-foreground mt-4 text-sm">
                Trong đó:
                <br />• J: Hàm chi phí (cost function)
                <br />• k: Chỉ số cụm (từ 1 đến K)
                <br />• xᵢ: Điểm dữ liệu thứ i
                <br />• cₖ: Tâm cụm thứ k
              </p>
            </Card>

            <Card className="border-border bg-card p-6 mb-4">
              <h3 className="text-lg font-semibold text-primary mb-4">Gán Cụm (Assignment)</h3>
              <p className="text-foreground mb-4">Mỗi điểm được gán đến cụm có tâm gần nhất:</p>
              <div className="bg-secondary/20 p-6 rounded border border-primary/30 overflow-x-auto">
                <div className="text-center">
                  <p className="text-sm font-mono text-foreground">Sₖ = {"{xₚ : ||xₚ - cₖ|| ≤ ||xₚ - cⱼ|| ∀j}"}</p>
                </div>
              </div>
            </Card>

            <Card className="border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Cập Nhật Tâm (Update)</h3>
              <p className="text-foreground mb-4">
                Tâm cụm mới được tính bằng giá trị trung bình của các điểm trong cụm:
              </p>
              <div className="bg-secondary/20 p-6 rounded border border-primary/30 overflow-x-auto">
                <div className="text-center">
                  <p className="text-sm font-mono text-foreground">cₖᵗ⁺¹ = (Σₓᵢ ∈ Sₖ xᵢ) / |Sₖ|</p>
                </div>
              </div>
            </Card>
          </section>

          {/* Advantages and Disadvantages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Ưu Điểm & Nhược Điểm</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-accent mb-4">Ưu Điểm</h3>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Đơn giản và dễ hiểu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Tính toán nhanh với tập dữ liệu lớn</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Hoạt động tốt với dữ liệu hình cầu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Có thể mở rộng cho dữ liệu lớn</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-destructive mb-4">Nhược Điểm</h3>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">✗</span>
                    <span>Phụ thuộc vào số cụm K ban đầu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">✗</span>
                    <span>Dễ bị kẹt ở cực tiểu địa phương</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">✗</span>
                    <span>Không hoạt động tốt với dữ liệu không lồi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">✗</span>
                    <span>Nhạy cảm với điểm ngoại lai</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Complexity */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Độ Phức Tạp</h2>
            <Card className="border-border bg-card p-6">
              <div className="space-y-3 text-foreground">
                <p>
                  <strong>Độ phức tạp thời gian:</strong> O(n * K * I * d)
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Trong đó n là số điểm dữ liệu, K là số cụm, I là số lần lặp, d là số chiều
                  </span>
                </p>
                <p>
                  <strong>Độ phức tạp không gian:</strong> O(n * d + K * d)
                  <br />
                  <span className="text-sm text-muted-foreground">Để lưu trữ dữ liệu và các tâm cụm</span>
                </p>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </>
  )
}
