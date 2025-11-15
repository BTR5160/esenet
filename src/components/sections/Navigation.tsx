import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import logoo from '@/assets/logoo.png'; // Make sure logoo.png is in src/assets

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Accueil', id: 'hero' },
    { label: 'À Propos', id: 'about' },
    { label: 'Programme', id: 'program' },
    { label: 'Intervenants', id: 'speakers' },
    { label: 'Exposants & Partenaires', id: 'exhibitors' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'Galerie', id: 'gallery' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-[#7b53fd]/50 to-[#00a6fc]/50',
        isScrolled ? 'backdrop-blur-lg shadow-glow' : ''
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center focus:outline-none"
          >
            <img
              src={logoo}
              alt="ESENet Logo"
              style={{ height: "280px", width: "auto" }} // direct sizing
            />


          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button
              variant="cta"
              size="sm"
              onClick={() => scrollToSection('registration')}
            >
              S'inscrire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between px-4 pt-2">
              <span className="text-sm font-medium text-muted-foreground">Apparence</span>
              <ThemeToggle />
            </div>
            <div className="px-4 pt-4">
              <Button
                variant="cta"
                className="w-full"
                onClick={() => scrollToSection('registration')}
              >
                S'inscrire
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
