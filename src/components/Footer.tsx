import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-vibrant-purple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-vibrant-cyan/10 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow transition-shadow">
              <span className="text-primary-foreground font-bold text-xl">K</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg text-navy-foreground">KoDude Technology</span>
              <p className="text-xs text-navy-foreground/60">Where Ideas Become Digital Reality</p>
            </div>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/about" className="text-navy-foreground/70 hover:text-vibrant-cyan transition-colors">
              About
            </Link>
            <Link to="/services" className="text-navy-foreground/70 hover:text-vibrant-cyan transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-navy-foreground/70 hover:text-vibrant-cyan transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-navy-foreground/70 hover:text-vibrant-cyan transition-colors">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-navy-foreground/60 text-sm">
            © {currentYear} KoDude Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
