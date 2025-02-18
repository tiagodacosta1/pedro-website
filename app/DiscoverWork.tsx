import Image from "next/image"

export default function DiscoverWork() {
  const categories = [
    {
      title: "MY MUSIC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/IMG_8701.JPG",
    },
    {
      title: "BIO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/IMG_8701.JPG",
    },
    {
      title: "MEDIA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/IMG_8701.JPG",
    },
  ]

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h1 >Discover My Work</h1>
          <p className="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={`${category.title} category`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-light tracking-wider">{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

