"use client"

interface LiveBannerProps {
  isLive: boolean
}

export default function LiveBanner({ isLive }: LiveBannerProps) {
  if (!isLive) return null

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 animate-pulse">
      <div className="container mx-auto px-4 flex items-center justify-center gap-3">
        <i className="fas fa-circle text-lg"></i>
        <span className="font-bold text-lg">LIVE NOW - Join us on Facebook or YouTube!</span>
        <i className="fas fa-circle text-lg"></i>
      </div>
    </div>
  )
}
