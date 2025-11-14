import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export const Registration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    company: '',
  });
  const [ticketInfo, setTicketInfo] = useState<{
    id: string;
    qrDataUrl: string;
    name: string;
    email: string;
  } | null>(null);

  // Your deployed Apps Script Web App URL
  const APPS_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbxnCJXI5B9yVZpIbvzi63t4TCv7Jdj7lxJOazmj4lvNWN9zqHlxXV9VGOBH9E6MyBLy/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // shadcn Select doesn't enforce required; validate manually
    if (!formData.role) {
      toast({ title: 'Profil requis', description: 'Veuillez sélectionner votre profil.' });
      return;
    }

    setIsSubmitting(true);
    setTicketInfo(null);

    const generateTicketId = () => {
      if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
        return crypto.randomUUID();
      }
      return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    };

    const ticketId = generateTicketId();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      profile: formData.role,
      organization: formData.company.trim(),
      ticketId,
    };

    const createTicket = async () => {
      const qrContent = JSON.stringify({
        ticketId,
        name: payload.name,
        email: payload.email,
      });

      const qrServiceUrl = `https://quickchart.io/qr?text=${encodeURIComponent(qrContent)}&margin=1&size=320&format=png`;
      const response = await fetch(qrServiceUrl);

      if (!response.ok) {
        throw new Error(`QR service returned ${response.status}`);
      }

      const blob = await response.blob();
      const qrDataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            resolve(reader.result);
          } else {
            reject(new Error('Invalid QR data result'));
          }
        };
        reader.onerror = () => reject(reader.error ?? new Error('QR data parsing failed'));
        reader.readAsDataURL(blob);
      });

      setTicketInfo({
        id: ticketId,
        qrDataUrl,
        name: payload.name,
        email: payload.email,
      });
    };

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, // avoids preflight
        body: JSON.stringify(payload),
      });

      // Read body ONCE as text, then try to parse JSON
      const raw = await res.text();
      let data: any;
      try {
        data = JSON.parse(raw);
      } catch {
        // Accept plain "Success" responses too
        data = { ok: raw.trim().toLowerCase() === 'success', raw };
      }

      // Optional: inspect in console while debugging
      console.log('Apps Script response:', { status: res.status, data, raw });

      if (res.ok && data?.ok === true) {
        toast({
          title: 'Inscription réussie!',
          description: 'Nous vous enverrons une confirmation par email.',
        });
        try {
          await createTicket();
        } catch (qrError) {
          console.error('QR code generation failed:', qrError);
          toast({
            title: 'QR code indisponible',
            description: "Votre inscription est confirmée, mais le QR code n'a pas pu être généré. Réessayez dans quelques instants.",
          });
        }
        setFormData({ name: '', email: '', phone: '', role: '', company: '' });
      } else {
        const msg =
          (typeof data?.error === 'string' && data.error) ||
          (typeof data?.raw === 'string' && data.raw) ||
          `Statut ${res.status}`;
        toast({
          title: "Erreur lors de l'inscription",
          description: msg,
        });
      }
    } catch (err) {
      console.error('Network error:', err);
      toast({
        title: 'Erreur réseau',
        description: "Votre inscription n'a pas pu être enregistrée. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="registration" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Inscription
            </h2>
            <p className="text-lg text-muted-foreground">
              Réservez votre place dès maintenant pour ESENet 2025
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-xl bg-gradient-card border border-border shadow-card"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nom Complet *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Votre nom"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="votre.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+216 XX XXX XXX"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Profil *</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleChange('role', value)}
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Sélectionnez votre profil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Étudiant">Étudiant</SelectItem>
                  <SelectItem value="Professionnel">Professionnel</SelectItem>
                  <SelectItem value="Intervenant">Intervenant</SelectItem>
                  <SelectItem value="Exposant">Exposant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Entreprise / Université (Optionnel)</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Votre organisation"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Inscription en cours...
                </>
              ) : (
                "S'inscrire Maintenant"
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              * Champs obligatoires. Vos données sont traitées de manière confidentielle.
            </p>
          </form>

          <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">Inscription gratuite!</h3>
            <p className="text-sm text-muted-foreground">
              L'accès à l'événement est gratuit pour tous les participants. Places limitées.
            </p>
          </div>

          {ticketInfo && (
            <div className="mt-10 p-8 rounded-xl bg-background border border-primary/30 shadow-glow">
              <div className="text-center mb-6 space-y-2">
                <h3 className="text-2xl font-semibold text-foreground">Votre billet numérique</h3>
                <p className="text-sm text-muted-foreground">
                  Conservez ce QR code : il vous sera demandé à l'accueil de l'évènement.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <img
                  src={ticketInfo.qrDataUrl}
                  alt="QR code d'inscription"
                  className="w-60 h-60 rounded-lg border border-border bg-white p-4"
                />
                <div className="text-center text-sm text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">{ticketInfo.name}</p>
                  <p>{ticketInfo.email}</p>
                  <p>
                    Code billet :{' '}
                    <span className="font-mono text-xs bg-muted px-2 py-1 rounded-md">{ticketInfo.id}</span>
                  </p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <a href={ticketInfo.qrDataUrl} download={`esenet-billet-${ticketInfo.id}.png`}>
                    Télécharger le QR code
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
