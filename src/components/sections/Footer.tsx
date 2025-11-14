import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ESENet 2025
            </h3>
            <p className="text-muted-foreground text-sm">
              L'événement phare qui connecte l'intelligence artificielle au monde des affaires.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {['À Propos', 'Programme', 'Intervenants', 'Exposants', 'Sponsors'].map((item, index) => {
                const ids = ['about', 'program', 'speakers', 'exhibitors', 'sponsors'];
                return (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(ids[index])}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:contact@esenet.tn" className="hover:text-primary transition-colors">
                  contact@esenet.tn
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span>+216 XX XXX XXX</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>ESEN Manouba<br />Technopôle de la Manouba, Tunisie</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Suivez-nous</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:scale-110 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ESENet. Tous droits réservés.</p>
          <p className="mt-2">
            Développé avec ❤️ par l'équipe ESENet
          </p>
        </div>
      </div>
    </footer>
  );
};
