import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, Zap, Monitor, Shield, Cog, Bot, Mail, FileVideo, BrainCircuit, Workflow } from "lucide-react";
import zapierImg from "@/assets/zapier-ai-content.png";
import zapier2Img from "@/assets/zapier-2.png";
import zapier3Img from "@/assets/zapier-3.png";
import powerAutomateImg from "@/assets/power-automate-onboarding.png";
import m365Img from "@/assets/m365-admin.png";
import intuneImg from "@/assets/intune-admin.png";
import n8nRagImg from "@/assets/n8n-basic-rag-demo.jpg";
import makeGmailImg from "@/assets/make-auto-sort-gmail.jpg";
import makeXeroImg from "@/assets/make-xero-asana.jpg";
import n8nFbImg from "@/assets/n8n-ai-agent-facebook.jpg";
import n8nJobImg from "@/assets/n8n-ai-job-scraper.jpg";
import n8nReceptionistImg from "@/assets/n8n-ai-receptionist.jpg";
import n8nAsmrImg from "@/assets/n8n-asmr-video-creator.jpg";

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
    icon: BrainCircuit,
    title: "Basic RAG Demo",
    category: "n8n Automation",
    image: n8nRagImg,
    summary: "n8n workflow implementing a Retrieval-Augmented Generation (RAG) system with Google Drive, Supabase Vector Store, and Google Gemini AI Agent.",
    details: [
      "Google Drive file triggers for created, updated, and deleted files",
      "Automatic document download and embedding generation",
      "Supabase Vector Store for semantic search and retrieval",
      "AI Agent powered by Google Gemini Chat Model",
      "Default Data Loader for document processing pipeline",
      "Chat message trigger for interactive Q&A sessions",
    ],
  },
  {
    icon: Bot,
    title: "AI Agent for Facebook",
    category: "n8n Automation",
    image: n8nFbImg,
    summary: "n8n webhook-based AI agent that processes Facebook messages, retrieves context documents, and responds intelligently via HTTP requests.",
    details: [
      "Webhook trigger handles GET and POST requests from Facebook",
      "Conditional logic (If/Filter) for message routing",
      "Document retrieval for context-aware AI responses",
      "Google Gemini Chat Model with Simple Memory for conversation history",
      "HTTP Request node for sending responses back to Facebook",
      "Automated webhook verification and response handling",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI Job Scraper + Resume Optimizer",
    category: "n8n Automation",
    image: n8nJobImg,
    summary: "Complex n8n workflow that scrapes job listings, analyzes them with AI, optimizes resumes, and drafts personalized application emails.",
    details: [
      "Slack trigger initiates job search queries",
      "Query validation and intelligent error handling",
      "Web scraping for job listings with result parsing",
      "Loop-based processing for multiple job matches",
      "AI-powered resume content optimization with OpenRouter",
      "Automated email draft creation and Google Drive file management",
    ],
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    category: "n8n Automation",
    image: n8nReceptionistImg,
    summary: "Multi-workflow n8n AI receptionist handling appointment booking, rescheduling, cancellation, and calendar management with VAPI integration.",
    details: [
      "GetSlots workflow checks calendar availability in real-time",
      "Bookslots workflow handles appointment creation with validation",
      "UpdateSlots workflow manages rescheduling with conflict detection",
      "CancelSlots workflow processes cancellations and record updates",
      "VAPI integration for voice-based appointment interactions",
      "Comprehensive error handling and friendly user responses",
    ],
  },
  {
    icon: FileVideo,
    title: "ASMR Video Creator",
    category: "n8n Automation",
    image: n8nAsmrImg,
    summary: "Automated n8n pipeline that generates ASMR videos using AI, processes them, and publishes to YouTube and Facebook on a schedule.",
    details: [
      "Schedule Trigger for automated daily/weekly video creation",
      "JWT authentication for Google API access",
      "AI prompt generation with Google Gemini and Structured Output",
      "Video generation via API with polling for completion",
      "Content filtering and error handling before publishing",
      "Auto-upload to YouTube and Facebook Graph API",
    ],
  },
  {
    icon: Mail,
    title: "Auto Sort Gmail Attachments on Drive",
    category: "Make.com Automation",
    image: makeGmailImg,
    summary: "Make.com scenario that watches Gmail for new emails, analyzes attachments with AI, renames files, uploads to Google Drive, and logs everything.",
    details: [
      "Gmail watch trigger monitors incoming emails every 15 minutes",
      "Lists and extracts email attachments automatically",
      "AI-powered file analysis to generate descriptive filenames",
      "Organized upload to Google Drive with smart folder structure",
      "Google Sheets logging for attachment tracking and audit trail",
      "Email notification sent after successful processing",
    ],
  },
  {
    icon: Workflow,
    title: "Automated Export Xero Transactions to Asana",
    category: "Make.com Automation",
    image: makeXeroImg,
    summary: "Make.com workflow connecting Asana, Xero, and Google Sheets to export account transactions, process data, and upload CSV reports.",
    details: [
      "Asana watch trigger for completed task events",
      "Xero API integration for account transaction export",
      "Router for multi-path data processing",
      "Iterator and Google Sheets for row-by-row data logging",
      "Text aggregation and CSV attachment upload to Asana",
      "Automated cleanup of processed data ranges",
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

              {/* Details on top */}
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
                <ul className="space-y-2 mb-6">
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

              {/* Image on bottom */}
              {projects[selected].image && (
                <div className="w-full border-t border-primary/10">
                  <img src={projects[selected].image} alt={projects[selected].title} className="w-full h-auto" />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
