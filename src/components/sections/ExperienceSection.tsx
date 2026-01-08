import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Data Analyst",
    company: "Velero Technology",
    location: "Wellesley, MA, USA",
    period: "Sep 2025 – Present",
    highlights: [
      "Delivered end-to-end risk analysis solution using live streaming data",
      "Generated Tableau dashboard processing 2M+ records daily",
      "Improved ETL pipelines achieving 2.5× faster queries",
    ],
    tech: ["Tableau", "Snowflake", "Python", "OpenAI API"],
  },
  {
    role: "Business Analyst",
    company: "Infosys Limited",
    location: "Pune, India",
    period: "Jan 2023 – Aug 2023",
    highlights: [
      "Conducted data quality audits on terabytes of EHR data",
      "Designed Tableau dashboard centralizing 25+ KPIs",
      "Optimized Airflow DAGs increasing update frequency by 24x",
    ],
    tech: ["Tableau", "Postgres", "Airflow", "SAP BI"],
  },
  {
    role: "Data Analyst (Data Engineering)",
    company: "Tata Consultancy Services",
    location: "Gandhinagar, India",
    period: "Jul 2021 – Dec 2022",
    highlights: [
      "Enhanced SQL architecture reducing query runtime for 10M+ records",
      "Built Python and PySpark ETL pipelines",
      "Engineered predictive cost models improving forecast accuracy by 20%",
    ],
    tech: ["Python", "PySpark", "Oracle SQL", "Scikit-Learn"],
  },
  {
    role: "Software Engineer Intern",
    company: "Wednesday Solutions",
    location: "Pune, India",
    period: "Jan 2020 – Oct 2020",
    highlights: [
      "Created HRIS platform using React, Node.js, MongoDB",
      "Implemented 10 REST APIs to improve system usability",
    ],
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            3+ years of experience transforming data into business value
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 ring-4 ring-background z-10" />

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card p-6 hover:bg-card/70 transition-colors">
                  <div className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>

                  <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`text-primary mt-1 ${index % 2 === 0 ? "md:order-2" : ""}`}>→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
