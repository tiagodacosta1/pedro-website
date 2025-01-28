import ShortBio from "./ShortBio";
import DiscoverWork from "./DiscoverWork";


const HomePage = () => {
  return (
    <div>
      <div className="relative h-[120vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.png')" }}>

        {/* Content Overlay */}
        <div className="absolute bottom-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-transparent to-red-500">
          <div>
            <p className="text-lg font-light">
              Composer, Researcher <br /> & Artist
            </p>
          </div>
          <div>
            <button className="text-lg font-medium underline underline-offset-8">
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

export default HomePage;
