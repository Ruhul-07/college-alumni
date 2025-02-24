"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, category: "Old Memories", src: "/gallery/memory_1.jpg" },
  { id: 2, category: "Events", src: "/gallery/event_1.jpg" },
  { id: 3, category: "Our Picnic", src: "/gallery/picnic1.jpg" },
  { id: 4, category: "Recent", src: "/gallery/recent1.jpg" },
  { id: 5, category: "Old Memories", src: "/gallery/memory2.jpg" },
  { id: 6, category: "Events", src: "/gallery/event2.jpg" },
  { id: 7, category: "Our Picnic", src: "/gallery/picnic2.jpg" },
  { id: 8, category: "Recent", src: "/gallery/recent2.jpg" },
];

const categories = ["All", "Old Memories", "Events", "Our Picnic", "Recent"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
        <p className="text-gray-600 mb-8">
          Explore our treasured moments and relive the nostalgia through our gallery.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={item.src} alt={item.category} className="w-full h-48 object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
