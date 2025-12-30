"use client"

import { NavHeader } from "@/components/nav-header"
import { Card } from "@/components/ui/card"
import { BarChart3, ShoppingCart, MapPin, Users, Package } from "lucide-react"

export default function ApplicationsPage() {
  return (
    <>
      <NavHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground">Ứng Dụng Thực Tế</h1>
            <p className="mt-2 text-muted-foreground">Khám phá cách K-means được sử dụng trong các bài toán thực tế</p>
          </div>

          {/* Customer Segmentation */}
          <Card className="border-border bg-card p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  1. Phân Đoạn Khách Hàng (Customer Segmentation)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Các công ty sử dụng K-means để phân chia khách hàng thành các nhóm dựa trên hành vi mua hàng, thu
                  nhập, tuổi tác, v.v.
                </p>

                <div className="bg-secondary/20 rounded-lg p-4 border border-border mb-4">
                  <p className="text-sm font-mono text-foreground mb-2">Dữ liệu sử dụng:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Tổng chi tiêu của khách hàng</li>
                    <li>Số lần mua hàng</li>
                    <li>Tuổi tác, giới tính</li>
                    <li>Loại sản phẩm ưa thích</li>
                  </ul>
                </div>

                <p className="text-foreground text-sm mb-2">
                  <strong className="text-accent">Lợi ích:</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Tạo chiến lược marketing riêng cho mỗi nhóm</li>
                  <li>Tăng tỷ lệ chuyển đổi và giữ chân khách hàng</li>
                  <li>Dự đoán khách hàng có khả năng rời bỏ</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Image Compression */}
          <Card className="border-border bg-card p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Package className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">2. Nén Ảnh (Image Compression)</h3>
                <p className="text-muted-foreground mb-4">
                  K-means có thể được sử dụng để nén ảnh bằng cách giảm số màu. Thay vì lưu trữ tất cả các giá trị
                  pixel, chúng ta chỉ lưu trữ K màu đại diện.
                </p>

                <div className="bg-secondary/20 rounded-lg p-4 border border-border mb-4">
                  <p className="text-sm font-mono text-foreground mb-2">Cách hoạt động:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Mỗi pixel là một điểm (R, G, B)</li>
                    <li>Áp dụng K-means để tìm K màu đại diện</li>
                    <li>Thay thế mỗi pixel bằng màu gần nhất</li>
                    <li>Kết quả: ảnh nhỏ hơn nhưng vẫn giữ được chi tiết</li>
                  </ul>
                </div>

                <p className="text-foreground text-sm mb-2">
                  <strong className="text-accent">Ứng dụng:</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Giảm kích thước file ảnh</li>
                  <li>Tối ưu hóa cho web, mobile apps</li>
                  <li>Tiết kiệm băng thông truyền tải</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Document Classification */}
          <Card className="border-border bg-card p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  3. Phân Loại Tài Liệu (Document Clustering)
                </h3>
                <p className="text-muted-foreground mb-4">
                  K-means dùng để nhóm các tài liệu tương tự nhau (như tin tức, bài viết). Mỗi tài liệu được biểu diễn
                  bằng một vector từ.
                </p>

                <div className="bg-secondary/20 rounded-lg p-4 border border-border mb-4">
                  <p className="text-sm font-mono text-foreground mb-2">Quy trình:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Chuyển đổi văn bản thành vector (TF-IDF, Word2Vec)</li>
                    <li>Áp dụng K-means để tìm cụm tài liệu</li>
                    <li>Phân tích các cụm để tìm chủ đề</li>
                  </ul>
                </div>

                <p className="text-foreground text-sm mb-2">
                  <strong className="text-accent">Ứng dụng thực tế:</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Tổ chức thư viện tài liệu</li>
                  <li>Phân loại tin tức tự động</li>
                  <li>Tìm bài viết liên quan</li>
                  <li>Phát hiện dấu hiệu spam</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Recommendation System */}
          <Card className="border-border bg-card p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <ShoppingCart className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  4. Hệ Thống Đề Xuất (Recommendation System)
                </h3>
                <p className="text-muted-foreground mb-4">
                  K-means giúp tìm ra những người dùng tương tự, từ đó đề xuất sản phẩm dựa trên lịch sử của những người
                  dùng tương tự.
                </p>

                <div className="bg-secondary/20 rounded-lg p-4 border border-border mb-4">
                  <p className="text-sm font-mono text-foreground mb-2">Cách thực hiện:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Tạo vector từ lịch sử mua hàng của mỗi user</li>
                    <li>Nhóm những user tương tự lại với nhau</li>
                    <li>Đề xuất sản phẩm được yêu thích bởi group</li>
                  </ul>
                </div>

                <p className="text-foreground text-sm mb-2">
                  <strong className="text-accent">Công ty sử dụng:</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Amazon: Gợi ý sản phẩm liên quan</li>
                  <li>Netflix: Đề xuất phim/series</li>
                  <li>Spotify: Gợi ý nhạc</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Location-Based Services */}
          <Card className="border-border bg-card p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  5. Dịch Vụ Dựa Trên Vị Trí (Location-based Services)
                </h3>
                <p className="text-muted-foreground mb-4">
                  K-means được sử dụng để tìm ra các cơ sở dịch vụ tối ưu hoặc nhóm các khách hàng theo địa điểm địa lý.
                </p>

                <div className="bg-secondary/20 rounded-lg p-4 border border-border mb-4">
                  <p className="text-sm font-mono text-foreground mb-2">Ứng dụng cụ thể:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Xác định vị trí tối ưu cho cửa hàng mới</li>
                    <li>Lập kế hoạch phân phối hàng hóa</li>
                    <li>Tối ưu hóa tuyến đường giao hàng (Uber, Grab)</li>
                    <li>Phát hiện các khu vực mật độ cao</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Case Study */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ví Dụ Thực Tế: Phân Đoạn Khách Hàng Của E-commerce
            </h2>

            <Card className="border-border bg-card p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary text-lg mb-2">Bối Cảnh</h4>
                  <p className="text-foreground">
                    Một công ty bán hàng trực tuyến muốn hiểu rõ hơn về khách hàng của họ để tạo chiến lược marketing
                    hiệu quả hơn.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary text-lg mb-2">Dữ Liệu Thu Thập</h4>
                  <ul className="text-foreground space-y-1 list-disc list-inside">
                    <li>Tổng chi tiêu hàng năm (Annual Spending)</li>
                    <li>Tần suất mua hàng (Purchase Frequency)</li>
                    <li>Thời gian kể từ lần mua cuối cùng (Recency)</li>
                    <li>Độ tuổi của khách hàng</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary text-lg mb-2">Kết Quả (K=4)</h4>
                  <div className="bg-secondary/10 p-4 rounded border border-border space-y-3">
                    <div>
                      <p className="text-accent font-semibold">Cụm 1: VIP Customers</p>
                      <p className="text-muted-foreground text-sm">
                        Tổng chi tiêu cao, mua hàng thường xuyên, gần đây mới mua. Cần chương trình loyalty, ưu đãi VIP.
                      </p>
                    </div>
                    <div>
                      <p className="text-accent font-semibold">Cụm 2: At-Risk Customers</p>
                      <p className="text-muted-foreground text-sm">
                        Từng mua hàng rất nhiều nhưng lâu chưa mua. Cần re-engagement campaigns, special offers.
                      </p>
                    </div>
                    <div>
                      <p className="text-accent font-semibold">Cụm 3: Occasional Buyers</p>
                      <p className="text-muted-foreground text-sm">
                        Chi tiêu trung bình, mua hàng không thường xuyên. Cần nurturing campaigns, upselling.
                      </p>
                    </div>
                    <div>
                      <p className="text-accent font-semibold">Cụm 4: New Customers</p>
                      <p className="text-muted-foreground text-sm">
                        Chi tiêu thấp, mua hàng gần đây. Cần onboarding campaigns, product recommendations.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary text-lg mb-2">Kết Quả & ROI</h4>
                  <ul className="text-foreground space-y-1 list-disc list-inside">
                    <li>Tăng 25% tỷ lệ chuyển đổi qua personalized campaigns</li>
                    <li>Giảm 15% tỷ lệ khách hàng rời bỏ (churn rate)</li>
                    <li>Tăng 40% giá trị đơn hàng trung bình (AOV) cho VIP group</li>
                    <li>Giảm chi phí marketing do loại bỏ campaigns không cần thiết</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Conclusion */}
          <Card className="border-border bg-card p-6 mt-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Kết Luận</h3>
            <p className="text-foreground mb-4">
              K-means là một thuật toán đơn giản nhưng mạnh mẽ, được sử dụng rộng rãi trong nhiều lĩnh vực:
            </p>
            <ul className="text-foreground space-y-2 list-disc list-inside">
              <li>
                <span className="font-semibold">Marketing & Sales:</span> Phân đoạn khách hàng, dự đoán churn
              </li>
              <li>
                <span className="font-semibold">Công nghệ:</span> Nén ảnh, phân loại tài liệu, cơ sở dữ liệu
              </li>
              <li>
                <span className="font-semibold">Logistics:</span> Tối ưu hóa vị trí kho, lộ trình giao hàng
              </li>
              <li>
                <span className="font-semibold">Khoa học:</span> Phân tích gene, phát hiện bệnh tật
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </>
  )
}
