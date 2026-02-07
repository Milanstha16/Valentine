import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConfettiHearts from './ConfettiHearts';

const FinalQuestion = () => {
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleYes = () => {
    setShowConfetti(true);
    setTimeout(() => setAnswered(true), 500);
  };

  const handleNoHover = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    setNoPosition({ x, y });
  };

  return (
    <section className="py-20 md:py-32 px-4 gradient-romantic relative overflow-hidden">
      {showConfetti && <ConfettiHearts />}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {!answered ? (
          <>
            <Heart
              className="mx-auto text-primary mb-8 animate-pulse-heart"
              size={80}
              fill="currentColor"
            />

            <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6">
              So, what do you say?
            </h2>

            <p className="text-xl md:text-2xl text-foreground/70 mb-12 font-light">
              Will you be my Valentine? 💕
            </p>

            <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* YES BUTTON */}
              <Button
                onClick={handleYes}
                className="valentine-button text-xl px-10 py-6 rounded-full 
                  bg-primary text-primary-foreground hover:bg-deep-rose
                  shadow-romantic hover:shadow-gold-glow hover:scale-105
                  transition-all duration-300 font-medium"
              >
                Yes 💖
              </Button>

              {/* NO BUTTON (DODGES) */}
              <Button
                variant="outline"
                onMouseEnter={handleNoHover}
                onMouseDown={handleNoHover}
                style={{
                  transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                }}
                className="valentine-button text-xl px-10 py-6 rounded-full
                  border-2 border-primary text-primary
                  shadow-romantic transition-transform duration-200
                  font-medium select-none"
              >
                No 😢
              </Button>
            </div>
          </>
        ) : (
          <div className="animate-fade-in-up">
            <div className="text-8xl mb-8 animate-pulse-heart">💕</div>

            <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6">
              You made me the happiest!
            </h2>

            <p className="text-xl md:text-2xl text-foreground/70 font-light">
              I love you more than words can say ❤️
              <br />
              I Love You Always & Forever 💕
              <br />
              Happy Valentine Penguin ❤️🐧
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-gold">
              <Sparkles size={24} />
              <span className="font-cursive text-2xl">Penguin🐧</span>
              <Sparkles size={24} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalQuestion;
