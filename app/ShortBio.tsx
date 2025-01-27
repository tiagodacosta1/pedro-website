// components/ArtistProfile.js
import Image from "next/image";

const ArtistProfile = () => {
  return (
    <div className="flex flex-col md:flex-row  h-[120vh] items-center">
      {/* Left Section (Image) */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end">
        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
          <Image
            src="/IMG_8700.JPG" // Replace with your image path
            alt="Composer holding a keyboard"
            layout="fill"
            objectFit="cover"
     
          />
        </div>
      </div>

      {/* Right Section (Text Content) */}
      <div className="md:w-1/2 w-full p-8 md:pl-12 md:pr-16 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-serif mb-4">
          Composer, <br /> Researcher <br /> & Artist
        </h1>
        <p className=" mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ArtistProfile;
