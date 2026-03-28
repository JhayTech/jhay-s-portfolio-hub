import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-bg overflow-hidden px-4">
      {/* Floating code-like background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 font-mono text-sm"
            style={{
              top: `${15 + i * 15}%`,
              right: `${5 + (i % 3) * 10}%`,
            }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            {["padding: bold", "outcome:tech", "automate()", "workflow.run()", "const build =", "async deploy()"][i]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Tech Virtual Assistant
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            <span className="text-foreground">Orlie John</span>
            <br />
            <span className="text-primary glow-text">Russell Labrador</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Automation & GHL Specialist with 10+ years in IT, streamlining workflows and driving efficiency.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold click-ripple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </motion.a>
            <motion.a
              href="#experience"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-heading font-semibold"
              whileHover={{ scale: 1.05, borderColor: "hsl(175 70% 45%)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Experience
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> Olongapo City, PH</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4 text-primary" /> +63 915 433 2921</span>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border border-2 border-primary/30">
              <img src={profileImg} alt="Orlie John Russell Labrador" className="w-full h-full object-cover object-top" />
            </div>
            {/* Orbiting ring */}
            <motion.div
              className="absolute inset-[-15px] border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
