
'use client';

import { useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link"

interface MediaItem {
    id: number
    mediaType: string
    title: string
    subtitle: string
    description: string
    imageUrl: string
    href: string
}




export default function Media() {
    const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
    const [instrumentDropdownOpen, setInstrumentDropdownOpen] = useState(false);

    const mediaItems: MediaItem[] = [
        {
            id: 1,
            mediaType: "video",

            title: "Media Name Here",
            subtitle: "Media Name Here",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "/placeholder.svg?height=400&width=600",
            href: "#",
        },
        {
            id: 2,
            mediaType: "video",
            title: "Media Name Here",
            subtitle: "Media Name Here",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "/placeholder.svg?height=400&width=600",
            href: "#",
        },
        {
            id: 3,
            mediaType: "video",
            title: "Media Name Here",
            subtitle: "Media Name Here",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "/placeholder.svg?height=400&width=600",
            href: "#",
        },
        {
            id: 4,
            mediaType: "video",
            title: "Media Name Here",
            subtitle: "Media Name Here",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "/placeholder.svg?height=400&width=600",
            href: "#",
        },
    ]


    return (
        <div className="relative">
            {/* Fixed background and h1 */}
            <div className="fixed top-0 left-0 right-0 z-10 h-[60vh]">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url(/hero.png)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1>Media</h1>
                </div>
            </div>

            {/* Spacer to push content below the fixed header */}
            <div className="h-[60vh]"></div>

            {/* Scrollable content */}
            <div className="relative z-20 bg-black">
                <div className="container mx-auto max-w-4xl py-32">




                    {/* Filters */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 pb-4">
                        <button className=" border-b-2 border-white pb-1 text-center">View All</button>
                        <div className="relative text-center">
                            <button
                                className="text-gray-400 flex items-center justify-center gap-2 mx-auto"
                                onClick={() => setGenreDropdownOpen(!genreDropdownOpen)}
                            >
                                By Genre or Style <ArrowDown size={16} />
                            </button>
                            {genreDropdownOpen && (
                                <div className="absolute left-0 mt-2 bg-black  w-full py-2 px-4 border border-gray-700 z-50">
                                    {/* Add your genre options here */}
                                    <p className="py-1">Compositions</p>
                                    <p className="py-1">Microtonal Improvisations</p>
                                    <p className="py-1">Jazz</p>
                                    <p className="py-1">A Capella Arrangements</p>
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
                                <div className="absolute left-0 mt-2  w-full py-2 px-4 border border-gray-700 z-50">
                                    {/* Add your instrument options here */}
                                    <p className="py-1">Violin</p>
                                    <p className="py-1">Piano</p>
                                    <p className="py-1">Electric Bass</p>
                                    <p className="py-1">test</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-black min-h-screen max-w-7xl mx-auto p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-24">
                        {mediaItems.map((item) => (
                            <Link href={item.href} key={item.id} className="group block">
                                <div className="space-y-4">
                                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-800">
                                        <Image
                                            src={item.imageUrl || "/placeholder.svg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <p className=" font-xl uppercase">{item.mediaType}</p>

                                        <h3 className=" text-3xl font-xl">{item.title}</h3>
                                        <h3 className=" text-normal italic "> {item.subtitle}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                                        <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
                                            Learn More
                                        </button>                                            </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>





            </div>
        </div>

    )
}

