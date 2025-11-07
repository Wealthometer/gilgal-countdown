// import React from "react"
// import Image from "next/image"
import '../globals.css';

export default function LocationInfo() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          <i className="fas fa-map-pin text-red-600 mr-3"></i>
          Attend Physically
        </h2>
        <p className="text-slate-600">Visit us at our location</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Location Card */}
        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-red-600 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-church text-red-600 text-lg"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Church Auditorium
              </h3>
              <p className="text-slate-600 text-sm">
                Off Alafin Street, Mushin, Lagos
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <i className="fas fa-map-marker-alt text-red-600 mt-1 flex-shrink-0"></i>
              <div>
                <p className="font-semibold text-slate-900">Full Address</p>
                <p className="text-slate-700">
                  14, Ademosun Street,
                  <br />
                  Off Alafin Street,
                  <br />
                  Behind Zone D Police Station,
                  <br />
                  Mushin, Lagos
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-200">
              <i className="fas fa-parking text-red-600 mt-1 flex-shrink-0"></i>
              <div>
                <p className="font-semibold text-slate-900">Parking</p>
                <p className="text-slate-700">
                  Adequate parking available on-site
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-200">
              <i className="fas fa-wheelchair text-red-600 mt-1 flex-shrink-0"></i>
              <div>
                <p className="font-semibold text-slate-900">Accessibility</p>
                <p className="text-slate-700">
                  Wheelchair accessible facilities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-600 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-phone text-orange-600 text-lg"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Contact & Social Media
              </h3>
              <p className="text-slate-600 text-sm">Get in touch with us</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <i className="fab fa-facebook text-blue-600 mt-1 flex-shrink-0 text-lg"></i>
              <div>
                <p className="font-semibold text-slate-900">Facebook</p>
                <p className="text-slate-700">@boomfireandmiracleministry</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-200">
              <i className="fab fa-youtube text-red-600 mt-1 flex-shrink-0 text-lg"></i>
              <div>
                <p className="font-semibold text-slate-900">YouTube</p>
                <p className="text-slate-700">Boom Fire & Miracles Ministry</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-200">
              <i className="fab fa-whatsapp text-green-600 mt-1 flex-shrink-0 text-lg"></i>
              <div>
                <p className="font-semibold text-slate-900">WhatsApp</p>
                <p className="text-slate-700">+234 818 0009 555 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-6">
          <p className="text-2xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-red-500 text-transparent bg-clip-text">
            Bring Your Family and Friends Along To Experience the Miracle And Blessings!
          </p>
        </div>
      </div>
    </div>
  );
}
