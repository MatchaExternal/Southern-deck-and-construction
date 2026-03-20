"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "470-402-4416",
      href: "tel:470-402-4416",
      description: "Mon-Sat 7am-7pm"
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "southerndeck2023@gmail.com",
      href: "mailto:southerndeck2023@gmail.com",
      description: "We reply within 24hrs"
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Georgia",
      href: "#",
      description: "Metro Atlanta & Surrounding"
    },
  ]

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide text-foreground mb-6">
              Let&apos;s Build
              <br />
              <span className="text-primary">Something Great</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Ready to start your project? Contact us for a free estimate. We&apos;re here to bring your vision to life.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                    <div className="text-foreground font-semibold group-hover:text-primary transition-colors">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Owner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-display text-primary">J</span>
                </div>
                <div>
                  <div className="text-foreground font-semibold">Jonathan</div>
                  <div className="text-sm text-muted-foreground">Owner & Lead Contractor</div>
                  <div className="text-xs text-primary mt-1">Licensed & Insured</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-display tracking-wide text-foreground">Request a Quote</h3>
                  <p className="text-sm text-muted-foreground mt-1">Fill out the form and we&apos;ll get back to you</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-500 font-medium">Free Estimate</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-display text-foreground mb-2">Thank You!</h4>
                    <p className="text-muted-foreground text-center">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label 
                          htmlFor="name" 
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'name' || formData.name 
                              ? '-top-2.5 text-xs bg-card px-2 text-primary' 
                              : 'top-4 text-muted-foreground'
                          }`}
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="h-14 bg-secondary/50 border-border/50 rounded-xl focus:border-primary focus:ring-primary/20"
                        />
                      </div>

                      <div className="relative">
                        <label 
                          htmlFor="email" 
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'email' || formData.email 
                              ? '-top-2.5 text-xs bg-card px-2 text-primary' 
                              : 'top-4 text-muted-foreground'
                          }`}
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="h-14 bg-secondary/50 border-border/50 rounded-xl focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label 
                          htmlFor="phone" 
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'phone' || formData.phone 
                              ? '-top-2.5 text-xs bg-card px-2 text-primary' 
                              : 'top-4 text-muted-foreground'
                          }`}
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="h-14 bg-secondary/50 border-border/50 rounded-xl focus:border-primary focus:ring-primary/20"
                        />
                      </div>

                      <div className="relative">
                        <label 
                          htmlFor="service" 
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'service' || formData.service 
                              ? '-top-2.5 text-xs bg-card px-2 text-primary z-10' 
                              : 'top-4 text-muted-foreground'
                          }`}
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full h-14 px-4 bg-secondary/50 border border-border/50 rounded-xl text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none appearance-none cursor-pointer"
                        >
                          <option value=""></option>
                          <option value="hvac">HVAC</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="electrical">Electrical</option>
                          <option value="demolition">Demolition</option>
                          <option value="deck">Deck Building</option>
                          <option value="general">General Construction</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="relative">
                      <label 
                        htmlFor="message" 
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'message' || formData.message 
                            ? '-top-2.5 text-xs bg-card px-2 text-primary z-10' 
                            : 'top-4 text-muted-foreground'
                        }`}
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 pt-6 pb-4 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
