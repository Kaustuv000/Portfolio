"use client";

import AnimatedSection from "./AnimatedSection";

const skills = {
  Languages: ["Python", "C++", "SQL", "C", "Bash/Shell", "Golang", "JavaScript"],
  "Tools / DevOps / Cloud": ["Git", "Docker", "Linux", "CI/CD", "GCP", "JIRA", "PagerDuty", "QEMU"],
  "Data & ML": ["Airflow", "Vertex AI", "BigQuery", "Pandas", "NumPy"],
};

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

        <div className="grid md:grid-cols-5 gap-12">
          <AnimatedSection className="md:col-span-3" delay={0.1}>
            <div className="space-y-4 text-muted leading-relaxed">
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

          <AnimatedSection className="md:col-span-2" delay={0.2}>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-mono text-accent/70 mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono rounded-full border border-border text-muted hover:border-accent/30 hover:text-foreground transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
