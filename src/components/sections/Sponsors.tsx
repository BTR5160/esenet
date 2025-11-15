import { sponsors } from '@/data/eventData';

export const Sponsors = () => {
  const sponsorsByTier = {
    Platinum: sponsors.filter(s => s.tier === 'Platinum'),
    Gold: sponsors.filter(s => s.tier === 'Gold'),
    Silver: sponsors.filter(s => s.tier === 'Silver'),
  };

  const platinumCount = sponsorsByTier.Platinum.length;
  const goldCount = sponsorsByTier.Gold.length;
  const silverCount = sponsorsByTier.Silver.length;

  const platinumGridClasses = [
    'grid grid-cols-1 gap-8 max-w-3xl mx-auto',
    platinumCount > 1 ? 'md:grid-cols-2' : 'justify-items-center',
  ].join(' ');

  const goldGridClasses = [
    'grid grid-cols-1 gap-6 max-w-4xl mx-auto',
    goldCount > 2 ? 'md:grid-cols-3' : goldCount === 2 ? 'md:grid-cols-2' : 'justify-items-center',
  ].join(' ');

  const silverGridClasses = [
    'grid grid-cols-1 gap-4 max-w-5xl mx-auto',
    silverCount >= 4
      ? 'md:grid-cols-4'
      : silverCount === 3
        ? 'md:grid-cols-3'
        : silverCount === 2
          ? 'md:grid-cols-2'
          : 'justify-items-center',
  ].join(' ');

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
          {platinumCount > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">
                Sponsors Platinum
              </h3>
              <div className={platinumGridClasses}>
                {sponsorsByTier.Platinum.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-12 rounded-xl bg-gradient-card border-2 border-primary/50 hover:border-primary transition-all hover:shadow-glow-strong ${
                      platinumCount === 1 ? 'max-w-sm w-full' : ''
                    }`}
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
          {goldCount > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-secondary">
                Sponsors Gold
              </h3>
              <div className={goldGridClasses}>
                {sponsorsByTier.Gold.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-8 rounded-xl bg-gradient-card border border-secondary/50 hover:border-secondary transition-all hover:shadow-glow ${
                      goldCount === 1 ? 'max-w-sm w-full' : ''
                    }`}
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
          {silverCount > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-muted-foreground">
                Sponsors Silver
              </h3>
              <div className={silverGridClasses}>
                {sponsorsByTier.Silver.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-6 rounded-xl bg-gradient-card border border-border hover:border-muted-foreground transition-all hover:shadow-glow ${
                      silverCount === 1 ? 'max-w-sm w-full' : ''
                    }`}
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
