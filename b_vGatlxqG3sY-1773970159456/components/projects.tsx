"use client"

import { ArrowUpRight, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%20%284%29-FqFNWHzvX6e9WUhWeEqgPMUkjBBI64.jpg",
    title: "Elevated Deck with Stairs",
    category: "Deck Building",
    description: "Custom elevated deck with premium metal balusters",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%20%289%29-azTC9ejggZIPWlq3RZ8QpBTHWMxhjA.jpg",
    title: "Pool Deck & Entertainment",
    category: "Deck Building",
    description: "Large pool deck with integrated lighting and pergola",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%20%287%29-CnvX8nkxEnVcf976c6fgtOUA7DZ6cc.jpg",
    title: "Custom Tile Shower",
    category: "Bathroom",
    description: "Luxury steam shower with mosaic tile accents",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%20%2810%29-qoO2v9UlC1Eww1vS4CdCQ3eLkdjPot.jpg",
    title: "Timber Frame Pavilion",
    category: "Outdoor Living",
    description: "Beautiful poolside pavilion with timber frame construction",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%20%288%29-fgtqrSBxeziZdrtIFM3GtGE7f9X1Ox.jpg",
    title: "Covered Porch Addition",
    category: "Outdoor Living",
    description: "Front porch with covered roof and custom railings",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%20%285%29-Y57Yy93Afvf11y7KLveSz3LeIBNr3R.jpg",
    title: "Backyard Deck Extension",
    category: "Deck Building",
    description: "Spacious backyard deck for outdoor entertaining",
  },
]

const categories = ["All", "Deck Building", "Outdoor Living", "Bathroom"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide text-foreground">
              Featured
              <br />
              <span className="text-primary">Projects</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 4).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-1 aspect-square lg:aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
                animate={{ 
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top - Year & Category */}
                <div className="flex items-start justify-between">
                  <motion.span 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : -10 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full"
                  >
                    {project.category}
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 bg-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5 text-foreground" />
                  </motion.div>
                </div>

                {/* Bottom - Title & Arrow */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-display tracking-wide text-foreground mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ 
                          x: hoveredIndex === index ? 0 : 10,
                          y: hoveredIndex === index ? 0 : 10,
                          opacity: hoveredIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0"
                      >
                        <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>Have a project in mind?</span>
            <span className="text-primary font-semibold">Let&apos;s talk</span>
            <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
