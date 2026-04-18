"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "Warner Bros. Discovery",
    role: "Software Engineer Intern",
    location: "Bangalore, India",
    period: "Sept 2025 — Present",
    points: [
      "Engineered architectural optimizations for cloud compute infrastructure, reducing pipeline runtime by 75% and driving $8,000+/year in cost savings.",
      "Orchestrated containerized workloads via Vertex AI Custom Jobs, automating execution environments for improved compute efficiency.",
      "Deployed 7+ production features and authored 80+ unit tests using CI/CD principles across major microservices.",
      "Implemented infrastructure monitoring with PagerDuty and Slack, reducing on-call resolution times significantly.",
      "Resolved 20+ critical production issues with hot-fixes across 5+ microservices.",
    ],
  },
  {
    company: "GAO Tek Inc.",
    role: "Tech Team Lead",
    location: "Ontario, Canada",
    period: "Aug 2022 — Apr 2023",
    points: [
      "Optimized C code for 3 RFID tracking systems, improving accuracy by 85% and reducing errors by 40%.",
      "Streamlined documentation for 40+ team members, cutting reporting time by 60%.",
      "Trained and mentored 6 junior developers, achieving 100% certification in 3 months.",
    ],
  },
  {
    company: "ZIROH Labs",
    role: "Software Development Intern",
    location: "Bangalore, India",
    period: "Jan 2022 — Mar 2022",
    points: [
      "Developed AES encryption for JSON data in a Maven-based project, ensuring robust security.",
      "Integrated REST APIs for secure communication and SQLite for encrypted data storage, improving query performance by 20%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-accent mb-3 tracking-wider">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Where I&apos;ve worked
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px]" />

                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className="text-muted text-sm mt-1">
                        {exp.role} · {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-accent/70 mt-1 md:mt-0 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-border"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
