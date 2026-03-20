"use client"

import Image from "next/image"
import { Phone, Mail, ArrowUpRight, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "HVAC",
  "Plumbing", 
  "Electrical",
  "Demolition",
  "Deck Building",
  "General Construction",
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      {/* CTA Banner */}
      <div className="relative border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-display tracking-wide text-foreground mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground">Get a free estimate today. We&apos;re here to help.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:470-402-4416"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                <Phone className="w-5 h-5" />
                <span>470-402-4416</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors group"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-2xl opacity-50" />
                <Image
                  src="/images/logo.jpg"
                  alt="Southern Deck & Construction LLC"
                  width={160}
                  height={50}
                  className="relative h-12 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your trusted partner for quality construction and home improvement services in Georgia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:470-402-4416"
                className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:southerndeck2023@gmail.com"
                className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{service}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <span className="block text-xs text-muted-foreground/70 mb-1">Owner</span>
                <span className="text-foreground">Jonathan</span>
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/70 mb-1">Phone</span>
                <a href="tel:470-402-4416" className="text-foreground hover:text-primary transition-colors">
                  470-402-4416
                </a>
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/70 mb-1">Email</span>
                <a href="mailto:southerndeck2023@gmail.com" className="text-foreground hover:text-primary transition-colors break-all">
                  southerndeck2023@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/70 mb-1">Service Area</span>
                <span className="text-foreground">Georgia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/50 relative">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Southern Deck & Construction LLC. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span>Back to top</span>
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
