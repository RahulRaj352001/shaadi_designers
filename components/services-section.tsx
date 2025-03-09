"use client"

import { motion } from "framer-motion"
import {
  Heart,
  MapPin,
  Home,
  UtensilsCrossed,
  HelpingHand,
  Gift,
  Crown,
  Gem,
  Palette,
  Music,
  Users,
  Sparkles,
  Shield,
  Drum,
} from "lucide-react"

const services = [
  {
    icon: <Heart className="h-8 w-8 text-pink-500" />,
    title: "Indoor & Outdoor Functions",
    description: "Elegant setups for both indoor and outdoor celebrations.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-pink-500" />,
    title: "Destination Weddings",
    description: "Exquisite weddings at breathtaking locations across India.",
  },
  {
    icon: <Home className="h-8 w-8 text-pink-500" />,
    title: "Venue Selection & Setup",
    description: "Handpicked venues tailored to your vision and requirements.",
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-pink-500" />,
    title: "Catering Services",
    description: "Gourmet culinary experiences for your special occasions.",
  },
  {
    icon: <HelpingHand className="h-8 w-8 text-pink-500" />,
    title: "Help Desk",
    description: "Managed by professional staff for seamless event coordination.",
  },
  {
    icon: <Gift className="h-8 w-8 text-pink-500" />,
    title: "Welcome Hampers",
    description: "Luxurious gift hampers to welcome your esteemed guests.",
  },
  {
    icon: <Crown className="h-8 w-8 text-pink-500" />,
    title: "Pagdi's & Saffas",
    description: "Traditional headgear arrangements for guests and family.",
  },
  {
    icon: <Gem className="h-8 w-8 text-pink-500" />,
    title: "Jewellery for Mehndi",
    description: "Exquisite floral jewelry for mehndi ceremonies.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-pink-500" />,
    title: "Professional Mehndi Artists",
    description: "Skilled artists creating intricate designs for your celebrations.",
  },
  {
    icon: <Palette className="h-8 w-8 text-pink-500" />,
    title: "Theme-Based Décor",
    description: "Customized décor themes to match your vision and style.",
  },
  {
    icon: <Music className="h-8 w-8 text-pink-500" />,
    title: "DJ & Live Band",
    description: "Energetic performances for sangeet nights and celebrations.",
  },
  {
    icon: <Users className="h-8 w-8 text-pink-500" />,
    title: "Professional Dancers",
    description: "Choreographers and dancers for spectacular performances.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-pink-500" />,
    title: "Makeup Artists",
    description: "Expert bridal styling and makeup for your special day.",
  },
  {
    icon: <Shield className="h-8 w-8 text-pink-500" />,
    title: "Security & Crowd Management",
    description: "Professional bouncers ensuring smooth event operations.",
  },
  {
    icon: <Drum className="h-8 w-8 text-pink-500" />,
    title: "Dhol Players & Band",
    description: "Traditional music with dhol players and band with rath.",
  },
]

export default function ServicesSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Our Services</h2>
          <div className="h-0.5 w-20 bg-pink-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of wedding and event planning services to make your special day truly
            memorable.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

