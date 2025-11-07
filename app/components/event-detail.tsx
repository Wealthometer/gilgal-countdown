export default function EventDetails() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          <i className="fas fa-calendar-days text-purple-600 mr-3"></i>
          Event Details
        </h2>
        <p className="text-slate-600">Everything you need to know</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-heading text-purple-600 text-lg"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">Event Title</h3>
              <p className="text-slate-700 mt-1">Gilgal Encounter 2025 - 60 Hours of Intense Prayers</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-calendar text-blue-600 text-lg"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">Duration</h3>
              <p className="text-slate-700 mt-1">Thursday, November 27 - Sunday, November 30, 2025</p>
              <p className="text-slate-600 text-sm mt-2">
                <strong>Start:</strong> Thursday 27th at 4:00 PM
              </p>
              <p className="text-slate-600 text-sm">
                <strong>End:</strong> Sunday 30th at 3:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-tag text-amber-600 text-lg"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">Theme</h3>
              <p className="text-slate-700 mt-1">
                <span className="font-semibold text-lg">MEGA GRACE & MEGA MERCY</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
