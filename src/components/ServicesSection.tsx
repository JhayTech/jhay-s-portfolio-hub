import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Workflow, Settings, MonitorSmartphone, Database, Plug, Wrench } from "lucide-react";

const services = [
  { icon: Workflow, title: "Workflow Automation", desc: "Zapier, Make.com, n8n, Power Automate – automating repetitive processes and notifications." },
  { icon: Settings, title: "GoHighLevel (GHL)", desc: "Funnels, CRM setup, automation workflows, and pipeline management." },
  { icon: MonitorSmartphone, title: "Remote Support", desc: "Troubleshooting, system maintenance, and helpdesk support for onsite & remote teams." },
  { icon: Database, title: "System Administration", desc: "Microsoft 365, Azure AD, Intune, Google Workspace management and configuration." },
  { icon: Plug, title: "API Integrations", desc: "Connect and integrate APIs for smooth data flow between your tools and platforms." },
  { icon: Wrench, title: "Automation Troubleshooting", desc: "Debug, optimize, and maintain your existing automation workflows for peak performance." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-4 relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">What I Offer</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="glass-card rounded-xl p-6 cursor-pointer click-ripple group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 0 25px -5px hsl(175 70% 45% / 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
