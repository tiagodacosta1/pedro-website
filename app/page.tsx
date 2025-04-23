// import ShortBio from "./ShortBio"
// import DiscoverWork from "./DiscoverWork"
// import Image from "next/image"
// import { allEntries } from './MyMusic/musicEntries';

// const updatedEntries = allEntries.map(entry => ({
//   ...entry,
//   "Type of Music": "",
//   "Instrumentation & Resources": "",
//   "Tuning Systems & Intonation": ""
// }));

// console.log(JSON.stringify(updatedEntries, null, 2));
// console.log(`\nUpdated ${updatedEntries.length} entries with new keys.`);

// const HomePage = () => {
//   return (
//     <div>
//       <div className="relative min-h-screen flex flex-col justify-end">
//         <Image src="/image005.jpg" alt="Hero background" layout="fill" objectFit="cover" quality={100} priority />

//         {/* Content Overlay */}
//         <div className="relative w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-6 bg-gradient-to-b from-transparent to-red-500">
//           <div className="mb-4 sm:mb-0 text-center sm:text-left">
//             <h2 className="text-base sm:text-lg md:text-xl ">
//               Composer & Researcher
//             </h2>
//           </div>
//           <div>
//             {/* <button className="text-base sm:text-lg md:text-xl font-medium underline underline-offset-8 hover: transition-colors">
//               PLAY
//             </button> */}
//           </div>
//         </div>
//       </div>

//       <ShortBio />
//       <DiscoverWork />
//     </div>
//   )
// }

// export default HomePage

import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function ComingSoonPage() {
  return (
    <div className={`min-h-screen bg-black flex flex-col items-center justify-center ${montserrat.className}`}>
      <div className="text-center px-4">
        <h1 className="text-2xl md:text-3xl font-light tracking-wider text-white mb-8">PEDRO LARANJEIRA FINISTERRA</h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">Website Coming Soon</p>
        <p className="text-sm md:text-base text-white/60">pedroffinisterra@gmail.com</p>
      </div>
    </div>
  )
}
