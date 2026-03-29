import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, Zap, BarChart3, PieChart, Monitor, Shield, Cog } from "lucide-react";
import zapierImg from "@/assets/zapier-ai-content.png";
import zapier2Img from "@/assets/zapier-2.png";
import zapier3Img from "@/assets/zapier-3.png";
import powerAutomateImg from "@/assets/power-automate-onboarding.png";
import m365Img from "@/assets/m365-admin.png";
import intuneImg from "@/assets/intune-admin.png";

const projects = [
  {
    icon: Zap,
    title: "AI Content Repurposing",
    category: "Zapier Automation",
    image: zapierImg,
    summary: "Automated AI-powered content repurposing workflow using Zapier to generate blog posts and social media content from audio/video files.",
    details: [
      "Google Drive trigger monitors for new uploaded files",
      "Zapier AI generates transcription from uploaded media",
      "AI automatically generates 2 blog posts from transcription",
      "Looping and path logic splits content for different platforms",
      "Auto-publishes to Facebook Pages and LinkedIn simultaneously",
      "End-to-end automation with zero manual intervention",
    ],
  },
  {
    icon: Zap,
    title: "Asana CRM Lead Engagement Workflow",
    category: "Zapier Automation",
    image: zapier2Img,
    summary: "Zapier-powered workflow triggered by Asana tasks to automate multi-path lead engagement with follow-up emails and AI recommendations.",
    details: [
      "Asana task trigger initiates the workflow automatically",
      "Multi-path routing based on lead type and priority",
      "Automated follow-up email sequences for each path",
      "AI-powered recommendations for lead engagement strategies",
      "CRM records updated in real-time with engagement data",
      "Reduced manual lead management by 80%",
    ],
  },
  {
    icon: Zap,
    title: "Automated Leads Enrichment",
    category: "Zapier Automation",
    image: zapier3Img,
    summary: "End-to-end lead enrichment pipeline using Typeform capture, Apollo enrichment, priority-based routing, and AI-drafted emails.",
    details: [
      "Typeform integration for lead capture and qualification",
      "Apollo.io enrichment for company and contact data",
      "Priority-based routing to appropriate sales teams",
      "AI-generated personalized email drafts for outreach",
      "Automated CRM updates with enriched lead profiles",
      "Seamless handoff between enrichment and engagement stages",
    ],
  },
  {
    icon: Cog,
    title: "Onboarding New Team Member",
    category: "Power Automate",
    image: powerAutomateImg,
    summary: "Microsoft Power Automate flow for onboarding new team members with location-based logic, approval processes, and automated credential delivery.",
    details: [
      "Automated trigger on new employee record creation",
      "Location-based logic for region-specific onboarding steps",
      "Manager approval workflow for access and equipment",
      "Automated user account creation in Microsoft 365",
      "Credential delivery via secure email notification",
      "Checklist tracking for onboarding completion status",
    ],
  },
  {
    icon: Monitor,
    title: "Microsoft 365 Admin Center",
    category: "System Administration",
    image: m365Img,
    summary: "Comprehensive Microsoft 365 Admin Center management including user provisioning, license assignment, and tenant configuration.",
    details: [
      "User account provisioning and lifecycle management",
      "License assignment and optimization across the organization",
      "Security and compliance policy configuration",
      "Exchange Online and SharePoint administration",
      "Monitoring service health and incident response",
    ],
  },
  {
    icon: Shield,
    title: "Microsoft Intune Administration",
    category: "System Administration",
    image: intuneImg,
    summary: "Intune device management and role assignments for enterprise endpoint security and compliance.",
    details: [
      "Device enrollment and compliance policy management",
      "Role-based access control (RBAC) configuration",
      "Application deployment and update management",
      "Security baseline and conditional access policies",
      "Device inventory monitoring and reporting",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card rounded-xl overflow-hidden cursor-pointer click-ripple group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, boxShadow: "0 0 25px -5px hsl(175 70% 45% / 0.2)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(i)}
            >
              {p.image && (
                <div className="w-full h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary/60 text-xs font-heading uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-heading font-semibold text-base mb-1">{p.title}</h3>
                    <span className="inline-flex items-center gap-1 text-primary text-xs mt-1 group-hover:gap-2 transition-all">
                      View Details <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
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
              className="glass-card rounded-2xl max-w-4xl w-full relative z-10 border border-primary/20 overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-foreground bg-background/70 rounded-full p-1.5 backdrop-blur-sm">
                <X className="w-5 h-5" />
              </button>

              {projects[selected].image && (
                <div className="w-full">
                  <img src={projects[selected].image} alt={projects[selected].title} className="w-full h-auto" />
                </div>
              )}
              <div className="p-8">
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
