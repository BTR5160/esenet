import { Brain, Users, Sparkles, Target } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Innovation AI',
      description: 'Découvrez les dernières avancées en intelligence artificielle',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connectez-vous avec des leaders et entrepreneurs du secteur',
    },
    {
      icon: Sparkles,
      title: 'Inspiration',
      description: 'Sessions inspirantes avec des experts internationaux',
    },
    {
      icon: Target,
      title: 'Opportunités',
      description: 'Explorez des opportunités de carrière et de collaboration',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            À Propos d'ESENet 2025
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ESENet 7ème édition réunit les esprits les plus brillants de l'intelligence artificielle 
            et du monde des affaires. Rejoignez-nous pour une journée exceptionnelle d'apprentissage, 
            de networking et d'innovation au cœur de la Salle des Conférences du Technopole de la Manouba.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary transition-all hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-card border border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-muted-foreground">Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">35</div>
              <div className="text-muted-foreground">Exposants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">17</div>
              <div className="text-muted-foreground">Intervenants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
