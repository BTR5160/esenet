import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-background"
    >
      {/* Neural Network Background Animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-neural-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Synapse: AI ∞ Business
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ESENet 7th Edition — Where Artificial Intelligence Meets Business Innovation
          </p>
          {/* Event Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-lg">November 26, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">Salle des Conférences Technopole Manouba</span>
            </div>
          </div>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('registration')}
              className="text-lg px-8 py-6"
            >
              S'inscrire Maintenant
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('program')}
              className="text-lg px-8 py-6"
            >
              Voir le Programme
            </Button>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
