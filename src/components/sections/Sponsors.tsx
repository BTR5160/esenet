import { sponsors } from '@/data/eventData';

export const Sponsors = () => {
  const sponsorsByTier = {
    Platinum: sponsors.filter(s => s.tier === 'Platinum'),
    Gold: sponsors.filter(s => s.tier === 'Gold'),
    Silver: sponsors.filter(s => s.tier === 'Silver'),
  };

  return (
    <section id="sponsors" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Sponsors & Partenaires
          </h2>
          <p className="text-lg text-muted-foreground">
            Un grand merci à nos sponsors qui rendent cet événement possible
          </p>
        </div>

        <div className="space-y-16">
          {/* Platinum Sponsors */}
          {sponsorsByTier.Platinum.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">
                Sponsors Platinum
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {sponsorsByTier.Platinum.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-12 rounded-xl bg-gradient-card border-2 border-primary/50 hover:border-primary transition-all hover:shadow-glow-strong"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-32 object-contain group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Gold Sponsors */}
          {sponsorsByTier.Gold.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-secondary">
                Sponsors Gold
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {sponsorsByTier.Gold.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 rounded-xl bg-gradient-card border border-secondary/50 hover:border-secondary transition-all hover:shadow-glow"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-24 object-contain group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {sponsorsByTier.Silver.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-muted-foreground">
                Sponsors Silver
              </h3>
              <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {sponsorsByTier.Silver.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-muted-foreground transition-all hover:shadow-glow"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-16 object-contain group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
