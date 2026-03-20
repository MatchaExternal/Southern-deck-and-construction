"use client"

import { CheckCircle, Award, Users, Shield } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
]

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Premium materials and exceptional craftsmanship in every project",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Skilled professionals dedicated to your vision",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent communication and honest pricing",
  },
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} id="about" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Main Image */}
              <motion.div 
                style={{ y: imageY }}
                className="absolute inset-0 scale-125"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%20%289%29-azTC9ejggZIPWlq3RZ8QpBTHWMxhjA.jpg"
                  alt="Southern Deck & Construction - Pool Deck Project"
                  className="object-cover w-full h-full"
                />
              </motion.div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 lg:-right-12 bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className={index > 0 ? "pl-6 border-l border-border/50" : ""}>
                    <div className="text-3xl font-display text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-primary/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-2xl blur-xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide text-foreground mb-6">
              Crafting Excellence
              <br />
              <span className="text-primary">Since 2014</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Southern Deck & Construction LLC is a versatile construction company offering comprehensive services tailored to your needs. We focus on quality workmanship, reliability, and complete customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Owned and operated by <span className="text-foreground font-semibold">Jonathan</span>, our company takes pride in delivering exceptional results while maintaining transparent communication throughout every project.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mt-10 pt-10 border-t border-border/50"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Fully Licensed & Insured</div>
                <div className="text-xs text-muted-foreground">All certifications up to date</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
