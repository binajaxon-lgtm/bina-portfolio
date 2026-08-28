"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("bio");

  // Gallery items matching your public folder files
  const galleryItems = [
    { src: "/Artpiece 1.jpg", title: "Tunnel Vission", category: "Multimedia & Visual Art" },
    { src: "/Artpiece2.jpg", title: "No Hands Clean", category: "Spiritual Symbolism & Figure Study" },
    { src: "/Artpiece3.jpg", title: "Zen Den", category: "Acrylic & Mixed Media" },
    { src: "/Artpiece4.jpg", title: "Submerged", category: "Surreal Composition" },
    { src: "/artpiece5.jpg", title: "Embryo", category: "Digital & Contemporary Work" },
    { src: "/artpiece6.jpg", title: "Matrix", category: "Framed Canvas Study" },
  ];

  // Slide-up animation settings
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className="min-h-screen bg-[#2A2421] text-[#FDFBF7] font-sans">
      {/* 1. Feature Art Display - First thing visible */}
      <section className="p-8 md:p-16 max-w-6xl mx-auto border-b border-[#4A3F35]">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-[#FDFBF7] text-center">
          Bina Jaxon
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Portrait Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3B322C]">
            <Image
              src="/image_4.png"
              alt="Bina - Multimedia Portrait"
              fill
              className="object-cover"
              priority 
            />
          </div>

          {/* Dynamic Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3B322C]">
            <Image
              src="/image_3.png"
              alt="Multimedia Figure Study"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Navigation & Content Container */}
      <section className="p-8 md:p-16 max-w-5xl mx-auto">
        <nav className="flex space-x-4 border-b border-[#4A3F35] pb-4 mb-12 justify-center">
          {["bio", "artwork", "contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl transition-all text-lg ${
                activeTab === tab
                  ? "bg-[#3B322C] text-[#FDFBF7] font-semibold border-2 border-[#4A3F35]"
                  : "text-[#D9C8B4] hover:text-[#FDFBF7]"
              }`}
            >
              {tab === "bio" ? "Bio" : tab === "artwork" ? "Gallery" : "Contact"}
            </button>
          ))}
        </nav>

        {/* 3. Animated Content Area */}
        <AnimatePresence mode="wait">
          {/* Bio Tab Content */}
          {activeTab === "bio" && (
            <motion.div
              key="bio"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="space-y-8 text-lg leading-relaxed text-[#D9C8B4] max-w-4xl mx-auto"
            >
              <p>
                <strong className="text-[#FDFBF7] font-semibold">Bina</strong> is a
                multifaceted multimedia and visual artist based in Houston, Texas, originally hailing
                from the coastal landscapes of Newport, Rhode Island. Drawing inspiration from the quiet
                rhythms of her coastal roots and the expansive, electric energy of Houston, her work
                spans traditional paint, physical mixed media, and digital graphic design.
              </p>

              <p>
                Her portfolio moves seamlessly between vivid acrylic portraiture, bold surrealism, and
                intricate digital illustration. Through expressive figures, striking color palettes, and
                symbolic motifs—ranging from spiritual iconography and urban skylines to futuristic
                character design—she explores themes of identity, inner strength, and the poetic beauty
                found in everyday life. Whether working on large-scale canvases or refined digital
                compositions, her art invites viewers into atmospheric worlds where traditional texture
                meets modern visual storytelling.
              </p>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-[#E6D5C3] mb-5">
                  Core Mediums &amp; Focus Areas:
                </h3>
                <ul className="space-y-4 list-disc list-inside">
                  {[
                    "Visual & Fine Arts: Acrylic painting, large-scale canvas work, and textured mixed media.",
                    "Digital Art & Illustration: Graphic character design, digital world-building, and video arts.",
                    "Thematic Exploration: Urban surrealism, spiritual symbolism, figure study, and contemporary portraiture."
                  ].map((item, i) => (
                    <motion.li key={i} variants={itemVariants}>
                      <strong className="text-[#FDFBF7] font-semibold">
                        {item.split(":")[0]}:
                      </strong>
                      {item.split(":")[1]}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Artwork Gallery Tab Content */}
          {activeTab === "artwork" && (
            <motion.div
              key="artwork"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-[#E6D5C3]">Artwork Gallery</h2>
                <p className="text-[#D9C8B4]">
                  A curated gallery of recent paintings, digital studies, and mixed media compositions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                {galleryItems.map((piece, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative bg-[#3B322C] rounded-2xl overflow-hidden border border-[#4A3F35] shadow-lg transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#2A2421]">
                      <Image
                        src={piece.src}
                        alt={piece.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4 bg-[#3B322C]">
                      <h3 className="text-[#FDFBF7] font-semibold text-lg">{piece.title}</h3>
                      <p className="text-[#D9C8B4] text-sm">{piece.category}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contact Tab Content */}
          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="space-y-6 text-[#D9C8B4] max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-[#E6D5C3]">Get in Touch</h2>
              <p>For commissions, exhibition inquiries, or collaborations, feel free to reach out.</p>
              <div className="p-8 rounded-2xl bg-[#3B322C] border border-[#4A3F35] space-y-4 max-w-lg mx-auto">
  <p className="text-[#FDFBF7] text-lg">
    <strong className="text-[#E6D5C3]">Email: </strong>
    <a href="mailto:contact@binajaxon.art" className="underline hover:opacity-80">
      contact@binajaxon.art
    </a>
  </p>
  <p className="text-[#FDFBF7] text-lg">
    <strong className="text-[#E6D5C3]">Location: </strong>Houston, TX
  </p>
</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

