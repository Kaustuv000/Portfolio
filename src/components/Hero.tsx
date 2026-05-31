"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-mono text-sm text-accent mb-4 tracking-wider">
            Hello, I&apos;m
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Kaustuv Dey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Software Engineer building scalable cloud infrastructure &amp;
          data-driven systems. Currently at{" "}
          <span className="text-foreground font-medium">
            Warner Bros. Discovery
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            View my work
            <ArrowRight size={15} />
          </a>
          <a
            href="/KaustuvDey_Resume_2026.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-200 text-sm font-medium w-full sm:w-auto justify-center"
          >
            <Download size={15} />
            Download résumé
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/Kaustuv000"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border text-muted hover:text-accent hover:border-accent/50 transition-all duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/KaustuvDey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border text-muted hover:text-accent hover:border-accent/50 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/self.kaustuv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border text-muted hover:text-accent hover:border-accent/50 transition-all duration-200"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="mailto:self.kaustuv@gmail.com"
            className="p-2.5 rounded-full border border-border text-muted hover:text-accent hover:border-accent/50 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-muted" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
