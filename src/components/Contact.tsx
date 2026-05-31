"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, ArrowUpRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center">
            <p className="font-mono text-sm text-accent mb-3 tracking-wider">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s connect
            </h2>
            <p className="text-muted max-w-md mx-auto mb-10 leading-relaxed">
              Open to opportunities, collaborations, and interesting
              conversations. Feel free to reach out.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:self.kaustuv@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-200 font-medium text-sm"
              >
                <Mail size={16} />
                self.kaustuv@gmail.com
                <ArrowUpRight size={14} />
              </a>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/Kaustuv000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/KaustuvDey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="https://www.instagram.com/self.kaustuv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>

              <p className="text-sm text-muted/50 leading-relaxed pt-4">
                Or use the form to send me a message directly — it lands
                straight in my inbox.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="access_key"
                value="5797325e-ddf0-48cf-8cae-46c92326ecc8"
              />
              <input type="hidden" name="subject" value="New message from portfolio" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground placeholder:text-muted/40 text-sm focus:outline-none focus:border-accent/40 transition-colors duration-200"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground placeholder:text-muted/40 text-sm focus:outline-none focus:border-accent/40 transition-colors duration-200"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground placeholder:text-muted/40 text-sm focus:outline-none focus:border-accent/40 transition-colors duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>Sending...</>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={16} />
                    Failed — try again
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
