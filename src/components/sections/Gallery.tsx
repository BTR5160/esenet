import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { galleryImages } from '@/data/eventData';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Galerie Photos
          </h2>
          <p className="text-lg text-muted-foreground">
            Revivez les moments forts des éditions précédentes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
