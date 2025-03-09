"use client"

import { motion } from "framer-motion"
import NextImage from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-pink-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="h-0.5 w-20 bg-pink-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to plan your dream wedding? Get in touch with us directly for a personalized consultation.
          </p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact information */}
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="mb-8">
                We'd love to hear from you! Reach out to us directly through any of these channels:
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919XXXXXXXXX" className="hover:underline">
                         +91 8222 892048
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@shaadidesigners.in" className="hover:underline">
                    hello@shaadidesigners.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Locations</p>
                    <p>Rohtak, Haryana</p>
                    <p>Delhi</p>
                    <p>Jaipur</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/shaadiidesigners/profilecard/?igsh=MTN5d212bHYzbHlnNg==" target="__blank" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/share/1UDP8wTqQf/"  target="__blank" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
            
                </div>
              </div>
            </div>

            {/* WhatsApp direct contact */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Inquiry</h3>
              <p className="text-gray-600 mb-8">
                For the fastest response, reach out to us directly on WhatsApp. Scan the QR code or click the button
                below.
              </p>

              <div className="flex flex-col items-center mb-8">
                <div className="relative h-48 w-48 mb-4">
                  <NextImage
                    src="images/WhatsApp Image 2025-03-09 at 8.59.06 PM.jpeg?height=200&width=200"
                    alt="WhatsApp QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-500">Scan to chat with us on WhatsApp</p>
              </div>

              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-md text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => window.open("https://wa.me/919XXXXXXXXX", "_blank")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </Button>

              <div className="mt-8 text-center">
                <p className="text-gray-500">We typically respond within 1-2 hours during business hours.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

