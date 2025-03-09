"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">About Us</h2>
          <div className="h-0.5 w-20 bg-pink-300 mx-auto mb-8"></div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Established in September 2019, Shaadi Designers Pvt Ltd is a Rohtak-based event planning company
            specializing in weddings and celebrations. Our enthusiastic team brings a creative vision to life,
            transforming any event into a flawlessly organized occasion, from intimate home gatherings to grand
            destination weddings.
          </p>

          <p className="text-xl font-medium text-pink-500 italic">
            "SHAADI DESIGNERS provides you the best experience and makes your day memorable. Our young team works with
            full enthusiasm."
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-pink-50 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-50 rounded-full filter blur-3xl opacity-50"></div>
    </section>
  )
}

