"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  isLive: boolean
}

// ✅ Move TimeUnit up here (outside the main component)
const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-4 md:p-6 min-w-20 md:min-w-24">
      <span className="text-2xl md:text-4xl font-bold text-white text-center block">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-slate-700 font-semibold text-sm md:text-base mt-2 uppercase tracking-wider">
      {label}
    </span>
  </div>
)

export default function CountdownTimer({ isLive }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const eventStart = new Date(2025, 10, 27, 16, 0, 0)
      const eventEnd = new Date(2025, 10, 30, 15, 0, 0)
      const now = new Date()

      const targetDate = isLive ? eventEnd : eventStart
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [isLive])

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {isLive ? (
          <span className="text-green-600 flex items-center justify-center gap-2">
            <i className="fas fa-circle text-lg animate-pulse"></i>
            We Are Now Live!
          </span>
        ) : (
          <span className="text-purple-600 flex items-center justify-center gap-2">
            <i className="fas fa-hourglass-end text-lg"></i>
            Coming Soon
          </span>
        )}
      </h2>

      <p className="text-slate-600 mb-8 text-lg">
        {isLive ? "Event ends in:" : "Event starts in:"}
      </p>

      <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      {isLive && (
        <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <p className="text-green-800 font-semibold">
            <i className="fas fa-check-circle mr-2 text-green-600"></i>
            The event is happening now! Join us on Facebook, YouTube, or attend physically.
          </p>
        </div>
      )}
    </div>
  )
}
