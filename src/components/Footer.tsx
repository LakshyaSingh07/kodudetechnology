import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
  ];

  const supportLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-navy overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-[120px]" />

      {/* Main footer content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* CTA Section */}
        {/* <div className="py-16 border-b border-border/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Ready to Build Something
              <span className="text-primary"> Extraordinary?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-light">
              Let's transform your vision into a stunning digital reality.
            </p>
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-medium hover:shadow-gold transition-all duration-500"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div> */}

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-glow transition-all duration-500">
                <span className="text-primary-foreground font-display font-bold text-xl">K</span>
              </div>
              <span className="font-display text-lg text-foreground tracking-wide">KoDude</span>
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
              Crafting premium digital experiences that elevate brands and captivate audiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-foreground text-sm uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary text-sm font-light transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-display text-foreground text-sm uppercase tracking-widest mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary text-sm font-light transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-foreground text-sm uppercase tracking-widest mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hello@kodude.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm font-light transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-primary/70" />
                  kodude.in@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918077533278" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm font-light transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-primary/70" />
                  +91 80775 33278
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-muted-foreground text-sm font-light">
                  <MapPin className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
                  Noida, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-light tracking-wide">
            © {currentYear} KoDude Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
