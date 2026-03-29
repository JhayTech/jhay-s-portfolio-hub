const Footer = () => (
  <footer className="py-8 px-4 border-t border-border/50">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Orlie Labrador. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/jhaytech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
        <a href="https://www.upwork.com/freelancers/~018279be6c4c191d69" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Upwork</a>
        <a href="https://wa.me/639154332921" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">WhatsApp</a>
      </div>
    </div>
  </footer>
);

export default Footer;
