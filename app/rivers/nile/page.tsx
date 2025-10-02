"use client"

import Link from "next/link"
import { Ruler, Globe, MapPin, Waves } from "lucide-react"
import { ArrowUpDown, Flag, Droplets, Map } from "lucide-react"

export default function NilePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <div className="sticky top-0 z-50 py-4 px-4 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-center">
          <Link href="/" className="group">
            <div className="bg-teal-100 rounded-3xl px-8 py-3 shadow-md hover:shadow-lg transition-shadow">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-teal-800">Breathing Rivers</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Hero Section with Titles */}
<section className="relative h-[60vh] flex items-start justify-center overflow-hidden pt-16">
  <div className="absolute inset-0">
    <img src="/nile-river.jpg" alt="Nile River" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
  </div>

  {/* Titles over hero */}
  <div className="relative z-10 container mx-auto max-w-6xl px-4 flex md:flex-row flex-col items-start md:items-start justify-between gap-8">
    {/* Left: Main Title */}
    <div className="text-left">
      <h1 className="font-serif text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
        The Nile River
      </h1>
      <p className="font-serif text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
        World's Longest River
      </p>
    </div>

          {/* Right: Overview text */}
<div className="md:max-w-md drop-shadow-lg relative -mt-10">
  <p className="font-sans text-sm md:text-lg leading-relaxed mb-3 text-white/80">
    The Nile River is the longest river in the world, stretching 6,650 kilometers through 11 African
    countries. It serves as a lifeline for millions of people and was the cradle of ancient Egyptian
    civilization. 
    The river has two major tributaries: the White Nile, which originates in the Great Lakes region of
    central Africa, and the Blue Nile, which begins at Lake Tana in Ethiopia. These tributaries meet in
    Khartoum, Sudan, before flowing north through Egypt to the Mediterranean Sea.
  </p>
  
</div>

        </div>
      </section>

      {/* Key Facts with Icons */}
<section className="px-4 pt-4">
  <div className="container mx-auto max-w-6xl -mt-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary/10 p-4 rounded-lg mb-3">
          <ArrowUpDown className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-1">Length</h3>
        <p className="text-sm text-muted-foreground">6,650 km</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary/10 p-4 rounded-lg mb-3">
          <Flag className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-1">Countries</h3>
        <p className="text-sm text-muted-foreground">11 African nations</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary/10 p-4 rounded-lg mb-3">
          <Droplets className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-1">Mouth</h3>
        <p className="text-sm text-muted-foreground">Mediterranean Sea</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary/10 p-4 rounded-lg mb-3">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-1">Location</h3>
        <p className="text-sm text-muted-foreground">Northeast Africa</p>
      </div>
    </div>
  </div>

        

        {/* Info Cards Section */}
<div className="container mx-auto max-w-6xl mb-12">
  <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Explore More</h2>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Historical Significance Card */}
    <div className="group relative bg-primary/10 rounded-xl h-[435px] flex items-center justify-center cursor-pointer overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
      {/* Initial Title */}
      <div className="text-primary font-serif text-2xl font-bold transition-opacity duration-500 group-hover:opacity-0">
        Historical Significance
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 bg-primary/90 text-white flex flex-col items-center justify-start pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 overflow-y-auto">
        <h3 className="font-serif text-2xl font-bold mb-4">Historical Significance</h3>
        <p className="text-lg leading-relaxed text-center">
          The Nile River was the foundation of ancient Egyptian civilization, providing water, food, and
          transportation. The annual flooding of the Nile brought fertile soil that enabled agriculture and
          the flourishing of one of history's greatest civilizations. Ancient Egyptians called the Nile "Ar"
          or "Aur," meaning "black," referring to the rich black soil left behind after the annual floods.
          The river was so central to Egyptian life that their calendar was based on its flooding cycle.
        </p>
      </div>
    </div>

    {/* Environmental Importance Card */}
    <div className="group relative bg-primary/10 rounded-xl h-[435px] flex items-center justify-center cursor-pointer overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
      {/* Initial Title */}
      <div className="text-primary font-serif text-2xl font-bold transition-opacity duration-500 group-hover:opacity-0">
        Environmental Importance
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 bg-primary/90 text-white flex flex-col items-center justify-start pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 overflow-y-auto">
        <h3 className="font-serif text-2xl font-bold mb-4">Environmental Importance</h3>
        <p className="text-lg leading-relaxed text-center">
          The Nile River supports a rich and diverse ecosystem, providing habitats for many plant and
          animal species. It plays a vital role in agriculture and the economy of the region, supporting
          over 300 million people who depend on it for water, food, and livelihoods. The Nile basin is
          home to Nile crocodiles, hippos, and over 100 species of fish. Its wetlands and delta are crucial
          stopover points for migratory birds traveling between Europe and Africa.
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
                  <span>Pollution from industrial and agricultural sources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Water disputes between riparian countries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Climate change impact on water flow and availability</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Overuse of water resources for agriculture and industry</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">•</span>
                  <span>Dam construction affecting downstream water supply</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Nile River Challenges"
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
