'use client';

import { useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function MyMusic() {
    const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
    const [instrumentDropdownOpen, setInstrumentDropdownOpen] = useState(false);

    return (
        <div>
            <div
                className="h-[60vh] bg-cover bg-center flex justify-center items-center text-white text-center"
                style={{ backgroundImage: 'url(/hero.png)' }}
            >
                <h1>My music</h1>
            </div>
            <section className="min-h-screen bg-black text-white px-6 md:px-16 py-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-5xl font-bold">My Music</h1>
                    <p className="text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 pb-4">
                    <button className="text-white border-b-2 border-white pb-1 text-center">View All</button>
                    <div className="relative text-center">
                        <button
                            className="text-gray-400 flex items-center justify-center gap-2 mx-auto"
                            onClick={() => setGenreDropdownOpen(!genreDropdownOpen)}
                        >
                            By Genre or Style <ArrowDown size={16} />
                        </button>
                        {genreDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-black text-white w-full py-2 px-4 border border-gray-700 z-50">
                                {/* Add your genre options here */}
                                <p className="py-1">Jazz</p>
                                <p className="py-1">Classical</p>
                                <p className="py-1">Electronic</p>
                            </div>
                        )}
                    </div>
                    <div className="relative text-center">
                        <button
                            className="text-gray-400 flex items-center justify-center gap-2 mx-auto"
                            onClick={() => setInstrumentDropdownOpen(!instrumentDropdownOpen)}
                        >
                            By Instrument <ArrowDown size={16} />
                        </button>
                        {instrumentDropdownOpen && (
                            <div className="absolute left-0 mt-2 text-white w-full py-2 px-4 border border-gray-700 z-50">
                                {/* Add your instrument options here */}
                                <p className="py-1">Violin</p>
                                <p className="py-1">Piano</p>
                                <p className="py-1">Electric Bass</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Music List */}
                <div className="mt-12 space-y-12">
                    {[1, 2].map((_, index) => (
                        <div
                            key={index}
                            className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-start gap-8"
                        >
                            <div className="flex-1">
                                <p className="text-gray-400 text-sm">GENRE/STYLE • EDITABLE TYPE • INSTRUMENT, VOICE, VIOLA</p>
                                <h2 className="text-2xl font-semibold mt-2">Dreams from an Old Memory</h2>
                                <p className="text-gray-400 mt-2">2024 by Electric Bass and Electronics Written for Laura Perez Rodas</p>
                                <p className="text-gray-400 mt-4">
                                    Based on Swedish folklore songs with experimental harmony and the
                                    18th-century Chronicle of Lundenberg's Orchestra. {/* Add additional content here */}
                                </p>
                                <button className="mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black transition">
                                    See Score Excerpt
                                </button>
                            </div>
                            <div className="flex-1 flex flex-col items-center sticky top-64">
                                <div className="bg-gray-800 w-full h-40 md:h-48"></div>
                                {index === 1 && (
                                    <Image src="/image.png" alt="Image" width={500} height={300} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
