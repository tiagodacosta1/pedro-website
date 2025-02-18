"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className=" py-6 px-4 md:px-8">
            <div className="container mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
                {/* Copyright - Full width on mobile, normal on desktop */}
                <h3 className="text-center md:text-left">© {new Date().getFullYear()} INAME. ALL RIGHTS RESERVED.</h3>

                {/* Made by - Full width on mobile, normal on desktop */}
                <h3 className="text-center order-last md:order-none">Made by XYZ</h3>

                {/* Links - Centered on mobile, right-aligned on desktop */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <h3 className="flex items-center space-x-4 md:space-x-6">
                        <Link href="/contact" className="hover:opacity-70 transition-opacity">
                            Contact
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                        >
                            Instagram
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                        >
                            LinkedIn
                        </Link>
                    </h3>
                    <button
                        onClick={scrollToTop}
                        className="p-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </footer >
    )
}

