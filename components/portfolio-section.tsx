"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Portfolio categories
const categories = [
  "All",
  "Weddings",
  "Decor",
  "Mehndi & Haldi",
  "Entertainment",
];

const portfolioItems = [
  {
    id: 1,
    title: "Contemporary Decor Theme",
    category: "Mehndi & Haldi",
    image: "/images/haldi decor 890.jpg?height=600&width=800",
    description: "Modern minimalist decor with elegant lighting.",
  },
  {
    id: 2,
    title: "Floral Mandap Design",
    category: "Decor",
    image: "/images/wedding decor34.jpg?height=600&width=800",
    description: "Elegant floral mandap with traditional and modern elements.",
  },
  {
    id: 3,
    title: "Traditional Mehndi Ceremony",
    category: "Mehndi & Haldi",
    image: "/images/mehdi56.jpg?height=600&width=800",
    description: "Vibrant mehndi setup with traditional Rajasthani elements.",
  },
  {
    id: 4,
    title: "Sangeet Night Performance",
    category: "Decor",
    image: "/images/decor 00.jpg?height=600&width=800",
    description: "Energetic sangeet night with professional choreography.",
  },
  {
    id: 6,
    title: "Decor 1",
    category: "Decor",
    image: "/image/Decor 1.jpeg",
    description: "Beautiful decor setup with intricate details.",
  },
  {
    id: 7,
    title: "Decor 3",
    category: "Decor",
    image: "/image/Decor 3.jpeg",
    description: "Elegant decor with a modern touch.",
  },
  {
    id: 8,
    title: "Decor 5",
    category: "Decor",
    image: "/image/decor 5.jpeg",
    description: "A stunning decor arrangement for special events.",
  },
  {
    id: 9,
    title: "Haldi 1",
    category: "Mehndi & Haldi",
    image: "/image/haldi 1.jpeg",
    description: "Traditional Haldi ceremony setup with vibrant colors.",
  },
  {
    id: 10,
    title: "Haldi 2",
    category: "Mehndi & Haldi",
    image: "/image/haldi 2.jpeg",
    description: "A colorful Haldi ceremony with floral arrangements.",
  },
  {
    id: 11,
    title: "Haldi 3",
    category: "Mehndi & Haldi",
    image: "/image/haldi 3.jpeg",
    description: "A beautiful Haldi setup with traditional elements.",
  },
  {
    id: 12,
    title: "Haldi Video",
    category: "Mehndi & Haldi",
    video: "/image/haldi.mp4",
    description: "A vibrant Haldi ceremony captured in motion.",
  },
  {
    id: 5,
    title: "Beachside Wedding in Goa",
    category: "Weddings",
    image: "/images/wedding decor 09.jpg?height=600&width=800",
    description: "Romantic beachside wedding with sunset views.",
  },
  {
    id: 14,
    title: "Royal Wedding in Jaipur",
    category: "Entertainment",
    image: "/images/entertainment.jpg?height=600&width=800",
    description:
      "A luxurious destination wedding with royal Rajasthani themes.",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <div className="h-0.5 w-20 bg-pink-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Explore our collection of beautifully crafted weddings and events
            that showcase our creativity and attention to detail.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-pink-500 text-white"
                      : "text-gray-700 hover:bg-pink-100"
                  }
                `}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-64 w-full">
                {item.video ? (
                  <video
                    src={item.video}
                    className="object-cover w-full h-full"
                    controls
                  />
                ) : (
                  <NextImage
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-pink-100 text-sm">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox dialog */}
     <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
  <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 overflow-hidden bg-white rounded-lg">
    {selectedItem && (
      <div className="flex flex-col md:flex-row h-full">
        <div style={{height:"700px"}} className="relative w-full md:w-2/3 max-h-[90vh] h-100 flex items-center justify-center bg-black">
          {selectedItem.video ? (
            <video
              src={selectedItem.video}
              className="w-full max-h-[90vh] object-contain"
              controls
            />
          ) : (
             <NextImage
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              fill
              className="object-contain "
            />
          )}
        </div>
        <div className="p-6 md:w-1/3 overflow-y-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            {selectedItem.title}
          </h3>
          <p className="text-pink-500 mb-4">{selectedItem.category}</p>
          <p className="text-gray-700">{selectedItem.description}</p>
        </div>
      </div>
    )}
  </DialogContent>
</Dialog>

    </section>
  );
}
