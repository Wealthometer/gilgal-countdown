export default function BibleVerses() {
  const verses = [
    {
      text: "I was glad when they said unto me, Let us go into the house of the Lord.",
      reference: "Psalm 122:1",
      icon: "fa-book",
    },
    {
      text: "For the Lord loves the just and will not forsake his faithful ones. Commit your way to the Lord; trust in him and he will do this.",
      reference: "Psalm 37:28",
      icon: "fa-dove",
    },
    {
      text: "You will seek me and find me when you seek me with all your heart.",
      reference: "Jeremiah 29:13",
      icon: "fa-hands-praying",
    },
    {
      text: "Grace and peace to you from God our Father and the Lord Jesus Christ. I always thank my God as I remember you in my prayers.",
      reference: "Philippians 1:2-3",
      icon: "fa-light fa-heart",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          <i className="fas fa-bible text-amber-600 mr-3"></i>
          Inspirational Scripture
        </h2>
        <p className="text-slate-600">Words of faith and encouragement</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {verses.map((verse, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-lg shadow-md p-8 border-l-4 border-amber-600 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className={`fas ${verse.icon} text-amber-600 text-lg`}></i>
              </div>
              <div className="flex-1">
                <p className="text-slate-800 italic font-serif mb-4 text-lg leading-relaxed">‘{verse.text}‘</p>
                <p className="text-amber-700 font-semibold text-sm">— {verse.reference}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-purple-100 to-amber-50 rounded-lg border-2 border-purple-200">
        <p className="text-center text-slate-900 font-semibold text-lg">
          <i className="fas fa-star text-purple-600 mr-2"></i>
          Don‘t Miss It. Miracles Await You.
          <i className="fas fa-star text-purple-600 ml-2"></i>
        </p>
      </div>
    </div>
  )
}
