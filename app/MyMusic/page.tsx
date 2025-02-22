"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowDown, FileText, Video } from "lucide-react"
import { Checkbox } from "./Checkbox"
import {
    allEntries,
    musicTypes,
    instrumentationAndResources,
    tuningSystems,
    type MusicEntry,
    type InstrumentationCategory,
    type TuningSystemCategory,
} from "./musicEntries"

type Category = "View All" | "Compositions" | "Improvisations" | "Jazz" | "Arrangements"

export default function MyMusic() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("View All")
    const [musicTypeDropdownOpen, setMusicTypeDropdownOpen] = useState(false)
    const [instrumentationDropdownOpen, setInstrumentationDropdownOpen] = useState(false)
    const [tuningDropdownOpen, setTuningDropdownOpen] = useState(false)

    const [selectedMusicTypes, setSelectedMusicTypes] = useState<Set<string>>(new Set())
    const [selectedInstrumentations, setSelectedInstrumentations] = useState<Set<string>>(new Set())
    const [selectedTunings, setSelectedTunings] = useState<Set<string>>(new Set())

    const heroRef = useRef<HTMLDivElement>(null)
    const [heroHeight, setHeroHeight] = useState(0)

    useEffect(() => {
        if (heroRef.current) {
            setHeroHeight(heroRef.current.offsetHeight)
        }
    }, [])

    const toggleMusicType = (type: string) => {
        const newSelected = new Set(selectedMusicTypes)
        if (newSelected.has(type)) {
            newSelected.delete(type)
        } else {
            newSelected.add(type)
        }
        setSelectedMusicTypes(newSelected)
    }

    const toggleInstrumentation = (item: string) => {
        const newSelected = new Set(selectedInstrumentations)
        if (newSelected.has(item)) {
            newSelected.delete(item)
        } else {
            newSelected.add(item)
        }
        setSelectedInstrumentations(newSelected)
    }

    const toggleTuning = (item: string) => {
        const newSelected = new Set(selectedTunings)
        if (newSelected.has(item)) {
            newSelected.delete(item)
        } else {
            newSelected.add(item)
        }
        setSelectedTunings(newSelected)
    }

    const resetFilters = () => {
        setSelectedMusicTypes(new Set())
        setSelectedInstrumentations(new Set())
        setSelectedTunings(new Set())
    }

    const getCategoryEntries = (): MusicEntry[] => {
        let entries =
            selectedCategory === "View All" ? allEntries : allEntries.filter((entry) => entry.category === selectedCategory)

        if (selectedMusicTypes.size > 0) {
            entries = entries.filter(
                (entry) =>
                    selectedMusicTypes.size ===
                    entry.typeOfMusic.split(", ").filter((type) => selectedMusicTypes.has(type)).length,
            )
        }

        if (selectedInstrumentations.size > 0) {
            entries = entries.filter(
                (entry) =>
                    selectedInstrumentations.size ===
                    entry.instrumentationResources.split(", ").filter((inst) => selectedInstrumentations.has(inst)).length,
            )
        }

        if (selectedTunings.size > 0) {
            entries = entries.filter(
                (entry) =>
                    selectedTunings.size ===
                    entry.tuningSystems.split(", ").filter((tuning) => selectedTunings.has(tuning)).length,
            )
        }

        return entries
    }

    return (
        <div>
            <div
                ref={heroRef}
                className="h-[60vh] bg-cover bg-center bg-fixed flex justify-center items-center text-center fixed inset-x-0 top-0 z-10"
                style={{ backgroundImage: "url(/hero.png)" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="text-4xl font-bold text-white relative z-20">My Music</h1>
            </div>
            <section className="relative z-20 bg-black px-6 md:px-16 py-12" style={{ marginTop: `${heroHeight}px` }}>
                {/* Categories */}
                <div className="border-b border-gray-700 pb-6">
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {(["View All", "Compositions", "Improvisations", "Jazz", "Arrangements"] as Category[]).map((category) => (
                            <button
                                key={category}
                                className={`py-2 px-4 ${selectedCategory === category ? "bg-white text-black" : "bg-gray-800 text-white"
                                    } font-semibold rounded hover:bg-gray-200 hover:text-black transition`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filters */}
                <div className="mt-8 pb-6 border-b border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Filters</h2>
                        <button
                            onClick={resetFilters}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        >
                            Reset Filters
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Music Type Filter */}
                        <div
                            className="relative"
                            onMouseEnter={() => setMusicTypeDropdownOpen(true)}
                            onMouseLeave={() => setMusicTypeDropdownOpen(false)}
                        >
                            <button
                                className={`w-full py-2 px-4 bg-gray-800 text-white rounded-t flex items-center justify-between ${musicTypeDropdownOpen ? "rounded-b-none" : "rounded-b"
                                    }`}
                            >
                                <span>Type of Music ({selectedMusicTypes.size})</span>
                                <ArrowDown size={16} />
                            </button>
                            {musicTypeDropdownOpen && (
                                <div className="absolute left-0 right-0 top-full bg-gray-800 border-t-0 border border-gray-700 rounded-b max-h-60 overflow-y-auto z-30">
                                    <div className="p-4">
                                        {musicTypes.map((type) => (
                                            <label
                                                key={type}
                                                className="flex items-center space-x-2 py-1 hover:bg-gray-700 px-2 rounded cursor-pointer"
                                            >
                                                <Checkbox
                                                    checked={selectedMusicTypes.has(type)}
                                                    onCheckedChange={() => toggleMusicType(type)}
                                                />
                                                <span>{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Instrumentation Filter */}
                        <div
                            className="relative"
                            onMouseEnter={() => setInstrumentationDropdownOpen(true)}
                            onMouseLeave={() => setInstrumentationDropdownOpen(false)}
                        >
                            <button
                                className={`w-full py-2 px-4 bg-gray-800 text-white rounded-t flex items-center justify-between ${instrumentationDropdownOpen ? "rounded-b-none" : "rounded-b"
                                    }`}
                            >
                                <span>Instrumentation ({selectedInstrumentations.size})</span>
                                <ArrowDown size={16} />
                            </button>
                            {instrumentationDropdownOpen && (
                                <div className="absolute left-0 right-0 top-full bg-gray-800 border-t-0 border border-gray-700 rounded-b max-h-60 overflow-y-auto z-30">
                                    <div className="p-4">
                                        {(Object.entries(instrumentationAndResources) as [InstrumentationCategory, string[]][]).map(
                                            ([category, items]) => (
                                                <div key={category}>
                                                    <h3 className="text-sm font-semibold text-gray-400 mt-2 mb-1">{category}</h3>
                                                    {items.map((item) => (
                                                        <label
                                                            key={item}
                                                            className="flex items-center space-x-2 py-1 hover:bg-gray-700 px-2 rounded cursor-pointer"
                                                        >
                                                            <Checkbox
                                                                checked={selectedInstrumentations.has(item)}
                                                                onCheckedChange={() => toggleInstrumentation(item)}
                                                            />
                                                            <span>{item}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tuning Systems Filter */}
                        <div
                            className="relative"
                            onMouseEnter={() => setTuningDropdownOpen(true)}
                            onMouseLeave={() => setTuningDropdownOpen(false)}
                        >
                            <button
                                className={`w-full py-2 px-4 bg-gray-800 text-white rounded-t flex items-center justify-between ${tuningDropdownOpen ? "rounded-b-none" : "rounded-b"
                                    }`}
                            >
                                <span>Tuning Systems ({selectedTunings.size})</span>
                                <ArrowDown size={16} />
                            </button>
                            {tuningDropdownOpen && (
                                <div className="absolute left-0 right-0 top-full bg-gray-800 border-t-0 border border-gray-700 rounded-b max-h-60 overflow-y-auto z-30">
                                    <div className="p-4">
                                        {(Object.entries(tuningSystems) as [TuningSystemCategory, string[]][]).map(([category, items]) => (
                                            <div key={category}>
                                                <h3 className="text-sm font-semibold text-gray-400 mt-2 mb-1">{category}</h3>
                                                {items.map((item) => (
                                                    <label
                                                        key={item}
                                                        className="flex items-center space-x-2 py-1 hover:bg-gray-700 px-2 rounded cursor-pointer"
                                                    >
                                                        <Checkbox checked={selectedTunings.has(item)} onCheckedChange={() => toggleTuning(item)} />
                                                        <span>{item}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Music List */}
                <div className="mt-12 space-y-12">
                    {getCategoryEntries().map((entry, index) => (
                        <div key={index} className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-start gap-8">
                            <div className={`flex-1 ${entry.videoLinks && entry.videoLinks.length > 1 ? "md:sticky md:top-4" : ""}`}>
                                <h2 className="text-2xl font-semibold mt-2">{entry.title}</h2>
                                <p className="text-gray-400 mt-2">{entry.year}</p>
                                <p className="text-gray-400 mt-2">{entry.instrumentation}</p>
                                <p className="text-gray-400 mt-2">{entry.duration}</p>
                                {entry.additionalInfo && <p className="text-gray-400 mt-2">{entry.additionalInfo}</p>}
                                <p className="text-gray-400 mt-4">{entry.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {entry.videoLinks &&
                                        entry.videoLinks.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                            >
                                                <Video className="w-4 h-4 mr-2" />
                                                Video {entry.videoLinks && entry.videoLinks.length > 1 ? i + 1 : ""}
                                            </a>
                                        ))}
                                    {entry.scoreLink && (
                                        <a
                                            href={entry.scoreLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                        >
                                            <FileText className="w-4 h-4 mr-2" />
                                            Score
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-4">
                                {entry.videoLinks && entry.videoLinks.length > 0 && (
                                    <>
                                        {entry.videoLinks.map((link, index) => (
                                            <iframe
                                                key={index}
                                                width="100%"
                                                height="315"
                                                src={`https://www.youtube.com/embed/${new URL(link).searchParams.get("v")}`}
                                                title={`${entry.title} video ${index + 1}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="rounded-lg"
                                            ></iframe>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

