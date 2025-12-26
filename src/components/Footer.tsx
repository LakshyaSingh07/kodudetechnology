import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group mb-8">
            <div className="w-12 h-12 rounded bg-gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-glow transition-all duration-500">
              <span className="text-primary-foreground font-display font-bold text-2xl">K</span>
            </div>
            <div className="text-left">
              <span className="font-display text-xl text-foreground tracking-wide block">KoDude Technology</span>
              <p className="text-xs text-muted-foreground font-light tracking-widest uppercase">Where Ideas Become Digital Reality</p>
            </div>
          </Link>

          {/* Divider */}
          <div className="luxury-divider mb-8" />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm mb-10">
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide">
              About
            </Link>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide">
              Services
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide">
              Pricing
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs font-light tracking-wider">
            © {currentYear} KoDude Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;