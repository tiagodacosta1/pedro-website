import Image from "next/image"

const ArtistProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center p-4 lg:p-8">
      {/* Left Section (Image) */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
        <div className="relative w-full max-w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <Image
            src="/IMG_8700.JPG" // Replace with your image path
            alt="Composer holding a keyboard"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Section (Text Content) */}
      <div className="w-full lg:w-1/2 lg:pl-12 lg:pr-16 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-serif mb-4">
          Composer, <br className="hidden lg:inline" /> Researcher <br className="hidden lg:inline" /> & Artist
        </h1>
        <p className="mb-8 leading-relaxed max-w-prose mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default ArtistProfile

