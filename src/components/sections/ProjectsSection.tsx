import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Database,
  BarChart3,
  Layers,
  Play,
  X,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const ProjectsSection = () => {
  const [showTechnical, setShowTechnical] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const technicalDetails = [
    {
      icon: Database,
      title: "Data Cleaning (Power Query)",
      description: "Cleaned and transformed 3M+ crash records using Power Query M language",
    },
    {
      icon: BarChart3,
      title: "DAX Measures",
      description: "Created 50+ DAX measures for KPIs, trends, and comparative analysis",
    },
    {
      icon: Layers,
      title: "Data Modeling",
      description: "Built star schema with fact and dimension tables for optimal performance",
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Interactive <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing data-driven solutions that transform complex datasets into actionable insights
          </p>
        </motion.div>

        {/* Featured Project: Power BI Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 glow-border"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Project Info */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                Featured Project
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold">
                Crash Stat: Vehicle Collision Analysis
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Analyzed 3M+ crash records, performing data profiling to identify risk zones
                and create a unified interactive dashboard highlighting 150+ accident hotspots.
              </p>

              <div className="flex flex-wrap gap-3">
                <MagneticButton
                  href="https://github.com/dhirthacker7"
                  external
                  variant="primary"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </MagneticButton>
                <MagneticButton
                  onClick={() => setShowModal(true)}
                  variant="outline"
                >
                  <Play className="w-4 h-4" />
                  Project Walkthrough
                </MagneticButton>
              </div>

              {/* Technical Deep Dive Dropdown */}
              <div className="pt-4">
                <button
                  onClick={() => setShowTechnical(!showTechnical)}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <motion.span
                    animate={{ rotate: showTechnical ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                  Technical Deep Dive
                </button>

                <AnimatePresence>
                  {showTechnical && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-4 pt-6">
                        {technicalDetails.map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl"
                          >
                            <div className="p-2 bg-primary/20 rounded-lg">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{item.title}</h4>
                              <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Mock Dashboard UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-4 rounded-2xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center gap-2 pb-4 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    Power BI Dashboard
                  </span>
                </div>

                {/* Mock Dashboard Content */}
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {/* KPI Cards */}
                  <div className="col-span-3 grid grid-cols-3 gap-3">
                    {[
                      { label: "Total Records", value: "3.2M+" },
                      { label: "Hotspots", value: "150+" },
                      { label: "Accuracy", value: "99.2%" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="bg-secondary/50 p-3 rounded-lg text-center">
                        <div className="text-xl font-bold text-primary">{kpi.value}</div>
                        <div className="text-xs text-muted-foreground">{kpi.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mock Chart */}
                  <div className="col-span-2 bg-secondary/30 rounded-lg p-4 h-32">
                    <div className="flex items-end justify-between h-full gap-2">
                      {[40, 65, 45, 80, 55, 70, 90, 60].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-primary to-purple-500 rounded-t"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mock Map */}
                  <div className="bg-secondary/30 rounded-lg p-4 h-32 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="absolute w-3 h-3 bg-primary rounded-full animate-glow-pulse"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Second Project: AIVY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 glass-card p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
            <div className="space-y-4 flex-1">
              <div className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                AI/ML Project
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold">
                AIVY: AI Learning Assistant
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built a RAG application delivering personalized lessons with videos and quizzes,
                returning context-aware LLM answers in under 10 seconds using 100K vector embeddings.
              </p>
            </div>
            <MagneticButton href="https://github.com/dhirthacker7" external variant="outline">
              <ExternalLink className="w-4 h-4" />
              View Project
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-6 w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-serif font-bold">Project Walkthrough</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Play className="w-16 h-16 text-primary mx-auto" />
                  <p className="text-muted-foreground">
                    Embed your Loom video here
                  </p>
                  <p className="text-sm text-muted-foreground/60">
                    Replace this placeholder with your Loom embed code
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
