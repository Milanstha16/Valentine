import { useEffect, useRef, useState } from 'react';
import photo1 from "../assets/photos/1.jpg";
import photo2 from "../assets/photos/2.jpg";
import photo3 from "../assets/photos/3.jpg";
import photo4 from "../assets/photos/4.jpg";
import photo5 from "../assets/photos/5.jpg";
import photo6 from "../assets/photos/6.jpg";

const photos = [
  { rotation: -4, caption: "Our Adventure 💕", src: photo1 },
  { rotation: 3, caption: "That perfection 🌅", src: photo2 },
  { rotation: -2, caption: "Laughing together 😊", src: photo4 },
  { rotation: 5, caption: "My favorite memory 💖", src: photo3 },
  { rotation: -3, caption: "Always by your side 🤍", src: photo5 },
  { rotation: 2, caption: "Forever & always 💗", src: photo6 },
];

const PhotoGallery = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-blush/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-primary mb-4">
            Our Memories
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A little scrapbook of us 📸
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`polaroid shadow-polaroid hover:scale-105 hover:shadow-gold-glow 
                transition-all duration-500 cursor-pointer group
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                '--rotation': `${photo.rotation}deg`,
                transform: `rotate(${photo.rotation}deg)`,
                transitionDelay: `${index * 150}ms`
              } as React.CSSProperties}
            >
<div className="aspect-square bg-muted rounded-sm overflow-hidden relative">
  <img
    src={photo.src}
    alt={photo.caption}
    className="absolute inset-0 w-full h-full object-cover 
               group-hover:scale-105 transition-transform duration-500"
  />

  {/* Shimmer overlay */}
  <div
    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent 
               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
  />
</div>

              <p className="text-center mt-3 font-cursive text-2xl text-foreground/70">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
