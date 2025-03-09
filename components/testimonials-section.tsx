"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import NextImage from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample testimonials (in a real site, this would come from a CMS or API)
const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul",
    location: "Delhi",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Shaadi Designers transformed our wedding into a magical experience. Their attention to detail and creativity exceeded our expectations. Every element was perfectly executed, from the decor to the coordination.",
    event: "Destination Wedding in Udaipur",
  },
  {
    id: 2,
    name: "Ananya & Vikram",
    location: "Jaipur",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "We couldn't have asked for a better team to plan our wedding. Shaadi Designers understood our vision perfectly and brought it to life in the most beautiful way. Our guests are still talking about how amazing everything was!",
    event: "Traditional Wedding in Jaipur",
  },
  {
    id: 3,
    name: "Meera & Arjun",
    location: "Mumbai",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The team at Shaadi Designers is incredibly professional and creative. They managed everything flawlessly, allowing us to enjoy our special day without any stress. We highly recommend their services!",
    event: "Beach Wedding in Goa",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoPlayRef = useRef(null)

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextTestimonial()
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current)
      }
    }
  }, [currentIndex])

  return (
    <section id="testimonials" className="py-20 bg-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Client Testimonials</h2>
          <div className="h-0.5 w-20 bg-pink-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience with Shaadi Designers.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-pink-200">
                    <NextImage
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <Quote className="h-10 w-10 text-pink-300 mb-4" />
                  <p className="text-gray-700 text-lg italic mb-6">{testimonials[currentIndex].quote}</p>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-pink-500">{testimonials[currentIndex].location}</p>
                    <p className="text-gray-500 mt-1">{testimonials[currentIndex].event}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-pink-100"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-pink-500 scale-125" : "bg-pink-200"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-pink-100"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-pink-100 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-100 rounded-full filter blur-3xl opacity-50"></div>
    </section>
  )
}

