"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  GitBranch,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MediCore HMS",
    tagline: "Production-grade Hospital Management System on the MERN stack",
    description:
      "A full-stack HMS with role-based portals for Admins, Doctors, Nurses, Receptionists, Pharmacists, and Lab Technicians. Features real-time staff chat, JWT auth with refresh token rotation, optional 2FA, and concurrency-safe MongoDB transactions across 15+ interconnected collections.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Socket.io",
      "TypeScript",
    ],
    github: "https://github.com/muhammadsohaibcs/computer-science-portfolio/tree/main/web-development/medicore-hms",
    category: "Full Stack",
    featured: true,
    screenshots: ["/Hospital.png"],
    highlights: [
      "6 role-based portals with granular permissions",
      "Real-time staff chat via Socket.io",
      "JWT auth with token rotation, OTP & optional 2FA",
      "Concurrency-safe transactions across 15+ collections",
    ],
  },
  {
    id: 2,
    title: "Secure IoT Communication System",
    tagline: "Blockchain-backed encrypted device network",
    description:
      "A Python-based secure IoT communication system implementing end-to-end encryption for sensor networks. Features a custom blockchain for tamper-proof data logging, ElGamal cryptography, PKI device certificates, and replay attack prevention across multi-device sessions.",
    tech: ["Python", "PyCryptodome", "Blockchain", "ElGamal", "PKI"],
    github: "https://github.com/muhammadsohaibcs/computer-science-portfolio/tree/main/information-security/finaltermproject",
    category: "Python / Security",
    featured: true,
    screenshots: ["/drone.png"],
    highlights: [
      "ElGamal + AES-GCM end-to-end encryption",
      "Custom blockchain audit trail",
      "PKI device certificates & replay protection",
    ],
  },

  {
    id: 3,
    title: "Era Demands — E-Commerce",
    tagline: "Live WordPress e-commerce store",
    description:
      "A real-world e-commerce website built with WordPress and WooCommerce. Features product galleries, cart system, checkout flow, and mobile-responsive design. Deployed and actively used.",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS", "Elementor"],
    github: "",
    category: "E-Commerce",
    featured: true,
    screenshots: [],
    video: "/erademands.mp4",
    highlights: [
      "Live production site",
      "WooCommerce integration",
      "Fully mobile responsive",
    ],
  },
  {
    id: 4,
    title: "Smart City Management System",
    tagline: "Java OOP + GUI desktop application",
    description:
      "A comprehensive smart city management simulation built in Java using OOP principles and Swing UI. Manages city departments, resource allocation, citizen services, and administrative operations.",
    tech: ["Java", "Swing", "OOP", "Design Patterns", "MVC"],
    github: "https://github.com/muhammadsohaibcs/computer-science-portfolio/tree/main/oop/projects/smart-city-ms",
    category: "Desktop App",
    featured: false,
    screenshots: ["/uml.jpg"],
    highlights: ["Java OOP principles", "Swing UI", "MVC architecture"],
  },
  {
    id: 5,
    title: "Customer Churn Prediction",
    tagline: "ML model on IBM Telco dataset",
    description:
      "A neural network model trained on the IBM Telco customer dataset to predict churn probability. Includes complete data preprocessing pipeline, feature engineering, model evaluation.",
    tech: [
      "Python",
      "TensorFlow",
      "Pandas",
      "scikit-learn",
      "Matplotlib",
      "Jupyter",
    ],
    github: "https://github.com/muhammadsohaibcs/computer-science-portfolio/tree/main/machine-learning/midterm",
    category: "AI / ML",
    featured: false,
    screenshots: ["/ml.png"],
    highlights: [
      "Neural network classifier",
      "IBM Telco dataset",
      "End-to-end ML pipeline",
    ],
  },
  {
    id: 6,
    title: "Pakistan Cities Graph Analysis System",
    tagline: "DSA-based graph system with advanced algorithms",
    description:
      "A Data Structures project modeling Pakistan cities as a graph. Implements Dijkstra, DFS, BFS, Prim's MST, AVL Trees, Hash Tables, and sorting algorithms for efficient analysis.",
    tech: ["C++", "DSA", "Graphs", "AVL Tree", "Hashing"],
    github: "https://github.com/muhammadsohaibcs/computer-science-portfolio/tree/main/dsa/final-project",
    category: "DSA / Algorithms",
    featured: false,
    screenshots: [],
    highlights: [
      "Graph-based modeling",
      "Dijkstra, DFS, BFS",
      "Prim's MST",
      "AVL + Hash Table search",
      "Sorting algorithms",
    ],
  },

  {
    id: 7,
    title: "File-Based Database System",
    tagline: "Custom DB engine in Java",
    description:
      "A custom database engine built entirely in Java using the file system as storage. Supports SQL-like query parsing, CRUD operations — from scratch.",
    tech: ["Java", "File I/O", "SQL Parser", "Data Structures", "Algorithms"],
    github: "https://github.com/muhammadsohaibcs/computer-science-portfolio/tree/main/java/projects/database-project",
    category: "Systems",
    featured: false,
    screenshots: ["/database.png"],
    highlights: [
      "SQL-like query engine",
      "File-based storage",
      "Custom indexing",
    ],
  },
];

const categoryColors: Record<string, string> = {
  "Full Stack": "text-cyan-DEFAULT border-cyan-DEFAULT/30 bg-cyan-DEFAULT/8",
  "Python / Security": "text-orange-400 border-orange-400/30 bg-orange-400/8",
  "AI / ML": "text-violet-400 border-violet-400/30 bg-violet-400/8",
  "E-Commerce": "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
  "Desktop App": "text-blue-bright border-blue-bright/30 bg-blue-bright/8",
  Systems: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
  Frontend: "text-pink-400 border-pink-400/30 bg-pink-400/8",
  "DSA / Algorithms": "text-indigo-300 border-indigo-400/40 bg-indigo-500/8",
};

// Maps category to a tagline text color class
const taglineColors: Record<string, string> = {
  "Full Stack": "text-cyan-400",
  "Python / Security": "text-orange-400",
  "AI / ML": "text-violet-400",
  "E-Commerce": "text-emerald-400",
  "Desktop App": "text-blue-400",
  Systems: "text-yellow-400",
  Frontend: "text-pink-400",
  "DSA / Algorithms": "text-indigo-300",
};

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const displayed =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured"
        highlight="Projects"
        subtitle="Real-world systems I've designed, built, and shipped."
      />

      {/* Filter tabs */}
      <div className="flex gap-3 mb-10">
        {(["all", "featured"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium font-body transition-all duration-300 border ${
              filter === f
                ? "bg-cyan-DEFAULT text-white border-cyan-500 shadow-glow-cyan"
                : "border-border text-text-secondary hover:border-cyan-DEFAULT/40 hover:text-text-primary"
            }`}
          >
            {f === "all"
              ? `All (${projects.length})`
              : `Featured (${projects.filter((p) => p.featured).length})`}
          </button>
        ))}
      </div>

      <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {displayed.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onClick={() => setSelected(project)}
            className="glass-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-cyan-DEFAULT/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer group flex flex-col"
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <span
                className={`font-mono text-[10px] uppercase tracking-widest border px-2.5 py-1 rounded-full ${categoryColors[project.category] || "text-text-muted border-border"}`}
              >
                {project.category}
              </span>
              {project.featured && (
                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest">
                  ★ Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-display font-700 text-xl text-text-primary mb-1 group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>

            {/* Tagline — colored to match category */}
            <p
              className={`font-mono text-xs mb-3 ${taglineColors[project.category] || "text-cyan-light"}`}
            >
              {project.tagline}
            </p>

            {/* Description */}
            <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 line-clamp-4">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="mt-4 space-y-1">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-xs text-text-muted font-body"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-DEFAULT/60 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="tech-tag text-text-muted border-border/40">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/40">
              {project.id !== 3 && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-text-secondary text-[10px] font-medium hover:border-cyan-DEFAULT/50 hover:text-white transition-all duration-200"
                >
                  <GitBranch size={11} />
                  GitHub
                </a>
              )}
              <span className="ml-auto text-xs text-text-muted font-mono group-hover:text-white transition-colors">
                View details →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-[9999]"
            onWheel={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <div
              className="fixed inset-0 overflow-y-auto overscroll-y-contain"
              style={{ overscrollBehavior: "contain" }}
            >
              <div className="flex min-h-full items-center justify-center p-4">
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="glass-card rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-card-hover border border-border relative"
                >
                  {/* Modal header */}
                  <div className="sticky top-0 glass-card rounded-t-3xl p-6 border-b border-border/50 flex items-start justify-between z-20 shrink-0">
                    <div>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-widest border px-2.5 py-1 rounded-full ${categoryColors[selected.category]}`}
                      >
                        {selected.category}
                      </span>
                      <h2 className="font-display font-800 text-2xl text-white mt-3">
                        {selected.title}
                      </h2>
                      {/* Tagline in modal — colored to match category */}
                      <p
                        className={`font-mono text-sm mt-1 ${taglineColors[selected.category] || "text-cyan-light"}`}
                      >
                        {selected.tagline}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="p-2 rounded-xl hover:bg-white/10 text-white hover:text-white transition-colors flex-shrink-0 mt-2"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="p-6 space-y-6 overflow-y-auto flex-1">
                    {selected.video && (
                      <div className="rounded-2xl overflow-hidden border border-emerald-400/20 bg-gradient-to-b from-emerald-950/30 to-black/40">
                        {/* Header */}
                        <div className="px-5 py-4 flex items-center gap-3 border-b border-emerald-400/10">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
                          <h3 className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                            Live Demo
                          </h3>
                          <span className="ml-auto font-mono text-[10px] text-emerald-400/50 uppercase tracking-widest">
                            Era Demands · E-Commerce
                          </span>
                        </div>

                        {/* Video — no forced aspect-video, just natural sizing */}
                        <div className="flex items-center justify-center bg-black/60 p-4">
                          <video
                            controls
                            preload="metadata"
                            playsInline
                            className="w-full max-w-[320px] rounded-xl border border-emerald-400/10 shadow-[0_0_30px_4px_rgba(52,211,153,0.08)]"
                            style={{ maxHeight: "480px" }}
                          >
                            <source src={selected.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>

                        {/* Footer note */}
                        <div className="px-5 py-3 border-t border-emerald-400/10 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-emerald-400/50" />
                          <p className="font-mono text-[10px] text-emerald-400/50 uppercase tracking-widest">
                            Recorded on mobile · WooCommerce storefront
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Screenshots Gallery */}
                    {selected.screenshots &&
                      selected.screenshots.length > 0 && (
                        <div>
                          <h3 className="font-mono text-xs text-cyan-DEFAULT uppercase tracking-widest mb-3">
                            Images
                          </h3>
                          <div className="grid grid-cols-1 gap-4">
                            {selected.screenshots.map((screenshot, idx) => (
                              <div
                                key={idx}
                                className="rounded-2xl overflow-hidden border border-border bg-black/30"
                              >
                                <img
                                  src={screenshot}
                                  alt={`Screenshot ${idx + 1}`}
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Description */}
                    <div>
                      <h3 className="font-mono text-xs text-cyan-DEFAULT uppercase tracking-widest mb-3">
                        Overview
                      </h3>
                      <p className="font-body text-text-secondary leading-relaxed">
                        {selected.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="font-mono text-xs text-cyan-DEFAULT uppercase tracking-widest mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selected.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-3 text-sm text-text-secondary font-body"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-DEFAULT flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Full tech stack */}
                    <div>
                      <h3 className="font-mono text-xs text-cyan-DEFAULT uppercase tracking-widest mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selected.tech.map((t) => (
                          <span key={t} className="tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA — hidden for Era Demands (id: 3) */}
                    {selected.id !== 3 && (
                      <div className="pt-2">
                        <a
                          href={selected.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-DEFAULT to-blue-accent text-muted font-semibold text-sm border border-muted hover:shadow-glow-cyan transition-all duration-300"
                        >
                          <GitBranch size={16} />
                          View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
