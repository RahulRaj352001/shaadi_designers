"use client"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import NextImage from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-pink-50 to-white overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        {/* Left side - Text content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left z-10 mb-12 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
            <span className="block">Turning Dreams</span>
            <span className="block">into Reality</span>
          </h1>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="h-0.5 w-16 bg-pink-300 mr-4"></div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">Shaadi Designers Pvt Ltd</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Luxury & Affordable Wedding Experiences, Crafted to Perfection.
          </p>
          <Button className="group bg-gradient-to-r from-pink-400 to-pink-300 hover:from-pink-500 hover:to-pink-400 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Our Work
            <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
          </Button>
        </motion.div>

        {/* Right side - Vector illustration */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <NextImage
              src="/freepik__background__52336.png?height=600&width=600"
              alt="Indian Wedding Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
    </section>
  )
}

