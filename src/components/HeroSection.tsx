import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden px-4">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-rose opacity-20 animate-float-gentle">
        <Heart size={48} fill="currentColor" />
      </div>
      <div className="absolute top-20 right-16 text-rose opacity-15 animate-float-gentle animation-delay-300">
        <Heart size={32} fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-20 text-rose opacity-20 animate-float-gentle animation-delay-500">
        <Heart size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-gold opacity-25 animate-float-gentle animation-delay-200">
        <Heart size={36} fill="currentColor" />
      </div>
      
      {/* Main content */}
      <div className="text-center z-10 max-w-3xl mx-auto">
        <div className="animate-fade-in-up">
          <Heart 
            className="mx-auto text-primary mb-6 animate-pulse-heart" 
            size={64} 
            fill="currentColor"
          />
        </div>
        
        <h1 className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary mb-6 animate-fade-in-up animation-delay-200">
          Can You Be My Valentine?
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8 animate-fade-in animation-delay-300" />
        
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Every moment with you feels like a beautiful dream I never want to wake up from. 
          You are my heart's truest desire, my soul's sweetest melody.
        </p>
        
        <div className="mt-12 animate-fade-in animation-delay-700">
          <span className="text-black inline-block px-6 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground border border-rose/20">
            Scroll down to discover my heart 💕
          </span>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
