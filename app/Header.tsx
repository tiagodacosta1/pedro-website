'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null); // Ref for detecting hover outside the menu
    const headerRef = useRef<HTMLDivElement | null>(null); // Ref for detecting hover outside the header

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        // Close menu when mouse leaves the header or overlay area
        const handleMouseLeave = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                headerRef.current &&
                !headerRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        // Attach event listener for mouse leave
        document.addEventListener('mousemove', handleMouseLeave);

        // Cleanup the event listener
        return () => {
            document.removeEventListener('mousemove', handleMouseLeave);
        };
    }, []);

    return (
        <div className="relative" ref={headerRef}>
            <header
                className={`fixed top-0 left-0 right-0 h-32 flex items-center justify-between border-b border-white z-50 ${menuOpen ? 'bg-[#050807]' : 'bg-transparent'}`}
            >
                {/* Name on the left */}
                <div className="ml-8 text-xl">
                    <Link href="/" className="text-2xl font-semibold uppercase">
                        Pedro <br /> Finisterra
                    </Link>
                </div>

                {/* Menu button on the right */}
                <button
                    className="text-lg bg-transparent border-l border-white h-full w-32 rounded hover:bg-white hover:text-red-500 transition"
                    onClick={toggleMenu}
                >
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
            </header>

            {menuOpen && (
                <div
                    ref={menuRef} // Attach the ref to the menu container
                    className="absolute top-32 left-0 right-0 h-[70vh] bg-black text-white flex flex-col sm:flex-row z-40"
                >
                    {/* Left Column - Image with Overlay */}
                    <div className="flex-1 relative sm:w-1/2">
                        <Image
                            src="/hero.png" // Replace with your image path
                            alt="Hero Image"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full" // Ensure it takes up the full space
                        />
                        {/* Text Overlay */}
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded">
                            <p className="text-xl font-bold">Event Name Here</p>
                            <p className="text-lg font-medium">London, 2024</p>
                        </div>
                    </div>

                    {/* Right Column - Navigation Links */}
                    <div className="flex-1 flex flex-col justify-center space-y-8 sm:w-1/2">
                        <Link href="/" className="text-2xl font-semibold uppercase ml-8">
                            Home
                            <p className="text-sm italic opacity-70">Welcome to my site</p>
                        </Link>

                        <Link href="/BioAndClients" className="text-2xl font-semibold uppercase ml-8">
                            BIO
                            <p className="text-sm italic opacity-70">Learn more about Pedro</p>
                        </Link>
                        <Link href="/Contact" className="text-2xl font-semibold uppercase ml-8">
                            Contact
                            <p className="text-sm italic opacity-70">Learn more about Pedro</p>
                        </Link>
                        <Link href="/MyMusic" className="text-2xl font-semibold uppercase ml-8">
                            My Music
                            <p className="text-sm italic opacity-70">Learn more about Pedro</p>
                        </Link>
                        <Link href="/Media" className="text-2xl font-semibold uppercase ml-8">
                            Media
                            <p className="text-sm italic opacity-70">Learn more about Pedro</p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
