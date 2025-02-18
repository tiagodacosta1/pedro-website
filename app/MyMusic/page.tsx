"use client"

import { useState } from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function MyMusic() {
    const [genreDropdownOpen, setGenreDropdownOpen] = useState(false)
    const [instrumentDropdownOpen, setInstrumentDropdownOpen] = useState(false)
    const [tuningDropdownOpen, setTuningDropdownOpen] = useState(false)

    return (
        <div>
            <div
                className="h-[60vh] bg-cover bg-center flex justify-center items-center text-center"
                style={{ backgroundImage: "url(/hero.png)" }}
            >
                <h1 className="text-4xl font-bold">My Music</h1>
            </div>
            <section className="min-h-screen bg-black px-6 md:px-16 py-12">
                {/* Main Sections */}
                <div className="border-b border-gray-700 pb-6">
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        <button className="py-2 px-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                            View All
                        </button>
                        <button className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                            Compositions
                        </button>
                        <button className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                            Improvisations
                        </button>
                        <button className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Jazz</button>
                        <button className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                            Arrangements
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="mt-8 pb-6 border-b border-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">Filters</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="relative">
                            <button
                                className="w-full py-2 px-4 bg-gray-800 text-white rounded flex items-center justify-between"
                                onClick={() => setGenreDropdownOpen(!genreDropdownOpen)}
                            >
                                <span>By Genre or Style</span> <ArrowDown size={16} />
                            </button>
                            {genreDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-full py-2 px-4 bg-gray-800 border border-gray-700 rounded z-50">
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Compositions</p>
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Improvisations</p>
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Jazz</p>
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Arrangements</p>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="w-full py-2 px-4 bg-gray-800 text-white rounded flex items-center justify-between"
                                onClick={() => setInstrumentDropdownOpen(!instrumentDropdownOpen)}
                            >
                                <span>By Instrument</span> <ArrowDown size={16} />
                            </button>
                            {instrumentDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-full py-2 px-4 bg-gray-800 border border-gray-700 rounded z-50">
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Violin</p>
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Piano</p>
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Electric Bass</p>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="w-full py-2 px-4 bg-gray-800 text-white rounded flex items-center justify-between"
                                onClick={() => setTuningDropdownOpen(!tuningDropdownOpen)}
                            >
                                <span>Tuning & Intonation</span> <ArrowDown size={16} />
                            </button>
                            {tuningDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-full py-2 px-4 bg-gray-800 border border-gray-700 rounded z-50">
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Just Intonation</p>
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Equal Temperament</p>
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Microtonal Tuning</p>
                                    <p className="py-1 hover:bg-gray-700 cursor-pointer">Historical Temperaments</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Music List */}
                <div className="mt-12 space-y-12">
                    {[1, 2].map((_, index) => (
                        <div key={index} className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-start gap-8">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold mt-2">... spiraling.</h2>
                                <p className="text-gray-400 mt-2">2024/2025 </p>
                                <p className="text-gray-400 mt-2"> for the Lumatone</p>
                                <p className="text-gray-400 mt-2"> {`1'30''`}</p>
                                <p className="text-gray-400 mt-4">
                                    {`Written in commemoration of Alexandra Mouroutsou's 10th birthday.`}
                                </p>
                                <button className="mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black transition">
                                    See Score Excerpt
                                </button>
                            </div>
                            <div className="flex-1 flex flex-col items-center sticky top-64">
                                <div className="bg-gray-800 w-full h-40 md:h-48"></div>
                                {index === 1 && <Image src="/image.png" alt="Image" width={500} height={300} />}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

