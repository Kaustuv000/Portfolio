"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Captioning Localization Quality Suite",
    tag: "Warner Bros. Discovery",
    description:
      "Developed a video-understanding pipeline to extract and classify on-screen text via scene text recognition with LLM post-processing, benchmarked on 70+ video-script pairs with 5,300+ annotated text blocks.",
    detail:
      "Engineered a burnt-in-subtitle filtering module that cleans transcription output of visual-overlay noise while preserving genuine dialogue, unblocking reliable speech-to-text quality benchmarking.",
    tech: ["Python", "PaddleOCR", "LLM", "NLP"],
    link: null,
  },
  {
    title: "VisionTrack: AI-Powered CCTV Search",
    tag: "Hackathon — 1st Runner-up",
    description:
      "Built an intelligent CCTV search and geotagging system leveraging a Siamese model for image similarity and Google Maps API for location mapping.",
    detail:
      "Integrated face, location, and number plate recognition using YOLO in both image and video formats to support Tripura State Police in criminal investigations.",
    tech: ["Python", "Django", "YOLO", "Siamese Network", "Google Maps API"],
    link: null,
  },
  {
    title: "MyKernel",
    tag: "Systems Programming",
    description:
      "A minimal x86_64 kernel written in C and Assembly, emulated on QEMU. Features system calls, paging, and interrupt handling.",
    detail:
      "Built low-level OS components including a Multiboot-compliant bootloader with a Docker build environment for portability.",
    tech: ["C", "Assembly", "QEMU", "Docker"],
    link: "https://github.com/Kaustuv000/MyKernel",
  },
  {
    title: "Sentiment Analysis — Amazon Reviews",
    tag: "ML / NLP",
    description:
      "Sentiment analysis project using the Amazon product review dataset to analyze customer opinions and extract sentiment insights from large-scale text data.",
    detail:
      "Applied NLP techniques and classification models to categorize reviews into positive, negative, and neutral sentiments with high accuracy.",
    tech: ["Python", "NLP", "scikit-learn", "Pandas"],
    link: "https://github.com/Kaustuv000/Sentiment-analysis-Amazon-product-reviews-",
  },
  {
    title: "Bike Sharing Demand Analysis",
    tag: "Data Science",
    description:
      "Demand prediction and analysis for bike-sharing systems based on hourly and daily datasets using regression techniques.",
    detail:
      "Used Random Forest Regressor and feature engineering on temporal and weather features to predict ride demand patterns.",
    tech: ["Python", "Random Forest", "Pandas", "Matplotlib"],
    link: "https://github.com/Kaustuv000/Bike-Sharing-Demand-Analysis-using-Regression-",
  },
  {
    title: "BMP Image Decoder",
    tag: "Low-Level Computing",
    description:
      "A custom BMP image file decoder that parses bitmap headers and pixel data to reconstruct images from raw binary format.",
    detail:
      "Handles different BMP versions and bit depths, demonstrating understanding of binary file formats and image processing fundamentals.",
    tech: ["Python", "Binary Parsing"],
    link: "https://github.com/Kaustuv000/Bmp-Image-Decoder",
  },
  {
    title: "Hand Detection Module",
    tag: "Computer Vision",
    description:
      "Real-time hand detection and tracking module built with OpenCV and MediaPipe for gesture recognition applications.",
    detail:
      "Processes video streams to detect hand landmarks in real-time, enabling gesture-based interaction and control.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    link: "https://github.com/Kaustuv000/Hand-Detection-Module",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-accent mb-3 tracking-wider">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Things I&apos;ve built
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const Wrapper = project.link ? "a" : "div";
            const linkProps = project.link
              ? {
                  href: project.link,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <AnimatedSection key={project.title} delay={i * 0.07}>
                <Wrapper
                  {...linkProps}
                  className="group relative flex flex-col h-full p-6 rounded-2xl border border-border bg-card/50 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-mono text-[11px] text-accent/60 px-2 py-0.5 rounded-full border border-accent/15 bg-accent-dim">
                      {project.tag}
                    </span>
                    {project.link && (
                      <ExternalLink
                        size={14}
                        className="text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 mt-0.5"
                      />
                    )}
                  </div>

                  <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-1.5 flex-1">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted/50 leading-relaxed mb-4">
                    {project.detail}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-accent-dim text-accent/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
