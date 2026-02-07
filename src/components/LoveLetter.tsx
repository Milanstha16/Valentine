import { Heart, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LoveLetter = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-card relative overflow-hidden"
    >
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 text-gold/20">
        <Heart size={80} fill="currentColor" />
      </div>
      <div className="absolute bottom-8 right-8 text-rose/10 rotate-12">
        <Heart size={100} fill="currentColor" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-primary mb-4">
            A Letter For You
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </div>

        <div
          className={`relative bg-cream rounded-3xl p-8 md:p-12 shadow-romantic border border-gold/20
            transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Quote icon */}
          <Quote className="absolute -top-4 left-8 text-gold/40" size={48} />

          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg md:text-xl">
            <p className="font-cursive text-3xl md:text-4xl text-primary mb-8 inline-flex items-center">
              My Penguin
              <Heart
                className="ml-1 text-primary animate-pulse-heart"
                size={20}
                fill="currentColor"
              />,
            </p>

            <p>
              From the moment you came into my life, everything changed. Colors
              became brighter, music sounded sweeter, and every ordinary day
              turned into an extraordinary adventure just because you were in
              it.
            </p>

            <p>
              You've taught me what it truly means to love and be loved. Your
              patience, your kindness, your support — these are gifts
              I treasure more than words could ever express. When I'm with you,
              I'm home.
            </p>

            <p>
              Every laugh we share, every quiet moment together, every challenge
              we face side by side only makes me fall deeper in love with you.
              You are my best friend, my forever person.
            </p>

            <p>
              I promise to cherish you, to stand by you, and to love you with
              everything I have — today, tomorrow, and for all the tomorrows
              after that. I Love You Penguin💕🐧.
            </p>

            <p className="font-cursive text-3xl md:text-4xl text-primary pt-4 text-right">
              Forever Yours,
              <br />
              <span className="inline-block mt-2">💕 Your Valentine</span>
            </p>
          </div>

          {/* Decorative seal */}
          <div
            className="absolute -bottom-6 right-12 w-16 h-16 bg-deep-rose rounded-full 
            flex items-center justify-center shadow-lg animate-pulse-heart"
          >
            <Heart
              className="text-primary-foreground"
              size={28}
              fill="currentColor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
