'use client';

import Image from 'next/image';

export default function BioAndClients() {
    // Placeholder array for client logos
    const clients = Array(8).fill(null);

    return (
        <div className="min-h-screen relative">
            {/* Fixed background image and title */}
            <div className="fixed inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/hero.png)' }}
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-white">About</h1>
                </div>
            </div>

            {/* Scrollable content */}
            <div className="relative z-10">
                {/* Transparent spacer to show background image */}
                <div className="h-[60vh]" />

                {/* Main content with black background */}
                <div className="bg-black text-white">
                    <div className="container mx-auto max-w-4xl py-32">
                        {/* Biography Text */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-sm leading-relaxed">
                            <p>
                                PEDRO LARANGEIRA FINISTERRA WAS BORN IN LISBON IN 1994. PEDRO LARANGEIRA FINISTERRA BEGAN HIS MUSICAL
                                STUDIES AT THE CONSERVATORY OF MUSIC IN MADEIRA, WITH DISTINCTION IN SECONDARY STUDIES IN MUSICAL THEORY IN
                                2013.
                            </p>
                            <p>
                                Pedro started to study at a young age and to learn composition with Francisco Loreto and harmony with
                                Adriano Henriques. He studied with Pedro Camacho between 2010 and 2012. During this time, he received a
                                variety of musical experiences which led him to graduate in Art and Multimedia.
                            </p>
                            <p>
                                In 2015 he went on to do a Game Making & VFX BA at Digital Media at the ULHT in Lisbon. During this time he
                                started studying violin with Philip Xiao, New York Philharmonic Orchestra, and film music with Christopher
                                Young, and film theory with Michael Levine at the Berklee College of Music in.
                            </p>
                            <p>
                                Then he started to work as a game composition in Portugal with Mauricio Ponté and Roberto Neto and to study
                                at the Royal College of Music in London. He has been working as a composer and orchestrator across Portugal
                                and abroad. He has had his works performed throughout Europe and has collaborated with many outstanding
                                young soloists and with contemporary composers.
                            </p>
                        </div>

                        {/* Profile Image */}
                        <div className="flex justify-center mb-32">
                            <div className="relative w-64 h-80">
                                <Image
                                    src="/IMG_8700.JPG"
                                    alt="Pedro Larangeira Finisterra with keyboard"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Previous Clients Section */}
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <h2 className="text-2xl tracking-wide">PREVIOUS CLIENTS</h2>
                            </div>
                            <p className="text-sm">
                                I have been lucky to work with some wonderful advertising
                                <br />
                                arts and documentary teams included in above.
                            </p>
                        </div>

                        {/* Clients Grid */}
                        <div className="relative max-w-6xl mx-auto px-[1px] py-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-16">
                                {clients.map((_, index) => (
                                    <div
                                        key={index}
                                        className="aspect-video bg-[#1A1A1A] w-full relative z-10"
                                        aria-label={`Client ${index + 1}`}
                                    >
                                        {/* Image for the first client logo */}
                                        {index === 0 && (
                                            <div className="w-full h-full relative">
                                                <Image
                                                    src="/decibell.png"
                                                    alt="Decibell Logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className="object-fit"
                                                />
                                            </div>
                                        )}

                                        {/* Image for the second client logo (Guildhall SVG) */}
                                        {index === 1 && (
                                            <div className="w-full h-full relative">
                                                <Image
                                                    src="/guildhall.jpeg"
                                                    alt="Guildhall Logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
