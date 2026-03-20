"use client"

import { Clock, Users, Layers, Shield, Sparkles, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Clock,
    title: "Always On Time",
    description: "We respect your schedule and deliver projects when promised, without exceptions.",
    stat: "98%",
    statLabel: "On-time delivery"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Licensed professionals with years of specialized experience in every trade.",
    stat: "15+",
    statLabel: "Years combined"
  },
  {
    icon: Layers,
    title: "One-Stop Shop",
    description: "From HVAC to deck building, handle all your construction needs in one place.",
    stat: "6+",
    statLabel: "Service areas"
  },
  {
    icon: Shield,
    title: "Guaranteed",
    description: "We stand behind our work with warranties and ensure your complete satisfaction.",
    stat: "100%",
    statLabel: "Satisfaction"
  },
]

const benefits = [
  "Free detailed estimates",
  "Licensed & fully insured",
  "Quality materials only",
  "Clean job sites",
  "Clear communication",
  "Flexible scheduling",
]

export function WhyChooseUs() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/50 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Why Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide text-foreground mb-6">
              Built on Trust,
              <br />
              <span className="text-primary">Delivered with Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              When you choose Southern Deck & Construction, you&apos;re choosing a partner who cares about your project as much as you do. Our commitment to quality sets us apart.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 hover:border-primary/30 transition-all duration-500 ${
                  index % 2 === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Stat */}
                  <div className="mb-4">
                    <span className="text-4xl font-display text-primary">{feature.stat}</span>
                    <span className="text-xs text-muted-foreground ml-2">{feature.statLabel}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
