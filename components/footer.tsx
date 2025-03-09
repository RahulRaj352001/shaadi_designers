"use client"
import { Instagram, Facebook, Linkedin, Heart } from "lucide-react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    // If it's the top of the page
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    // Otherwise scroll to the section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Shaadi Designers</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Luxury & affordable wedding experiences, crafted to perfection. Making your special day truly memorable
              since 2019.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Rohtak, Haryana</span>
                <span className="block">Delhi</span>
                <span className="block">Jaipur</span>
              </li>
              <li className="text-gray-400">
                <a href="tel:+919XXXXXXXXX" className="hover:text-pink-400 transition-colors duration-300">
                  +91 9XXXXXXXXX
                </a>
              </li>
              <li className="text-gray-400">
                <a
                  href="mailto:hello@shaadidesigners.com"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  hello@shaadidesigners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Shaadi Designers Pvt Ltd. All rights reserved.</p>
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-pink-500 mx-1" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}

