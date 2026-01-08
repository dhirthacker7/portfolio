import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const ContactSection = () => {
  const links = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dhirthacker7",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://www.github.com/dhirthacker7",
      color: "from-gray-600 to-gray-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:dhirthacker7@gmail.com",
      color: "from-primary to-purple-500",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://tulip-krill-364.notion.site/Hello-I-am-Dhir-Thacker-170ce8174b498085b60edcd32c3b9338",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-12">
            Always open to discussing data analytics opportunities, innovative projects,
            or how we can work together to transform data into insights.
          </p>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 flex flex-col items-center gap-3 hover:bg-card/70 transition-all group"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-6 h-6 text-foreground" />
                </div>
                <span className="font-medium text-foreground">{link.label}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <MagneticButton
              href="mailto:dhirthacker7@gmail.com"
              variant="primary"
              size="lg"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
