"use client"

import { 
  Thermometer, 
  Droplets, 
  Zap, 
  Hammer, 
  Fence, 
  HardHat,
  ArrowUpRight
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Thermometer,
    title: "HVAC",
    description: "Complete heating, ventilation, and air conditioning installation, repair, and maintenance services.",
    features: ["Installation", "Repair", "Maintenance"],
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Expert plumbing solutions including installation, repairs, pipe work, and water heater services.",
    features: ["Pipe Repair", "Installation", "Water Heaters"],
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Licensed electrical services from wiring and panel upgrades to lighting installation.",
    features: ["Wiring", "Panel Upgrades", "Lighting"],
  },
  {
    icon: Hammer,
    title: "Demolition",
    description: "Safe and efficient demolition services for interior and exterior projects with debris removal.",
    features: ["Interior", "Exterior", "Site Cleanup"],
  },
  {
    icon: Fence,
    title: "Deck Building",
    description: "Custom deck design and construction using quality materials for lasting outdoor spaces.",
    features: ["Custom Design", "Premium Materials", "Installation"],
  },
  {
    icon: HardHat,
    title: "General Construction",
    description: "Full-service construction from remodeling and renovations to complete new builds.",
    features: ["Remodeling", "Renovations", "New Builds"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide text-foreground mb-6">
            Comprehensive Solutions
            <br />
            <span className="text-primary">For Every Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From concept to completion, we deliver exceptional quality across all construction and home improvement services.
          </p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 ${
                index === 0 ? "md:row-span-2 lg:row-span-1" : ""
              }`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-display tracking-wide text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-secondary/80 text-muted-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl font-display text-primary/10 group-hover:text-primary/20 transition-colors">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
