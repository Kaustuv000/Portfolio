"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, BookOpen, Cpu, Code, Rocket, FileText, ChevronDown } from "lucide-react";

const publications = [
  {
    title:
      "A Review of Architectures, Techniques and Challenges of using Advanced Quantum Steganography for secure IoT Communication",
    venue: "Springer BIDA 03",
    publisher:
      "Scopus-indexed Springer Book Series — Smart Innovation, Systems and Technologies",
    abstract:
      "IoT networks face sophisticated adversaries capable of eavesdropping, traffic analysis, and communication manipulation despite strong encryption. While encryption secures data content, it does not conceal communication patterns, which may leak sensitive information. Steganography addresses this by embedding secrets within benign traffic, but conventional techniques struggle against modern detection and IoT resource constraints. Quantum steganography offers a promising alternative by leveraging quantum mechanical principles, including measurement disturbance and quantum-safe key distribution, to enable covert communication under stronger threat models. Unlike existing surveys that address quantum communication or IoT security in isolation, this paper surveys quantum steganography techniques through the lens of gateway-centric IoT deployment constraints, presenting a deployment-oriented taxonomy covering QKD-assisted hybrid architectures, entanglement-based protocols, and coding-oriented encoding methods. The surveyed approaches are evaluated using IoT-relevant metrics including embedding capacity, detectability, noise resilience, latency, and computational complexity.",
    keywords: ["Quantum steganography", "Covert communication", "IoT", "QKD", "Quantum networks", "Traffic analysis"],
  },
  {
    title:
      "Beyond Encryption: A Critical Examination of the Social and Ethical Impacts of Quantum Steganography",
    venue: "Elsevier FTNCT-08",
    publisher: "Elsevier — Procedia Computer Science",
    abstract:
      "Research focusing on quantum steganography (QS) is largely centered on its technical implementation as an emerging field. This emphasis on practical discussion leaves a significant gap in the literature on QS, as researchers neglect to discuss the broader societal and ethical implications of a new technology. The vast majority of technical studies often do not entertain the issue of relevant 'dual-use' implications of QS, or other aspects of functionality that may enable greater levels of personal privacy while also enabling covert communications that circumvent current security/monitoring mechanisms. This paper fills the gap in the literature by providing a broad evaluation of the implications to society of QS. When discussing implications, this study considers varied implications and rather than solely utilitarian or functional analysis, the paper considers various implications of the technology on individual privacy, government monitoring, digital autonomy, and access/disadvantage to information security. The principal contribution to the paper is an analysis of the causal implications. This paper also discusses the anticipated safety/risk implications to national security, intellectual property rights, and civil liberties, as well as the governance implications created by this new technology, and provides mitigation options.",
    keywords: ["Quantum", "Steganography", "Information security", "Data hiding"],
  },
];

const achievements = [
  {
    icon: Award,
    text: "GATE 2024 Qualified — CS & IT with 91.36 percentile",
  },
  {
    icon: Rocket,
    text: "1st Runner-up in Tripura Police Tech Hackathon among 150+ teams across India",
  },
  {
    icon: Cpu,
    text: "IoT Start-Up funded (Rs. 3 lakhs) under NGIN by Govt. of Tripura",
  },
  {
    icon: Code,
    text: "Specialist on Codeforces & 5-star in C on HackerRank — 500+ problems solved across platforms",
  },
];

function PublicationCard({ pub, delay }: { pub: typeof publications[number]; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={delay}>
      <div
        className="flex flex-col h-full rounded-xl border border-border bg-card/30 hover:border-accent/20 transition-all duration-300 overflow-hidden cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-accent-dim shrink-0 mt-0.5">
              <FileText size={16} className="text-accent" />
            </div>
            <p className="text-sm font-medium leading-relaxed">
              {pub.title}
            </p>
          </div>
          <div className="ml-11 space-y-1">
            <p className="text-xs text-accent/60 font-mono">
              {pub.venue}
            </p>
            <p className="text-xs text-muted/60">
              {pub.publisher}
            </p>
          </div>

          <div className="ml-11 mt-3 flex items-center gap-1 text-xs text-muted/40">
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={14} />
            </motion.div>
            <span>{expanded ? "Hide abstract" : "Show abstract"}</span>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0 border-t border-border/50">
                <p className="text-xs text-muted/70 leading-relaxed mt-4">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {pub.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-accent-dim text-accent/60"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-accent mb-3 tracking-wider">
            Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Milestones
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h3 className="flex items-center gap-2 text-sm font-mono text-accent/70 mb-5">
            <BookOpen size={16} />
            Publications
          </h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {publications.map((pub, i) => (
            <PublicationCard key={i} pub={pub} delay={0.1 + i * 0.08} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <AnimatedSection key={i} delay={0.25 + i * 0.08}>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card/30 hover:border-accent/20 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-accent-dim shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
