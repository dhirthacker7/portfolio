import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, Database, BarChart3, Users } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "30%",
    label: "Efficiency Gain",
    description: "Query performance improvement",
    color: "from-primary to-purple-500",
    span: "col-span-1",
  },
  {
    icon: Database,
    value: "2M+",
    label: "Records Processed Daily",
    description: "Real-time data pipeline",
    color: "from-purple-500 to-pink-500",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Zap,
    value: "2.5x",
    label: "Faster Queries",
    description: "Snowflake optimization",
    color: "from-blue-500 to-primary",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Clock,
    value: "50+",
    label: "Automated Reports",
    description: "Monthly dashboard deliverables",
    color: "from-primary to-cyan-500",
    span: "col-span-1",
  },
  {
    icon: BarChart3,
    value: "24x",
    label: "Update Frequency",
    description: "Dashboard refresh rate improvement",
    color: "from-cyan-500 to-primary",
    span: "col-span-1",
  },
  {
    icon: Users,
    value: "150+",
    label: "Hotspots Identified",
    description: "Vehicle collision analysis",
    color: "from-pink-500 to-primary",
    span: "col-span-1",
  },
];

const MetricsSection = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Metrics That <span className="text-gradient">Matter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quantifiable impact across analytics, automation, and business intelligence
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bento-card ${metric.span} group`}
            >
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} bg-opacity-20`}>
                    <metric.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className={`text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                    >
                      {metric.value}
                    </motion.div>
                    <h3 className="text-lg font-semibold mt-2 text-foreground">
                      {metric.label}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
