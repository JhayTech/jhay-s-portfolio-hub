import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }

    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Hi Orlie,\n\nI'm ${formData.name} (${formData.email}).\n\n${formData.message}`;
    const mailtoUrl = `mailto:orliejohnrusselllabrador@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");

    toast({ title: "Opening Email Client", description: "Your message is being prepared in your email app." });
  };

  return (
    <section id="contact" className="py-24 px-4 section-gradient" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Hire Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              Ready to streamline your workflows and automate your processes? Let's connect and discuss how I can help your business grow.
            </p>

            {[
              { icon: Mail, label: "Email", value: "orliejohnrusselllabrador@yahoo.com", href: "mailto:orliejohnrusselllabrador@yahoo.com" },
              
              { icon: MessageCircle, label: "WhatsApp", value: "+63 915 433 2921", href: "https://wa.me/639154332921" },
              { icon: MapPin, label: "Location", value: "Olongapo City, Philippines", href: "#" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 glass-card rounded-xl p-4 click-ripple group"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-foreground text-sm font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/in/jhaytech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.upwork.com/freelancers/~018279be6c4c191d69" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="glass-card rounded-xl p-6 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Name</label>
              <input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full mt-1 bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full mt-1 bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full mt-1 bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-heading font-semibold flex items-center justify-center gap-2 click-ripple"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" /> Send Message via Email
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
