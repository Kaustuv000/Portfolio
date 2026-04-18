"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const photos = [
  { src: "/photos/DSC_0647.jpg", alt: "DSC_0647" },
  { src: "/photos/IMG_0905.jpg", alt: "IMG_0905" },
  { src: "/photos/IMG_2269.jpg", alt: "IMG_2269" },
  { src: "/photos/IMG_3161.JPG", alt: "IMG_3161" },
];

// Duplicate for seamless infinite scroll
const marqueePhotos = [...photos, ...photos];

export default function Photography() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="photography" className="py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-sm text-accent mb-3 tracking-wider">
              Photography
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Through my lens
            </h2>
            <p className="text-muted mb-6 max-w-lg">
              A quiet hobby that keeps me grounded — capturing light, moments,
              and places I want to remember.
            </p>
            <a
              href="https://www.instagram.com/the_lensceptionist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent/70 hover:text-accent transition-colors duration-200 mb-14"
            >
              @the_lensceptionist
              <ArrowUpRight size={14} />
            </a>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="relative group">
            <div
              className="flex gap-5 w-max animate-marquee group-hover:[animation-play-state:paused]"
            >
              {marqueePhotos.map((photo, i) => (
                <button
                  key={`${photo.src}-${i}`}
                  onClick={() => setSelected(i % photos.length)}
                  className="relative shrink-0 w-[320px] md:w-[420px] aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card/30 hover:border-accent/20 transition-all duration-300 cursor-zoom-in group/photo"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 320px, 420px"
                    className="object-cover transition-transform duration-700 group-hover/photo:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>
        </AnimatedSection>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selected].src}
                alt={photos[selected].alt}
                width={1400}
                height={1000}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
