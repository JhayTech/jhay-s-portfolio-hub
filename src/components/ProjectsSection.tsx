import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, Zap, BarChart3, Bot, PieChart } from "lucide-react";

const projects = [
  {
    icon: Zap,
    title: "Lead Generation Funnels",
    category: "GoHighLevel",
    summary: "Built lead generation funnels using GoHighLevel (GHL) for capturing and nurturing leads.",
    details: [
      "Designed multi-step funnel pages with opt-in forms",
      "Configured GHL automations for follow-up sequences",
      "Integrated email and SMS workflows for lead nurturing",
      "Set up tracking and analytics for funnel performance",
    ],
  },
  {
    icon: Bot,
    title: "Automation Workflows",
    category: "Zapier / Make.com / n8n",
    summary: "Created automation workflows using Zapier, Make.com, n8n, and Power Automate.",
    details: [
      "Automated data sync between multiple platforms",
      "Built multi-step workflows with conditional logic",
      "Integrated CRM, email, and project management tools",
      "Reduced manual data entry by automating repetitive tasks",
    ],
  },
  {
    icon: BarChart3,
    title: "CRM Pipeline Setup",
    category: "CRM Management",
    summary: "Practiced CRM pipeline setup and lead tracking for business process optimization.",
    details: [
      "Designed custom pipeline stages for sales processes",
      "Configured lead scoring and automated status updates",
      "Set up dashboards for pipeline visibility",
      "Created automated notifications for stage transitions",
    ],
  },
  {
    icon: PieChart,
    title: "Process Automation",
    category: "Power Automate",
    summary: "Automated repetitive processes and notifications to improve business efficiency.",
    details: [
      "Built Power Automate flows for approval workflows",
      "Automated report generation and distribution",
      "Created notification systems for critical events",
      "Streamlined document management processes",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card rounded-xl p-6 cursor-pointer click-ripple group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 0 25px -5px hsl(175 70% 45% / 0.2)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(i)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-primary/60 text-xs font-heading uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-heading font-semibold text-lg mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.summary}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-xs mt-3 group-hover:gap-2 transition-all">
                    View Details <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              className="glass-card rounded-2xl p-8 max-w-lg w-full relative z-10 border border-primary/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  {(() => { const Icon = projects[selected].icon; return <Icon className="w-5 h-5 text-primary" />; })()}
                </div>
                <div>
                  <span className="text-primary/60 text-xs font-heading uppercase tracking-wider">{projects[selected].category}</span>
                  <h3 className="font-heading font-bold text-xl">{projects[selected].title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{projects[selected].summary}</p>
              <ul className="space-y-2">
                {projects[selected].details.map((d, j) => (
                  <motion.li
                    key={j}
                    className="text-foreground/80 text-sm flex gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.1 }}
                  >
                    <span className="text-primary mt-0.5 shrink-0">▸</span>
                    {d}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
