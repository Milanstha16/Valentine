import { Heart, Star, Sparkles, Sun, Moon, Flower2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: Heart,
    title: "Your Beautiful Soul",
    description: "The way you care about me and spread love everywhere you go with me makes my heart overflow with love."
  },
  {
    icon: Star,
    title: "Your Smile & Eyes",
    description: "One smile from you and my whole world lights up. Your Eyes and Smile are the most beautiful things I've ever seen."
  },
  {
    icon: Sparkles,
    title: "Your Laughter",
    description: "The sound of your laughter is my favorite melody. It makes every moment feel magical."
  },
  {
    icon: Sun,
    title: "Your Warmth",
    description: "Being with you feels like coming home. You are my safe haven, my comfort, my peace."
  },
  {
    icon: Moon,
    title: "Our Late Night Talks",
    description: "Those endless conversations where time seems to stop — I cherish every single one."
  },
  {
    icon: Flower2,
    title: "Simply Being You",
    description: "You don't have to do anything special. Just being you is more than enough. You are my everything."
  }
];

const ReasonsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.reason-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-primary mb-4">
            Why I Love You
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            There are a million reasons, but here are just a few...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`reason-card group bg-card rounded-2xl p-8 shadow-romantic border border-rose/10 
                  transition-all duration-700 hover:shadow-gold-glow hover:-translate-y-2 cursor-default
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 
                  group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon 
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300" 
                    size={28}
                    fill="currentColor"
                  />
                </div>
                <h3 className="font-cursive text-3xl text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
