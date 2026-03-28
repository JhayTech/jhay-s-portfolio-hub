import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Contact Me</h2>
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
              { icon: Phone, label: "Phone", value: "+63 915 433 2921", href: "tel:+639154332921" },
              { icon: MapPin, label: "Location", value: "Olongapo City, Philippines", href: "#" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
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
          </motion.div>

          {/* Form */}
          <motion.form
            className="glass-card rounded-xl p-6 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Name</label>
              <input className="w-full mt-1 bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Email</label>
              <input type="email" className="w-full mt-1 bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Message</label>
              <textarea rows={4} className="w-full mt-1 bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-heading font-semibold flex items-center justify-center gap-2 click-ripple"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
