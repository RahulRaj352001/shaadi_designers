"use client"

import { motion } from "framer-motion"
import NextImage from "next/image"
import { Instagram, Linkedin, Twitter } from "lucide-react"

// Sample team members (in a real site, this would come from a CMS or API)
const teamMembers = [
  {
    id: 1,
    name: "Chirag Arora",
    role: "Founder, CEO & Client Relations Manager",
    image: "/images/Chirag.jpeg/?height=400&width=400",
    bio: "With over 10 years of experience in event planning, Chirag brings creativity and vision to every wedding.",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Rahul Rajput",
    role: "CTO & Operations Manager",
    image: "/images/Rahul.jpg/?height=400&width=400",
    bio: "Rahul ensures flawless execution of every event with his meticulous planning and coordination skills.",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Harry Chibbar",
    role: "Design & Decor Specialist",
    image: "/images/FullSizeRender.jpeg/?height=400&width=400",
    bio: "Harry transforms venues with her artistic touch and eye for detail, creating magical settings for celebrations.",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <div className="h-0.5 w-20 bg-pink-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our passionate team of professionals is dedicated to making your special day truly memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-96 w-full overflow-hidden group">
                <NextImage
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.instagram}
                      className="bg-white p-2 rounded-full text-pink-500 hover:bg-pink-100 transition-colors duration-300"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="bg-white p-2 rounded-full text-pink-500 hover:bg-pink-100 transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-white p-2 rounded-full text-pink-500 hover:bg-pink-100 transition-colors duration-300"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-pink-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

