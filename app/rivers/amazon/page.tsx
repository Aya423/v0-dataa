"use client"

import Link from "next/link"

export default function AmazonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* زرار الهوم فوق */}
      <div className="fixed top-0 left-0 z-50 p-6">
        <Link
          href="/"
          className="flex items-center bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border transition-all duration-500 ease-in-out hover:bg-background/90 hover:scale-105"
        >
          <h2 className="font-serif text-sm font-bold text-primary tracking-wider">Breathing Rivers</h2>
        </Link>
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/amazon.jpg')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold drop-shadow-2xl">Amazon River</h1>
          <p className="text-xl md:text-2xl mt-4 drop-shadow-lg">The Largest River in the World</p>
        </div>
      </section>

      {/* النص + الفيديو */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: "Oswald, sans-serif" }}>
          VEGETATION
        </h2>

        {/* الأعمدة الكبيرة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* النص */}
          <div className="bg-black/60 p-8 rounded-md flex flex-col w-full">
            <p className="text-white font-merri tracking-wide leading-relaxed">
              The Amazon rainforest is home to the largest continuous stretch of tropical forest on Earth, producing
              about 20% of the planet's oxygen. Its dense vegetation regulates rainfall patterns, absorbs vast amounts
              of carbon dioxide, and sustains millions of species.
            </p>
            <p className="text-white font-merri mt-6 leading-relaxed">
              However, satellite observations of vegetation reveal alarming changes. Deforestation and human activities
              are reducing the forest cover, threatening biodiversity and weakening one of Earth's most important
              climate regulators.
            </p>
          </div>

          {/* الفيديو */}
          <div className="border-8 border-yellow-400 rounded-lg shadow-xl p-2 bg-yellow-50 flex w-full">
            <video className="w-full h-full rounded object-cover" autoPlay loop muted playsInline>
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amaz-DqxT5D3UgUqpx7lYYO6m6veq52xxN7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* الخط + صندوق الصوت */}
        {/* صندوق الصوت */}
        <div className="mt-6 w-full lg:w-1/2 mx-auto">
          <audio controls className="w-full rounded-lg">
            <source src="/amazon-audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="flex flex-col items-center mt-8">
          {/* الخط */}
          <div className="w-full border-t-2 border-gray-300"></div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 pb-16 pt-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: "Oswald, sans-serif" }}>
          FIRES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* خريطة الحرائق على اليسار */}
          <div className="border-8 border-yellow-400 rounded-lg shadow-xl p-2 bg-yellow-50 flex w-full overflow-hidden">
            <video className="w-full h-full rounded object-cover scale-110" autoPlay loop muted playsInline>
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-02%20at%2014.46.57_d400de67-cBBvkyryAT9MLPvMXUUTlXP7C1Xq1y.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* النص على اليمين */}
          <div className="bg-black/60 p-8 rounded-md flex flex-col w-full">
            <p className="text-white font-merri tracking-wide leading-relaxed">
              Fires can occur naturally or due to human activity, affecting forests, grasslands, and wildlife. In the
              Amazon, fires caused by deforestation and land clearing destroy forest and threaten countless species.
            </p>
            <p className="text-white font-merri mt-6 leading-relaxed">
              These fires also impact the Amazon River and its surrounding vegetation. Loss of forest cover reduces the
              rainforest’s ability to regulate rainfall, which can alter river flow and increase sediment in the water.
              The weakened vegetation absorbs less carbon dioxide and disrupts the river ecosystem, affecting both
              wildlife and the communities that depend on the Amazon for food, water, and resources.
            </p>
          </div>
        </div>

        {/* صندوق الصوت */}
        <div className="mt-6 w-full lg:w-1/2 mx-auto">
          <audio controls className="w-full rounded-lg">
            <source src="/amazon-audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-gray-100 p-8 rounded-md flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              Record Low Water Levels
            </h3>
            <p className="text-gray-700 font-merri leading-relaxed mb-4">
              The Port of Manaus recorded a water level of 12.66 meters on October 4, 2024 - the lowest since records
              began in 1902. This severe drought is directly linked to deforestation and fires in the Amazon.
            </p>
            <p className="text-gray-700 font-merri leading-relaxed">
              As trees are cut down, the forest loses its ability to generate rainfall. Less vegetation means less
              moisture, creating a dangerous cycle of drought and fire that threatens river transportation, communities,
              and wildlife throughout the region.
            </p>
          </div>

          {/* الصورة - الرسم البياني */}
          <div className="border-4 border-gray-300 rounded-lg shadow-xl p-4 bg-white">
            <img
              src="/amazon-water-levels-graph.jpg"
              alt="Amazon River Water Levels Graph"
              className="w-full h-full rounded object-contain"
            />
          </div>
        </div>

        <div className="mt-8 w-full border-t-2 border-gray-300"></div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-16">
        <h2
          className="text-5xl font-bold text-center mb-12 text-gray-800 -mt-8"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          HUMAN ACTIVITIES
        </h2>

        {/* الأعمدة المعكوسة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* الصورة على اليسار */}
          <div className="border-8 border-yellow-400 rounded-lg shadow-xl p-2 bg-yellow-50 flex w-full">
            <img src="/amazon-river.jpg" alt="Amazon River" className="w-full h-full rounded object-cover" />
          </div>

          {/* النص على اليمين */}
          <div className="bg-black/60 p-8 rounded-md flex flex-col w-full">
            <p className="text-white font-merri tracking-wide leading-relaxed">
              Over the past two decades, human activities such as forest burning for agriculture and global greenhouse
              gas emissions have increased atmospheric dryness over the Amazon.
            </p>
            <p className="text-white font-merri mt-6 leading-relaxed">
              This reduces rainfall and soil moisture, weakening the forest’s ability to supply water to the Amazon
              River. Fires release aerosols like black carbon, which warm the atmosphere and disrupt cloud formation,
              further decreasing river flow and affecting aquatic life and local communities.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
