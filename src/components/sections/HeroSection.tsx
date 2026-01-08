import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import headshot from "@/assets/headshot.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-medium tracking-wider uppercase text-sm"
              >
                Welcome to my portfolio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
              >
                <span className="text-foreground">Dhir</span>{" "}
                <span className="text-gradient">Thacker</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground font-light"
              >
                Senior Data Analyst & Power BI Expert
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-xl"
            >
              Transforming raw data into clear, actionable insights with 3+ years 
              of experience building Business Intelligence and analytics solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton href="#projects" variant="primary" size="lg">
                View My Work
                <ArrowDown className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline" size="lg">
                Get in Touch
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              <MagneticButton
                href="https://www.linkedin.com/in/dhirthacker7"
                external
                variant="ghost"
                size="sm"
              >
                <Linkedin className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                href="https://www.github.com/dhirthacker7"
                external
                variant="ghost"
                size="sm"
              >
                <Github className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                href="mailto:dhirthacker7@gmail.com"
                variant="ghost"
                size="sm"
              >
                <Mail className="w-5 h-5" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-3xl blur-3xl opacity-30 scale-110" />
              
              {/* Image container with glassmorphism border */}
              <div className="relative glass-card p-2 rounded-3xl glow-border">
                <img
                  src={headshot}
                  alt="Dhir Thacker"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full"
              >
                <span className="text-primary font-semibold">AWS Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
