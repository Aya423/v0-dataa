"use client"

import Link from "next/link"
import { ArrowUpDown, Flag, Droplets, MapPin } from "lucide-react"

export default function YangtzePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 py-4 px-4 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-center">
          <Link href="/" className="group">
            <div className="bg-teal-100 rounded-3xl px-8 py-3 shadow-md hover:shadow-lg transition-shadow">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-teal-800">Breathing Rivers</h1>
            </div>
          </Link>
        </div>
      </div>

      <section className="relative h-[60vh] flex items-start justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src="/yangtze-river.jpg" alt="Yangtze River" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-4 flex md:flex-row flex-col items-start md:items-start justify-between gap-8">
          {/* Left: Main Title */}
          <div className="text-left">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              The Yangtze River
            </h1>
            <p className="font-serif text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Asia's Longest River
            </p>
          </div>

          {/* Right: Overview text */}
          <div className="md:max-w-md drop-shadow-lg relative -mt-10">
            <p className="font-sans text-sm md:text-lg leading-relaxed mb-3 text-white/80">
              The Yangtze River is the longest river in Asia and the third-longest in the world, stretching 6,300
              kilometers through China. It is the economic lifeline of China and supports over 400 million people,
              making it one of the most important rivers for human civilization. The river originates from the glaciers
              on the Qinghai-Tibet Plateau and flows eastward through 11 provinces before emptying into the East China
              Sea near Shanghai. The Yangtze basin covers one-fifth of China's land area and generates nearly half of
              the country's GDP.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pt-4">
        <div className="container mx-auto max-w-6xl -mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-lg mb-3">
                <ArrowUpDown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Length</h3>
              <p className="text-sm text-muted-foreground">6,300 km</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-lg mb-3">
                <Flag className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Countries</h3>
              <p className="text-sm text-muted-foreground">China</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-lg mb-3">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Mouth</h3>
              <p className="text-sm text-muted-foreground">East China Sea</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-lg mb-3">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">East Asia</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mb-12 mt-12">
          <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Explore More</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Economic Importance Card */}
            <div className="group relative bg-primary/10 rounded-xl h-[435px] flex items-center justify-center cursor-pointer overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
              {/* Initial Title */}
              <div className="text-primary font-serif text-2xl font-bold transition-opacity duration-500 group-hover:opacity-0">
                Economic Importance
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-primary/90 text-white flex flex-col items-center justify-start pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 overflow-y-auto">
                <h3 className="font-serif text-2xl font-bold mb-4">Economic Importance</h3>
                <p className="text-lg leading-relaxed text-center">
                  The Yangtze River plays a vital role in China's economy, providing water transportation, hydroelectric
                  power, and irrigation for agriculture. The Three Gorges Dam, completed in 2012, is the world's largest
                  hydroelectric power station with a capacity of 22,500 megawatts. The river serves as a major shipping
                  route, with cargo ships traveling over 2,800 kilometers inland. The Yangtze River Economic Belt, which
                  includes 11 provinces, accounts for more than 40% of China's GDP and is home to over 600 million
                  people.
                </p>
              </div>
            </div>

            {/* Cultural Significance Card */}
            <div className="group relative bg-primary/10 rounded-xl h-[435px] flex items-center justify-center cursor-pointer overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
              {/* Initial Title */}
              <div className="text-primary font-serif text-2xl font-bold transition-opacity duration-500 group-hover:opacity-0">
                Cultural Significance
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-primary/90 text-white flex flex-col items-center justify-start pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 overflow-y-auto">
                <h3 className="font-serif text-2xl font-bold mb-4">Cultural Significance</h3>
                <p className="text-lg leading-relaxed text-center">
                  The Yangtze River holds a special place in Chinese culture and has inspired poets and artists for
                  thousands of years. The river flows through breathtaking landscapes, including the famous Three
                  Gorges, which have been celebrated in Chinese art and literature for centuries. The river has been
                  central to Chinese civilization, with major cities like Chongqing, Wuhan, and Nanjing developing along
                  its banks. It has served as a natural boundary between northern and southern China, influencing
                  regional cultures, dialects, and traditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Challenges */}
        <div className="container mx-auto max-w-6xl mb-12 bg-destructive/10 rounded-lg p-8">
          <h2 className="font-serif text-3xl font-bold mb-6 text-destructive">Current Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Industrial and agricultural pollution affecting water quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Impact of dams on the ecosystem and fish migration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Extinction of endangered species like the Yangtze river dolphin</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Overuse of water resources for agriculture and industry</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Soil erosion and sedimentation issues</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Yangtze River Challenges"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
