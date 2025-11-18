import type { LucideIcon } from 'lucide-react';
import { Award, Brain, Coffee, Laptop, MapPin, Mic, Rocket, Users } from 'lucide-react';
import { panels } from '@/data/eventData';

type ScheduleType = 'welcome' | 'ceremony' | 'synapse' | 'break' | 'network' | 'workshop' | 'closing';

interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  type: ScheduleType;
  panelId?: string;
}

const typeStyles: Record<ScheduleType, string> = {
  welcome: 'bg-secondary/10 text-secondary-foreground',
  ceremony: 'bg-primary/10 text-primary',
  synapse: 'bg-accent/10 text-accent-foreground',
  break: 'bg-muted/10 text-muted-foreground',
  network: 'bg-primary/10 text-primary',
  workshop: 'bg-secondary/10 text-secondary-foreground',
  closing: 'bg-primary/10 text-primary',
};

const typeLabels: Record<ScheduleType, string> = {
  welcome: 'Accueil',
  ceremony: 'Cérémonie',
  synapse: 'Synapse',
  break: 'Pause',
  network: 'Networking',
  workshop: 'Atelier',
  closing: 'Clôture',
};

export const Program = () => {
  const synapseFondamentale = panels[0];
  const synapseCreatrice = panels[1];
  const synapseFutur = panels[2];

  const schedule: ScheduleItem[] = [
    {
      time: '08:00',
      title: 'Accueil & Enregistrement',
      description: 'Enregistrement des participants et café de bienvenue.',
      icon: Coffee,
      type: 'welcome',
    },
    {
      time: '09:00',
      title: 'Ouverture',
      description: 'Mot d’ouverture et présentation du programme par l’équipe Synapse.',
      icon: Mic,
      type: 'ceremony',
    },
    {
      time: '09:30',
      title: synapseFondamentale?.title ?? 'Synapse Fondamentale : Think, Regulate & Impact',
      description: synapseFondamentale?.description,
      icon: Brain,
      type: 'synapse',
      panelId: synapseFondamentale?.id,
    },
    {
      time: '10:30',
      title: synapseCreatrice?.title ?? 'Synapse Créatrice : AI-preneurs',
      description: synapseCreatrice?.description,
      icon: Rocket,
      type: 'synapse',
      panelId: synapseCreatrice?.id,
    },
    {
      time: '11:45',
      title: 'Pause Café',
      description: 'Moments d’échanges informels et networking.',
      icon: Coffee,
      type: 'break',
    },
    {
      time: '12:15',
      title: synapseFutur?.title ?? 'Synapse du Futur : ESEN Talent Network',
      description: synapseFutur?.description,
      icon: Users,
      type: 'synapse',
      panelId: synapseFutur?.id,
    },
    {
      time: '13:30',
      title: 'Visite des Stands',
      description: 'Découverte des startups, partenaires et opportunités de recrutement.',
      icon: MapPin,
      type: 'network',
    },
    {
      time: '14:00',
      title: 'Workshop / Masterclass',
      description: 'Sessions pratiques animées par des experts invités.',
      icon: Laptop,
      type: 'workshop',
    },
    {
      time: '16:00',
      title: 'Clôture',
      description: 'Récapitulatif des moments forts et remerciements.',
      icon: Award,
      type: 'closing',
    },
  ];

  const scrollToPanel = (panelId: string) => {
    document.getElementById(panelId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="program" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Programme de la Journée
          </h2>
          <p className="text-lg text-muted-foreground">
            Un agenda riche en contenu, networking et opportunités
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[22px] top-0 bottom-0 hidden md:block">
            <span className="block h-full w-px bg-gradient-to-b from-primary/40 via-border/70 to-transparent" />
          </div>

          <div className="space-y-6">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              const isInteractive = Boolean(item.panelId);

              const handleActivation = () => {
                if (item.panelId) {
                  scrollToPanel(item.panelId);
                }
              };

              return (
                <div
                  key={`${item.time}-${item.title}`}
                  className={`relative group pl-12 md:pl-20 animate-slide-in-left ${
                    isInteractive ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={isInteractive ? handleActivation : undefined}
                  onKeyDown={
                    isInteractive
                      ? event => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            handleActivation();
                          }
                        }
                      : undefined
                  }
                  role={isInteractive ? 'button' : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                >
                  <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-border/60 shadow-card ${typeStyles[item.type]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-glow group-focus-within:border-primary/40">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                        {item.time}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        {typeLabels[item.type]}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
