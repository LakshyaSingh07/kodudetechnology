import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">K</span>
            </div>
            <div>
              <span className="font-bold text-lg text-primary-foreground">KoDude Technology</span>
              <p className="text-xs text-primary-foreground/60">Where Ideas Become Digital Reality</p>
            </div>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </Link>
            <Link to="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} KoDude Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
