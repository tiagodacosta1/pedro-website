"use client"

import { useState } from "react"
import { ArrowDown } from "lucide-react"

type MusicEntry = {
    category: string
    title: string
    year: string
    instrumentation: string
    duration: string
    additionalInfo?: string
    description: string
}

const allEntries: MusicEntry[] = [
    {
        category: "Compositions",
        title: "... spiraling.",
        year: "2024/2025",
        instrumentation: "for the Lumatone",
        duration: "1'30''",
        additionalInfo: "Poem by Eugenio de Andrade",
        description: "Written in commemoration of Alexandra Mouroutsou's 10th birthday.",
    },
    {
        category: "Compositions",
        title: "Contigo",
        year: "2023",
        instrumentation: "for Soprano and Piano",
        duration: "3'",
        additionalInfo: "Poem by Eugénio de Andrade.",
        description:
            'Written for duo interdito (Sofia Marafona and Duarte Pereira Martins) for their project "O Caderno de Eugénio".',
    },
    {
        category: "Compositions",
        title: "Convergence",
        year: "2023",
        instrumentation: "for Sinfonietta",
        duration: "20'",
        description:
            'Part of the doctoral research project "(Un)Equal Tunings: Exploring multiple levels of resolution between Equal Tunings and intonational practices in composition" at Guildhall School of Music and Drama. To be published alongside the thesis.',
    },
    {
        category: "Compositions",
        title: "Seeking Gnosis",
        year: "2022/2023",
        instrumentation: "for Mixed Ensemble",
        duration: "13'",
        description:
            'Part of the doctoral research project "(Un)Equal Tunings: Exploring multiple levels of resolution between Equal Tunings and intonational practices in composition" at Guildhall School of Music and Drama. To be published alongside the thesis.',
    },
    {
        category: "Compositions",
        title: "The Fable of the Pilgrim",
        year: "2022/2023",
        instrumentation: "for Guitar Quartet",
        duration: "12'",
        description:
            'Part of the doctoral research project "(Un)Equal Tunings: Exploring multiple levels of resolution between Equal Tunings and intonational practices in composition" at Guildhall School of Music and Drama. To be published alongside the thesis.',
    },
    {
        category: "Compositions",
        title: "Odd [s]Paces",
        year: "2021/2023",
        instrumentation: "for String Quartet",
        duration: "6'",
        description:
            'Part of the doctoral research project "(Un)Equal Tunings: Exploring multiple levels of resolution between Equal Tunings and intonational practices in composition" at Guildhall School of Music and Drama. To be published alongside the thesis.',
    },
    {
        category: "Compositions",
        title: "Dreams from an Old Memory",
        year: "2020",
        instrumentation: "for Electric Piano and Electronics",
        duration: "6'",
        description:
            'Based on Joseph Yasser\'s writings on temperament theory and the Stasimon Chorus of Euripedes\'s "Orestes". Part of the doctoral research project "(Un)Equal Tunings: Exploring multiple levels of resolution between Equal Tunings and intonational practices in composition" at Guildhall School of Music and Drama. To be published alongside the thesis.',
    },
    {
        category: "Compositions",
        title: "A Escolha de Paulo",
        year: "2020",
        instrumentation: "for Violin and Piano",
        duration: "5'",
        description:
            "Written for the Conservatório de Música de Santarém's production of Bernardo Santareno's play \"O Bailarino\", directed by José Manuel Rodrigues and choreographed by Juan Maria Seller.",
    },
    {
        category: "Compositions",
        title: "Adão",
        year: "2020",
        instrumentation: "a Chamber Opera for 4 Singers and Mixed Ensemble",
        duration: "17'",
        additionalInfo: "Libretto by Nuno Cruz.",
        description:
            'Second entry of the "Contos da Criação" ("Tales of Creation") cycle, based on Lilith\'s chapter on the Alphabet of Ben Sirach. Written for the "Maratona Ópera XXI - Concurso para novas óperas" and premiered during OperaFest Lisboa 2020 at Museu Nacional de Arte Antiga by Tiago Matos (Adam, baritone), Mariana Castello-Branco (Lilith, soprano), Rita Filipe (Eve, mezzo), Carlos Monteiro (Angel, tenor), Ensemble MPMP, Pedro Vieira de Almeida (electric piano), conducted by Rita Castro Blanco and directed by António Pires. Part of the doctoral research project "(Un)Equal Tunings: Exploring multiple levels of resolution between Equal Tunings and intonational practices in composition" at Guildhall School of Music and Drama. To be published alongside the thesis.',
    },
    {
        category: "Compositions",
        title: "PRISM",
        year: "2020",
        instrumentation: "Acousmatic",
        duration: "40'",
        description:
            'Written in collaboration with Félix Xavier (choreography, performance), Vítor Hugo Afonso (performance) and Rafael Filipe (performance) for the dance performance "PRISM". For more information about the project click here.',
    },
    {
        category: "Compositions",
        title: "Have you ever met a human before?",
        year: "2019",
        instrumentation: "for Soprano and MIDI Keyboard",
        duration: "3'30''",
        additionalInfo: "Lyrics by Edward Einhorn.",
        description: 'Adapted from an aria from the opera "The Boy Who Wanted to be a Robot".',
    },
    {
        category: "Compositions",
        title: "Transeuntes",
        year: "2019",
        instrumentation: "",
        duration: "27'",
        description:
            'Incidental music written for the Seller Danza\'s contemporary dance performance "Transeuntes" ("Passers-by"). Choreographed by Juan Maria Seller.',
    },
    {
        category: "Compositions",
        title: "Babel",
        year: "2019",
        instrumentation: "for Mixed Choir",
        duration: "6'",
        additionalInfo:
            "Based on a poem by Edward Einhorn, with translations into multiple languages by friends, colleagues and former teachers of mine.",
        description: "Written for Choral Chameleon during the 2019 Choral Chameleon Institute.",
    },
    {
        category: "Compositions",
        title: "El Laberinto de Nijinsky",
        year: "2019",
        instrumentation: "",
        duration: "11'",
        description:
            'A Seller Danza\'s contemporary dance performance. Choreographed by Juan Maria Seller and performed by Roberto Seller. With excerpts from recordings of "MA.RIM.BA" and "Multidão: I. Primeiro".',
    },
    {
        category: "Compositions",
        title: "Ne Ago",
        year: "2019",
        instrumentation: "Acousmatic",
        duration: "4'30''",
        description:
            "Composed during the Åke Parmerud's International Masterclass at Lisboa Incomum in April 2019, with Åke Parmerud's supervision. Later expanded to be included in the dance project, \"PRISM\" by WuWei Travelers, choreographed by Félix Xavier.",
    },
    {
        category: "Compositions",
        title: "La vojaĝo",
        year: "2019",
        instrumentation: "for Pierrot Ensemble with Percussion",
        duration: "5'30''",
        description:
            "Written for the Ensemble Offspring during Noosa ISAM, with the supervisions of Ofer Ben-Amots and Jan Jirásek.",
    },
    {
        category: "Compositions",
        title: "MA.RIM.BA",
        year: "2018",
        instrumentation: "for Marimba & Electronics",
        duration: "5'",
        description: "Written for Cristiano Rios.",
    },
    {
        category: "Compositions",
        title: "The Boy Who Wanted to be a Robot",
        year: "2018",
        instrumentation: "a Chamber Opera for 5 Singers, Operatic Choir, and Mixed Ensemble",
        duration: "24'",
        additionalInfo: "Libretto by Edward Einhorn.",
        description:
            "Written as the main project of my MA on Opera Making & Writting at Guildhall School of Music and Drama, during the 2017/2018 academic year. For the recording of One Ounce Opera's production with the piano reduction of the score, click here and read their interview with Edward Einhorn and I here.",
    },
    {
        category: "Compositions",
        title: "Nymphus: Mithraic Initiation Rite Number Two",
        year: "2017",
        instrumentation: "a Short Opera Scene for 3 Singers and Piano",
        duration: "7'30''",
        additionalInfo: "Libretto by Edward Einhorn.",
        description:
            "Written in the context of my MA on Opera Making & Writting at Guildhall School of Music and Drama, during the 2017/2018 academic year.",
    },
    {
        category: "Compositions",
        title: "Multidão - I. Primeiro",
        year: "2017",
        instrumentation: "the first act of a Monodrama for Countertenor and Mixed Ensemble",
        duration: "14'",
        additionalInfo: "Libretto by Nuno Cruz.",
        description: "Written for Rui Vieira.",
    },
    {
        category: "Compositions",
        title: "@ctb.exp#1",
        year: "2017",
        instrumentation: "for Solo Double Bass",
        duration: "3'30''",
        description: 'Commissioned by RTP/Antena 2 for the 31st Edition of the "Prémio Jovens Músicos" Festival.',
    },
    {
        category: "Compositions",
        title: "Flor",
        year: "2016",
        instrumentation: "a chamber music piece for Mixed Ensemble with Electronics, written for a Music/Dance performance",
        duration: "4'",
        description: "",
    },
    {
        category: "Compositions",
        title: "Lilith",
        year: "2016",
        instrumentation: "a Narrated Tale for Narrator, 2 Singers and Small Wind Orchestra",
        duration: "25'",
        additionalInfo: "Libretto by Nuno Cruz.",
        description:
            'First entry of the "Contos da Criação" ("Tales of Creation") cycle, based on Lilith\'s chapter on the Alphabet of Ben Sirach.',
    },
    {
        category: "Compositions",
        title: "¡¿Lamento?!",
        year: "2016",
        instrumentation: "for Mixed Ensemble",
        duration: "7'",
        description: 'Based on Henry Purcell\'s "Dido & Eneas" and written for ClusterLAB.',
    },
    {
        category: "Compositions",
        title: "Expressões",
        year: "2015",
        instrumentation: "a chamber music piece for Mixed Ensemble written for a Music/Dance performance",
        duration: "4'",
        description: "Choreography and performance by: Jessica Silva & Mara Morais.",
    },
    {
        category: "Compositions",
        title: "Introspecções",
        year: "2014/2015",
        instrumentation: "for Wind Trio",
        duration: "8'",
        description:
            "Written originally for the second edition of the festival Peças Frescas - Edição Açores S. Miguel, Azores, Portugal in 2015.",
    },
    {
        category: "Compositions",
        title: "Prjkt.Hrp",
        year: "2015",
        instrumentation: "for Harp and Electronics",
        duration: "8'30''",
        description: "Written for Inês Cavalheiro.",
    },
    {
        category: "Compositions",
        title: "Eu não sei…",
        year: "2015",
        instrumentation: "for Baritone and Pipe Organ",
        duration: "4'30''",
        additionalInfo: "Poem by Duarte Cruz.",
        description: "Written for João Fonseca e Costa and Pedro Pombo.",
    },
    {
        category: "Compositions",
        title: "Plácidos Domingos",
        year: "2014/2015",
        instrumentation: "for Baritone and Piano",
        duration: "2'",
        additionalInfo: "Poem by Nuno Cruz.",
        description: "Written for João Fonseca e Costa (adapted from an earlier version for Tenor and Piano).",
    },
    {
        category: "Compositions",
        title: "8-bits of Music",
        year: "2014",
        instrumentation: "for Solo Harpsichord",
        duration: "14'",
        description: "Written for Leonora Silva and Catarina Amante Trigo.",
    },
    {
        category: "Compositions",
        title: "7",
        year: "2014",
        instrumentation: "for Amplified Soprano and Mixed Ensemble",
        duration: "4'",
        description: "",
    },
    {
        category: "Compositions",
        title: "Flip Point & Obsession",
        year: "2014",
        instrumentation: "for Solo Piano",
        duration: "5'30''",
        description: "",
    },
    {
        category: "Compositions",
        title: "Óvaadasac",
        year: "2014",
        instrumentation: "Acousmatic",
        duration: "3'",
        description: "",
    },
    {
        category: "Compositions",
        title: "Harp' N Roll",
        year: "2014",
        instrumentation: "for Solo Harp",
        duration: "3'",
        description: "",
    },
    {
        category: "Compositions",
        title: "Estudo para Guitarra nº2",
        year: "2014",
        instrumentation: "for Solo Guitar",
        duration: "1'",
        description: "",
    },
    {
        category: "Compositions",
        title: "Dryhg oui - II",
        year: "2014",
        instrumentation: "for Clarinet, Cello and Piano",
        duration: "3'",
        description: 'Part of the "Dryhg oui" cycle, dedicated to my first composition teacher, Jorge Pereira.',
    },
    {
        category: "Compositions",
        title: "4 Pequenas Peças para Piano",
        year: "2013/2014",
        instrumentation: "for Solo Piano",
        duration: "3'30''",
        description: "",
    },
    {
        category: "Compositions",
        title: "Dryhg oui - I",
        year: "2013",
        instrumentation: "for Cello and Piano",
        duration: "1'30'",
        description: 'Part of the "Dryhg oui" cycle, dedicated to my first composition teacher, Jorge Pereira.',
    },
    {
        category: "Compositions",
        title: "Tributo a Masashi Hamauzu",
        year: "2012",
        instrumentation: "for Solo Piano",
        duration: "5'",
        description: "Written in tribute to the German/Japanese composer Masashi Hamauzu.",
    },
    {
        category: "Compositions",
        title: "Aurora",
        year: "2012",
        instrumentation: "for Mixed Choir (SATBB)",
        duration: "3'30''",
        description: "",
    },
    {
        category: "Compositions",
        title: "2 Prelúdios para Guitarra",
        year: "2008/2010",
        instrumentation: "for Solo Guitar",
        duration: "13'",
        description: "I. Prelúdio nº1: Homenagem a Iserlohn (2008)\nII. Prelúdio nº2 (2010)",
    },
    {
        category: "Compositions",
        title: "1521 Gotas de Chuva",
        year: "2008",
        instrumentation: "for Solo Piano",
        duration: "4'",
        description: "",
    },
    {
        category: "Compositions",
        title: "Estudo para Guitarra nº1",
        year: "2008",
        instrumentation: "for Solo Guitar",
        duration: "1'",
        description: "Dedicated to my guitar teacher Acácio Resende.",
    },
    {
        category: "Compositions",
        title: "Paz de Espírito",
        year: "2007",
        instrumentation: "for Solo Guitar",
        duration: "3'",
        description: "",
    },
    {
        category: "Improvisations",
        title: "Submerged",
        year: "2024",
        instrumentation: "",
        duration: "5'",
        description: "",
    },
    {
        category: "Improvisations",
        title: "... for Glenn",
        year: "2023",
        instrumentation: "",
        duration: "3'",
        description: "",
    },
    {
        category: "Improvisations",
        title: "... in the name of peace #2",
        year: "2023",
        instrumentation: "",
        duration: "11'",
        description: "",
    },
    {
        category: "Improvisations",
        title: "... in the name of peace #1",
        year: "2023",
        instrumentation: "",
        duration: "7'30''",
        description: "",
    },
    {
        category: "Improvisations",
        title: "Chiptune Improvisation in 6ED7:5",
        year: "2019",
        instrumentation: "",
        duration: "2'",
        description:
            "Improvised on ET Remapper (built by myself on Max/MSP, now incorporated in Equal Tuning Lab) and bitKlavier.",
    },
    {
        category: "Improvisations",
        title: "Laptop Improvisation in 7EDO",
        year: "2019",
        instrumentation: "",
        duration: "3'",
        description:
            "Improvised on n-ET Microtonal Keyboard (built by myself on Max/MSP, now incorporated in Equal Tuning Lab).",
    },
    {
        category: "Improvisations",
        title: "Tri Improvizajoj por MIDI​-​Klavaro",
        year: "2018",
        instrumentation: "",
        duration: "14'",
        description: "Improvised on 12-NET Microtonal Keyboard (built by myself on Max/MSP).",
    },
    {
        category: "Improvisations",
        title: "Improvisation in 17EDO",
        year: "2018",
        instrumentation: "",
        duration: "2'30''",
        description:
            "Improvised on n-ET Microtonal Keyboard (built by myself on Max/MSP, now incorporated in Equal Tuning Lab).",
    },
    {
        category: "Jazz",
        title: "We are our dreams of ourselves",
        year: "2018",
        instrumentation: "",
        duration: "1'30''",
        description: 'Based on the first poem from Fernando Pessoa\'s "35 Sonets".',
    },
    {
        category: "Jazz",
        title: "Epidemia do Funk",
        year: "2013/2016",
        instrumentation: "",
        duration: "9'",
        description: 'Part of Tomé Ferreira\'s school project EP "Um Homem na Cidade".',
    },
    {
        category: "Jazz",
        title: "Tributo a Masashi Hamauzu '16",
        year: "2016",
        instrumentation: "",
        duration: "8'",
        description: 'Part of Tomé Ferreira\'s school project EP "Um Homem na Cidade".',
    },
    {
        category: "Jazz",
        title: "Pré-primária",
        year: "2014",
        instrumentation: "",
        duration: "2'",
        additionalInfo: "Lyrics written by Mário Espada.",
        description: 'Bossa Nova. Part of the soundtrack of Mário Espada\'s short movie "Jingã Íncone".',
    },
    {
        category: "Jazz",
        title: "Hora de Ponta",
        year: "2012",
        instrumentation: "",
        duration: "4'",
        description: 'Written for Big Band Júnior\'s and featured on their album "Pegadas Azuis".',
    },
    {
        category: "Jazz",
        title: "Drowning",
        year: "2011",
        instrumentation: "",
        duration: "5'30''",
        description:
            "Written for Big Band Júnior. The Portuguese jazz guitar player Mário Delgado featured in this performance.",
    },
    {
        category: "Arrangements",
        title: "thank u, next - Ariana Grande",
        year: "2018/2019",
        instrumentation: "",
        duration: "3'",
        description: 'Arrangement commissioned by "The Spell".',
    },
    {
        category: "Arrangements",
        title: "Juntos Somos Mais Fortes - Amor Electro",
        year: "2017/2019",
        instrumentation: "",
        duration: "3'",
        description: 'Arrangement commissioned by "The Spell".',
    },
    {
        category: "Arrangements",
        title: "Lusitana Paixão - Dulce Pontes",
        year: "2018",
        instrumentation: "",
        duration: "2'",
        description: 'Arrangement commissioned by "The Spell".',
    },
    {
        category: "Arrangements",
        title: "Desfolhada de Inverno - Simone de Oliveira",
        year: "2018",
        instrumentation: "",
        duration: "3'",
        description:
            'A mashup based on "Desfolhada Portuguesa" and "Sol de Inverno", both originally performed by Simone de Oliveira. Arrangement commissioned by "The Spell".',
    },
]

export default function MyMusic() {
    const [selectedCategory, setSelectedCategory] = useState("View All")
    const [genreDropdownOpen, setGenreDropdownOpen] = useState(false)
    const [instrumentDropdownOpen, setInstrumentDropdownOpen] = useState(false)
    const [tuningDropdownOpen, setTuningDropdownOpen] = useState(false)

    const getCategoryEntries = () => {
        if (selectedCategory === "View All") {
            return allEntries
        }
        return allEntries.filter((entry) => entry.category === selectedCategory)
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
                        {["View All", "Compositions", "Improvisations", "Jazz", "Arrangements"].map((category) => (
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
                    {getCategoryEntries().map((entry, index) => (
                        <div key={index} className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-start gap-8">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold mt-2">{entry.title}</h2>
                                <p className="text-gray-400 mt-2">{entry.year}</p>
                                <p className="text-gray-400 mt-2">{entry.instrumentation}</p>
                                <p className="text-gray-400 mt-2">{entry.duration}</p>
                                {entry.additionalInfo && <p className="text-gray-400 mt-2">{entry.additionalInfo}</p>}
                                <p className="text-gray-400 mt-4">{entry.description}</p>
                                <button className="mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black transition">
                                    See Score Excerpt
                                </button>
                            </div>
                            <div className="flex-1 flex flex-col items-center sticky top-64">
                                <div className="bg-gray-800 w-full h-40 md:h-48"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

