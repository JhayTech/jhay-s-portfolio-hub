import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "IT Officer",
    company: "Intelligent Outsourcing Inc.",
    period: "April 2024 – Present",
    points: [
      "Managed full IT operations across onsite and remote teams",
      "Administered Microsoft 365, Azure AD, and Intune environments",
      "Supported onboarding/offboarding and system workflows",
      "Provided remote troubleshooting and technical support",
      "Improved internal workflows and system efficiency",
    ],
  },
  {
    title: "IT Technical Support Tier I",
    company: "Intercard Inc.",
    period: "August 2021 – March 2024",
    points: [
      "Delivered voice, chat, and email support using ConnectWise ticketing system",
      "Managed ticket lifecycle from intake to resolution",
      "Installed and maintained applications remotely and onsite",
      "Administered servers (SQL, DHCP, TFTP, IIS)",
      "Configured networks and supported system environments",
    ],
  },
  {
    title: "IT Staff",
    company: "Buwelo BPO",
    period: "March 2021 – August 2021",
    points: [
      "Provided onsite IT support and system setup",
      "Managed user accounts and assisted server administration",
      "Supported hardware troubleshooting and network configuration",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "JhayTech Computer Services (Freelance)",
    period: "March 2014 – Present",
    points: [
      "Provided remote and onsite IT support for various clients",
      "Performed system setup, troubleshooting, and maintenance",
      "Built and managed diskless systems and network environments",
      "Assisted in workflow improvements and basic automation",
    ],
  },
  {
    title: "Computer Technician",
    company: "Race of Warlords Internet Café",
    period: "July 2016 – February 2020",
    points: [
      "Managed 95-unit diskless system and server infrastructure",
      "Ensured system uptime and network stability",
    ],
  },
  {
    title: "Computer Technician",
    company: "DAQU Gaming Café",
    period: "May 2016 – February 2020",
    points: [
      "Setup and maintained 50-unit diskless system and server",
      "Troubleshot computers and network devices",
    ],
  },
  {
    title: "IT Technician / HR Assistant",
    company: "J.E. Quimson Architect Builders",
    period: "September 2014 – May 2017",
    points: [
      "Installed, supported, and maintained IT systems",
      "Responded to outages and technical issues",
      "Assisted in payroll and HR administrative tasks",
    ],
  },
  {
    title: "Water Refiller and Delivery Man",
    company: "AXN Water Station and Laundry Shop",
    period: "January 2012 – May 2013",
    points: [
      "Delivered laundry and refilled water",
    ],
  },
  {
    title: "Appliance Repair Service Technician",
    company: "Alen Vinci Electronic Shop",
    period: "October 2011 – April 2012",
    points: [
      "Repaired and troubleshot electronic appliances",
      "Ensured all equipment was restored to proper working condition",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 section-gradient" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              className={`relative flex flex-col md:flex-row gap-4 mb-10 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-border z-10 mt-6" />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <motion.div
                  className="glass-card rounded-xl p-5 click-ripple cursor-pointer"
                  whileHover={{ y: -3, boxShadow: "0 0 20px -5px hsl(175 70% 45% / 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-primary text-xs font-heading">{exp.period}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{exp.title}</h3>
                  <p className="text-primary/70 text-sm mb-3">{exp.company}</p>
                  <ul className="space-y-1">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
