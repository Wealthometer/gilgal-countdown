"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import CountdownTimer from "@/app/components/countdown-timer"
import EventDetails from "@/app/components/event-detail"
import LocationInfo from "@/app/components/location-info"
import BibleVerses from "@/app/components/bible-verse"
import LiveBanner from "@/app/components/live-banner"

export default function Home() {
  const [isLive, setIsLive] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Defer the initial setState to avoid synchronous state update in effect
    let rafId = 0
    const eventStart = new Date(2025, 10, 27, 16, 0, 0) // Nov 27, 4PM (month index 10 => Nov)
    const eventEnd = new Date(2025, 10, 30, 15, 0, 0) // Nov 30, 3PM

    const init = () => {
      setMounted(true)
      const now = new Date()
      setIsLive(now >= eventStart && now <= eventEnd)
    }

    rafId = requestAnimationFrame(init)

    // Check status every minute (in case user stays on page)
    const interval = setInterval(() => {
      const currentTime = new Date()
      setIsLive(currentTime >= eventStart && currentTime <= eventEnd)
    }, 60_000)

    return () => {
      cancelAnimationFrame(rafId)
      clearInterval(interval)
    }
  }, [])

  // Prevent hydration mismatch UI flicker
  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <i className="fas fa-cross text-white text-lg" aria-hidden></i>
            </div>
            <div>
              <h1 className="font-bold text-lg text-slate-900">Boom Fire & Miracles</h1>
              <p className="text-xs text-slate-600">Gilgal Encounter 2025</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="w-full">
        <div className="relative h-96 md:h-[500px] w-full overflow-hidden bg-slate-900">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%2022.21.11_de5480b9-dnusXD1rH7HxUu9UCW0sTfiG0fHqvt.jpg"
            alt="Gilgal Encounter 2025 - 60 Hours of Intense Prayers"
            className="object-cover"
            fill
            unoptimized
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" aria-hidden></div>
        </div>
      </section>

      {/* Live/Coming Soon Banner */}
      <LiveBanner isLive={isLive} />

      {/* Countdown Section */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <CountdownTimer isLive={isLive} />
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <EventDetails />
        </div>
      </section>

      {/* Location Info */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <LocationInfo />
        </div>
      </section>

      {/* Streaming Options */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-50 to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            <i className="fas fa-broadcast-tower text-purple-600 mr-3" aria-hidden></i>
            Join Us Online
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-l-4 border-purple-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="fab fa-youtube text-red-600 text-xl" aria-hidden></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900">YouTube</h3>
              </div>
              <p className="text-slate-700 mb-4">Watch the live stream on our YouTube channel.</p>
              <a href="https://www.youtube.com/@boomfireandmiraclesministry" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2">
                Visit Channel <i className="fas fa-arrow-right text-sm" aria-hidden></i>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fab fa-facebook text-blue-600 text-xl" aria-hidden></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Facebook</h3>
              </div>
              <p className="text-slate-700 mb-4">Follow the live broadcast on our Facebook page.</p>
              <a href="https://web.facebook.com/profile.php?id=61576351353387" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                Visit Page <i className="fas fa-arrow-right text-sm" aria-hidden></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verses */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <BibleVerses />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <i className="fas fa-church text-yellow-500" aria-hidden></i>
              <h3 className="text-xl font-bold">Boom Fire & Miracles Ministry</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">Gilgal Encounter 2025 - 60 Hours of Intense Prayers</p>
            <div className="flex justify-center gap-4 mb-4">
              <a href="https://web.facebook.com/profile.php?id=61576351353387" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook text-lg" aria-hidden></i>
              </a>
              <a href="https://www.youtube.com/@boomfireandmiraclesministry" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                <i className="fab fa-youtube text-lg" aria-hidden></i>
              </a>
              <a href="https://wa.me/+2349115575899" className="text-slate-400 hover:text-white transition-colors" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-lg" aria-hidden></i>
              </a>
            </div>
            <p className="text-slate-500 text-xs">© 2025 Boom Fire & Miracles Ministry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
