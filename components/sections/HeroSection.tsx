"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Brain } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import {Download, Check} from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [cvClicked, setCvClicked] = useState(false);
  const [projectClicked, setProjectClicked] = useState(false);

  const scrollToProjects = () => {
    setProjectClicked(true);
    setTimeout(() => setProjectClicked(false), 1500);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCVDownload = () => {
    setCvClicked(true);
    setTimeout(() => setCvClicked(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated grid highlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-cyan-DEFAULT/5 via-blue-accent/3 to-transparent rounded-full" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-2 shadow-card">
          <Code2 size={16} className="text-blue-bright" />
          <span className="font-mono text-xs text-text-secondary">
            Full Stack Dev
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-80 left-[34%] hidden lg:block"
      >
        <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-2 shadow-card">
          <Sparkles size={16} className="text-cyan-light" />
          <span className="font-mono text-xs text-text-secondary">
            GPA 3.83 / 4.0
          </span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cyan-DEFAULT/30 bg-cyan-DEFAULT/5"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-DEFAULT animate-pulse-slow" />
              <span className="font-mono text-xs text-cyan-DEFAULT tracking-wider uppercase">
                Available for opportunities
              </span>
            </motion.div>
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-mono text-text-muted text-sm mb-2 tracking-widest uppercase">
                Hello, I'm
              </p>
              <h1 className="font-display font-800 text-6xl md:text-7xl lg:text-8xl text-text-primary leading-none tracking-tight">
                Muhammad
                <br />
                <span className="gradient-text">Sohaib</span>
              </h1>
            </motion.div>
            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 font-mono text-xl md:text-2xl text-text-secondary"
            >
              <span className="text-cyan-DEFAULT">{"< "}</span>
              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "System Builder",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                cursor
                repeat={Infinity}
                className="text-text-primary"
              />
              <span className="text-cyan-DEFAULT">{" />"}</span>
            </motion.div>
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-text-secondary font-body text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Building intelligent systems, scalable applications, and
              real-world solutions.
            </motion.p>
            {/* CTAs */}
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* View Projects Button */}
              <button
                onClick={scrollToProjects}
                className={`px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                  projectClicked
                    ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-white shadow-lg shadow-green-500/30'
                    : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-cyan-500/30'
                }`}
              >
                View Projects
              </button>

              {/* Download CV Button */}
              <a
                href="/Muhammad_Sohaib_CV.pdf" 
                download="Muhammad_Sohaib_CV.pdf"
                onClick={handleCVDownload}
                className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border font-semibold text-sm tracking-wide transition-all duration-300 ${
                  cvClicked
                    ? 'border-green-400/50 bg-green-500/10 text-green-400'
                    : 'border-border text-text-primary hover:border-cyan-400/50 hover:bg-white/5 hover:text-cyan-400'
                }`}
              >
                {cvClicked ? (
                  <>
                    <Check size={16} />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Download CV
                  </>
                )}
              </a>
            </motion.div>
            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-14 flex gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "7+", label: "Projects Built" },
                { value: "3.83", label: "GPA Score" },
                { value: "3rd", label: "Tech Fest Rank" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl md:text-3xl font-800 gradient-text">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] text-text-muted uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            {/* Outer ring */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-DEFAULT/20 animate-spin-slow" />

              {/* Glow backdrop */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-DEFAULT/20 to-blue-accent/20 blur-xl" />

              {/* Image container */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-cyan-DEFAULT/40 shadow-glow-cyan">
                <div className="w-full h-full bg-gradient-to-br from-card to-surface flex items-center justify-center">
                  {/* Placeholder avatar - replace src with actual photo */}
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Sohaib"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;">
                            <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:800;color:black;font-family:Syne,sans-serif;">MS</div>
                            <div style="font-size:11px;color:#8899b4;font-family:monospace;letter-spacing:2px;">PROFILE</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-DEFAULT shadow-glow-cyan" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute bottom-2 right-8 w-2 h-2 rounded-full bg-blue-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
