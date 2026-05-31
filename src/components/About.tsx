"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-accent mb-3 tracking-wider">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who I am</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a Software Engineer currently pursuing my M.Tech in IT
              (Data Analytics) at NIT Jalandhar, with a background in Computer
              Science from ICFAI University.
            </p>
            <p>
              At Warner Bros. Discovery, I work on caption &amp; script
              generation pipelines, localization systems, and runtime
              monitoring — cutting pipeline runtimes by 75% and shipping
              production features across major microservices. I thrive at the
              intersection of backend systems, DevOps, and data engineering.
            </p>
            <p>
              Outside work, I&apos;ve built everything from kernels to
              AI-powered CCTV systems, published research on quantum
              steganography, and enjoy competitive programming on Codeforces
              with 500+ problems solved across platforms.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
