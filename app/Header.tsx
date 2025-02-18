"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement | null>(null)
    const headerRef = useRef<HTMLDivElement | null>(null)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleMouseLeave = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                headerRef.current &&
                !headerRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false)
            }
        }

        document.addEventListener("mousemove", handleMouseLeave)

        return () => {
            document.removeEventListener("mousemove", handleMouseLeave)
        }
    }, [])

    return (
        <div className="relative" ref={headerRef}>
            <header
                className={`fixed top-0 left-0 right-0 h-24 flex items-center justify-between border-b border-white z-50 ${menuOpen ? "bg-[#050807]" : "bg-transparent"}`}
            >
                <div className="ml-8 text-xl">
                    <Link href="/" className="text-2xl font-semibold" onClick={closeMenu}>
                        Pedro Laranjeira Finisterra
                    </Link>
                </div>

                <button
                    className="text-lg bg-transparent border-l border-white h-full w-24 rounded hover:bg-white hover:text-red-500 transition"
                    onClick={toggleMenu}
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
            </header>

            {menuOpen && (
                <div ref={menuRef} className="absolute top-20 left-0 right-0 h-[70vh] bg-black flex flex-col sm:flex-row z-40">
                    <div className="flex-1 relative sm:w-1/2">
                        <Image src="/hero.png" alt="Hero Image" layout="fill" objectFit="cover" className="w-full h-full" />
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded">
                            <p className="text-xl font-bold">Event Name Here</p>
                            <p className="text-lg font-medium">London, 2024</p>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center space-y-8 sm:w-1/2">
                        <Link href="/" className="text-2xl font-semibold uppercase ml-8" onClick={closeMenu}>
                            Home
                            <p className="text-sm italic opacity-70">Welcome to my site</p>
                        </Link>

                        <Link href="/BioAndClients" className="text-2xl font-semibold uppercase ml-8" onClick={closeMenu}>
                            About
                            <p className="text-sm italic opacity-70">Learn more about Pedro</p>
                        </Link>
                        <Link href="/Contact" className="text-2xl font-semibold uppercase ml-8" onClick={closeMenu}>
                            Contact
                            <p className="text-sm italic opacity-70">Get in touch</p>
                        </Link>
                        <Link href="/MyMusic" className="text-2xl font-semibold uppercase ml-8" onClick={closeMenu}>
                            My Music
                            <p className="text-sm italic opacity-70">Listen to Pedro&apos;s music</p>
                        </Link>
                        <Link href="/Media" className="text-2xl font-semibold uppercase ml-8" onClick={closeMenu}>
                            Media
                            <p className="text-sm italic opacity-70">Photos and videos</p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header

