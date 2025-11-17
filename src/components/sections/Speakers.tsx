import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search } from 'lucide-react';
import { speakers, Speaker, panels } from '@/data/eventData';

export const Speakers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const filteredSpeakers = speakers.filter(speaker =>
    speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    speaker.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSpeakerPanels = (speakerId: string) => {
    return panels.filter(panel => panel.speakers.includes(speakerId));
  };

  const scrollToPanel = (panelId: string) => {
    setSelectedSpeaker(null);
    setTimeout(() => {
      document.getElementById(panelId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="speakers" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Nos Intervenants
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Des experts de classe mondiale partagent leurs connaissances
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Rechercher un intervenant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSpeakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 shadow-card hover:shadow-glow transition-all">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button variant="hero" size="sm" className="w-full">
                      Voir Bio
                    </Button>
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {speaker.name}
              </h4>
              <p className="text-sm text-muted-foreground">{speaker.title}</p>
            </div>
          ))}
        </div>

        {/* Speaker Detail Modal */}
        <Dialog open={!!selectedSpeaker} onOpenChange={() => setSelectedSpeaker(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedSpeaker?.name}</DialogTitle>
            </DialogHeader>
            {selectedSpeaker && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={selectedSpeaker.photo}
                    alt={selectedSpeaker.name}
                    className="w-full md:w-48 h-48 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-primary font-semibold mb-3">{selectedSpeaker.title}</p>
                    <p className="text-muted-foreground leading-relaxed">{selectedSpeaker.bio}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Panels:</h4>
                  <div className="space-y-2">
                    {getSpeakerPanels(selectedSpeaker.id).map(panel => (
                      <Button
                        key={panel.id}
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => scrollToPanel(panel.id)}
                      >
                        <span className="text-primary mr-2">{panel.time}</span>
                        {panel.title}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
