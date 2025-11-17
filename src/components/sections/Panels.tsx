import { Clock, Users } from 'lucide-react';
import { panels, speakers } from '@/data/eventData';

export const Panels = () => {
  const getSpeakerById = (id: string) => speakers.find(s => s.id === id);

  return (
    <section id="panels" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Panels & Conférences
          </h2>
          <p className="text-lg text-muted-foreground">
            Trois sessions thématiques animées par des experts de renommée internationale
          </p>
        </div>

        <div className="space-y-12">
          {panels.map((panel, index) => {
            const hasFiveSpeakers = panel.speakers.length === 5;

            return (
              <div
                key={panel.id}
                id={panel.id}
                className="p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-primary font-semibold">{panel.time}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-foreground">{panel.title}</h3>
                  <p className="text-muted-foreground text-lg">{panel.description}</p>
                </div>

                <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span>Intervenants:</span>
                </div>

                <div
                  className={`grid grid-cols-2 gap-6 ${
                    hasFiveSpeakers
                      ? 'sm:grid-cols-3 lg:grid-cols-5 lg:justify-center'
                      : 'sm:grid-cols-3 lg:grid-cols-6'
                  }`}
                >
                  {panel.speakers.map(speakerId => {
                    const speaker = getSpeakerById(speakerId);
                    if (!speaker) return null;

                    return (
                      <div key={speaker.id}>
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          <img
                            src={speaker.photo}
                            alt={speaker.name}
                            className="w-full aspect-square object-cover"
                          />
                        </div>
                        <h4 className="font-semibold text-foreground">{speaker.name}</h4>
                        <p className="text-sm text-muted-foreground">{speaker.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
