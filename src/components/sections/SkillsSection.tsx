import { motion } from "framer-motion";
import { Database, BarChart3, Brain, Cloud, Code, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Database,
    title: "Data Analysis & Monitoring",
    skills: ["SQL (CTEs, Window functions)", "Python", "Excel (Pivot Tables, Power Query)", "R", "Streamlit", "Grafana"],
    color: "from-primary to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    skills: ["Power BI (DAX)", "Tableau", "ETL Pipelines (PySpark, Talend, Airflow)", "Data Storytelling"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["Predictive Modeling", "Time-Series Forecasting", "Feature Engineering", "Statistical Analysis"],
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (S3, Glue, Redshift)", "Docker", "Git", "CI/CD", "Snowflake"],
    color: "from-cyan-500 to-primary",
  },
  {
    icon: Code,
    title: "Development",
    skills: ["React", "Node.js", "FastAPI", "REST APIs", "MongoDB"],
    color: "from-green-500 to-cyan-500",
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["OpenAI API", "LangChain", "Pinecone", "JIRA", "Agile"],
    color: "from-orange-500 to-yellow-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack analytics capabilities from data engineering to AI-powered insights
          </p>
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bento-card glow-border group ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              } ${index === 3 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground pt-2">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + skillIndex * 0.05 }}
                    className="px-3 py-2 bg-secondary/80 text-foreground text-sm rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4 rounded-full">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Cloud className="w-6 h-6 text-foreground" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">AWS Certified</p>
              <p className="text-sm text-muted-foreground">Data Engineer Associate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
