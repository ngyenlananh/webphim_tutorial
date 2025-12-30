// "use client"

// import { useState, useEffect, useRef } from "react"
// import { NavHeader } from "@/components/nav-header"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Play, Pause, RotateCcw } from "lucide-react"

// interface Point {
//   x: number
//   y: number
//   clusterId: number
// }

// interface Centroid {
//   x: number
//   y: number
//   id: number
// }

// export default function VisualizerPage() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const [points, setPoints] = useState<Point[]>([])
//   const [centroids, setCentroids] = useState<Centroid[]>([])
//   const [isRunning, setIsRunning] = useState(false)
//   const [iteration, setIteration] = useState(0)
//   const [k, setK] = useState(3)
//   const [numPoints, setNumPoints] = useState(100)
//   const [converged, setConverged] = useState(false)

//   // Initialize points
//   const initializeData = () => {
//     const newPoints: Point[] = []
//     for (let i = 0; i < numPoints; i++) {
//       newPoints.push({
//         x: Math.random() * 400,
//         y: Math.random() * 400,
//         clusterId: 0,
//       })
//     }
//     setPoints(newPoints)

//     // Random centroids
//     const newCentroids: Centroid[] = []
//     for (let i = 0; i < k; i++) {
//       newCentroids.push({
//         x: Math.random() * 400,
//         y: Math.random() * 400,
//         id: i,
//       })
//     }
//     setCentroids(newCentroids)
//     setIteration(0)
//     setConverged(false)
//     setIsRunning(false)
//   }

//   // Calculate distance
//   const distance = (x1: number, y1: number, x2: number, y2: number) => {
//     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
//   }

//   // Assign points to nearest centroid
//   const assignPointsToClusters = (pts: Point[], cents: Centroid[]): Point[] => {
//     return pts.map((point) => {
//       let minDist = Number.POSITIVE_INFINITY
//       let nearestCluster = 0
//       cents.forEach((centroid) => {
//         const dist = distance(point.x, point.y, centroid.x, centroid.y)
//         if (dist < minDist) {
//           minDist = dist
//           nearestCluster = centroid.id
//         }
//       })
//       return { ...point, clusterId: nearestCluster }
//     })
//   }

//   // Update centroids
//   const updateCentroids = (pts: Point[], cents: Centroid[]): Centroid[] => {
//     const newCentroids = cents.map((centroid) => {
//       const clusterPoints = pts.filter((p) => p.clusterId === centroid.id)
//       if (clusterPoints.length === 0) {
//         return centroid
//       }
//       const avgX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length
//       const avgY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length
//       return { ...centroid, x: avgX, y: avgY }
//     })
//     return newCentroids
//   }

//   // K-means step
//   const performKMeansStep = () => {
//     setPoints((prevPoints) => {
//       const newPoints = assignPointsToClusters(prevPoints, centroids)

//       setCentroids((prevCentroids) => {
//         const newCentroids = updateCentroids(newPoints, prevCentroids)

//         // Check convergence
//         const hasConverged = newCentroids.every((newC, idx) => {
//           const oldC = prevCentroids[idx]
//           return distance(newC.x, newC.y, oldC.x, oldC.y) < 0.5
//         })

//         if (hasConverged) {
//           setConverged(true)
//           setIsRunning(false)
//         }

//         setCentroids(newCentroids)
//         return newCentroids
//       })

//       setIteration((prev) => prev + 1)
//       return newPoints
//     })
//   }

//   // Animation loop
//   useEffect(() => {
//     if (!isRunning || converged) return

//     const timer = setTimeout(() => {
//       performKMeansStep()
//     }, 500)

//     return () => clearTimeout(timer)
//   }, [isRunning, converged, centroids])

//   // Draw canvas
//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     // Clear canvas
//     ctx.fillStyle = "#1a1a2e"
//     ctx.fillRect(0, 0, canvas.width, canvas.height)

//     // Draw points
//     const colors = [
//       "#6b5aff", // primary purple
//       "#37d8a8", // accent green
//       "#ff6b6b", // red
//       "#ffd93d", // yellow
//       "#6bcf7f", // green
//     ]

//     points.forEach((point) => {
//       const color = colors[point.clusterId % colors.length]
//       ctx.fillStyle = color
//       ctx.beginPath()
//       ctx.arc(point.x, point.y, 5, 0, Math.PI * 2)
//       ctx.fill()
//     })

//     // Draw centroids
//     centroids.forEach((centroid, idx) => {
//       const color = colors[idx % colors.length]
//       ctx.fillStyle = color
//       ctx.strokeStyle = "#ffffff"
//       ctx.lineWidth = 2
//       ctx.beginPath()
//       ctx.arc(centroid.x, centroid.y, 8, 0, Math.PI * 2)
//       ctx.fill()
//       ctx.stroke()

//       // Draw a cross inside
//       ctx.strokeStyle = "#ffffff"
//       ctx.lineWidth = 1
//       ctx.beginPath()
//       ctx.moveTo(centroid.x - 5, centroid.y)
//       ctx.lineTo(centroid.x + 5, centroid.y)
//       ctx.moveTo(centroid.x, centroid.y - 5)
//       ctx.lineTo(centroid.x, centroid.y + 5)
//       ctx.stroke()
//     })
//   }, [points, centroids])

//   useEffect(() => {
//     initializeData()
//   }, [k, numPoints])

//   return (
//     <>
//       <NavHeader />
//       <main className="min-h-screen bg-background">
//         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
//           <div className="mb-8">
//             <h1 className="text-4xl font-bold text-foreground">Trực Quan Hóa K-means</h1>
//             <p className="mt-2 text-muted-foreground">
//               Xem trực tiếp cách thuật toán K-means phân chia dữ liệu qua các bước lặp
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-6">
//             {/* Canvas */}
//             <div className="lg:col-span-2">
//               <Card className="border-border bg-card p-6">
//                 <div className="mb-4">
//                   <canvas ref={canvasRef} width={500} height={400} className="w-full border border-border rounded" />
//                 </div>

//                 <div className="bg-secondary/20 p-4 rounded border border-border mb-4">
//                   <p className="text-sm text-muted-foreground">
//                     <span className="font-semibold text-foreground">Lần lặp: {iteration}</span>
//                     {converged && <span className="ml-4 text-accent font-semibold">Đã hội tụ!</span>}
//                   </p>
//                 </div>

//                 <div className="flex gap-2">



//                  <Button onClick={() => setIsRunning(!isRunning)} disabled={converged} className="flex-1 gap-2">
//                     {isRunning ? (
//                       <>
//                         <Pause className="h-4 w-4" />
//                         Tạm dừng
//                       </>
//                     ) : (
//                       <>
//                         <Play className="h-4 w-4" />
//                         Chạy
//                       </>
//                     )}
//                   </Button>


//                   <Button onClick={() => initializeData()} variant="outline" className="flex-1 gap-2">
//                     <RotateCcw className="h-4 w-4" />
//                     Làm lại
//                   </Button>
//                 </div>
//               </Card>
//             </div>

//             {/* Controls */}
//             <div>
//               <Card className="border-border bg-card p-6">
//                 <h3 className="font-semibold text-foreground mb-4">Điều Khiển</h3>

//                 <div className="space-y-4">
//                   <div>
//                     <label className="text-sm font-medium text-foreground">
//                       Số Cụm (K): <span className="text-primary">{k}</span>
//                     </label>
//                     <input
//                       type="range"
//                       min="2"
//                       max="6"
//                       value={k}
//                       onChange={(e) => {
//                         setK(Number(e.target.value))
//                         setIsRunning(false)
//                       }}
//                       disabled={isRunning}
//                       className="w-full mt-2"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm font-medium text-foreground">
//                       Số Điểm: <span className="text-primary">{numPoints}</span>
//                     </label>
//                     <input
//                       type="range"
//                       min="20"
//                       max="300"
//                       step="10"
//                       value={numPoints}
//                       onChange={(e) => {
//                         setNumPoints(Number(e.target.value))
//                         setIsRunning(false)
//                       }}
//                       disabled={isRunning}
//                       className="w-full mt-2"
//                     />
//                   </div>

//                   <div className="pt-4 border-t border-border">
//                     <h4 className="text-sm font-semibold text-foreground mb-2">Thống Kê</h4>
//                     <div className="space-y-2 text-sm text-muted-foreground">
//                       <p>
//                         <span className="text-foreground">Tổng điểm:</span> {points.length}
//                       </p>
//                       <p>
//                         <span className="text-foreground">Số cụm:</span> {k}
//                       </p>
//                       <p>
//                         <span className="text-foreground">Lần lặp:</span> {iteration}
//                       </p>
//                       <p className="pt-2">
//                         {converged && (
//                           <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded text-xs">
//                             Thuật toán đã hội tụ
//                           </span>
//                         )}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="pt-4 border-t border-border">
//                     <h4 className="text-sm font-semibold text-foreground mb-2">Hướng Dẫn</h4>
//                     <ul className="space-y-1 text-xs text-muted-foreground">
//                       <li>
//                         <span className="text-primary">●</span> Tâm cụm (với dấu +)
//                       </li>
//                       <li>
//                         <span className="text-accent">●</span> Các điểm dữ liệu được tô màu theo cụm
//                       </li>
//                       <li>Nhấp "Chạy" để bắt đầu thuật toán</li>
//                     </ul>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>

//           {/* Info Section */}
//           <Card className="border-border bg-card p-6 mt-6">
//             <h3 className="text-lg font-semibold text-foreground mb-4">Cách Hoạt Động</h3>
//             <ol className="space-y-3 text-foreground text-sm">
//               <li>
//                 <span className="font-semibold text-primary">1. Khởi tạo:</span> K tâm cụm được chọn ngẫu nhiên
//               </li>
//               <li>
//                 <span className="font-semibold text-primary">2. Gán cụm:</span> Mỗi điểm được gán đến tâm cụm gần nhất
//               </li>
//               <li>
//                 <span className="font-semibold text-primary">3. Cập nhật tâm:</span> Mỗi tâm cụm được di chuyển đến vị
//                 trí trung bình của các điểm trong cụm
//               </li>
//               <li>
//                 <span className="font-semibold text-primary">4. Lặp lại:</span> Lặp lại các bước 2-3 cho đến khi hội tụ
//               </li>
//             </ol>
//           </Card>
//         </div>
//       </main>
//     </>
//   )
// }






"use client"

import { useState, useEffect, useRef } from "react"
import { NavHeader } from "@/components/nav-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, RotateCcw } from "lucide-react"

interface Point {
  x: number
  y: number
  clusterId: number
}

interface Centroid {
  x: number
  y: number
  id: number
}

export default function VisualizerPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [points, setPoints] = useState<Point[]>([])
  const [centroids, setCentroids] = useState<Centroid[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [iteration, setIteration] = useState(0)
  const [k, setK] = useState(3)
  const [numPoints, setNumPoints] = useState(100)
  const [converged, setConverged] = useState(false)

  // 1. Khởi tạo dữ liệu (Không set isRunning = false để cho phép chạy liên tục)
  const initializeData = () => {
    const newPoints: Point[] = []
    for (let i = 0; i < numPoints; i++) {
      newPoints.push({
        x: Math.random() * 400 + 50, // Thêm offset để điểm nằm trung tâm canvas
        y: Math.random() * 300 + 50,
        clusterId: 0,
      })
    }
    setPoints(newPoints)

    const newCentroids: Centroid[] = []
    for (let i = 0; i < k; i++) {
      newCentroids.push({
        x: Math.random() * 400 + 50,
        y: Math.random() * 300 + 50,
        id: i,
      })
    }
    setCentroids(newCentroids)
    setIteration(0)
    setConverged(false)
    // setIsRunning(false) <- Dòng này bị loại bỏ để giữ trạng thái chạy khi tự động reset
  }

  const distance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  }

  const assignPointsToClusters = (pts: Point[], cents: Centroid[]): Point[] => {
    return pts.map((point) => {
      let minDist = Number.POSITIVE_INFINITY
      let nearestCluster = 0
      cents.forEach((centroid) => {
        const dist = distance(point.x, point.y, centroid.x, centroid.y)
        if (dist < minDist) {
          minDist = dist
          nearestCluster = centroid.id
        }
      })
      return { ...point, clusterId: nearestCluster }
    })
  }

  const updateCentroids = (pts: Point[], cents: Centroid[]): Centroid[] => {
    return cents.map((centroid) => {
      const clusterPoints = pts.filter((p) => p.clusterId === centroid.id)
      if (clusterPoints.length === 0) return centroid
      const avgX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length
      const avgY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length
      return { ...centroid, x: avgX, y: avgY }
    })
  }

  const performKMeansStep = () => {
    setPoints((prevPoints) => {
      const newPoints = assignPointsToClusters(prevPoints, centroids)
      setCentroids((prevCentroids) => {
        const newCentroids = updateCentroids(newPoints, prevCentroids)
        
        const hasConverged = newCentroids.every((newC, idx) => {
          const oldC = prevCentroids[idx]
          return distance(newC.x, newC.y, oldC.x, oldC.y) < 0.1
        })

        if (hasConverged) {
          setConverged(true)
        }
        return newCentroids
      })
      setIteration((prev) => prev + 1)
      return newPoints
    })
  }

  // 2. Logic điều khiển Animation và Tự động lặp lại
  useEffect(() => {
    if (!isRunning) return

    if (converged) {
      // Nếu đã hội tụ, đợi 2 giây rồi tự động chạy vòng mới
      const restartTimer = setTimeout(() => {
        initializeData()
      }, 2000) 
      return () => clearTimeout(restartTimer)
    }

    // Nếu đang chạy và chưa hội tụ, thực hiện bước lặp tiếp theo
    const timer = setTimeout(() => {
      performKMeansStep()
    }, 500)

    return () => clearTimeout(timer)
  }, [isRunning, converged, centroids])

  // 3. Vẽ Canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "#1a1a2e"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const colors = ["#6b5aff", "#37d8a8", "#ff6b6b", "#ffd93d", "#6bcf7f", "#ed64a6"]

    points.forEach((point) => {
      ctx.fillStyle = colors[point.clusterId % colors.length]
      ctx.beginPath()
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2)
      ctx.fill()
    })

    centroids.forEach((centroid, idx) => {
      const color = colors[idx % colors.length]
      ctx.fillStyle = color
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centroid.x, centroid.y, 8, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(centroid.x - 5, centroid.y)
      ctx.lineTo(centroid.x + 5, centroid.y)
      ctx.moveTo(centroid.x, centroid.y - 5)
      ctx.lineTo(centroid.x, centroid.y + 5)
      ctx.stroke()
    })
  }, [points, centroids])

  useEffect(() => {
    initializeData()
  }, [k, numPoints])

  return (
    <>
      <NavHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground">Trực Quan Hóa K-means</h1>
            <p className="mt-2 text-muted-foreground">
              Thuật toán đang chạy ở chế độ tự động lặp lại liên tục.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="border-border bg-card p-6">
                <div className="mb-4 overflow-hidden rounded">
                  <canvas ref={canvasRef} width={500} height={400} className="w-full bg-[#1a1a2e]" />
                </div>

                <div className="bg-secondary/20 p-4 rounded border border-border mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Lần lặp: {iteration}</span>
                    {converged && <span className="ml-4 text-[#37d8a8] font-bold">✓ Đã hội tụ! (Đang chuẩn bị vòng mới...)</span>}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => setIsRunning(!isRunning)} className="flex-1 gap-2">
                    {isRunning ? <><Pause className="h-4 w-4" /> Tạm dừng</> : <><Play className="h-4 w-4" /> Bắt đầu chạy liên tục</>}
                  </Button>
                  <Button onClick={() => { setIsRunning(false); initializeData(); }} variant="outline" className="flex-1 gap-2">
                    <RotateCcw className="h-4 w-4" /> Reset thủ công
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <Card className="border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Điều Khiển</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Số Cụm (K): {k}</label>
                    <input type="range" min="2" max="6" value={k} onChange={(e) => setK(Number(e.target.value))} className="w-full mt-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Số Điểm: {numPoints}</label>
                    <input type="range" min="20" max="300" step="10" value={numPoints} onChange={(e) => setNumPoints(Number(e.target.value))} className="w-full mt-2" />
                  </div>
                  <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground">Tổng điểm:</span> {points.length}</p>
                    <p><span className="text-foreground">Số cụm:</span> {k}</p>
                    <p><span className="text-foreground">Lần lặp:</span> {iteration}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


