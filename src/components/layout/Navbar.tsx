import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/dhirthacker7", icon: Linkedin },
  { href: "https://www.github.com/dhirthacker7", icon: Github },
  { href: "mailto:dhirthacker7@gmail.com", icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 glass-card !rounded-none border-x-0 border-t-0" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-serif font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              DT
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 glass-card rounded-none p-8 pt-24">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-4 mt-12">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
