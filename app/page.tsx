import ShortBio from "./ShortBio"
import DiscoverWork from "./DiscoverWork"
import Image from "next/image"

const HomePage = () => {
  return (
    <div>
      <div className="relative min-h-screen flex flex-col justify-end">
        <Image src="/hero.png" alt="Hero background" layout="fill" objectFit="cover" quality={100} priority />

        {/* Content Overlay */}
        <div className="relative w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-6 bg-gradient-to-b from-transparent to-red-500">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <p className="text-base sm:text-lg md:text-xl font-light">
              Composer, Researcher <br className="hidden sm:inline" /> & Artist
            </p>
          </div>
          <div>
            <button className="text-base sm:text-lg md:text-xl font-medium underline underline-offset-8 hover:text-white transition-colors">
              PLAY
            </button>
          </div>
        </div>
      </div>

      <ShortBio />
      <DiscoverWork />
    </div>
  )
}

export default HomePage

