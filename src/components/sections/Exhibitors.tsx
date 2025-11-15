import { exhibitors } from '@/data/eventData';

export const Exhibitors = () => {

  return (
    <section id="exhibitors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Partenaires
          </h2>
          <p className="text-lg text-muted-foreground">
            9 exposants présents pour vous accompagner dans votre parcours
          </p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {exhibitors.map((exhibitor, index) => (
            <div
              key={exhibitor.id}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div
                className="flex items-center justify-center mb-3 h-20 rounded-xl border border-border/40 bg-card/80 dark:bg-muted/30 shadow-card dark:shadow-none backdrop-blur-sm transition-colors"
              >
                <img
                  src={exhibitor.logo}
                  alt={exhibitor.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.28)] dark:brightness-[1.15]"
                />
              </div>
              <h3 className="text-sm font-medium text-foreground">
                {exhibitor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
