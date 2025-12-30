"use client"

import { NavHeader } from "@/components/nav-header"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ImplementationPage() {
  return (
    <>
      <NavHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground">Triển Khai Code</h1>
            <p className="mt-2 text-muted-foreground">Xem ví dụ code triển khai thuật toán K-means bằng Python</p>
          </div>

          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-secondary">
              <TabsTrigger value="python">Python (Scikit-learn)</TabsTrigger>
              <TabsTrigger value="scratch">Python (Từ đầu)</TabsTrigger>
            </TabsList>

            {/* Python Scikit-learn Implementation */}
            <TabsContent value="python" className="space-y-4 mt-6">
              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Sử Dụng Scikit-learn</h3>
                <p className="text-foreground mb-4 text-sm">
                  Scikit-learn cung cấp implementation tối ưu của K-means. Đây là cách đơn giản nhất để sử dụng:
                </p>

                <div className="bg-secondary/30 rounded-lg p-6 overflow-x-auto border border-border">
                  <pre className="text-sm font-mono text-foreground">
                    {`from sklearn.cluster import KMeans
import numpy as np
import matplotlib.pyplot as plt

# Tạo dữ liệu mẫu
X = np.random.rand(100, 2) * 100

# Tạo model K-means với K=3
kmeans = KMeans(n_clusters=3, random_state=42)

# Huấn luyện model
kmeans.fit(X)

# Dự đoán cụm cho mỗi điểm
labels = kmeans.labels_
centroids = kmeans.cluster_centers_

# Vẽ kết quả
plt.scatter(X[:, 0], X[:, 1], c=labels)
plt.scatter(centroids[:, 0], centroids[:, 1],
            c='red', marker='X', s=300)
plt.show()`}
                  </pre>
                </div>

                <div className="mt-4 text-sm text-muted-foreground space-y-2">
                  <p>
                    <strong className="text-foreground">n_clusters:</strong> Số cụm K
                  </p>
                  <p>
                    <strong className="text-foreground">random_state:</strong> Seed cho tính tái lập
                  </p>
                  <p>
                    <strong className="text-foreground">max_iter:</strong> Số lần lặp tối đa (mặc định 300)
                  </p>
                  <p>
                    <strong className="text-foreground">n_init:</strong> Số lần chạy với seed khác nhau
                  </p>
                </div>
              </Card>

              {/* Advanced Options */}
              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Tùy Chọn Nâng Cao</h3>

                <div className="bg-secondary/30 rounded-lg p-6 overflow-x-auto border border-border mb-4">
                  <pre className="text-sm font-mono text-foreground">
                    {`# Tìm K tối ưu bằng Elbow Method
inertias = []
K_range = range(1, 11)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X)
    inertias.append(kmeans.inertia_)

# Vẽ đường cong Elbow
plt.plot(K_range, inertias, 'bo-')
plt.xlabel('K')
plt.ylabel('Inertia')
plt.show()

# Sử dụng KMeans++ initialization
kmeans = KMeans(n_clusters=3,
                init='k-means++',
                random_state=42)
kmeans.fit(X)`}
                  </pre>
                </div>
              </Card>
            </TabsContent>

            {/* From Scratch Implementation */}
            <TabsContent value="scratch" className="space-y-4 mt-6">
              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Triển Khai Từ Đầu</h3>
                <p className="text-foreground mb-4 text-sm">
                  Dưới đây là cách triển khai K-means hoàn toàn từ đầu để hiểu rõ cơ chế:
                </p>

                <div className="bg-secondary/30 rounded-lg p-6 overflow-x-auto border border-border mb-4">
                  <pre className="text-sm font-mono text-foreground">
                    {`import numpy as np
from collections import defaultdict

class KMeans:
    def __init__(self, k=3, max_iter=100, random_state=42):
        self.k = k
        self.max_iter = max_iter
        self.random_state = random_state
        self.centroids = None
        
    def fit(self, X):
        np.random.seed(self.random_state)
        
        # Khởi tạo centroids ngẫu nhiên
        indices = np.random.choice(len(X), self.k, replace=False)
        self.centroids = X[indices].copy()
        
        for iteration in range(self.max_iter):
            # Lưu centroids cũ
            old_centroids = self.centroids.copy()
            
            # Gán điểm vào cụm gần nhất
            distances = np.zeros((len(X), self.k))
            for i, centroid in enumerate(self.centroids):
                distances[:, i] = np.sqrt(
                    np.sum((X - centroid) ** 2, axis=1)
                )
            
            labels = np.argmin(distances, axis=1)
            
            # Cập nhật centroids
            for i in range(self.k):
                cluster_points = X[labels == i]
                if len(cluster_points) > 0:
                    self.centroids[i] = cluster_points.mean(axis=0)
            
            # Kiểm tra hội tụ
            if np.allclose(old_centroids, self.centroids):
                print(f"Hội tụ sau {iteration + 1} lần lặp")
                break
        
        return labels
    
    def predict(self, X):
        distances = np.sqrt((
            (X - self.centroids[:, np.newaxis]) ** 2
        ).sum(axis=2))
        return np.argmin(distances, axis=0)

# Sử dụng
X = np.random.rand(100, 2) * 100
kmeans = KMeans(k=3)
labels = kmeans.fit(X)`}
                  </pre>
                </div>
              </Card>

              {/* Explanation */}
              <Card className="border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Giải Thích Chi Tiết</h3>

                <div className="space-y-4 text-sm text-foreground">
                  <div>
                    <p className="font-semibold text-accent mb-1">1. Khởi tạo Centroids</p>
                    <p className="text-muted-foreground">Chọn ngẫu nhiên K điểm từ dữ liệu làm centroids ban đầu.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-accent mb-1">2. Tính Khoảng Cách</p>
                    <p className="text-muted-foreground">Sử dụng khoảng cách Euclidean: sqrt(Σ(xᵢ - cᵢ)²)</p>
                  </div>

                  <div>
                    <p className="font-semibold text-accent mb-1">3. Gán Cụm</p>
                    <p className="text-muted-foreground">Gán mỗi điểm đến cụm có centroid gần nhất.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-accent mb-1">4. Cập Nhật Centroid</p>
                    <p className="text-muted-foreground">Tính centroid mới = trung bình của tất cả điểm trong cụm.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-accent mb-1">5. Kiểm Tra Hội Tụ</p>
                    <p className="text-muted-foreground">Nếu centroids không thay đổi, thuật toán đã hội tụ.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Optimization Tips */}
          <Card className="border-border bg-card p-6 mt-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Mẹo Tối Ưu Hóa</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-accent mb-2">Tìm K Tối Ưu</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Elbow Method: Vẽ Inertia vs K</li>
                  <li>Silhouette Score: Đo chất lượng cụm</li>
                  <li>Davies-Bouldin Index: Đánh giá phân tách</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-accent mb-2">Chuẩn Hóa Dữ Liệu</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>StandardScaler: Trung bình = 0, std = 1</li>
                  <li>MinMaxScaler: Scale về [0, 1]</li>
                  <li>Quan trọng khi các feature có đơn vị khác</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-accent mb-2">Xử Lý Điểm Ngoại Lai</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Loại bỏ hoặc xử lý trước</li>
                  <li>Sử dụng K-medoids (dùng trung vị)</li>
                  <li>Cân nhắc sử dụng DBSCAN</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-accent mb-2">Khởi Tạo Centroids</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>K-means++: Chọn centroids cách nhau</li>
                  <li>Giảm risk kẹt ở cực tiểu địa phương</li>
                  <li>n_init &gt; 1: Chạy nhiều lần, lấy tốt nhất</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  )
}
