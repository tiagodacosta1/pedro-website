"use client"

import { useState } from "react"
import { ArrowDown, FileText, Video } from 'lucide-react'
import { Checkbox } from "./Checkbox"
import {
    allEntries,
    musicTypes,
    instrumentationAndResources,
    tuningSystems,
    type MusicEntry,
    type MusicType,
    type InstrumentationCategory,
    type TuningSystemCategory,
} from "./musicEntries"

type Category = "View All" | "Compositions" | "Improvisations" | "Jazz" | "Arrangements"

export default function MyMusic() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("View All")
    const [musicTypeDropdownOpen, setMusicTypeDropdownOpen] = useState(false)
    const [instrumentationDropdownOpen, setInstrumentationDropdownOpen] = useState(false)
    const [tuningDropdownOpen, setTuningDropdownOpen] = useState(false)

    // Update state to handle multiple selections
    const [selectedMusicTypes, setSelectedMusicTypes] = useState<Set<string>>(new Set())
    const [selectedInstrumentations, setSelectedInstrumentations] = useState<Set<string>>(new Set())
    const [selectedTunings, setSelectedTunings] = useState<Set<string>>(new Set())

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

    const getCategoryEntries = (): MusicEntry[] => {
        let entries = selectedCategory === "View All"
            ? allEntries
            : allEntries.filter((entry) => entry.category === selectedCategory)

        // Filter by selected music types
        if (selectedMusicTypes.size > 0) {
            entries = entries.filter(entry =>
                entry.typeOfMusic.split(", ").some(type => selectedMusicTypes.has(type))
            )
        }

        // Filter by selected instrumentations
        if (selectedInstrumentations.size > 0) {
            entries = entries.filter(entry =>
                entry.instrumentationResources.split(", ").some(inst => selectedInstrumentations.has(inst))
            )
        }

        // Filter by selected tunings
        if (selectedTunings.size > 0) {
            entries = entries.filter(entry =>
                entry.tuningSystems.split(", ").some(tuning => selectedTunings.has(tuning))
            )
        }

        return entries
    }

    return (
        <div>
            <div
                className="h-[60vh] bg-cover bg-center flex justify-center items-center text-center"
                style={{ backgroundImage: "url(/hero.png)" }}
            >
                <h1 className="text-4xl font-bold">My Music</h1>
            </div>
            <section className="min-h-screen bg-black px-6 md:px-16 py-12">
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
                    <h2 className="text-2xl font-semibold mb-4">Filters</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Music Type Filter */}
                        <div className="space-y-2">
                            <button
                                className="w-full py-2 px-4 bg-gray-800 text-white rounded flex items-center justify-between"
                                onClick={() => setMusicTypeDropdownOpen(!musicTypeDropdownOpen)}
                            >
                                <span>Type of Music ({selectedMusicTypes.size})</span>
                                <ArrowDown size={16} />
                            </button>
                            {musicTypeDropdownOpen && (
                                <div className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded max-h-60 overflow-y-auto">
                                    {musicTypes.map((type) => (
                                        <label key={type} className="flex items-center space-x-2 py-1 hover:bg-gray-700 px-2 rounded cursor-pointer">
                                            <Checkbox
                                                checked={selectedMusicTypes.has(type)}
                                                onCheckedChange={() => toggleMusicType(type)}
                                            />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Instrumentation Filter */}
                        <div className="space-y-2">
                            <button
                                className="w-full py-2 px-4 bg-gray-800 text-white rounded flex items-center justify-between"
                                onClick={() => setInstrumentationDropdownOpen(!instrumentationDropdownOpen)}
                            >
                                <span>Instrumentation ({selectedInstrumentations.size})</span>
                                <ArrowDown size={16} />
                            </button>
                            {instrumentationDropdownOpen && (
                                <div className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded max-h-60 overflow-y-auto">
                                    {(Object.entries(instrumentationAndResources) as [InstrumentationCategory, string[]][]).map(
                                        ([category, items]) => (
                                            <div key={category}>
                                                <h3 className="text-sm font-semibold text-gray-400 mt-2 mb-1">{category}</h3>
                                                {items.map((item) => (
                                                    <label key={item} className="flex items-center space-x-2 py-1 hover:bg-gray-700 px-2 rounded cursor-pointer">
                                                        <Checkbox
                                                            checked={selectedInstrumentations.has(item)}
                                                            onCheckedChange={() => toggleInstrumentation(item)}
                                                        />
                                                        <span>{item}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Tuning Systems Filter */}
                        <div className="space-y-2">
                            <button
                                className="w-full py-2 px-4 bg-gray-800 text-white rounded flex items-center justify-between"
                                onClick={() => setTuningDropdownOpen(!tuningDropdownOpen)}
                            >
                                <span>Tuning Systems ({selectedTunings.size})</span>
                                <ArrowDown size={16} />
                            </button>
                            {tuningDropdownOpen && (
                                <div className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded max-h-60 overflow-y-auto">
                                    {(Object.entries(tuningSystems) as [TuningSystemCategory, string[]][]).map(
                                        ([category, items]) => (
                                            <div key={category}>
                                                <h3 className="text-sm font-semibold text-gray-400 mt-2 mb-1">{category}</h3>
                                                {items.map((item) => (
                                                    <label key={item} className="flex items-center space-x-2 py-1 hover:bg-gray-700 px-2 rounded cursor-pointer">
                                                        <Checkbox
                                                            checked={selectedTunings.has(item)}
                                                            onCheckedChange={() => toggleTuning(item)}
                                                        />
                                                        <span>{item}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Music List */}
                <div className="mt-12 space-y-12">
                    {getCategoryEntries().map((entry, index) => (
                        <div key={index} className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-start gap-8">
                            <div className="flex-1">
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