"use client";

import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "NIT Jalandhar",
    degree: "M.Tech in IT (Data Analytics)",
    grade: "CGPA: 7.80",
    period: "Aug 2024 — June 2026",
  },
  {
    institution: "ICFAI University, Tripura",
    degree: "B.Tech in Computer Science & Engineering",
    grade: "CGPA: 8.76",
    period: "Sept 2020 — June 2024",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-accent mb-3 tracking-wider">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Academic background
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <AnimatedSection key={edu.institution} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-border bg-card/30 hover:border-accent/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-dim">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <span className="font-mono text-xs text-accent/60">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  {edu.institution}
                </h3>
                <p className="text-sm text-muted">{edu.degree}</p>
                <p className="text-sm text-muted/60 mt-1">{edu.grade}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
