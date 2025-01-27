import Image from "next/image";
import ShortBio from "./ShortBio";
import DiscoverWork from "./DiscoverWork";

const HeaderSection = () => {
  return (
    <div>
      <div className="relative h-[120vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.png')" }}>
        <header className="h-32 bg-transparent flex items-center justify-between border-b border-white">
          {/* Name on the left */}
          <div className="ml-8  text-xl">
            Pedro <br /> Finisterra
          </div>

          {/* Menu button on the right */}
          <button className=" text-lg bg-transparent border-l border-white h-full w-32 rounded hover:bg-white hover:text-red-500 transition">
            Menu
          </button>
        </header>

        {/* Content Overlay */}
        <div className="absolute bottom-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-transparent to-red-500">
        <div>
            <p className=" text-lg font-light">
              Composer, Researcher <br /> & Artist
            </p>
          </div>
          <div>
            <button className=" text-lg font-medium underline underline-offset-8">
              PLAY
            </button>
          </div>
        </div>
      </div>

      <ShortBio />
      <DiscoverWork />
    </div>
  );
};

export default HeaderSection;
