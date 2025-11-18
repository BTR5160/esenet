import { Clock, Users } from 'lucide-react';
import { panels, speakers, openingSession, type Panel } from '@/data/eventData';

export const Panels = () => {
  const getSpeakerById = (id: string) => speakers.find(s => s.id === id);

  const renderSessionCard = (session: Panel, options?: { isOpening?: boolean; animationIndex?: number }) => {
    const isOpening = options?.isOpening ?? false;
    const animationDelay =
      typeof options?.animationIndex === 'number' ? `${options.animationIndex * 0.2}s` : '0s';
    const sessionSpeakers = session.speakers
      .map(speakerId => getSpeakerById(speakerId))
      .filter((speaker): speaker is NonNullable<typeof speaker> => Boolean(speaker));
    const hasFiveSpeakers = sessionSpeakers.length === 5;
    const gridClasses = isOpening
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center'
      : `grid grid-cols-2 gap-6 ${
          hasFiveSpeakers ? 'sm:grid-cols-3 lg:grid-cols-5 lg:justify-center' : 'sm:grid-cols-3 lg:grid-cols-6'
        }`;
    const speakerCardClasses = isOpening ? 'flex flex-col items-center text-center' : '';
    const imageWrapperClasses = `relative overflow-hidden rounded-lg mb-4 ${
      isOpening ? 'w-full max-w-[220px] aspect-square mx-auto shadow-card' : ''
    }`;
    const imageClasses = isOpening ? 'w-full h-full object-cover' : 'w-full aspect-square object-cover';

    return (
      <div
        key={session.id}
        id={session.id}
        className={`p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all shadow-card animate-fade-in ${
          isOpening ? 'relative overflow-hidden' : ''
        }`}
        style={{ animationDelay }}
      >
        {isOpening && (
          <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        )}
        <div className="relative mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">{session.time}</span>
          </div>
          <h3 className="text-3xl font-bold mb-3 text-foreground">{session.title}</h3>
          <p className="text-muted-foreground text-lg">{session.description}</p>
        </div>

        <div className="relative mb-4 flex items-center gap-2 text-muted-foreground">
          <Users className="w-5 h-5" />
          <span>{isOpening ? "Invités d'honneur :" : 'Intervenants:'}</span>
        </div>

        <div className={gridClasses}>
          {sessionSpeakers.map(speaker => (
            <div key={speaker.id} className={speakerCardClasses}>
              <div className={imageWrapperClasses}>
                <img src={speaker.photo} alt={speaker.name} className={imageClasses} />
              </div>
              <h4 className="font-semibold text-foreground">{speaker.name}</h4>
              <p className="text-sm text-muted-foreground">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
          {renderSessionCard(openingSession, { isOpening: true })}
          {panels.map((panel, index) => renderSessionCard(panel, { animationIndex: index }))}
        </div>
      </div>
    </section>
  );
};
